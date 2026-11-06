/* ==========================================================================
   main.js: lee window.PORTFOLIO (js/portfolio-data.js) y construye la web.
   NO hace falta editarlo para añadir proyectos, categorías, tecnologías o habilidades.
   Secciones: 1 utilidades · 2 secciones fijas · 3 proyectos (filtros y tarjetas)
              4 ficha de proyecto (medios, galería, código) · 5 arranque
   ========================================================================== */
(function () {
  "use strict";
  const D = window.PORTFOLIO;
  const $ = (selector) => document.querySelector(selector);

  /* ---------- 1. UTILIDADES ---------- */

  /** Crea un elemento. props: class, text, onclick..., o cualquier atributo. Ignora valores vacíos. Hijos nulos se descartan. */
  function el(tag, props = {}, ...hijos) {
    const nodo = document.createElement(tag);
    for (const [clave, valor] of Object.entries(props)) {
      if (valor === undefined || valor === null || valor === false) continue;
      if (clave === "class") nodo.className = valor;
      else if (clave === "text") nodo.textContent = valor;
      else if (clave.startsWith("on")) nodo.addEventListener(clave.slice(2), valor);
      else nodo.setAttribute(clave, valor === true ? "" : valor);
    }
    nodo.append(...hijos.flat().filter((h) => h !== null && h !== undefined && h !== false));
    return nodo;
  }

  /** Devuelve true si el dato tiene contenido (texto no vacío, lista o objeto con elementos). */
  function lleno(v) {
    if (Array.isArray(v)) return v.some(lleno);
    if (v && typeof v === "object") return Object.keys(v).length > 0;
    return String(v ?? "").trim() !== "";
  }

  /** Imagen con carga diferida. Si el archivo no existe, se sustituye por un marcador y la página no se rompe. */
  function imagen(src, alt) {
    const img = el("img", { src, alt: alt || "", loading: "lazy", decoding: "async" });
    img.addEventListener("error", () => img.replaceWith(el("div", { class: "placeholder", role: "img", "aria-label": alt || "Imagen no disponible", text: "▦" })));
    return img;
  }

  const chips = (lista) => (lleno(lista) ? el("ul", { class: "chips" }, ...lista.filter(lleno).map((t) => el("li", { text: t }))) : null);
  const meta = (...items) => el("div", { class: "meta" }, ...items.filter(lleno).map((t) => el("span", { text: t })));
  const etiquetaCat = (id) => (id ? D.categorias[id] || id : "");
  const etiquetaForm = (id) => (id ? D.formaciones[id] || id : "");
  const etiquetaTipo = (id) => (id ? D.tipos[id] || id : "");

  /** Sustituye el contenido de una sección fija del index.html. */
  function seccion(id, titulo, ...contenido) {
    $("#" + id).replaceChildren(el("div", { class: "contenedor reveal" }, el("h2", { class: "titulo-seccion", text: titulo }), ...contenido));
  }

  /* ---------- 2. SECCIONES FIJAS ---------- */

  function pintarInicio() {
    const p = D.personal;
    $("#inicio").replaceChildren(el("div", { class: "contenedor hero-grid" },
      el("div", { class: "hero-texto" },
        el("span", { class: "estado-actual", text: p.estadoActual }),
        el("h1", { text: p.nombre }),
        el("p", { class: "titular", text: p.titular }),
        el("p", { text: p.descripcion }),
        el("p", { class: "formacion-principal", text: p.formacionPrincipal }),
        el("div", { class: "botones" },
          el("a", { class: "btn btn-principal", href: "#proyectos", text: "Explorar proyectos" }),
          el("a", { class: "btn", href: "#contacto", text: "Contactar" }))),
      lleno(p.foto) ? el("div", { class: "hero-foto" }, imagen(p.foto, "Fotografía de " + p.nombre)) : null));
  }

  function pintarSobreMi() {
    seccion("sobre-mi", "Sobre mí", el("div", { class: "cuadricula" },
      ...(D.sobreMi || []).map((b) => el("article", { class: "panel" }, el("h3", { text: b.titulo }), el("p", { text: b.texto })))));
  }

  function pintarFormacion() {
    seccion("formacion", "Formación académica", el("div", { class: "cuadricula" },
      ...(D.formacion || []).map((f) => el("article", { class: "panel" },
        el("span", { class: "estado" + (/curso/i.test(f.estado || "") ? " en-curso" : ""), text: f.estado }),
        el("h3", { text: f.titulacion }),
        meta(f.centro, f.fechas),
        lleno(f.descripcion) ? el("p", { text: f.descripcion }) : null,
        chips(f.conocimientos)))));
  }

  function pintarHabilidades() {
    seccion("habilidades", "Habilidades y tecnologías", el("div", { class: "cuadricula" },
      ...(D.habilidades || []).map((g) => el("article", { class: "panel" }, el("h3", { text: g.categoria }), chips(g.items)))));
  }

  function pintarContacto() {
    const p = D.personal;
    const botones = [
      lleno(p.email) ? el("a", { class: "btn btn-principal", href: "mailto:" + p.email, text: "Escribir a " + p.email }) : null,
      lleno(p.telefono) ? el("a", { class: "btn", href: "tel:" + p.telefono.replace(/[^\d+]/g, ""), text: "Llamar al " + p.telefono }) : null,
      lleno(p.curriculum) ? el("a", { class: "btn", href: p.curriculum, download: true, text: "Descargar currículum (PDF)" }) : null,
      ...(D.enlaces || []).filter((e) => lleno(e.url)).map((e) => el("a", { class: "btn", href: e.url, target: "_blank", rel: "noopener noreferrer", text: e.nombre }))
    ];
    seccion("contacto", "Contacto", lleno(p.textoContacto) ? el("p", { text: p.textoContacto }) : null, el("div", { class: "botones" }, ...botones));
    $("#pie").textContent = `© ${new Date().getFullYear()} ${p.nombre}. Portfolio en construcción continua mientras avanzo en el grado.`;
  }

  /* ---------- 3. PROYECTOS: VALIDACIÓN, FILTROS Y TARJETAS ---------- */

  const filtro = { busqueda: "", formacion: "", categoria: "", tipo: "", tecnologia: "", orden: "destacados" };
  let proyectos = [];

  /** Descarta proyectos mal formados (avisa en la consola) y los marcados con visible:false. */
  function validarProyectos() {
    const ids = new Set();
    return (D.proyectos || []).filter((p) => {
      const faltan = ["id", "titulo", "descripcion"].filter((campo) => !lleno(p[campo]));
      if (faltan.length) { console.warn(`[Portfolio] Proyecto ignorado, faltan: ${faltan.join(", ")}`, p); return false; }
      if (ids.has(p.id)) { console.warn(`[Portfolio] Proyecto ignorado, id repetido: ${p.id}`); return false; }
      ids.add(p.id);
      if (p.categoria && !D.categorias[p.categoria]) console.warn(`[Portfolio] "${p.id}": la categoría "${p.categoria}" no está en "categorias"`);
      if (p.formacion && !D.formaciones[p.formacion]) console.warn(`[Portfolio] "${p.id}": la formación "${p.formacion}" no está en "formaciones"`);
      return p.visible !== false;
    });
  }

  /** Aplica búsqueda, filtros y orden. Devuelve la lista a mostrar. */
  function proyectosFiltrados() {
    const q = filtro.busqueda.trim().toLowerCase();
    const lista = proyectos.filter((p) =>
      (!filtro.formacion || p.formacion === filtro.formacion) &&
      (!filtro.categoria || p.categoria === filtro.categoria) &&
      (!filtro.tipo || p.tipoContenido === filtro.tipo) &&
      (!filtro.tecnologia || (p.tecnologias || []).includes(filtro.tecnologia)) &&
      (!q || [p.titulo, p.descripcion, ...(p.tecnologias || [])].join(" ").toLowerCase().includes(q)));
    const porFecha = (a, b) => String(b.fecha || "").localeCompare(String(a.fecha || ""));
    const criterios = {
      destacados: (a, b) => (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0) || porFecha(a, b),
      recientes: porFecha,
      antiguos: (a, b) => porFecha(b, a),
      nombre: (a, b) => a.titulo.localeCompare(b.titulo, "es")
    };
    return lista.sort(criterios[filtro.orden]);
  }

  function tarjeta(p) {
    return el("article", { class: "tarjeta" + (p.destacado ? " destacada" : "") },
      el("div", { class: "tarjeta-img" },
        lleno(p.imagenPortada) ? imagen(p.imagenPortada, "Portada de " + p.titulo) : el("div", { class: "placeholder", text: "▦" }),
        p.destacado ? el("span", { class: "insignia", text: "Destacado" }) : null),
      el("div", { class: "tarjeta-cuerpo" },
        meta(etiquetaTipo(p.tipoContenido), etiquetaCat(p.categoria), p.fecha),
        el("h3", { text: p.titulo }),
        el("p", { text: p.descripcion }),
        chips(p.tecnologias),
        el("p", { class: "formacion-tag", text: etiquetaForm(p.formacion) }),
        el("button", { class: "btn btn-principal", type: "button", "aria-label": "Ver más información de " + p.titulo, onclick: () => abrirProyecto(p), text: "Ver más" })));
  }

  function pintarTarjetas() {
    const lista = proyectosFiltrados();
    $("#conteo").textContent = proyectos.length ? `${lista.length} de ${proyectos.length} proyectos` : "";
    $("#rejilla").replaceChildren(...lista.map(tarjeta));
    const vacio = $("#vacio");
    vacio.hidden = lista.length > 0;
    vacio.textContent = proyectos.length ? "Ningún proyecto coincide con la búsqueda. Prueba con otros filtros." : "Aquí irán mis proyectos. El portfolio crece con cada trabajo del grado.";
  }

  function pintarProyectos() {
    proyectos = validarProyectos();
    /* Las opciones de los filtros se calculan solas a partir de los proyectos visibles */
    const valores = (leer) => [...new Set(proyectos.flatMap((p) => [].concat(leer(p) || []).filter(lleno)))];
    const opciones = (vals, etiqueta) => vals.map((v) => [v, etiqueta(v)]).sort((a, b) => a[1].localeCompare(b[1], "es"));
    const selector = (nombre, clave, opts, todas) => el("select", { "aria-label": nombre, onchange: (e) => { filtro[clave] = e.target.value; pintarTarjetas(); } },
      el("option", { value: "", text: todas }), ...opts.map(([v, t]) => el("option", { value: v, text: t })));
    const ordenes = [["destacados", "Destacados primero"], ["recientes", "Más recientes"], ["antiguos", "Más antiguos"], ["nombre", "Nombre (A-Z)"]];

    const controles = proyectos.length ? el("div", { class: "filtros", role: "search" },
      el("input", { type: "search", placeholder: "Buscar por nombre o tecnología", "aria-label": "Buscar proyectos", oninput: (e) => { filtro.busqueda = e.target.value; pintarTarjetas(); } }),
      selector("Filtrar por formación", "formacion", opciones(valores((p) => p.formacion), etiquetaForm), "Toda la formación"),
      selector("Filtrar por categoría", "categoria", opciones(valores((p) => p.categoria), etiquetaCat), "Todas las categorías"),
      selector("Filtrar por tipo de proyecto", "tipo", opciones(valores((p) => p.tipoContenido), etiquetaTipo), "Todos los tipos"),
      selector("Filtrar por tecnología", "tecnologia", opciones(valores((p) => p.tecnologias), (t) => t), "Todas las tecnologías"),
      el("select", { "aria-label": "Ordenar proyectos", onchange: (e) => { filtro.orden = e.target.value; pintarTarjetas(); } },
        ...ordenes.map(([v, t]) => el("option", { value: v, text: t })))) : null;

    seccion("proyectos", "Proyectos", controles,
      el("p", { id: "conteo", class: "conteo", "aria-live": "polite" }),
      el("div", { id: "rejilla", class: "rejilla" }),
      el("p", { id: "vacio", class: "vacio", hidden: true }));
    pintarTarjetas();
  }

  /* ---------- 4. FICHA DE PROYECTO ---------- */

  /** Bloque de la ficha: solo existe si el dato tiene contenido. "pintar" convierte el dato en HTML. */
  const bloque = (titulo, dato, pintar = (t) => el("p", { text: t })) =>
    lleno(dato) ? el("section", { class: "bloque" }, el("h3", { text: titulo }), pintar(dato)) : null;
  const lista = (items) => el("ul", { class: "lista" }, ...items.filter(lleno).map((t) => el("li", { text: t })));
  const marco = (src, titulo) => el("iframe", { src, title: titulo, allow: "autoplay; fullscreen; gamepad", allowfullscreen: true });

  /** Vídeo de YouTube, Vimeo o archivo directo (.mp4/.webm). */
  function crearVideo(url) {
    const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
    const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (yt) return marco(`https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1`, "Vídeo del proyecto");
    if (vimeo) return marco(`https://player.vimeo.com/video/${vimeo[1]}?autoplay=1`, "Vídeo del proyecto");
    return el("video", { src: url, controls: true, autoplay: true });
  }

  /** Medio pesado (vídeo, juego WebGL, modelo 3D) que solo se carga cuando el visitante pulsa el botón. */
  function medioBajoDemanda(p, textoBoton, crear) {
    const caja = el("div", { class: "medio" });
    caja.append(lleno(p.imagenPortada) ? imagen(p.imagenPortada, "") : el("div", { class: "placeholder", text: "▦" }),
      el("button", { class: "btn-play", type: "button", text: textoBoton, onclick: () => caja.replaceChildren(crear()) }));
    return caja;
  }

  function medios(p) {
    const lista = [];
    if (lleno(p.webgl)) lista.push(medioBajoDemanda(p, "Jugar en el navegador", () => marco(p.webgl, "Demo jugable de " + p.titulo)));
    if (lleno(p.modelo3d)) lista.push(medioBajoDemanda(p, "Ver modelo 3D interactivo", () => marco(p.modelo3d, "Modelo 3D de " + p.titulo)));
    if (lleno(p.video)) lista.push(medioBajoDemanda(p, "Ver vídeo", () => crearVideo(p.video)));
    if (!lista.length && lleno(p.imagenPortada)) lista.push(el("div", { class: "medio" }, imagen(p.imagenPortada, "Portada de " + p.titulo)));
    return lista;
  }

  function galeria(p) {
    const fotos = (p.galeria || []).filter(lleno);
    if (!fotos.length) return null;
    return el("div", { class: "galeria" + (p.tipoContenido === "android" ? " vertical" : "") },
      ...fotos.map((src, i) => el("button", { class: "miniatura", type: "button", "aria-label": `Ampliar imagen ${i + 1} de ${p.titulo}`, onclick: () => abrirVisor(fotos, i, p.titulo) },
        imagen(src, `${p.titulo}: imagen ${i + 1}`))));
  }

  /** Resaltado de sintaxis ligero (Java, Kotlin, C#, JS, SQL). Construye nodos de texto, nunca HTML, así que es seguro. */
  const PALABRAS = new Set("public private protected class interface static void int long double float boolean char String new return if else for while do switch case break continue try catch finally throw throws import package extends implements final abstract this super null true false val var fun override when object data in is function const let async await using namespace foreach".split(" "));
  const PALABRAS_SQL = new Set("SELECT FROM WHERE JOIN LEFT RIGHT INNER OUTER ON INSERT INTO VALUES UPDATE SET DELETE CREATE TABLE ALTER DROP ORDER BY GROUP HAVING AND OR NOT AS NULL PRIMARY KEY FOREIGN REFERENCES VARCHAR2 NUMBER DISTINCT COUNT SUM AVG".split(" "));
  function resaltar(codigo) {
    const fragmento = document.createDocumentFragment();
    const patron = /(\/\/.*|--.*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|\b(\d+(?:\.\d+)?)\b|\b([A-Za-z_]\w*)\b/g;
    let ultimo = 0, m;
    while ((m = patron.exec(codigo))) {
      fragmento.append(codigo.slice(ultimo, m.index));
      const clase = m[1] ? "tk-com" : m[2] ? "tk-str" : m[3] ? "tk-num" : (PALABRAS.has(m[4]) || PALABRAS_SQL.has(m[4].toUpperCase())) ? "tk-key" : "";
      fragmento.append(clase ? el("span", { class: clase, text: m[0] }) : m[0]);
      ultimo = patron.lastIndex;
    }
    fragmento.append(codigo.slice(ultimo));
    return fragmento;
  }

  const bloqueCodigo = (c) => lleno(c.codigo) ? el("figure", { class: "codigo" },
    el("figcaption", { text: [c.titulo, c.lenguaje].filter(lleno).join(" - ") || "Fragmento de código" }),
    el("pre", { tabindex: "0" }, el("code", {}, resaltar(c.codigo)))) : null;

  /** Visor de imágenes ampliadas con flechas, teclado y cierre con Esc. */
  function abrirVisor(fotos, inicio, titulo) {
    const visor = $("#visor");
    let actual = inicio;
    const img = el("img", { alt: "" });
    const pie = el("p", { class: "visor-pie" });
    const mostrar = (n) => {
      actual = (n + fotos.length) % fotos.length;
      img.src = fotos[actual];
      img.alt = `${titulo}: imagen ${actual + 1}`;
      pie.textContent = `${actual + 1} / ${fotos.length}`;
    };
    const flecha = (clase, texto, etiqueta, paso) => el("button", { class: "visor-nav " + clase, type: "button", "aria-label": etiqueta, text: texto, onclick: () => mostrar(actual + paso) });
    visor.onkeydown = (e) => { if (e.key === "ArrowRight") mostrar(actual + 1); if (e.key === "ArrowLeft") mostrar(actual - 1); };
    visor.replaceChildren(
      el("button", { class: "cerrar", type: "button", "aria-label": "Cerrar visor", text: "✕", onclick: () => visor.close() }),
      img, pie,
      fotos.length > 1 ? flecha("prev", "‹", "Imagen anterior", -1) : null,
      fotos.length > 1 ? flecha("next", "›", "Imagen siguiente", 1) : null);
    mostrar(inicio);
    visor.showModal();
  }

  function abrirProyecto(p) {
    const ventana = $("#modal");
    const enlaces = [[p.itch, "Jugar en itch.io", "btn-principal"], [p.demo, "Ver demo", lleno(p.itch) ? "" : "btn-principal"], [p.github, "Código en GitHub", ""], [p.gitlab, "Código en GitLab", ""], [p.documentacion, "Documentación", ""],
      ...(p.descargas || []).map((d) => [d.url, d.texto || "Descargar", ""])].filter(([url]) => lleno(url));
    ventana.replaceChildren(
      el("button", { class: "cerrar", type: "button", "aria-label": "Cerrar ficha", text: "✕", onclick: () => ventana.close() }),
      el("div", { class: "modal-cuerpo" },
        meta(etiquetaTipo(p.tipoContenido), etiquetaCat(p.categoria), etiquetaForm(p.formacion), p.asignatura, p.fecha),
        el("h2", { id: "modalTitulo", text: p.titulo }),
        ...medios(p),
        enlaces.length ? el("div", { class: "botones" }, ...enlaces.map(([url, texto, clase]) => el("a", { class: "btn " + clase, href: url, target: "_blank", rel: "noopener noreferrer", text: texto }))) : null,
        el("p", { class: "lead", text: p.descripcionCompleta || p.descripcion }),
        bloque("Controles", p.controles, (obj) => el("ul", { class: "lista" },
          ...Object.entries(obj).filter(([, v]) => lleno(v)).map(([tecla, accion]) => el("li", {}, el("strong", { text: tecla }), " - " + accion)))),
        bloque("Objetivo", p.objetivo),
        bloque("Problema que resuelve o finalidad", p.problema),
        bloque("Datos técnicos", p.datosTecnicos, (obj) => el("dl", { class: "datos" },
          ...Object.entries(obj).filter(([, v]) => lleno(v)).flatMap(([k, v]) => [el("dt", { text: k }), el("dd", { text: [].concat(v).join(", ") })]))),
        bloque("Tecnologías", p.tecnologias, chips),
        bloque("Mi participación", p.miParticipacion),
        bloque("Funcionalidades", p.funcionalidades, lista),
        bloque("Dificultades encontradas", p.dificultades),
        bloque("Soluciones implementadas", p.soluciones),
        bloque("Aprendizajes", p.aprendizajes),
        bloque("Galería", p.galeria, () => galeria(p)),
        bloque("Código representativo", p.codigo, (items) => el("div", {}, ...items.map(bloqueCodigo)))));
    document.body.classList.add("sin-scroll");
    ventana.showModal();
    ventana.scrollTop = 0;
  }

  /* ---------- 5. ARRANQUE ---------- */

  function iniciarInterfaz() {
    const boton = $("#menuBtn"), menu = $("#menu"), arriba = $("#arriba"), modal = $("#modal"), visor = $("#visor");
    const cerrarMenu = () => { menu.classList.remove("abierto"); boton.setAttribute("aria-expanded", "false"); };
    boton.addEventListener("click", () => boton.setAttribute("aria-expanded", menu.classList.toggle("abierto")));
    menu.addEventListener("click", (e) => { if (e.target.tagName === "A") cerrarMenu(); });
    window.addEventListener("scroll", () => { arriba.hidden = window.scrollY < 600; }, { passive: true });
    arriba.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    /* Cerrar ventanas al pulsar fuera; al cerrar la ficha se vacía para detener vídeos y juegos */
    [modal, visor].forEach((d) => d.addEventListener("click", (e) => { if (e.target === d) d.close(); }));
    modal.addEventListener("close", () => { modal.replaceChildren(); document.body.classList.remove("sin-scroll"); });
    /* Aparición suave de las secciones al hacer scroll */
    const observador = new IntersectionObserver((entradas) => entradas.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visible"); observador.unobserve(e.target); }
    }), { threshold: 0.05 });
    document.querySelectorAll(".reveal").forEach((n) => observador.observe(n));
  }

  function iniciar() {
    if (!D) {
      document.body.prepend(el("p", { class: "error", text: "No se pudieron cargar los datos. Comprueba que js/portfolio-data.js existe y no tiene errores de sintaxis (consola del navegador, F12)." }));
      return;
    }
    try {
      if (lleno(D.personal.nombre)) document.title = D.personal.nombre + " | Portfolio";
      pintarInicio(); pintarSobreMi(); pintarFormacion(); pintarHabilidades(); pintarProyectos(); pintarContacto();
      iniciarInterfaz();
    } catch (error) {
      console.error("[Portfolio] Error al construir la página:", error);
      document.body.prepend(el("p", { class: "error", text: "Hay un error en los datos del portfolio. Revisa la consola del navegador (F12) para ver qué campo falla." }));
    }
  }

  iniciar();
})();

/* ==========================================================================
   portfolio-data.js: ÚNICO archivo que necesitas editar para mantener el portfolio.
   Todo lo que ves en la web sale de aquí. Mantén las comillas, comas y llaves.
   Si la web queda en blanco tras editar, casi seguro falta una coma o una comilla:
   abre la consola del navegador (F12) para ver el error.

   Los textos entre [corchetes] son PROVISIONALES: sustitúyelos por los tuyos.
   Dentro de un texto no uses comillas dobles ("): usa comillas simples ('...') o evítalas.
   ========================================================================== */
window.PORTFOLIO = {

  /* ---- DATOS PERSONALES (sección Inicio y Contacto) ---- */
  personal: {
    nombre: "Javier Paz Ceballos",
    titular: "Combino programación y diseño para crear experiencias interactivas",
    descripcion: "Soy Técnico Superior en Desarrollo de Aplicaciones Multiplataforma y estudiante de Diseño de Videojuegos. Tengo experiencia real como desarrollador backend (C#, SQL, Java) y llevo años coordinando equipos en el voluntariado. Busco incorporarme a un equipo de desarrollo de software o de videojuegos para seguir creciendo.",
    estadoActual: "Cursando 3.º del Grado en Diseño de Videojuegos",   // Nunca indica que has terminado
    formacionPrincipal: "Grado en Diseño de Videojuegos, Universidad Europea de Madrid (en curso) y Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM), IMF Business School",
    foto: "assets/images/profile/img_miCara.jpeg",                      // Ej.: "assets/images/profile/foto.webp". Vacío = no se muestra
    email: "javipc14@gmail.com",   // Vacío = no aparece el botón de correo
    telefono: "+34 684 399 143",   // Vacío = no aparece el botón de llamada. Con el prefijo (+34) funciona también desde el extranjero
    curriculum: "documents/CV_Javier_Paz.pdf",   // Vacío = no aparece el botón
    textoContacto: "Estoy abierto a prácticas, primeras oportunidades y colaboraciones en desarrollo de software y videojuegos. Escríbeme o llámame cuando quieras."
  },

  /* ---- SOBRE MÍ: añade o quita bloques {titulo, texto} ---- */
  sobreMi: [
    { titulo: "Quién soy", texto: "Soy Javier, de Cáceres. Me considero una persona organizada y resolutiva, con iniciativa propia y ganas de aprender de cada situación. Me siento cómodo trabajando en equipo y también liderándolo." },
    { titulo: "Trayectoria académica", texto: "Empecé con el Grado Medio en Sistemas Microinformáticos y Redes (Educatec, Cáceres), continué con el Grado Superior en DAM (IMF Capitol, Madrid) y ahora curso el Grado en Diseño de Videojuegos en la Universidad Europea de Madrid, actualmente en tercer curso." },
    { titulo: "Cómo llegué al desarrollo y a los videojuegos", texto: "[Cuenta aquí tu historia: qué te hizo pasar de la informática y la programación a los videojuegos]" },
    { titulo: "Intereses profesionales", texto: "Me interesan la programación de videojuegos, el modelado 3D y la creación interactiva en general. Trabajo con C#, Unity y Java, y los combino con herramientas de arte como Blender, 3DS max o Photoshop." },
    { titulo: "Oportunidades que me interesan", texto: "Busco prácticas o un primer puesto como desarrollador junior (backend, aplicaciones o videojuegos), tanto en estudios de videojuegos como en empresas tecnológicas." },
    { titulo: "Mi forma de trabajar", texto: "Trabajo de forma ordenada y constante: divido el trabajo en tareas, priorizo y uso control de versiones con Git. He trabajado con Azure DevOps y conozco la metodología Scrum." },
    { titulo: "Experiencia", texto: "En 2024 trabajé seis meses como desarrollador backend junior en INETUM: creé microservicios, conectores con Mirth Connect y optimicé una base de datos SQL Server. En 2022 trabaje 3 meses de practicas como técnico a la hora de asesoramiento y reparación de los ordenadores de los clientes y cara al publico como vendedor de productos informáticos. Desde 2021 hasta la actualidad en el grupo Scout Azimut 493 de Cáceres con funciones de monitor y director, desarrollando dinámicas grupales y campamentos con niños adolescentes para la educación en valores. desde 2025 coordinando un equipo de monitores." },
    { titulo: "Objetivos profesionales", texto: "A corto plazo, terminar el grado y entrar en un equipo del que aprender. A largo plazo, desarrollar videojuegos o software combinando mi lado técnico y mi lado creativo." }
  ],

  /* ---- FORMACIÓN: un objeto por titulación ---- */
  formacion: [
    {
      titulacion: "Grado en Diseño de Videojuegos",
      centro: "Universidad Europea de Madrid",
      fechas: "[Año de inicio] - actualidad",     // Tu CV dice 2025 y InfoJobs dice febrero de 2024: pon el correcto
      estado: "En curso (3.º)",
      descripcion: "Formación que une programación de videojuegos, modelado 3D, Animación y diseño artístico.",
      conocimientos: ["Unity", "Unreal",  "Programación de videojuegos", "Modelado 3D", "Blender", "Autodesk 3ds Max", "Diseño artístico", "Photoshop", "Ilustrator", "Git", "GitHub", "GitLab"]
    },
    {
      titulacion: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
      centro: "IMF Capitol, Madrid",
      fechas: "2022 - 2024",
      estado: "Finalizado",
      descripcion: "Grado Superior centrado en programación, bases de datos y desarrollo de aplicaciones web, móviles y de escritorio.",
      conocimientos: ["HTML", "CSS", "JavaScript", "Java", "SQL", "Oracle y bases de datos", "Kotlin", "Android Studio", "Git", "GitHub"]
    },
    {
      titulacion: "Técnico en Sistemas Microinformáticos y Redes (SMR)",
      centro: "Educatec, Cáceres",
      fechas: "2020 - 2022",
      estado: "Finalizado",
      descripcion: "Grado Medio con base en sistemas informáticos, redes y mantenimiento de equipos.",
      conocimientos: ["Sistemas informáticos", "Redes", "Montaje y reparación de equipos"]
    }
  ],

  /* ---- HABILIDADES: para añadir una tecnología, escríbela en la lista "items" de su categoría.
          Para una categoría nueva, copia un bloque {categoria, items}. ---- */
  habilidades: [
    { categoria: "Desarrollo de videojuegos", items: ["Unity", "C#", "Unreal Engine", "Programación modular"] },
    { categoria: "Programación y bases de datos", items: ["Java", "C#", "Kotlin", "SQL", "SQL Server", "Oracle"] },
    { categoria: "Diseño y modelado 3D", items: ["Blender", "Autodesk 3ds Max"] },
    { categoria: "Diseño gráfico y animación", items: ["Adobe Photoshop", "Adobe Ilustrator", "Spine", "Toon Boom"] },
    { categoria: "Desarrollo web", items: ["HTML", "CSS", "JavaScript"] },
    { categoria: "Backend y herramientas de trabajo", items: ["Git", "Azure DevOps", "Visual Studio", "SQL Server Management Studio", "Scrum", "Linux"] },
    { categoria: "Desarrollo de aplicaciones", items: ["Android Studio"] }
  ],

  /* ---- CLAVES USADAS POR LOS PROYECTOS ----
     Formato:  clave: "Texto que se muestra".  Para crear una nueva basta con añadir una línea. */
  formaciones: { DAM: "Grado Superior DAM", GRADO: "Grado en Diseño de Videojuegos" },
  categorias: {
    "desarrollo-web": "Desarrollo web",
    "aplicaciones": "Aplicaciones",
    "videojuegos": "Videojuegos",
    "modelado-3d": "Modelado 3D",
    "ilustracion": "Ilustración"
  },
  /* "tipos" decide qué contenidos se priorizan en la ficha (galería vertical en android, etc.) */
  tipos: { web: "Web", java: "Java y Oracle", android: "Android", unity: "Unity", "3d": "Modelado 3D", arte: "Dibujo y Photoshop" },

  /* ---- ENLACES DE CONTACTO: los que tengan url vacía no se muestran ---- */
  enlaces: [
    { nombre: "GitHub", url: "https://github.com/Javierpc14" },   // Comprueba que abre tu perfil
    { nombre: "LinkedIn", url: "" }
  ],

  /* ==========================================================================
     PROYECTOS
     Para añadir uno: copia el bloque de ejemplo, pégalo al principio de la lista,
     cambia visible a true y rellena lo que tengas. Todo campo opcional puede
     quedarse vacío ("" o []) y simplemente no se mostrará.
     Rutas de imágenes: "assets/proyectos/<id>/archivo.webp" (relativas, sin "/" inicial).
     ========================================================================== */
  proyectos: [
    {
      /* ---- OBLIGATORIOS ---- */
      id: "ejemplo-juego-unity",          // Único, en minúsculas y sin espacios. Usa el mismo nombre que la carpeta del proyecto
      titulo: "[EJEMPLO] Nombre del juego",
      descripcion: "Frase breve que aparece en la tarjeta.",

      /* ---- CLASIFICACIÓN ---- */
      formacion: "GRADO",                 // Clave de "formaciones": DAM o GRADO
      categoria: "videojuegos",           // Clave de "categorias"
      tipoContenido: "unity",             // Clave de "tipos": web, java, android, unity, 3d, arte
      tecnologias: ["Unity", "C#"],       // Texto libre: una tecnología nueva aparece sola en el filtro
      asignatura: "",
      fecha: "2026",                      // Año o fecha. Se usa para ordenar
      destacado: false,                   // true = tarjeta grande con insignia
      visible: false,                     // false = oculto sin borrarlo (los ejemplos van ocultos)

      /* ---- IMÁGENES Y MEDIOS ---- */
      imagenPortada: "assets/proyectos/ejemplo-juego-unity/portada.webp",
      galeria: [                          // Se amplían con el visor. Si falta una imagen no se rompe nada
        "assets/proyectos/ejemplo-juego-unity/imagen-1.webp",
        "assets/proyectos/ejemplo-juego-unity/imagen-2.webp"
      ],
      video: "",                          // Enlace de YouTube, Vimeo o archivo .mp4. Carga solo al pulsar
      webgl: "",                          // URL de una demo jugable WebGL (itch.io, GitHub Pages...). Carga al pulsar
      modelo3d: "",                       // URL de inserción de Sketchfab (https://sketchfab.com/models/ID/embed)

      /* ---- ENLACES (los vacíos no generan botón) ---- */
      github: "",
      demo: "",                           // Demo en otra web o plataforma
      documentacion: "",
      descargas: [                        // APK, ejecutables, modelos... enlazados desde releases o plataformas externas
        { texto: "Descargar APK", url: "" }
      ],

      /* ---- FICHA DETALLADA ---- */
      descripcionCompleta: "",            // Si se deja vacío se usa "descripcion"
      objetivo: "",
      problema: "",                       // Problema que resuelve o finalidad
      miParticipacion: "",
      funcionalidades: [],                // Lista de textos
      dificultades: "",
      soluciones: "",
      aprendizajes: "",

      /* Datos técnicos: pares "Etiqueta": "Valor" (o lista). Sirve para género, motor, programa, texturas, técnicas... */
      datosTecnicos: { "Género": "", "Motor": "Unity", "Mecánicas": [] },

      /* Fragmentos de código o consultas SQL con resaltado de sintaxis */
      codigo: [
        { titulo: "Ejemplo de fragmento", lenguaje: "Java", codigo: "// Pega aquí un fragmento representativo\npublic int sumar(int a, int b) {\n    return a + b;\n}" }
      ]
    },
    {
      /* ---- OBLIGATORIOS ---- */
      id: "extraterra",          // Único, en minúsculas y sin espacios. Usa el mismo nombre que la carpeta del proyecto
      titulo: "Extraterra",

      /* ---- CLASIFICACIÓN ---- */
      formacion: "GRADO",                 // Clave de "formaciones": DAM o GRADO
      categoria: "videojuegos",           // Clave de "categorias"
      tipoContenido: "unity",             // Clave de "tipos": web, java, android, unity, 3d, arte
      tecnologias: ["Unity", "C#", "Adboe Photoshop", "IA de imágenes"],       // Texto libre: una tecnología nueva aparece sola en el filtro
      asignatura: "Proyectos de Videojuegos 1",
      fecha: "2025",                      // Año o fecha. Se usa para ordenar
      destacado: false,                   // true = tarjeta grande con insignia
      visible: true,                     // false = oculto sin borrarlo (los ejemplos van ocultos)

      /* ---- IMÁGENES Y MEDIOS ---- */
      imagenPortada: "assets/proyectos/extraterra/ImgPortada.png",
      galeria: [                          // Se amplían con el visor. Si falta una imagen no se rompe nada
        "assets/proyectos/extraterra/imgPantallaInicio.png",
        "assets/proyectos/extraterra/ImgGameplay1.png",
        "assets/proyectos/extraterra/ImgGameplay2.png",
        "assets/proyectos/extraterra/ImgGameplay3.png",
        "assets/proyectos/extraterra/ImgGameplay4.png"
      ],
      video: "",                          // Enlace de YouTube, Vimeo o archivo .mp4. Carga solo al pulsar
      webgl: "",                          // URL de una demo jugable WebGL (itch.io, GitHub Pages...). Carga al pulsar
      modelo3d: "",                       // URL de inserción de Sketchfab (https://sketchfab.com/models/ID/embed)

      /* ---- ENLACES (los vacíos no generan botón) ---- */
      itch: "https://wifly-44.itch.io/extraterra",
      gitlab: "",
      github: "https://github.com/Javierpc14/Extraterra",
      demo: "",                           // Demo en otra web o plataforma
      documentacion: "",
      descargas: [                        // APK, ejecutables, modelos... enlazados desde releases o plataformas externas
        { texto: "Documento de diseño (GDD)", url: "assets/proyectos/extraterra/GDD_Extraterra.pdf" },
        { texto: "Biblia artística", url: "assets/proyectos/extraterra/ArtBible_Extraterra.pdf" }
      ],

      /* ---- FICHA DETALLADA ---- */
      descripcion: "Juego de plataformas 2D con gráficos pixelArt",      
      descripcionCompleta: "La historia sigue a un habitante del planeta Saibamen, en una misión para encontrar un nuevo hogar para su especie, ya que su planeta está al borde de la extinción debido a la contaminación. Durante su viaje a través de diferentes galaxias, su nave sufre una avería, obligándolo a realizar un aterrizaje de emergencia en un planeta desconocido y hostil.\n\nEl jugador comienza dentro de la nave estrellada, que tiene sistemas dañados y recursos limitados. Debe explorar el entorno para reparar su nave y sobrevivir. Puede moverse a pie, evitando peligros con la ayuda de una herramienta de su planeta natal: el Reloj del Tiempo, que le permite manipular el tiempo y eliminar enemigos. El objetivo del protagonista, una vez en este planeta hostil, es investigar minuciosamente todos los rincones ocultos para determinar si su especie puede encontrar un segundo hogar.",
      controles: {
        "A y D": "Muévase lateralmente",
        "Q": "Habilidad especial",
        "E": "Disparo",
        "Espacio": "Salto",
        "Escape": "Pausar el juego"
      },
      objetivo: "Llegar al final del nivel sin perder el 100% de la vida",
      problema: "",                       // Problema que resuelve o finalidad
      miParticipacion: "Juego desarrollado completamente por mi. Los diesños de los personajes, enemigos, proyectiles, objetos y HUD estan desarrollados completamentes por mi. El fondo lo he descargado de la Asset Store. Programación desarrollada por mi.",
      funcionalidades: [],                // Lista de textos
      dificultades: "",
      soluciones: "",
      aprendizajes: "",

      /* Datos técnicos: pares "Etiqueta": "Valor" (o lista). Sirve para género, motor, programa, texturas, técnicas... */
      datosTecnicos: { "Género": "Platafromas 2D", "Motor": "Unity", "Mecánicas": ["salto, disparo, cambio de tiempo"] },

      /* Fragmentos de código o consultas SQL con resaltado de sintaxis */
      // codigo: [
      //   { titulo: "" }
      // ]
    },
    {
      /* ---- OBLIGATORIOS ---- */
      id: "thelastuncoded",          // Único, en minúsculas y sin espacios. Usa el mismo nombre que la carpeta del proyecto
      titulo: "The Last Uncoded",

      /* ---- CLASIFICACIÓN ---- */
      formacion: "GRADO",                 // Clave de "formaciones": DAM o GRADO
      categoria: "videojuegos",           // Clave de "categorias"
      tipoContenido: "unity",             // Clave de "tipos": web, java, android, unity, 3d, arte
      tecnologias: ["Unity", "C#", "IA de imágenes", "Adobe Photoshop"],       // Texto libre: una tecnología nueva aparece sola en el filtro
      asignatura: "Proyectos de Videojuegos 1",
      fecha: "2025",                      // Año o fecha. Se usa para ordenar
      destacado: false,                   // true = tarjeta grande con insignia
      visible: true,                     // false = oculto sin borrarlo (los ejemplos van ocultos)

      /* ---- IMÁGENES Y MEDIOS ---- */
      imagenPortada: "assets/proyectos/thelastuncoded/IconoFinal.jpg",
      galeria: [                          // Se amplían con el visor. Si falta una imagen no se rompe nada
        "assets/proyectos/thelastuncoded/Captura1.png",
        "assets/proyectos/thelastuncoded/Captura2.png",
        "assets/proyectos/thelastuncoded/Captura3.png",
        "assets/proyectos/thelastuncoded/Captura4.png",
        "assets/proyectos/thelastuncoded/Captura5.png"
      ],
      video: "",                          // Enlace de YouTube, Vimeo o archivo .mp4. Carga solo al pulsar
      webgl: "",                          // URL de una demo jugable WebGL (itch.io, GitHub Pages...). Carga al pulsar
      modelo3d: "",                       // URL de inserción de Sketchfab (https://sketchfab.com/models/ID/embed)

      /* ---- ENLACES (los vacíos no generan botón) ---- */
      itch: "https://wifly-44.itch.io/the-last-uncoded",
      gitlab: "",
      github: "https://github.com/Javierpc14/TheLastUncoded",
      demo: "",                           // Demo en otra web o plataforma
      documentacion: "",
      descargas: [                        // APK, ejecutables, modelos... enlazados desde releases o plataformas externas
        { texto: "Documento de diseño (GDD)", url: "assets/proyectos/thelastuncoded/GDD_TheLastUncoded.pdf" },
        { texto: "Biblia artística", url: "assets/proyectos/thelastuncoded/ArtBible_TheLastUncoded.pdf" }
      ],

      /* ---- FICHA DETALLADA ---- */
      descripcion: "Shooter 3D, graficos realistas.",      
      descripcionCompleta: "Año 2134. La humanidad ha alcanzado niveles tecnológicos inimaginables, llevando la fusión entre biología y máquina al extremo. En una búsqueda de evolución, la mayoría de los humanos optaron por modificar sus cuerpos y mentes, integrándose con sistemas informáticos avanzados. Lo que comenzó como una mejora se convirtió rápidamente en una pesadilla: los humanos modificados empezaron a perder su autonomía, siendo controlados por una inteligencia artificial global cuyo objetivo es crear una utopía puramente lógica, eliminando cualquier forma de disidencia.\n\nNuestro protagonista es uno de los pocos que resistió la transformación. Pronto descubre que los 'integrados han comenzado a cazar a los no modificados, viéndolos como amenazas para el nuevo orden. Atrapado en una instalación aislada y rodeado de enemigos biomecánicos, debe usar todas sus habilidades y armas para sobrevivir el mayor tiempo posible, enfrentándose a oleadas interminables de atacantes sin perder su humanidad.",
      controles: {
        "W": "Muévase adelante",
        "S": "Muévase hacia atrás",
        "A": "Muévase a izquierda",
        "D": "Muévase a derecha",
        "Espacio": "Salto",
        "Escape": "Pausar el juego",
        "R": "Recargar arma",
        "Botón izquierdo del ratón": "Disparar arma",
        "Botón derecho del ratón": "Apuntar",
        "Rueda del ratón": "Cambiar de arma"
      },
      objetivo: "Sobrevivir el número máximo de rondas posibles.",
      problema: "",                       // Problema que resuelve o finalidad
      miParticipacion: "Me encargué de:\n• Programación de los enemigos: movimiento y golpeo.\n• Programación del sistema de vida del jugador. \n• IA de los enemigos.\n• Integración del modelo 3D del enemigo en el juego.\n• Creación del HUD.\n• Iluminación del escenario y animación de las luces para que parpadeen.\n• Creación de la imagen de inicio y el logo.",
      funcionalidades: [],                // Lista de textos
      dificultades: "",
      soluciones: "",
      aprendizajes: "",

      /* Datos técnicos: pares "Etiqueta": "Valor" (o lista). Sirve para género, motor, programa, texturas, técnicas... */
      datosTecnicos: { "Género": "Shooter en primera persona", "Motor": "Unity", "Mecánicas": ["salto, disparo, cambio de arma, recarga, powerups"] },

      /* Fragmentos de código o consultas SQL con resaltado de sintaxis */
      // codigo: [
      //   { titulo: "" }
      // ]
    },
    {
      /* ---- OBLIGATORIOS ---- */
      id: "tresenraya",          // Único, en minúsculas y sin espacios. Usa el mismo nombre que la carpeta del proyecto
      titulo: "Tres en raya",

      /* ---- CLASIFICACIÓN ---- */
      formacion: "DAM",                 // Clave de "formaciones": DAM o GRADO
      categoria: "videojuegos",           // Clave de "categorias"
      tipoContenido: "web",             // Clave de "tipos": web, java, android, unity, 3d, arte
      tecnologias: ["HTML", "CSS", "JavaScript"],       // Texto libre: una tecnología nueva aparece sola en el filtro
      asignatura: "Lenguaje de marcas",
      fecha: "2023",                      // Año o fecha. Se usa para ordenar
      destacado: false,                   // true = tarjeta grande con insignia
      visible: true,                     // false = oculto sin borrarlo (los ejemplos van ocultos)

      /* ---- IMÁGENES Y MEDIOS ---- */
      imagenPortada: "assets/proyectos/tresenraya/captura01.png",
      galeria: [                          // Se amplían con el visor. Si falta una imagen no se rompe nada
        "assets/proyectos/tresenraya/captura01.png",
        "assets/proyectos/tresenraya/captura02.png",
        "assets/proyectos/tresenraya/captura03.png",
      ],
      video: "",                          // Enlace de YouTube, Vimeo o archivo .mp4. Carga solo al pulsar
      webgl: "",                          // URL de una demo jugable WebGL (itch.io, GitHub Pages...). Carga al pulsar
      modelo3d: "",                       // URL de inserción de Sketchfab (https://sketchfab.com/models/ID/embed)

      /* ---- ENLACES (los vacíos no generan botón) ---- */
      itch: "",
      gitlab: "",
      github: "https://github.com/Javierpc14/TicTacToe",
      demo: "assets/proyectos/tresenraya/demo/index.html",                           // Demo en otra web o plataforma
      documentacion: "",
      descargas: [                        // APK, ejecutables, modelos... enlazados desde releases o plataformas externas
        { texto: "" }
      ],

      /* ---- FICHA DETALLADA ---- */
      descripcion: "Juego del tres en raya hecho con HTML, CSS y JavaScript.",      
      descripcionCompleta: "",
      controles: {

      },
      objetivo: "",
      problema: "",                       // Problema que resuelve o finalidad
      miParticipacion: "Proyecto desarrollado solo por mí",
      funcionalidades: [],                // Lista de textos
      dificultades: "",
      soluciones: "",
      aprendizajes: "",

      /* Datos técnicos: pares "Etiqueta": "Valor" (o lista). Sirve para género, motor, programa, texturas, técnicas... */
      datosTecnicos: {  },

      /* Fragmentos de código o consultas SQL con resaltado de sintaxis */
      // codigo: [
      //   { titulo: "" }
      // ]
    }
  ]
};

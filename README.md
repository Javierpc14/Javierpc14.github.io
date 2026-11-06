# Mi portfolio: manual de mantenimiento

Web estática (HTML + CSS + JavaScript, sin Node ni servidor). **Casi todo se edita en `js/portfolio-data.js`.**

```
portfolio/
├── index.html              Esqueleto (no se toca)
├── css/styles.css          Diseño; las variables están al principio (:root)
├── js/portfolio-data.js    TUS DATOS: personales, formación, habilidades, proyectos
├── js/main.js              Lógica (no se toca)
├── assets/images/{profile,general}/   Foto personal e imágenes generales
├── assets/proyectos/<id>/  Una carpeta por proyecto
└── documents/              curriculum.pdf
```

## Probar en local
Abre `index.html` con doble clic. Si prefieres un servidor: `python -m http.server` y entra en `http://localhost:8000`.
Si la página sale en blanco, pulsa F12, pestaña *Consola*: indica qué línea falla (casi siempre una coma o comilla).

## 1-3. Datos personales, descripción de inicio y formación
En `portfolio-data.js`: bloque `personal` (nombre, titular, descripcion, foto, email), `sobreMi` (textos) y `formacion` (centro, fechas, estado, conocimientos). Los textos `[entre corchetes]` son provisionales.

## 4. Añadir una habilidad
Escríbela en `items` de su categoría: `{ categoria: "Desarrollo web", items: ["HTML", "CSS", "JavaScript", "TypeScript"] }`. Para una categoría nueva, copia un bloque entero. Recuerda descomentar C# cuando lo confirmes.

## 5. Añadir una categoría (o tipo o formación)
En `categorias` añade una línea: `"audio": "Audio y música",`. Luego úsala en el proyecto: `categoria: "audio"`. Los filtros se actualizan solos.

## 6-8. Crear un proyecto, imágenes y vídeos
1. Crea la carpeta `assets/proyectos/mi-juego/` y mete `portada.webp`, `imagen-1.webp`...
2. Copia el proyecto de ejemplo de `portfolio-data.js`, pégalo al principio de `proyectos`, cambia `visible: true` y rellena.
3. Guarda. Aparece solo, con filtros, buscador y ficha.

```js
{
  id: "mi-juego", titulo: "Mi juego", descripcion: "Plataformas 2D con puzles.",
  formacion: "GRADO", categoria: "videojuegos", tipoContenido: "unity",
  tecnologias: ["Unity", "C#"], fecha: "2026", destacado: true, visible: true,
  imagenPortada: "assets/proyectos/mi-juego/portada.webp",
  galeria: ["assets/proyectos/mi-juego/imagen-1.webp"],
  video: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
  github: "https://github.com/usuario/mi-juego",
  miParticipacion: "Programación de mecánicas y diseño de niveles.",
  funcionalidades: ["Doble salto", "Sistema de checkpoints"]
}
```
Los campos vacíos no muestran nada. Si una imagen no existe, se ve un marcador y nada se rompe. Usa imágenes `.webp` de menos de 300 KB (portadas de unos 1280 px de ancho).
**Vídeos:** sube a YouTube/Vimeo y pega el enlace en `video` (no se carga hasta que el visitante pulsa). Un `.mp4` pequeño también vale.

## 9-10. GitHub y demos
`github: "https://github.com/..."` y `demo: "https://..."`. Sin enlace, no hay botón. `documentacion` y `descargas: [{ texto: "Descargar APK", url: "..." }]` funcionan igual: enlaza a *Releases* de GitHub, no subas binarios al repositorio.

## 11. Proyecto Unity
Usa `tipoContenido: "unity"`, `video` (gameplay), `galeria`, y `datosTecnicos: { "Género": "Puzles", "Mecánicas": ["Gravedad", "Rebote"] }`. Para jugar en la web, publica el build WebGL en itch.io o en otro repositorio con GitHub Pages y pega la URL en `webgl`: carga solo al pulsar el botón. Si pesa mucho, usa solo `video` + `demo` (enlace a itch.io).

## 12. Modelos 3D (Blender / 3ds Max)
`tipoContenido: "3d"`, renders en `galeria` (principal, wireframe, texturas), `video` para el giro del modelo y `datosTecnicos: { "Programa": "Blender", "Polígonos": "12k" }`. Para un visor interactivo, sube el modelo a Sketchfab y pega su URL de inserción (`https://sketchfab.com/models/ID/embed`) en `modelo3d`.

## 13. Dibujos
`tipoContenido: "arte"`, imágenes grandes en `galeria` (se amplían con el visor), `datosTecnicos: { "Técnica": "Pintura digital", "Herramientas": ["Photoshop"] }`.

## Proyectos Java/Oracle y Android
Java/Oracle: `tipoContenido: "java"`, capturas y diagramas en `galeria`, y fragmentos en `codigo` (con resaltado):
`codigo: [{ titulo: "Consulta de pedidos", lenguaje: "SQL", codigo: "SELECT * FROM pedidos;" }]`. Usa `\n` para saltos de línea. Android: `tipoContenido: "android"` muestra las capturas en formato vertical.

## 14. Destacar u ocultar
`destacado: true` (tarjeta grande con insignia) o `visible: false` (oculto sin borrarlo).

## 15-16. Colores, tipografías y formas
Todo está en el bloque `:root` de `css/styles.css`, comentado: colores (`--color-acento`...), fuentes, tamaños, `--radio-tarjetas`, `--espacio-secciones`, `--duracion-transicion`... Para usar una fuente de Google, añade su `<link>` en `index.html` y cambia `--fuente-titulos` o `--fuente-texto`.

## 17. Currículum
Guarda el PDF como `documents/curriculum.pdf` y pon `curriculum: "documents/curriculum.pdf"` en `personal`. Con el campo vacío no aparece el botón.

## 18. Publicar en GitHub Pages
1. Crea un repositorio en GitHub y sube el contenido de la carpeta `portfolio/` (con `index.html` en la raíz).
2. *Settings → Pages → Deploy from a branch → `main` / `(root)` → Save*.
3. Tras 1-2 minutos la web estará en `https://usuario.github.io/repositorio/`. Las rutas son relativas, así que funciona en esa subruta.
4. Cada proyecto nuevo: guarda, `git add .`, `git commit -m "Nuevo proyecto"`, `git push`.

**Límites:** el repositorio no debería superar 1 GB (recomendado) ni cada archivo los 100 MB. Mantén imágenes optimizadas, vídeos en YouTube/Vimeo y builds pesados en itch.io o Releases.

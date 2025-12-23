# 💕 10 Años Juntos — Página Romántica de Aniversario

Una experiencia web emocional, interactiva y mobile-first, creada como regalo de aniversario.

## 🎨 Características

✅ **Galería interactiva** con swipe en móvil, animaciones suaves y efectos de zoom  
✅ **Modal fullscreen** para reproducción de video  
✅ **Contador en tiempo real** mostrando días, horas y minutos juntos  
✅ **Música de fondo** suave con control de volumen  
✅ **Animaciones románticas** fade-in, scale, heartbeat  
✅ **Diseño mobile-first** optimizado para smartphones  
✅ **Sin dependencias externas** — HTML, CSS y JavaScript puro  

## 📂 Estructura

```
lovePage/
├── index.html          # Estructura HTML
├── styles.css          # Estilos responsive
├── script.js           # Lógica interactiva
└── assets/
    ├── photos/
    │   ├── photo1.jpg
    │   ├── photo2.jpg
    │   ├── photo3.jpg
    │   ├── photo4.jpg
    │   ├── photo5.jpg
    │   └── photo6.jpg
    ├── reel.mp4        # Video del aniversario
    └── music.mp3       # Pista de música de fondo
```

## 🚀 Cómo Usar

### 1. Reemplazar Assets

Sustituye los archivos placeholders con tus propios contenidos:

- **Fotos**: Reemplaza `assets/photos/photo1.jpg` – `photo6.jpg` con tus imágenes (JPG/PNG)
- **Video**: Coloca tu video en `assets/reel.mp4` (MP4, WebM recomendado)
- **Música**: Agrega tu pista en `assets/music.mp3` (MP3)

### 2. Personalizar Textos

En `index.html`, puedes modificar:

```html
<h1 class="title">10 años juntos</h1>  <!-- Título -->
<p class="subtitle">Una década de risas...</p>  <!-- Subtítulo -->
<p class="final-message">Cada día a tu lado...</p>  <!-- Mensaje final -->
```

### 3. Cambiar la Fecha de Inicio

En `script.js`, busca esta línea:

```javascript
const startDate = new Date('2015-12-23T00:00:00');  // 23 de diciembre de 2015
```

Cambia la fecha a la de tu aniversario.

### 4. Abrir en el Navegador

Simplemente abre `index.html` en tu navegador — no requiere servidor.

```bash
# En Windows, haz doble click en index.html
# O desde terminal:
start index.html
```

### 5. Probar en Móvil

- **Android**: Abre el archivo desde tu teléfono
- **iOS**: Copia la carpeta a un servidor local (ej: http-server) o comparte via AirDrop y abre en Safari
- **Emulador**: Usa las DevTools del navegador (F12 → Device Mode)

## 🎵 Características de la Música

- ▶️ **Autoplay**: Se reproduce al hacer click en "Empezar" (respetando políticas del navegador)
- 🔊 **Control**: Botón en la esquina superior derecha para pausar/reanudar
- 🔇 **Volumen**: Establecido en 15% por defecto (bajo y no invasivo)
- 🎚️ **Loop**: Se repite automáticamente

> **Nota**: Algunos navegadores en móvil requieren interacción del usuario antes de reproducir audio.

## ⏱️ Contador de Tiempo

El contador se activa cuando:
1. Haces click en "Empezar" → Galería
2. Ves el video completo → Aparece "¿Seguimos escribiendo nuestra historia?"
3. Haces click → Se muestra el contador

**Para pruebas rápidas**: Abre el navegador, presiona **C** y se mostrará el contador directamente.

El contador calcula automáticamente desde el **23 de diciembre de 2015** hasta la fecha/hora actual y se actualiza cada segundo.

**Ejemplo**: 3652 días, 14 horas, 16 minutos

## 🎬 Galería Interactiva

- **Swipe**: Desliza horizontalmente para cambiar fotos (móvil y desktop)
- **Indicadores**: Los puntos debajo muestran en qué foto estás
- **Click en puntos**: Haz click en cualquier punto para ir a esa foto
- **Botón video**: Aparece automáticamente en la última foto

## 📱 Animaciones

### En la Galería:
- Entrada suave (fade-in + deslizamiento)
- Zoom suave en imágenes
- Efecto hover (escala al pasar el ratón)
- Sombras dinámicas

### Botones:
- Pulso rítmico (heartbeat) en el botón de música
- Transiciones suave en todos los botones

### Contador:
- Fade-in del mensaje final
- Actualización en tiempo real cada segundo

## 🎨 Paleta de Colores

Puedes modificar los colores editando `:root` en `styles.css`:

```css
:root {
  --bg-1: #FFF7F1;      /* Fondo principal */
  --bg-2: #F7EDE6;      /* Fondo gradiente */
  --accent: #E8AFA6;    /* Rosa romántico */
  --muted: #8B6F63;     /* Marrón suave */
  --cream: #FBF7F3;     /* Crema */
}
```

## 🌐 Compatibilidad

✅ Chrome/Edge (escritorio y móvil)  
✅ Firefox (escritorio y móvil)  
✅ Safari (escritorio y iOS)  
✅ Samsung Internet  

## 📦 Despliegue

### Opción 1: GitHub Pages (Gratis)
1. Sube la carpeta a GitHub
2. Ve a Settings → Pages → Branch: main → Save
3. Tu sitio estará en `https://tuusuario.github.io/lovePage/`

### Opción 2: Netlify (Gratis)
1. Arrastra la carpeta a [netlify.com/drop](https://netlify.com/drop)
2. Tu sitio estará listo en segundos

### Opción 3: Servidor Local
```bash
# Necesitas tener Python instalado
python -m http.server 8000
# Abre: http://localhost:8000
```

## 🛠️ Troubleshooting

### La música no se reproduce
- Algunos navegadores requieren interacción del usuario primero
- Haz click en cualquier lugar de la página y luego en "Empezar"

### Las fotos no cargan
- Verifica que estén en `assets/photos/` con nombres correctos
- Usa JPG o PNG
- Comprueba la ruta en index.html

### El video no funciona
- Asegúrate de que es formato MP4 o WebM
- Comprueba que esté en `assets/reel.mp4`

## 💡 Tips

1. **Optimizar imágenes**: Usa herramientas como TinyPNG o ImageOptim
2. **Música ambiente**: Busca pistas libres en Pixabay, Bensound o YouTube Audio
3. **Mensaje final**: Personaliza el mensaje romántico en `index.html`
4. **Colores**: Ajusta la paleta a tu gusto en `styles.css`

---

¡Felicidades por tu aniversario! 💕

Creado con ❤️ para conmemorar cada momento compartido.

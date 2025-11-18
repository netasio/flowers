// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Qué bendición lo que estoy viendo", time: 14 },
  { text: "Ya está amaneciendo", time: 19 },
  { text: "La luz en tu piel me está pidiendo", time: 19.5},
  { text: "Que te lo haga lento", time: 24 },
  { text: "Ma, tú no entiendes cuánto tú me gustas", time: 26 },
  { text: "Cuando bajas, me subes al cielo", time: 28 },
  { text: "Una vida sin ti yo no quiero", time: 30 },
  { text: "Pensar en no tenerte me asusta, eh", time: 33 },
  { text: "Un besito en la frente", time: 37 },
  { text: "Por to lo que se vivió", time: 40 },
  { text: "Y si este momento nunca vuelve", time: 43 },
  { text: "Sé que no se desperdició", time: 49 },
  { text: "Oh-oh-oh, oh-oh-oh, oh-oh-oh, oh-oh-oh", time: 51 },
  { text: "Somos eternos tú y yo", time: 56 },
  { text: "Oh-oh-oh, oh-oh-oh, oh-oh-oh, oh-oh-oh", time: 59 },
  { text: "Eternos (Ra-Rauw)", time:  66},
  { text: "Ey, mami, tu alma es libre como primavera", time: 68 },
  { text: "Pa nuestro amor no existe frontera", time: 71 },
  { text: "Amarrao a ti como cuero y madera", time: 73 },
  { text: "Suena el barril, morena", time: 75 },
  { text: "Baila, que el calor te suelte la tela", time: 77 },
  { text: "No nos vamos hasta que los pies nos duelan", time: 79 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 10000);
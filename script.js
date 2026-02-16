document.addEventListener("DOMContentLoaded", function() {
  const silabos = {
    ingles: {
      basico: "📘 Gramática esencial y comprensión lectora.",
      intermedio: "📗 Redacción académica y vocabulario técnico.",
      avanzado: "📕 Investigación y comunicación profesional."
    },
    mate: {
      basico: "📘 Álgebra y funciones fundamentales.",
      intermedio: "📗 Cálculo diferencial e integral.",
      avanzado: "📕 Estadística aplicada y optimización."
    }
  };

  // Variable para guardar el nivel seleccionado de cada curso
  window.nivelSeleccionado = {
    ingles: 'basico',
    mate: 'basico'
  };

  document.querySelectorAll(".levels").forEach(levelContainer => {
    const curso = levelContainer.dataset.curso;
    const silaboBox = document.getElementById("silabo-" + curso);
    // Mostrar básico por defecto
    silaboBox.innerHTML = silabos[curso].basico;
    levelContainer.querySelectorAll("button").forEach(button => {
      button.addEventListener("click", function() {
        // Quitar clase active
        levelContainer.querySelectorAll("button")
          .forEach(btn => btn.classList.remove("active"));
        // Activar botón seleccionado
        this.classList.add("active");
        const nivel = this.dataset.nivel;
        // Guardar nivel seleccionado
        window.nivelSeleccionado[curso] = nivel;
        // Animación suave
        silaboBox.style.opacity = "0";
        setTimeout(() => {
          silaboBox.innerHTML = silabos[curso][nivel];
          silaboBox.style.opacity = "1";
        }, 200);
      });
    });
  });

  // Función para abrir los sílabos en la carpeta de Drive
  window.verSilabo = function(curso) {
    // Abre la carpeta de Drive con todos los sílabos
    const urlDrive = "https://drive.google.com/drive/folders/1cPw4EBKV3gNGDSVwcgJmCNBfw4V6kAfe?usp=drive_link";
    window.open(urlDrive, '_blank');
  };
});

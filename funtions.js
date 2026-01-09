// Mensaje personalizado (puedes cambiarlo)
      const mensaje = [
        "Mi querida novia,",
        "",
        "Desde que entraste en mi vida, todo se ha llenado de colores y alegría.",
        "Cada momento a tu lado es un tesoro que guardo en mi corazón.",
        "Tu sonrisa es mi luz en los días grises y tu amor mi mayor fortaleza.",
        "",
        "Hoy quiero recordarte lo especial que eres para mí.",
        "Eres la razón por la que creo en el destino y en el amor eterno.",
        "",
        "Te amo más de lo que las palabras pueden expresar.",
        "Gracias por ser tú.",
        "",
        "Con todo mi amor,",
      ];

      const firma = "Tu novio 💕"; // Cambia esto por tu nombre o apodo

      const messageBox = document.getElementById("messageBox");
      const signature = document.getElementById("signature");

      // Función para escribir el mensaje con efecto de máquina de escribir
      let index = 0;
      function typeWriter() {
        if (index < mensaje.length) {
          const line = mensaje[index];
          const p = document.createElement("p");
          messageBox.appendChild(p);
          let charIndex = 0;
          function typeChar() {
            if (charIndex < line.length) {
              p.innerHTML += line.charAt(charIndex);
              charIndex++;
              setTimeout(typeChar, 50);
            } else {
              index++;
              setTimeout(typeWriter, 300);
            }
          }
          typeChar();
        } else {
          // Cuando termina el mensaje, muestra la firma
          signature.innerHTML = firma;
        }
      }

      // Iniciar el efecto de escritura al cargar la página
      window.onload = function () {
        setTimeout(typeWriter, 1000);
      };

      // Función para crear corazones animados
      function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 10 + "px";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(heart);

        // Eliminar el corazón después de la animación
        setTimeout(() => {
          heart.remove();
        }, 5000);
      }

      // Crear corazones automáticamente cada cierto tiempo
      setInterval(createHeart, 300);

      // Función para mostrar muchos corazones al hacer clic en el botón
      function showHearts() {
        for (let i = 0; i < 50; i++) {
          setTimeout(createHeart, i * 100);
        }
      }
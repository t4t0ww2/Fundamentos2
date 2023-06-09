function empezarJuego(opcionUsuario) {
    // Generar una opción aleatoria para la computadora
    const opciones = ["piedra", "papel", "tijeras"];
    const opcionComputadora = opciones[Math.floor(Math.random() * opciones.length)];
  
    // Mostrar las opciones elegidas por ambos contrincantes
    console.log("Usuario: " + opcionUsuario);
    console.log("Computadora: " + opcionComputadora);
  
    // Determinar el resultado utilizando un switch-case
    switch (opcionUsuario) {
      case "piedra":
        if (opcionComputadora === "papel") {
          console.log("¡Yo Gaaano! Papel envuelve a piedra.");
        } else if (opcionComputadora === "tijeras") {
          console.log("¡Tú ganas! Piedra mata tijeras.");
        } else {
          console.log("¡Empate!");
        }
        break;
  
      case "papel":
        if (opcionComputadora === "tijeras") {
          console.log("¡Yo Gaano! Tijeras cortan papel.");
        } else if (opcionComputadora === "piedra") {
          console.log("¡Tú ganas! Papel envuelve a piedra.");
        } else {
          console.log("¡Empate!");
        }
        break;
  
      case "tijeras":
        if (opcionComputadora === "piedra") {
          console.log("¡Yo Gaaano! Piedra mata tijeras.");
        } else if (opcionComputadora === "papel") {
          console.log("¡Tú ganas! Tijeras cortan papel.");
        } else {
          console.log("¡Empate!");
        }
        break;
  
      default:
        console.log("Opción incorrecta, elige: piedra, papel o tijeras.");
    }
  }
  
  // Ejemplo de uso
  empezarJuego("piedra");
  
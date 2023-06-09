function esPalindromo(frase) {
    // Quitar espacios y convertir a minúsculas
    var fraseSinEspacios = frase.toLowerCase().replace(/\s/g, '');
    
    // Tener el reverso de la frase
    var reverso = fraseSinEspacios.split('').reverse().join('');
    
    // Verificar si la frase y su reverso son iguales
    if (fraseSinEspacios === reverso) {
      return true;
    } else {
      return false;
    }
  }
  
  // Solicitar que ingrese una frase
  var fraseIngresada = prompt('Ingresa una frase:');
  
  // Verificar si la frase ingresada es igual a un palíndromo
  if (esPalindromo(fraseIngresada)) {
    console.log('La frase es un palíndromo.');
  } else {
    console.log('La frase no es un palíndromo.');
  }
  
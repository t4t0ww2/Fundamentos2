function solveQuadraticEquation(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    
    if (discriminant < 0) {
      return "NO TIENE RESPUESTA";
    } else if (discriminant === 0) {
      let x = -b / (2 * a);
      return `TIENE RESPUESTA: x = ${x}`;
    } else {
      let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return `RESPUESTAS DE LA ECUACION: x1 = ${x1} y x2 = ${x2}`;
    }
  }
  
  
  let a = 5;
  let b = -5;
  let c = -5;
  
  let solutions = solveQuadraticEquation(a, b, c);
  console.log(solutions);
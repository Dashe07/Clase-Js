for (let i = 1; i <= 10; i++) {
  // Obtener el nombre del empleado
  const nombreEmpleado = prompt(`Registro ${i}: Ingrese su nombre:`);

  // Obtener el sueldo mensual del empleado
  const sueldoMensual = prompt(`Registro ${i}: Ingrese su sueldo mensual:`);

  // Obtener la cantidad de meses trabajados
  const mesesTrabajados = prompt(`Registro ${i}: Ingrese la cantidad de meses trabajados:`);

  // Verificar si los datos ingresados son válidos
  if (isNaN(sueldoMensual) || isNaN(mesesTrabajados)) {
    alert("Por favor, ingrese datos validos.");
    // Si los datos no son válidos, terminar la iteración actual
    i--;
    continue;
  }

  


  // Calcular el salario anual
  const salarioAnual = sueldoMensual * mesesTrabajados;

  // Calcular el aguinaldo (dividir entre 12 y multiplicar por 45)
  const aguinaldo = (salarioAnual / 12) * 1.5;

  let numerosRifa = ["1", "2", "3", "4", "5", "6","7", "8", "9", "10"];
  const generarNumero = () => {
     let index = Math.floor(Math.random() * numerosRifa.length);
      return numerosRifa[index];
  };
  let numeroRifa = generarNumero();

  // Mostrar resultados
  alert(`${nombreEmpleado}, tu aguinaldo es de ${aguinaldo} pesos de acuerdo a las leyes Mexicanas. de igual manera le otorgamos su numero para la rifa anual. Numero de rifa: ${numeroRifa}`);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var objRifas = [Television, iPad, Audifonos];

// Television
var Television = {
  marca: "Sony",
  modelo: "Bravia",
  pulgadas: 55,
};

// iPad
var iPad = {
  modelo: "iPad Pro",
  capacidad: "256GB",
  color: "Plata",
};

// Audifonos
var Audifonos = {
  marca: "Sony",
  modelo: "WH-1000XM4",
  color: "Negro",
};
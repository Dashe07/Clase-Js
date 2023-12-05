// Obtener el nombre del empleado
const nombreEmpleado = prompt("Ingrese su nombre:");

// Obtener el sueldo mensual del empleado
const sueldoMensual = prompt("Ingrese su sueldo mensual:");

// Obtener la cantidad de meses trabajados
const mesesTrabajados = prompt("Ingrese la cantidad de meses trabajados:");

// Verificar si los datos ingresados son válidos
if (isNaN(sueldoMensual) || isNaN(mesesTrabajados) ) {
  alert("Por favor, ingrese datos válidos.");
} else {
  // Calcular el salario anual
  const salarioAnual = sueldoMensual * mesesTrabajados;

  // Calcular el aguinaldo (dividir entre 12 y multiplicar por 45)
  const aguinaldo = (salarioAnual / 12) * 1.5;

  // Mostrar resultados
  alert(`${nombreEmpleado}, tu aguinaldo este año es de ${aguinaldo} pesos de acuerdo a las leyes Mexicanas`);
}
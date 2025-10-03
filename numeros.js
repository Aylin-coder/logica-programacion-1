
function validarNumero(valor) {
    const numero = Number(valor);
    return !isNaN(numero) && valor !== null && valor.trim() !== '';
}

//Solicita un numero al usuario
function solicitarNumero(mensaje) {
    let valor = prompt(mensaje);
    
    // Valida que sea un número
    while (!validarNumero(valor)) {
        alert("Por favor, ingresa un número válido.");
        valor = prompt(mensaje);
    }
    
    return Number(valor);
}

function ordenarNumeros() {
    // Solicitando los 3 números
    const num1 = solicitarNumero("Ingresa el primer número:");
    const num2 = solicitarNumero("Ingresa el segundo número:");
    const num3 = solicitarNumero("Ingresa el tercer número:");
    
    console.log(`Números ingresados: ${num1}, ${num2}, ${num3}`);
    
    // Verifica si todos los números son iguales
    if (num1 === num2 && num2 === num3) {
        console.log("\n⚠️ Los tres números son iguales!");
        console.log(`Números: ${num1}, ${num2}, ${num3}`);
        return;
    }
    
    // Crea un array con los números y ordenarlos
    const numeros = [num1, num2, num3];
    
    // Ordena de mayor a menor
    const mayorAMenor = [...numeros].sort((a, b) => b - a);
    
    // Ordena de menor a mayor
    const menorAMayor = [...numeros].sort((a, b) => a - b);
    
    //Resultados
    console.log(`Ordenados de mayor a menor: ${mayorAMenor.join(', ')}`);
    console.log(`Ordenados de menor a mayor: ${menorAMayor.join(', ')}`);
}
ordenarNumeros();
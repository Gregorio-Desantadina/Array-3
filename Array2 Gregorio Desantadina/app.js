function generarSecuencia() {
    const numero = parseInt(document.getElementById('numero').value);
    const secuencia = [numero];
    let numero2 = numero;
    while (numero2 !== 1) { 
        if (numero2 % 2 === 0) { 
            numero2 /= 2; 
        } else {
            numero2 = numero2 * 3 + 1;
        }
        secuencia.push(numero2);     
    }
    const result = document.getElementById('resultado');
    result.innerHTML = `<p>Longitud: ${secuencia.length}</p>`;
    result.innerHTML += `<p>Numero mas grande: ${Math.max(...secuencia)}</p>`;
    result.innerHTML += `<p>Secuencia: ${secuencia.join(', ')}</p>`;
}
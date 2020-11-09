const calc = document.getElementById('calc');

calc.addEventListener('click', () => {
    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;
    const op = document.getElementById('operadores').value;
    const x = document.querySelector('#x');

    if (op == "somar") {
        res = n1 + n2;
        x.innerHTML = `${n1} + ${n2} = ${res.toString().replace('.',',')} <br><br> <img src="img/cake.gif" class="bolo" alt="gifbrawlhalla"/>`;
    } else if (op == "subtrair") {
        res = n1 - n2;
        x.innerHTML = `${n1} - ${n2} = ${res.toString().replace('.',',')} <br><br> <img src="img/cake.gif" class="bolo" alt="gifbrawlhalla"/>`;
    } else if (op == "multiplicar") {
        res = n1 * n2;
        x.innerHTML = `${n1} x ${n2} = ${res.toString().replace('.',',')} <br><br> <img src="img/ufa.gif" class="ufa" alt="gifbrawlhalla"/>`;
    } else if (op == "dividir") {
        res = n1 / n2;
        x.innerHTML = `${n1} ÷ ${n2} = ${res.toString().replace('.',',')} <br><br> <img src="img/ufa.gif" class="ufa" alt="gifbrawlhalla"/>`;
    } else {
        x.innerHTML = '<strong>Selecione uma operação.</strong> <br><br> <img src="img/facepalm.png"/>'
    }
});


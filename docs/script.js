// const calc = document.getElementById('calc');

// calc.addEventListener('click', () => {
//     const n1 = Number(document.querySelector('input#n1').value);
//     const n2 = Number(document.querySelector('input#n2').value);
//     const op = document.getElementById('operadores').value;
//     const x = document.querySelector('#x');

//     if (op == "somar") {
//         res = n1 + n2;
//         x.innerHTML = `${n1} + ${n2} = ${res.toString().replace('.',',')} <br><br> <img src="img/cake.gif" class="bolo" alt="gifbrawlhalla"/>`;
//         check(res);
//     } else if (op == "subtrair") {
//         res = n1 - n2;
//         x.innerHTML = `${n1} - ${n2} = ${res.toString().replace('.',',')} <br><br> <img src="img/cake.gif" class="bolo" alt="gifbrawlhalla"/>`;
//         check(res);
//     } else if (op == "multiplicar") {
//         res = n1 * n2;
//         x.innerHTML = `${n1} x ${n2} = ${res.toString().replace('.',',')} <br><br> <img src="img/ufa.gif" class="ufa" alt="gifbrawlhalla"/>`;
//         check(res);
//     } else if (op == "dividir") {
//         res = n1 / n2;
//         x.innerHTML = `${n1} ÷ ${n2} = ${res.toString().replace('.',',')} <br><br> <img src="img/ufa.gif" class="ufa" alt="gifbrawlhalla"/>`;
//         check(res);
//     } else {
//         x.innerHTML = '<strong>Selecione uma operação.</strong> <br><br> <img src="img/facepalm.png"/>'
//     }

//     document.getElementById('n1').value = '';
//     document.getElementById('n2').value = '';
//     document.getElementById('n1').focus();
// });

function calc() {
    const n1 = Number(document.querySelector('input#n1').value);
    const n2 = Number(document.querySelector('input#n2').value);
    const op = document.getElementById('operadores').value;
    const x = document.querySelector('#x');


    if (op == "somar") {
        res = n1 + n2;
        x.innerHTML = `${n1} + ${n2} = ${res.toString().replace('.',',')} <br><br> <img src="img/cake.gif" class="bolo" alt="gifbrawlhalla"/>`;
        check(res);
    } else if (op == "subtrair") {
        res = n1 - n2;
        x.innerHTML = `${n1} - ${n2} = ${res.toString().replace('.',',')} <br><br> <img src="img/cake.gif" class="bolo" alt="gifbrawlhalla"/>`;
        check(res);
    } else if (op == "multiplicar") {
        res = n1 * n2;
        x.innerHTML = `${n1} x ${n2} = ${res.toString().replace('.',',')} <br><br> <img src="img/ufa.gif" class="ufa" alt="gifbrawlhalla"/>`;
        check(res);
    } else if (op == "dividir") {
        res = n1 / n2;
        x.innerHTML = `${n1} ÷ ${n2} = ${res.toString().replace('.',',')} <br><br> <img src="img/ufa.gif" class="ufa" alt="gifbrawlhalla"/>`;
        check(res);
    } else {
        x.innerHTML = '<strong>Selecione uma operação.</strong> <br><br> <img src="img/facepalm.png"/>'
    }

    n1.value = '';
    n2.value = '';
    n1.focus();
}

function check(x) {
    document.querySelector('#y');
    if (res == 7) {
        y.innerHTML = `<img src="img/random.png" alt="random steam"/>`
    } else {
        y.innerHTML = '';
    }
}
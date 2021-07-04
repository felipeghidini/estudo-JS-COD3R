function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    });
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(frase => frase.concat('Teste'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e));
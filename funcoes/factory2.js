function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("notebook", 2199.49))
console.log(criarProduto("Ipad", 4999.49))
console.log(criarProduto("TV", 2199.49))

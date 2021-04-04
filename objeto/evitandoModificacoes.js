// Object.preventExtensions - não consegue incluir nenhum atributo mas pode deletar

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal - não consegue incluir e nem deletar atributos
const pessoa = { nome: 'Jesus', idade: 33 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Cristo'
delete pessoa.nome
pessoa.idade = 31
console.log(pessoa)

// Object.freeze =  selado + valores constantes
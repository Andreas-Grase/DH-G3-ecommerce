const controller = {
    pesquisar: (req, res) => {res.send("Página Produtos")},
    show: (req, res) => {res.send(`Página Produto ${req.params.id}`)},
    showPromo: (req, res) => {res.send(`Página Produto ${req.params.id}`)},
    create: (req, res) => {res.send("Criar Produto")},
    update: (req, res) => {res.send(`Atualizar Produto ${req.params.id}`)},
    delete: (req, res) => {res.send(`Excluir Produto ${req.params.id}`)},
  }
  
  module.exports = controller
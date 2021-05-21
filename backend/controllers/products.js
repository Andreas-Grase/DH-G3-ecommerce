const controller = {
    pesquisar: (req, res) => {res.send("<h1>Página produtos</h1>")},
    show: (req, res) => {res.send(`<h1>Página produto ${req.params.id}</h1>`)},
    showPromo: (req, res) => {res.send('<h1>Página de promoções</h1>')},
    create: (req, res) => {res.send("<h1>Criar produto</h1>")},
    update: (req, res) => {res.send(`<h1>Atualizar produto ${req.params.id}</h1>`)},
    delete: (req, res) => {res.send(`<h1>Excluir produto ${req.params.id}</h1>`)},
  }
  
  module.exports = controller
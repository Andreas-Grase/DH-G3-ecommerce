const controller = {
    login: (req, res) => {res.send("<h1>Página login</h1>")},
    create: (req, res) => {res.send("<h1>Página criar usuário</h1>")},
    forgot: (req, res) => {res.send("<h1>Página esqueci a senha</h1>")},
    modify: (req, res) => {res.send(`<h1>Página modificar usuário ${req.params.id}</h1>`)},
    delete: (req, res) => {res.send(`<h1>Página deletar usuário ${req.params.id}</h1>`)},
    show: (req, res) => {res.send(`<h1>Página mostrar usuário ${req.params.id}</h1>`)},
    index: (req, res) => {res.send("<h1>Página usuários</h1>")},
  }
  
  module.exports = controller
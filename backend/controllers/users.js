const controller = {
    login: (req, res) => {res.send("Página Login")},
    create: (req, res) => {res.send("Página Criar Usuário")},
    forgot: (req, res) => {res.send("Página Esqueci a Senha")},
    modify: (req, res) => {res.send("Página Modificar Usuário")},
    delete: (req, res) => {res.send("Página Delete Usuário")},
    show: (req, res) => {res.send("Página Mostrar Usuário")},
    index: (req, res) => {res.send("Página Usuários")},
  }
  
  module.exports = controller
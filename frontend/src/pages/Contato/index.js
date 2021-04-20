import Main from "../templates/Main";
import "./style.css";

const Contato = () => {
  return (
    <div className = "grid-container">
      <div className="container-form">
        <h3>FALE CONOSCO</h3>
        <form action="#" name="contact_form" className = "formulario">
          <label for="first_name">Nome</label>
          <input name="first_name" type="text" required placeholder="Nome" className = "input"/>
          <br />
          <label for="last_name">Sobrenome</label>
          <input name="last_name" type="text" required placeholder="Sobrenome" className = "input"/>
          <br />
          <label for="email">Email</label>
          <input name="email" type="email" required placeholder="you@domain.com" className = "input"/>
          <br />
          <label for="message">Message</label>
          <br />
          <div className="center">
          <textarea name="message" cols="30" rows="10" placeholder="Digite sua mensagem aqui ..." required> </textarea>
          <input type="submit" value="Submit" />
          </div>	
        </form>
      </div>
          <div className = "card">
            <i class="fas fa-comments fa-2x"></i>
            <span>0800 XXXX-XXXX</span>
            <span>Segunda à Sexta: 9h às 17h
            <br/>Sábado: 9h às 12h
            </span>
          </div>
          <div className = "card">
            <i class="fas fa-phone fa-2x"></i>
            <span>0800 XXXX-XXXX</span>
            <span>Segunda à Sexta: 9h às 17h
            <br/>Sábado: 9h às 12h
            </span>
          </div>
    </div>
  );
};

const template = () => (
  <Main>
    <Contato />
  </Main>
);
export default template;
import logo from "../../assets/icons/logo-gris-claro.svg"
import "./style.css"


const Login = () => {
    return( 
       <div className="conteiner">
        <div className="login">
            <img src= {logo} className="usuario" width="100" height="100" alt=""/>
            <h1>Login</h1>
            <form>           
                <p>Usuario:</p>
                <input type="text" name="" placeholder="Insira seu nome de usuario"/>
                <p>Senha:</p>
                <input type="password" name="" placeholder="Insira sua senha"/>
                <input type="submit" name="" placeholder="login"/>
                <a href="#">Esqueceu sua Senha ?</a><br/>
                <a href="#">Ainda não possue uma conta?</a>
            </form>
        </div> 
    </div>
    );
};
 
export default Login;
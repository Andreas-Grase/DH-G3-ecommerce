import iconeCadastro from "../../assets/img/FormularioDeCadastro/iconeCadastro.svg"
import "./styles.css"

const FormularioDeCadastro = () => {
    return (
        <>
            <div class="container-form-cadastro">
                <div class="barra-superior">
                    <img class="icone-de-cadastro" src={iconeCadastro} alt="icone de cadastro"/>
                    <h2 class="titulo-do-cadastro">Cadastro</h2>
                </div>
            </div>
        </>
    )
}

export default FormularioDeCadastro
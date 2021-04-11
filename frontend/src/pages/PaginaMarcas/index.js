import MarcasDOS from "../../components/MarcasDOS"
import Main from '../templates/Main'
import './style.css'

const PaginaMarcas = () => {
    return (

        <section className="catalogo-de-marcas">
          
            <MarcasDOS />
            <MarcasDOS />

        </section>
    )
}

const template = () => (
    <Main>
      <PaginaMarcas />
    </Main>
  );
  export default template;
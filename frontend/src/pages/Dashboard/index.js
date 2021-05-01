import Admin from "../templates/Admin";
import DashboardDeletar from "../DashboardDeletar";
import './style.css';

const Dashboard = () => {
  return (
    <>
        <div className = "table-container">
        <table class="table table-striped">
  <thead>
    <tr className = "colunas">
      <th scope="col">ID</th>
      <th scope="col">Produto</th>
      <th scope="col">Categoria</th>
      <th scope="col">Estoque</th>
      <th scope="col">Preço</th>
      <th scope="col" className = "col-btn">Atualizar</th>
      <th scope="col" className = "col-btn">Deletar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Shampoo Aussie</td>
      <td>Cabelo</td>
      <td>20</td>
      <td>R$29,99</td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-update"><i class="fas fa-sync"></i></button></div></td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-delete"><i class="far fa-trash-alt"></i></button></div></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>BRAÉ Anti-Frizz</td>
      <td>Cabelo</td>
      <td>5</td>
      <td>R$138,00</td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-update"><i class="fas fa-sync"></i></button></div></td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-delete"><i class="far fa-trash-alt"></i></button></div></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Redken Curvaceous - Cond</td>
      <td>the Bird</td>
      <td>30</td>
      <td>R$129,90</td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-update"><i class="fas fa-sync"></i></button></div></td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-delete"><i class="far fa-trash-alt"></i></button></div></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>UrbanMen Gel Barbear</td>
      <td>Barbearia</td>
      <td>30</td>
      <td>R$27,00</td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-update"><i class="fas fa-sync"></i></button></div></td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-delete"><i class="far fa-trash-alt"></i></button></div></td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Lancôme Loção Corporal</td>
      <td>Pele</td>
      <td>18</td>
      <td>R$224,00</td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-update"><i class="fas fa-sync"></i></button></div></td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-delete"><i class="far fa-trash-alt"></i></button></div></td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>BioOil Pele Seca</td>
      <td>Pele</td>
      <td>5</td>
      <td>R$29,90</td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-update"><i class="fas fa-sync"></i></button></div></td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-delete"><i class="far fa-trash-alt"></i></button></div></td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Tônico Salon Line SOS</td>
      <td>Cabelo</td>
      <td>35</td>
      <td>R$11,50</td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-update"><i class="fas fa-sync"></i></button></div></td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-delete"><i class="far fa-trash-alt"></i></button></div></td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>BRAÉ Divine</td>
      <td>Cabelo</td>
      <td>11</td>
      <td>R$148,00</td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-update"><i class="fas fa-sync"></i></button></div></td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-delete"><i class="far fa-trash-alt"></i></button></div></td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>Máscara Yenzah</td>
      <td>Cabelo</td>
      <td>17</td>
      <td>R$23,89</td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-update"><i class="fas fa-sync"></i></button></div></td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-delete"><i class="far fa-trash-alt"></i></button></div></td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>UrbanMen Óleo p/ Barba</td>
      <td>Barbearia</td>
      <td>8</td>
      <td>R$26,00</td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-update"><i class="fas fa-sync"></i></button></div></td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-delete"><i class="far fa-trash-alt"></i></button></div></td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td>Removedor de Esmalte</td>
      <td>Unhas</td>
      <td>20</td>
      <td>R$12,90</td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-update"><i class="fas fa-sync"></i></button></div></td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-delete"><i class="far fa-trash-alt"></i></button></div></td>
    </tr>
    <tr>
      <th scope="row">12</th>
      <td>Wella Fusion Shampoo</td>
      <td>Cabelo</td>
      <td>31</td>
      <td>R$189,90</td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-update"><i class="fas fa-sync"></i></button></div></td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-delete"><i class="far fa-trash-alt"></i></button></div></td>
    </tr>
    <tr>
      <th scope="row">13</th>
      <td>Risqué Friends</td>
      <td>Unhas</td>
      <td>19</td>
      <td>R$5,99</td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-update"><i class="fas fa-sync"></i></button></div></td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-delete"><i class="far fa-trash-alt"></i></button></div></td>
    </tr>
    <tr>
      <th scope="row">14</th>
      <td>Payot Framb Hidratante</td>
      <td>Pele</td>
      <td>14</td>
      <td>R$37,90</td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-update"><i class="fas fa-sync"></i></button></div></td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-delete"><i class="far fa-trash-alt"></i></button></div></td>
    </tr>
    <tr>
      <th scope="row">15</th>
      <td>Fluído p/ Escova Trivitt</td>
      <td>the Bird</td>
      <td>23</td>
      <td>R$37,90</td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-update"><i class="fas fa-sync"></i></button></div></td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-delete"><i class="far fa-trash-alt"></i></button></div></td>
    </tr>
    <tr>
      <th scope="row">16</th>
      <td>Impala Cremoso Terra</td>
      <td>Unhas</td>
      <td>54</td>
      <td>R$2,99</td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-update"><i class="fas fa-sync"></i></button></div></td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-delete"><i class="far fa-trash-alt"></i></button></div></td>
    </tr>
    <tr>
      <th scope="row">17</th>
      <td>FarmaEvas Cond. Camomila</td>
      <td>Cabelo</td>
      <td>3</td>
      <td>R$19,99</td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-update"><i class="fas fa-sync"></i></button></div></td>
      <td><div className = "btn-wrapper"><button type = "btn" className= "btn-delete"><i class="far fa-trash-alt"></i></button></div></td>
    </tr>
  </tbody>
</table>
        </div>
    </>
  );
};

const template = () => (
  <Admin>
    <Dashboard />
  </Admin>
);
export default template;

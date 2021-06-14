import React, { useState, useEffect } from "react";
import axios from "axios";
import ModalAtualizar from "../../../../components/modals/AtualizarUsuario";
import ModalDeletar from "../../../../components/modals/DeletarUsuario";
import "./style.css";

const List = () => {
  const [isModalAtualizarVisible, setIsModalAtualizarVisible] = useState(false);
  const [isModalDeletarVisible, setIsModalDeletarVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [usuarios, setUsuarios] = useState([]);

  const openModalAtualizar = ( id, primeiro_nome, sobrenome, email, senha, cpf, aniversario, id_regra ) => {
    setIsModalAtualizarVisible(true);
    setSelectedUser({ id, primeiro_nome, sobrenome, email, senha, cpf, aniversario, id_regra, });
  };
  const openModalDeletar = (id, primeiro_nome) => {
    setIsModalDeletarVisible(true);
    setSelectedUser({ id, primeiro_nome });
  };

  const getDataUsers = async () => {
    try {
      const response = await axios.get("/usuarios");
      setUsuarios(response.data.usuarios);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // fetch("/produtos")
    //   .then((res) => res.json())
    //   .then((res) => setData(res));

    // axios
    //   .get("/produtos")
    //   .then((res) => setData(res.data))
    //   .catch((error) => console.log(error));
    getDataUsers();
  }, []);

  const handleDeleteSuccess = () => {
    setIsModalDeletarVisible(false);
    getDataUsers();
  };
  const handleUpdateSuccess = () => {
    setIsModalAtualizarVisible(false);
    getDataUsers();
  };
  return (
    <section className="container-usuarios-list">
      {isModalAtualizarVisible ? (
        <ModalAtualizar
          usuarios={selectedUser}
          handleSuccess={handleUpdateSuccess}
        />
      ) : null}
      {isModalDeletarVisible ? (
        <ModalDeletar
          usuarios={selectedUser}
          handleSuccess={handleDeleteSuccess}
        />
      ) : null}
      <div className="header-section">
        <div className="list-icon">
          <i class="fas fa-list-alt fa-2x" />
        </div>
        <h1 className="title">Lista de Usuários</h1>
      </div>
      <div className="table-container">
        <table className="table table-striped users__table">
          <thead>
            <tr className="colunas">
              <th scope="col">
                ID
              </th>
              <th scope="col">
                Nome
              </th>
              <th  scope="col">
                Sobrenome
              </th>
              <th  scope="col">
                Email
              </th>
              <th  scope="col">
                Senha
              </th>
              <th  scope="col">
                CPF
              </th>
              <th scope="col">
                Aniversário
              </th>
              {/* <th className="user__id_endereco" scope="col">Id_Endereço</th> */}
              <th  scope="col">
                Id_Regra
              </th>
              <th  scope="col">
                Ver
              </th>
              <th  scope="col">
                Editar
              </th>
              <th scope="col">
                Excluir
              </th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, idx) => (
              <tr
                className="colunas"
                key={idx}
                id={`user${usuario.id}`}
                className="user"
              >
                <td scope="row" className="user__id" data-title="ID">
                  {usuario.id}
                </td>
                <td className="user__name" data-title="Nome">
                  {usuario.primeiro_nome}
                </td>
                <td className="user__lastname" data-title="Sobrenome">
                  {usuario.sobrenome}
                </td>
                <td className="user__email" data-title="Email">
                  {usuario.email}
                </td>
                <td className="user__pass" data-title="Senha">
                  {usuario.senha}
                </td>
                <td className="user__cpf" data-title="cpf">
                  {usuario.cpf}
                </td>
                <td className="user__aniversario" data-title="aniversario">
                  {usuario.aniversario}
                </td>
                {/* <td className="user__id_endereco" data-title="id_endereco">
                  {usuario.id_endereco}
                </td> */}
                <td className="user__id_regra" data-title="id_regra">
                  {usuario.id_regra}
                </td>
                <td>
                  <div className="btn-wrapper">
                    <button className="btn-update">
                      <i class="fas fa-eye"></i>
                    </button>
                   </div> 
                </td>
                <td>
                  <div className="btn-wrapper">
                    <button
                      onClick={() =>
                       openModalAtualizar(
                          `${usuario.id}`,
                          `${usuario.primeiro_nome}`,
                          `${usuario.sobrenome}`,
                          `${usuario.email}`,
                          `${usuario.senha}`,
                          `${usuario.cpf}`,
                          // `${usuario.id_endereco}`,
                          `${usuario.id_regra}`
                        )
                      }
                      type="btn"
                      className="btn-update"
                    >
                    <i class="fas fa-sync"></i>
                    </button>
                  </div>    
                </td>
                <td>
                  <div className="btn-wrapper">
                    <button
                      onClick={() =>
                        openModalDeletar(
                          `${usuario.id}`,
                          `${usuario.primeiro_nome}`
                        )
                      }
                      type="btn"
                      className="btn-delete"
                    >
                    <i class="far fa-trash-alt"></i>
                    </button>
                  </div>  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default List;

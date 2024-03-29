import React, { useState } from "react";
import ModalAtualizar from "../../../../components/modals/AtualizarUsuario";
import ModalDeletar from "../../../../components/modals/DeletarUsuario";
import "./style.css";

const List = ({ usuarios }) => {
  const [isModalAtualizarVisible, setIsModalAtualizarVisible] = useState(false);
  const [isModalDeletarVisible, setIsModalDeletarVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  const openModalAtualizar = (
    id,
    primeiro_nome,
    sobrenome,
    email,
    senha,
    cpf,
    aniversario
  ) => {
    setIsModalAtualizarVisible(true);
    setSelectedUser({
      id,
      primeiro_nome,
      sobrenome,
      email,
      senha,
      cpf,
      aniversario,
    });
  };

  const openModalDeletar = (id, primeiro_nome) => {
    setIsModalDeletarVisible(true);
    setSelectedUser({ id, primeiro_nome });
  };
  return (
    <section className="table-container">
      <div style={{ width: "80%", margin: "5px" }}>
        {isModalAtualizarVisible ? (
          <ModalAtualizar usuarios={selectedUser} />
        ) : null}
        {isModalDeletarVisible ? (
          <ModalDeletar usuarios={selectedUser} />
        ) : null}
        <div className="header-section">
          <div className="add-icon">
            <i class="fas fa-list-alt fa-2x" />
          </div>
          <h1 className="title">Lista de Usuários</h1>
        </div>
      </div>
      <table class="table table-striped">
        <thead>
          <tr className="colunas">
            <th>ID</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>Senha</th>
            <th>CPF</th>
            <th>Aniversário</th>
            {/* <th>Id_Endereço</th>
              <th>Id_Regra</th> */}
            <th>Ver</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, idx) => (
            <tr id={`user${usuario.id}`} className="user">
              <td className="user__id" data-title="ID">
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
                </td>
                <td className="user__id_regra" data-title="id_regra">
                  {usuario.id_regra}
                </td> */}
              <td>
                <button className="btn-update"><i class="fas fa-eye"></i></button>
              </td>
              <td>
                <button
                  onClick={() =>
                    openModalAtualizar(
                      `${usuario.id}`,
                      `${usuario.primeiro_nome}`,
                      `${usuario.marca}`,
                      `${usuario.quantidade}`,
                      `${usuario.preco}`
                    )
                  }
                  type="btn"
                  className="btn-update"
                >
                  <i class="fas fa-sync"></i>
                </button>
              </td>
              <td>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default List;

import React from "react";
import "./style.css";

const List = ({ usuarios }) => {
  return (
    <>
      <section className="users">
        <table className="users__table">
          <thead>
            <tr>
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
                <td className="user__see">
                  <form action={`/usuarios/ ${usuario.id}`} method="GET">
                    <button className="user__see--btn">Ver</button>
                  </form>
                </td>
                <td className="user__edit">
                  <form action={`/usuarios/ ${usuario.id}`} method="GET">
                    <input type="hidden" name="edit" value="edit" />
                    <button className="user__edit--btn">Editar</button>
                  </form>
                </td>
                <td className="user__delete">
                  <form
                    action={`/usuarios/ ${usuario.id}/delete`}
                    method="POST"
                  >
                    <button className="user__delete--btn">Excluir</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};
export default List;

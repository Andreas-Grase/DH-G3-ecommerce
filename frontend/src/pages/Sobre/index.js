import Main from "../templates/Main";
import logo from "../../assets/icons/logo-gris-claro.svg";
import "./style.css";

const Sobre = () => {
  return (
    <div className="about-container">
      <div className="sobre-nos">
        <div className="logo-container">
          <img src={logo} className="logo" width="100" height="100" />
        </div>
        <h1 className="titulo-sobre-nos">Sobre nós</h1>
        <div className="sobre-texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas commodo leo vel placerat. Phasellus in feugiat ligula. Ut egestas pharetra purus, eu pellentesque tellus luctus at. Phasellus eu scelerisque nulla. Nullam vitae risus lobortis, imperdiet sapien ut, placerat enim. Integer scelerisque, nibh eget dapibus consequat, augue massa facilisis nibh, eu viverra est metus varius mauris. Nullam ornare, neque eget convallis sodales, massa orci facilisis diam, nec fringilla odio diam vitae nulla. Sed tempor quam eget velit pharetra efficitur.
          Donec nec quam at mauris rhoncus ullamcorper et vel sapien. Morbi porttitor ligula lacus, sit amet dictum sapien consequat ac. Praesent congue, arcu sit amet suscipit aliquam, orci ipsum ullamcorper neque, tincidunt viverra lacus tortor at odio. In nec iaculis enim, sed ultricies tortor. Cras sodales dui laoreet auctor porttitor. Donec lobortis arcu in est lobortis, ac dapibus dui egestas. Sed non interdum orci, vitae fringilla ex. In vitae pharetra est. Fusce eget ante vitae nulla cursus vehicula.
          Suspendisse ullamcorper id felis eget mollis. Vestibulum dapibus maximus urna, nec dignissim nisi tristique imperdiet. Donec nec enim eu risus vehicula laoreet eget sed enim. Donec dignissim eros ac erat dictum, sit amet semper nisi cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet maximus quam. Morbi lacinia ultrices nisl sit amet feugiat.
        </div>
      </div>
      <div className="card-section">
        <div className="card-sobre">
          <i class="fas fa-shipping-fast fa-2x"></i>
          <div className="company-assets">Preparo do seu pedido e entregas ágeis para todo o Brasil.</div>
        </div>
        <div className="card-sobre">
          <i class="fas fa-user-shield fa-2x"></i>
          <div className="company-assets">Na Kabellos, todas as operações são criptografadas e 100% processadas por computador.</div>
        </div>
        <div className="card-sobre">
          <i class="fas fa-user-friends fa-2x"></i>
          <div className="company-assets">Equipe treinada e totalmente preparada para seu melhor atendimento.</div>
        </div>
      </div>
    </div>
  );
};

const template = () => (
  <Main>
    <Sobre />
  </Main>
);

export default template;
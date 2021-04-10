import Admin from "../templates/Admin";

const Dashboard = () => {
  return (
    <>
      <h1 id="titulo-dashboard">Dashboard: Admin</h1>
    </>
  );
};

const template = () => (
  <Admin>
    <Dashboard />
  </Admin>
);
export default template;

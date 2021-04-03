import NavbarDashboard from '../../components/Navbar/NavbarDashboard';
import MenuLateral from '../../components/Navbar/MenuLateralDashboard';

const Dashboard = () => {
    return (
        <>
        <NavbarDashboard />
        <h1 id="titulo-dashboard">Você está na página principal do Dashboard</h1>
        <MenuLateral />
        </>
    )
}

export default Dashboard;
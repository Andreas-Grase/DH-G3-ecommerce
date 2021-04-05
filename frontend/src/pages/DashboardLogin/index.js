import NavbarDashboard from '../../components/Navbar/NavbarDashboard';
import MenuLateral from '../../components/Navbar/MenuLateralDashboard';
import AdminLogin from '../../components/AdminLogin'
import './style.css'

const Dashboard = () => {
    return (
        <>
            <div>
                <NavbarDashboard />
            </div>
            <section  className="admin-login">
                <ul>
                    <li><MenuLateral /></li>  
                    <li className="cuadro-de-login-admin"><AdminLogin /></li> 
                </ul>
            </section>
        </>
    )
}

export default Dashboard;
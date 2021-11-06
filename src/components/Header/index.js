import './styles.css';
import Logo from '../../assets/logo.svg';
import Menu from '../Menu';

export default function Header() {
    return (
        <header>
            <img src={Logo} alt="logo" className="logo" />
            <Menu />
        </header>
    );
}
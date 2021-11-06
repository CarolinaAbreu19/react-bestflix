import './styles.css';
import Logo from '../../assets/logo.svg';

export default function Footer() {
    return (
        <footer>
            <div className="footer-left">
                <img src={Logo} alt="logo" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa officiis, dolore et sapiente molestiae quibusdam eius laborum, dolorem dignissimos reiciendis totam recusandae sit quasi non ipsum facere distinctio cupiditate perspiciatis!</p>
            </div>
            <div className="footer-right">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat ea sed provident nesciunt consequuntur? Est dolorum optio minima nesciunt voluptates non temporibus deserunt! Explicabo alias aperiam, impedit qui vitae doloremque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, impedit perspiciatis nobis soluta iure assumenda aliquam quis ipsam consequuntur deserunt id omnis alias corrupti sed natus odit illum, vero recusandae.
            </div>
        </footer>
    );
}
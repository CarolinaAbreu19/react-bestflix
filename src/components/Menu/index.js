import { useState } from 'react';
import iconClose from '../../assets/icon-close.svg';
import iconMenu from '../../assets/icon-menu.svg';
import './styles.css';

export default function Menu() {
    const [open, setOpen] = useState(false);

    return (
        <div className={`${open && 'fullscreen-menu'}`}>
            {open ?
                <img src={iconClose} className="icon-close" alt="fechar menu" onClick={() => setOpen(false)} style={{display: `${open} ? 'block' : 'none'`}} /> :
                <img src={iconMenu} className="icon-menu" alt="abrir menu" onClick={() => setOpen(true)} />
            }
        
            <ul className="menu">
                <li>Ação</li>
                <li>Comédia</li>
                <li>Drama</li>
                <li>Documentário</li>
                <li>Infantil</li>
            </ul>
        </div>
    );
}
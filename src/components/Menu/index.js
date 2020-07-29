import React from'react';
import Logo from '../../assets/imagens/Logo.png'
import './Menu.css';
import Button from '../Button'
//import ButtonLink from './components/ButtonLink';


function Menu() {
    return(
        <nav className = 'Menu'>
            <a href = '/'>
                <img className='Logo' src={Logo} alt='xuxuflix logo'/>
            </a>

            <Button as ='a' className= "ButtonLink" href = '/'>
                novo Vídeo

            </Button>
        </nav>
    ) ;
}

export default Menu;
import React from 'react';
import Search from "./Search";
import Logo from "./img/LOGO.jpg";


class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar-itens">
               <img className="navbar-logo" src={Logo} alt="Logo" />
               <h1 className="navbar-h1">3DInfill</h1>
                <Search/>
               <ul className="navbar-ul">     
                    <li><a href="#">Login / Cadastro</a></li> 
                    <li><a href="#">Carrinho</a></li>
                    <li><a href="#">Contato</a></li>       
                    <li><a href="#">Home</a></li>
                    
                    
                    
               </ul>
           </nav>
        );
    }
}

export default Navbar;
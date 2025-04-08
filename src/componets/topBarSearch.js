import React, { Component } from 'react';
import '../App.css'

//Imagens

import Logo from '../assets/e-camara-16.png'

// Icones
import{
    FaBars
} from 'react-icons/fa'

// Components

//mudança de páginas

class topBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            window: window.location.pathname,
            headerHome: 'header-home',
            mostrarMenu: 'invible-mobile-menu'
        }
    }

    componentDidMount() {
        if (this.state.name) {
            this.setState({ helloText: `Olá, ${this.state.name}` })
        } else {
            this.setState({ helloText: `Seja bem vindo.` })
        }
        this.btnHome()
    }

    btnHome = () => {
        switch (this.state.window) {
            case `/login`:
                return this.setState({ headerHome: 'menuNone' })
            default:
                return null
        }
    }
     myFunction(){
        if (this.state.mostrarMenu === "visible-mobile-menu") {
            this.setState.mostrarMenu = "invible-mobile-menu";
        } else {
            this.setState.mostrarMenu = "visible-mobile-menu";
        }
      }


    render() {
        return (
            <>
                <nav className={this.state.headerHome}>
                    <div className='header-home'>
                        <p className='titleHeader'><img src={Logo} alt='Logomarca' onClick={() => { window.location.href = "/" }} /></p>
                        <div className="divmenuitems" >
                            {/* Menu Mobile */}
                            <div class="mobile-container">
                                <div class="topnav">
                                    <div className={this.state.mostrarMenu}>
                                        <a href="#news">News</a>
                                        <a href="#contact">Contact</a>
                                        <a href="#about">About</a>
                                    </div>
                                    <a href="#home" class="icon" onclick={this.myFunction}>
                                        <FaBars/>
                                    </a>
                                </div>
                            </div>

                            {/* Menu Desktop */}
                            <ul className="menuItens">
                                <li><a href="/">Início</a></li>
                                <li class="dropdown">
                                    <a href="#seguros" class="dropbtn">Seguros</a>
                                    <div class="dropdown-content">
                                        <a href="/seguro-veiculos">Veicular</a>
                                        <a href="/seguro-residencial">Residencial</a>
                                        <a href="/seguro-vida">Vida</a>
                                        <a href="/seguro-viagem">Viagem</a>
                                    </div>
                                </li>
                                <li><a href="/quem-somos">Sobre nós</a></li>
                                <li><a href="/contatos">Contatos</a></li>

                            </ul>
                        </div>


                    </div>
                </nav>
            </>
        );
    }
}

export default topBar;
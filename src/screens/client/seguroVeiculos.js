import React, { Component } from 'react';

// Imagens
import headerImgVeicular from '../../../src/assets/veicular.jpg';

// Ícones
import {
    FaRegClock,
    FaLock,
    FaLaptop,
    FaRegGrinWink
} from 'react-icons/fa';

// Components
import Whatsapp from '../../componets/whatsappIcon';

// Importe o arquivo CSS (certifique-se de que o caminho está correto)
// import './HomeDashboard.css'; // Se você tiver estilos específicos para esta página

class HomeDashboard extends Component {
    state = {
        showPopupResidencial: false,
        showPopupVeicular: false,
        nome: '',
        email: '',
        whatsapp: ''
    };

    handleButtonClickResidencial = () => {
        this.setState({ showPopupResidencial: true });
    };

    handleButtonClickVeicular = () => {
        this.setState({ showPopupVeicular: true });
    };

    handleClosePopupResidencial = () => {
        this.setState({ showPopupResidencial: false });
    };

    handleClosePopupVeicular = () => {
        this.setState({ showPopupVeicular: false });
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmitResidencial = (event) => {
        event.preventDefault();
        const { nome, email, whatsapp } = this.state;

        console.log('Solicitação de seguro residencial:', { nome, email, whatsapp });
        alert(`Sua solicitação de seguro residencial foi enviada. Verifique seu e-mail (${email}) para mais informações.`);

        this.handleClosePopupResidencial();
        this.setState({ nome: '', email: '', whatsapp: '' });
    };

    handleSubmitVeicular = (event) => {
        event.preventDefault();
        const { nome, email, whatsapp } = this.state;

        console.log('Solicitação de seguro veicular:', { nome, email, whatsapp });
        alert(`Sua solicitação de seguro veicular foi enviada. Verifique seu e-mail (${email}) para mais informações.`);

        this.handleClosePopupVeicular();
        this.setState({ nome: '', email: '', whatsapp: '' });
    };

    renderPopupResidencial() {
        return (
            <div className="popup-overlay" onClick={this.handleClosePopupResidencial}>
                <div className="popup-content section-home-1" onClick={(e) => e.stopPropagation()}>
                    <h2 className='popup-title'>Solicite sua cotação de Seguro Residencial</h2>
                    <form onSubmit={this.handleSubmitResidencial}>
                        <div className="form-group">
                            <input
                                placeholder='Digite Seu Nome'
                                type="text"
                                id="nome"
                                name="nome"
                                className='conteinar-Add-Products-select'
                                value={this.state.nome}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                placeholder='Seu email (exemplo@dominio.com)'
                                type="email"
                                className='conteinar-Add-Products-select'
                                id="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                placeholder='Digite seu WhatsApp Ex: (85)99999-XXXX'
                                type="tel"
                                className='conteinar-Add-Products-select'
                                id="whatsapp"
                                name="whatsapp"
                                value={this.state.whatsapp}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="popup-buttons">
                            <button type="submit" className='buttonLogin btnFormPopup'>Enviar Solicitação</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    renderPopupVeicular() {
        return (
            <div className="popup-overlay" onClick={this.handleClosePopupVeicular}>
                <div className="popup-content section-home-1" onClick={(e) => e.stopPropagation()}>
                    <h2 className='popup-title'>Solicite sua cotação de Seguro Veicular</h2>
                    <form onSubmit={this.handleSubmitVeicular}>
                        <div className="form-group">
                            <input
                                placeholder='Digite Seu Nome'
                                type="text"
                                id="nome"
                                name="nome"
                                className='conteinar-Add-Products-select'
                                value={this.state.nome}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                placeholder='Seu email (exemplo@dominio.com)'
                                type="email"
                                className='conteinar-Add-Products-select'
                                id="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                placeholder='Digite seu WhatsApp Ex: (85)99999-XXXX'
                                type="tel"
                                className='conteinar-Add-Products-select'
                                id="whatsapp"
                                name="whatsapp"
                                value={this.state.whatsapp}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="popup-buttons">
                            <button type="submit" className='buttonLogin btnFormPopup'>Enviar Solicitação</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className='App-header' >
                <Whatsapp />
                <div className='Home-Dach '>
                    <div className='headerDach headerPgSeguros backgroundColor1'>
                        <div className=' imgSeguroResidencial headImgSeguros'>
                            <img className='bgImg1 imgSeguros' alt='imagem de um carro moderno' src={headerImgVeicular} />
                        </div>
                    </div>

                    <div className='section-home-3 section-seguros'>
                        <h1>Conheça as vantagens do nosso</h1>
                        <h2>Seguro de Veículos Dispositiva</h2>
                        <p>Escolha a proteção inteligente para o seu patrimônio, com soluções que simplificam o seu dia a dia:</p>

                        <div className='args-section-3'>
                            <div className='argAll-section-3 arg-1-section-3'>
                                <h2><FaRegClock /></h2>
                                <h3>Agilidade</h3>
                                <p>Cotação e contratação online, sem complicações. Tudo ao alcance do seu App.</p>
                            </div>
                            <div className='argAll-section-3 arg-2-section-3'>
                                <h2><FaLock /></h2>
                                <h3>Segurança</h3>
                                <p>Diversas coberturas para proteger seu veículo contra imprevistos.</p>
                            </div>
                            <div className='argAll-section-3 arg-3-section-3'>
                                <h2><FaLaptop /></h2>
                                <h3>100% Digital</h3>
                                <p>Gerencie sua apólice e acione o seguro de forma prática e digital.</p>
                            </div>
                            <div className='argAll-section-3 arg-4-section-3'>
                                <h2><FaRegGrinWink /></h2>
                                <h3>Atendimento Personalizado</h3>
                                <p>Conte com nosso time para te auxiliar em todas as etapas.</p>
                            </div>
                        </div>

                        <input
                            type="button"
                            className='btnHome-lp btnSeguros btnActionSeguros'
                            value="Simular seguro para meu veículo"
                            onClick={this.handleButtonClickVeicular} // Adicionei o onClick para o novo popup
                        />
                    </div>

                    <div className='section-home-2 section-seguros'>
                        <h1>Coberturas Essenciais do Seguro de Veículos</h1>

                        <div className='organize-arg-sec-2'>
                            <div className='arguments-section-2'>
                                <div className='as2-number argsSeguro'>
                                    <h1>1</h1>
                                </div>
                                <h2>Roubo ou Furto</h2>
                                <p>Indenização em caso de roubo ou furto do seu veículo.</p>
                            </div>

                            <div className='arguments-section-2'>
                                <div className='as2-number argsSeguro'>
                                    <h1>2</h1>
                                </div>
                                <h2>Colisão e Danos</h2>
                                <p>Cobertura para reparos em caso de acidentes e outros danos ao veículo.</p>
                            </div>

                            <div className='arguments-section-2'>
                                <div className='as2-number argsSeguro'>
                                    <h1>3</h1>
                                </div>
                                <h2>Incêndio e Fenômenos Naturais</h2>
                                <p>Proteção contra incêndios, raios, enchentes e outros eventos.</p>
                            </div>
                        </div>
                    </div>

                    {/* Renderização condicional dos popups */}
                    {this.state.showPopupResidencial && this.renderPopupResidencial()}
                    {this.state.showPopupVeicular && this.renderPopupVeicular()}
                </div>
            </div>
        );
    }
}

export default HomeDashboard;
import React, { Component } from 'react';

// Imagens
import headerImg from '../../../src/assets/vida.jpeg';

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
        showPopupVida: false,
        nome: '',
        email: '',
        whatsapp: '',
        idade: '',
        dependentes: ''
    };

    handleButtonClickVida = () => {
        this.setState({ showPopupVida: true });
    };

    handleClosePopupVida = () => {
        this.setState({ showPopupVida: false });
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmitVida = (event) => {
        event.preventDefault();
        const { nome, email, whatsapp, idade, dependentes } = this.state;

        console.log('Solicitação de seguro de vida:', { nome, email, whatsapp, idade, dependentes });
        alert(`Sua solicitação de seguro de vida foi enviada. Verifique seu e-mail (${email}) para mais informações.`);

        this.handleClosePopupVida();
        this.setState({ nome: '', email: '', whatsapp: '', idade: '', dependentes: '' });
    };

    renderPopupVida() {
        return (
            <div className="popup-overlay" onClick={this.handleClosePopupVida}>
                <div className="popup-content section-home-1" onClick={(e) => e.stopPropagation()}>
                    <h2 className='popup-title'>Solicite sua cotação de Seguro de Vida</h2>
                    <form onSubmit={this.handleSubmitVida}>
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
                        <div className="form-group">
                            <input
                                placeholder='Sua Idade'
                                type="number"
                                id="idade"
                                name="idade"
                                className='conteinar-Add-Products-select'
                                value={this.state.idade}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                placeholder='Número de Dependentes'
                                type="number"
                                id="dependentes"
                                name="dependentes"
                                className='conteinar-Add-Products-select'
                                value={this.state.dependentes}
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
                    <div className='headerDach headerPgSeguros backgroundColor3'>
                        <div className=' imgSeguroResidencial headImgSeguros'>
                            <img className='bgImg1 imgSeguros' alt='imagem de homem apontando' src={headerImg} />
                        </div>
                    </div>

                    <div className='section-home-3 section-seguros'>
                        <h1>Descubra as vantagens do nosso</h1>
                        <h2>Seguro de Vida Dispositiva</h2>
                        <p>Priorize suas escolhas e conquiste sua liberdade com as melhores soluções para seus objetivos de vida:</p>

                        <div className='args-section-3'>
                            <div className='argAll-section-3 arg-1-section-3'>
                                <h2><FaRegClock /></h2>
                                <h3>Agilidade</h3>
                                <p>Processo simplificado e digital, sem burocracia. Gerencie tudo facilmente pelo nosso App.</p>
                            </div>
                            <div className='argAll-section-3 arg-2-section-3'>
                                <h2><FaLock /></h2>
                                <h3>Segurança</h3>
                                <p>Tranquilidade para você e sua família, com a garantia de um futuro financeiramente estável.</p>
                            </div>
                            <div className='argAll-section-3 arg-3-section-3'>
                                <h2><FaLaptop /></h2>
                                <h3>100% Digital</h3>
                                <p>Contrate e gerencie seu seguro de onde estiver, com toda a comodidade e segurança online.</p>
                            </div>
                            <div className='argAll-section-3 arg-4-section-3'>
                                <h2><FaRegGrinWink /></h2>
                                <h3>Atendimento Humano</h3>
                                <p>Conte com nosso suporte atencioso e especializado sempre que precisar.</p>
                            </div>
                        </div>

                        <input
                            type="button"
                            className='btnHome-lp btnSeguros btnActionSeguros'
                            value="Começar a proteger minha família"
                            onClick={this.handleButtonClickVida} // Adicionei o onClick para o novo popup
                        />
                    </div>

                    <div className='section-home-2 section-seguros'>
                        <h1>Coberturas Essenciais do Seguro de Vida</h1>

                        <div className='organize-arg-sec-2'>
                            <div className='arguments-section-2'>
                                <div className='as2-number argsSeguro'>
                                    <h1>1</h1>
                                </div>
                                <h2>Morte </h2>
                                <p>Garante o bem-estar financeiro dos seus dependentes em caso de falecimento.</p>
                            </div>

                            <div className='arguments-section-2'>
                                <div className='as2-number argsSeguro'>
                                    <h1>2</h1>
                                </div>
                                <h2>Invalidez </h2>
                                <p>Amparo financeiro caso você sofra uma invalidez decorrente de acidente.</p>
                            </div>
                        </div>
                    </div>

                    {/* Renderização condicional do popup de seguro de vida */}
                    {this.state.showPopupVida && this.renderPopupVida()}
                </div>
            </div>
        );
    }
}

export default HomeDashboard;
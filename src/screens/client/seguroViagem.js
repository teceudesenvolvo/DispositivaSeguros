import React, { Component } from 'react';

// Imagens
import headerImg from '../../../src/assets/viagem.jpg';

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
        showPopupViagem: false,
        showPopupIframeViagem: false, // Novo estado para o popup do iframe
        nome: '',
        email: '',
        whatsapp: '',
        destino: '',
        dataInicio: '',
        dataFim: ''
    };

    handleButtonClickViagem = () => {
        this.setState({ showPopupIframeViagem: true }); // Abre o popup do iframe
    };

    handleClosePopupViagem = () => {
        this.setState({ showPopupViagem: false }); // Fechamento do popup de cotação (se ainda precisar)
    };

    handleClosePopupIframeViagem = () => {
        this.setState({ showPopupIframeViagem: false }); // Fecha o popup do iframe
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmitViagem = (event) => {
        event.preventDefault();
        const { nome, email, whatsapp, destino, dataInicio, dataFim } = this.state;

        console.log('Solicitação de seguro viagem:', { nome, email, whatsapp, destino, dataInicio, dataFim });
        alert(`Sua solicitação de seguro viagem para ${destino} foi enviada. Verifique seu e-mail (${email}) para mais informações.`);

        this.handleClosePopupViagem();
        this.setState({ nome: '', email: '', whatsapp: '', destino: '', dataInicio: '', dataFim: '' });
    };

    renderPopupViagem() {
        return (
            <div className="popup-overlay" onClick={this.handleClosePopupViagem}>
                <div className="popup-content section-home-1" onClick={(e) => e.stopPropagation()}>
                    <h2 className='popup-title'>Solicite sua cotação de Seguro Viagem</h2>
                    <form onSubmit={this.handleSubmitViagem}>
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

    renderPopupIframeViagem() {
        return (
            <div className="popup-overlay" onClick={this.handleClosePopupIframeViagem}>
                <div className="popup-content popup-iframe" onClick={(e) => e.stopPropagation()}>
                    <h2 className='popup-title'>Confira as opções de Seguro Viagem</h2>
                    <iframe
                        src="https://portal.sulamericaseguros.com.br/seguroviagem/?idLink=CEQKDDZ#plans"
                        width="100%"
                        height="500px" // Ajuste a altura conforme necessário
                        title="Seguro Viagem SulAmérica"
                    />
                    <button className="buttonLogin btnFormPopup" onClick={this.handleClosePopupIframeViagem}>Fechar</button>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className='App-header' >
                <Whatsapp />
                <div className='Home-Dach '>
                    <div className='headerDach headerPgSeguros'>
                        <div className=' imgSeguroResidencial headImgSeguros'>
                            <img className='bgImg1 imgSeguros' alt='imagem de homem apontando' src={headerImg} />
                        </div>
                    </div>

                    <div className='section-home-3 section-seguros'>
                        <h1>Descubra as vantagens do nosso</h1>
                        <h2>Seguro Viagem Dispositiva</h2>
                        <p>Eficiência em proteger seus planos, para que imprevistos não atrapalhem sua jornada:</p>

                        <div className='args-section-3'>
                            <div className='argAll-section-3 arg-1-section-3'>
                                <h2><FaRegClock /></h2>
                                <h3>Agilidade</h3>
                                <p>Contratação rápida e fácil, para você garantir sua proteção antes de embarcar.</p>
                            </div>
                            <div className='argAll-section-3 arg-2-section-3'>
                                <h2><FaLock /></h2>
                                <h3>Segurança</h3>
                                <p>Coberturas essenciais para sua tranquilidade em qualquer destino.</p>
                            </div>
                            <div className='argAll-section-3 arg-3-section-3'>
                                <h2><FaLaptop /></h2>
                                <h3>100% Digital</h3>
                                <p>Gerencie seu seguro de viagem online, de onde estiver, com praticidade.</p>
                            </div>
                            <div className='argAll-section-3 arg-4-section-3'>
                                <h2><FaRegGrinWink /></h2>
                                <h3>Suporte Humano</h3>
                                <p>Assistência especializada para te ajudar em qualquer situação durante a viagem.</p>
                            </div>
                        </div>

                        <input
                            type="button"
                            className='btnHome-lp btnSeguros btnActionSeguros'
                            value="Garanta sua proteção de viagem"
                            onClick={this.handleButtonClickViagem} // Agora abre o popup do iframe
                        />
                    </div>

                    <div className='section-home-2 section-seguros'>
                        <h1>Coberturas Essenciais para sua Viagem</h1>

                        <div className='organize-arg-sec-2'>
                            <div className='arguments-section-2'>
                                <div className='as2-number argsSeguro'>
                                    <h1>1</h1>
                                </div>
                                <h2>Cancelamento de Viagem</h2>
                                <p>Reembolso em caso de imprevistos que impossibilitem sua viagem.</p>
                            </div>

                            <div className='arguments-section-2'>
                                <div className='as2-number argsSeguro'>
                                    <h1>2</h1>
                                </div>
                                <h2>Interrupção de Viagem</h2>
                                <p>Cobertura para despesas adicionais em caso de interrupção da sua viagem.</p>
                            </div>

                            <div className='arguments-section-2'>
                                <div className='as2-number argsSeguro'>
                                    <h1>3</h1>
                                </div>
                                <h2>Extravio de Bagagem</h2>
                                <p>Indenização por perda ou danos à sua bagagem durante a viagem.</p>
                            </div>
                        </div>
                    </div>

                    {/* Renderização condicional do popup de iframe de viagem */}
                    {this.state.showPopupIframeViagem && this.renderPopupIframeViagem()}
                    {/* Renderização condicional do popup de cotação (se ainda precisar) */}
                    {/* {this.state.showPopupViagem && this.renderPopupViagem()} */}
                </div>
            </div>
        );
    }
}

export default HomeDashboard;
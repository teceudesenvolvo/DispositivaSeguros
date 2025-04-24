import React, { Component } from 'react';

// Imagens
import headerImg from '../../../src/assets/residencial.jpg';

// Ícones
import {
    FaRegClock,
    FaLock,
    FaLaptop,
    FaRegGrinWink
} from 'react-icons/fa';

// Components
import Whatsapp from '../../componets/whatsappIcon';


class HomeDashboard extends Component {
    state = {
        showPopup: false,
        nome: '',
        email: '',
        whatsapp: ''
    };

    handleButtonClick = () => {
        console.log('Estou abrindo!')
        this.setState({ showPopup: true });
    };

    handleClosePopup = () => {
        this.setState({ showPopup: false });
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { nome, email, whatsapp } = this.state;

        // Simulação de envio de e-mail (você precisará de uma API real para isso)
        console.log('Enviando solicitação para o administrador:', { nome, email, whatsapp });
        console.log('Enviando confirmação para o cliente:', email);
        alert(`Sua solicitação foi enviada. Verifique seu e-mail (${email}) para mais informações.`);

        this.handleClosePopup();
        this.setState({ nome: '', email: '', whatsapp: '' }); // Limpa o formulário
    };

    renderPopup() {
        return (
            <div className="popup-overlay" onClick={this.handleClosePopup}>
                <div className="popup-content section-home-1" onClick={(e) => e.stopPropagation()}>
                    <h2 className='popup-title'>Solicite sua cotação</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                placeholder='Digitel Seu Nome'
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
                                placeholder='Digite seu telefone Ex: (85)99999-XXXX'
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
                            {/* <button type="button" onClick={this.handleClosePopup}>Cancelar</button> */}
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
                    <div className='headerDach headerPgSeguros backgroundColor2'>
                        <div className='imgSeguroResidencial headImgSeguros'>
                            <img className='bgImg1 imgSeguros' alt='imagem de uma casa segura' src={headerImg} />
                        </div>
                    </div>

                    <div className='section-home-3 section-seguros'>
                        <h1>Descubra as vantagens do nosso</h1>
                        <h2>Seguro Residencial Dispositiva</h2>
                        <p>Eficiência em cuidar do seu patrimônio, com soluções pensadas para a sua tranquilidade:</p>

                        <div className='args-section-3'>
                            <div className='argAll-section-3 arg-1-section-3'>
                                <h2><FaRegClock /></h2>
                                <h3>Agilidade</h3>
                                <p>Simples e rápido, sem burocracia. Gerencie tudo online pelo nosso App.</p>
                            </div>
                            <div className='argAll-section-3 arg-2-section-3'>
                                <h2><FaLock /></h2>
                                <h3>Segurança</h3>
                                <p>Proteção abrangente para sua casa e seus pertences.</p>
                            </div>
                            <div className='argAll-section-3 arg-3-section-3'>
                                <h2><FaLaptop /></h2>
                                <h3>100% Digital</h3>
                                <p>Contrate e acesse seu seguro residencial de onde estiver.</p>
                            </div>
                            <div className='argAll-section-3 arg-4-section-3'>
                                <h2><FaRegGrinWink /></h2>
                                <h3>Suporte Dedicado</h3>
                                <p>Conte com nossa equipe para te ajudar sempre que precisar.</p>
                            </div>
                        </div>

                        <input onClick={this.handleButtonClick} type="button" className='btnHome-lp btnSeguros btnActionSeguros' value="Simular seguro residencial" />
                    </div>

                    <div className='section-home-2 section-seguros'>
                        <h1>Coberturas Essenciais para sua Residência</h1>

                        <div className='organize-arg-sec-2'>
                            <div className='arguments-section-2'>
                                <div className='as2-number argsSeguro'>
                                    <h1>1</h1>
                                </div>
                                <h2>Roubo ou Furto Qualificado</h2>
                                <p>Proteção contra roubo ou furto com sinais de arrombamento.</p>
                            </div>

                            <div className='arguments-section-2'>
                                <div className='as2-number argsSeguro'>
                                    <h1>2</h1>
                                </div>
                                <h2>Danos por Acidentes</h2>
                                <p>Cobertura para danos causados por diversos acidentes em sua casa.</p>
                            </div>

                            <div className='arguments-section-2'>
                                <div className='as2-number argsSeguro'>
                                    <h1>3</h1>
                                </div>
                                <h2>Incêndio, Raio e Explosão</h2>
                                <p>Proteção contra danos causados por fogo, descargas elétricas e explosões.</p>
                            </div>
                        </div>
                    </div>

                    {this.state.showPopup && this.renderPopup()}
                </div>
            </div>
        );
    }
}

export default HomeDashboard;
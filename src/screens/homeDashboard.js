import React, { Component } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// Imagens
import headerImg1 from '../../src/assets/veicular.jpg';
import headerImg2 from '../../src/assets/residencia.avif';
import headerImg3 from '../../src/assets/vida.jpeg';
import headerImg4 from '../../src/assets/viagem.jpg';

// Ícones
import {
    FaRegClock,
    FaLock,
    FaLaptop,
    FaRegGrinWink,
    FaRegMoneyBillAlt,
    // FaCarAlt,
    // FaHome,
    // FaHeartbeat,
    // FaPlane
} from 'react-icons/fa';

// Components
import SlideFeacures from '../componets/slideFeactures';
import SlideFeacuresDepoimentos from '../componets/slideFeacturesServ';
import Whatsapp from '../componets/whatsappIcon';

class HomeDashboard extends Component {
    state = {
        showPopup: false,
        nome: '',
        email: '',
        whatsapp: ''
    };

    handleButtonClick = () => {
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
                            {/* <label htmlFor="nome">Nome:</label> */}
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
                            {/* <label htmlFor="email">Email:</label> */}
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
                            {/* <label htmlFor="whatsapp">WhatsApp:</label> */}
                            <input
                                placeholder='Digite seu telefone Ex: (85)99999-XXXX'
                                type="tel"
                                id="whatsapp"
                                className='conteinar-Add-Products-select'
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
        const { showPopup } = this.state;
        const headerImages = [headerImg1, headerImg2, headerImg3, headerImg4]; // Array com as imagens do carrossel

        return (
            <div className='App-header' >
                <Whatsapp />
                <div className='Home-Dach'>
                    <div className='headerDach'>
                        <div className='headerImg'>
                            <Splide
                                options={{
                                    type: 'fade',
                                    rewind: true,
                                    autoplay: true,
                                    interval: 3000,
                                    arrows: false,
                                    pagination: false,
                                }}
                            >
                                {headerImages.map((img, index) => (
                                    <SplideSlide key={index}>
                                        <img id='bgImg1' alt={`Imagem destaque ${index + 1}`} src={img} />
                                    </SplideSlide>
                                ))}
                            </Splide>
                        </div>
                    </div>

                    <div className='HomeDesktopCarrosel'>
                        <SlideFeacures />
                    </div>
                    <input
                        type="button"
                        className='btnHome-lp'
                        value="Solicite agora mesmo sua cotação online."
                        onClick={this.handleButtonClick}
                    />

                    <div className='section-home-1'>
                        <h1>Faça sua cotação de seguro online</h1>
                        {/* <a href='/'>Agora mesmo</a><br /> */}
                        <div className='balon-segurados'>
                            <div className='balon-left'>
                                <p>Segurados</p>
                                <h1>+4.000</h1>
                            </div>
                            <div className='balon-right'>
                                <p>A Dispositiva teve a oportunidade de assegurar mais de 4.000 pessoas em todo o Brasil desde 2018.</p>
                            </div>
                        </div>
                    </div>

                    <div className='section-home-2'>
                        <h1>Segurança em todos os momentos, 100% digital.</h1>

                        <div className='organize-arg-sec-2'>
                            <div className='arguments-section-2'>
                                <div className='as2-number'>
                                    <h1>1</h1>
                                </div>
                                <h2>Experiência</h2>
                                <p>Menos papelada, menos preocupação e mais agilidade. Você controla tudo pelo App.</p>
                            </div>

                            <div className='arguments-section-2'>
                                <div className='as2-number'>
                                    <h1>2</h1>
                                </div>
                                <h2>Experiência</h2>
                                <p>Menos papelada, menos preocupação e mais agilidade. Você controla tudo pelo App.</p>
                            </div>

                            <div className='arguments-section-2'>
                                <div className='as2-number'>
                                    <h1>3</h1>
                                </div>
                                <h2>Experiência</h2>
                                <p>Menos papelada, menos preocupação e mais agilidade. Você controla tudo pelo App.</p>
                            </div>
                        </div>

                        <input type="button" value="Realize sua cotação agora mesmo." className='btnSec2'  onClick={this.handleButtonClick}/>
                    </div>

                    <div className='section-home-3'>
                        <h1>Vantagens</h1>
                        <h2>Seguro eficiente para transformar sua vida</h2>
                        <p>Eficiência é escolher o que faz mais sentido para você alcançar a sua liberdade. Sinta a experiência de ter as melhores soluções para os seus objetivos:</p>

                        <div className='args-section-3'>
                            <div className='argAll-section-3 arg-1-section-3'>
                                <h2><FaRegClock /></h2>
                                <h3>Rápido</h3>
                                <p>Menos papelada, menos preocupação e mais agilidade. Você controla tudo pelo App.</p>
                            </div>
                            <div className='argAll-section-3 arg-2-section-3'>
                                <h2><FaLock /></h2>
                                <h3>Seguro</h3>
                                <p>Menos papelada, menos preocupação e mais agilidade. Você controla tudo pelo App.</p>
                            </div>
                            <div className='argAll-section-3 arg-3-section-3'>
                                <h2><FaLaptop /></h2>
                                <h3>100% Digital</h3>
                                <p>Menos papelada, menos preocupação e mais agilidade. Você controla tudo pelo App.</p>
                            </div>
                            <div className='argAll-section-3 arg-4-section-3'>
                                <h2><FaRegGrinWink /></h2>
                                <h3>Humano</h3>
                                <p>Menos papelada, menos preocupação e mais agilidade. Você controla tudo pelo App.</p>
                            </div>
                            <div className='argAll-section-3 arg-5-section-3'>
                                <h2><FaRegMoneyBillAlt /></h2>
                                <h3>Econômico</h3>
                                <p>Menos papelada, menos preocupação e mais agilidade. Você controla tudo pelo App.</p>
                            </div>
                        </div>
                    </div>

                    <div className='section-home-4'>
                        <div className='title-section-4'>
                            <h3>DEPOIMENTOS</h3>
                            <h1>O que os clientes falam da Dispositiva</h1>
                            <p>Confira o depoimento de quem já melhorou a vida com a gente.</p>
                        </div>
                        <div className='depoimentos'>
                            <SlideFeacuresDepoimentos />
                        </div>
                    </div>
                </div>
                {showPopup && this.renderPopup()}
            </div>
        );
    }
}

export default HomeDashboard;
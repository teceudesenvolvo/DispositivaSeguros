import React, { Component } from 'react';

// Imagens
import headerImg from '../../../src/assets/seguroVeiculos.png';

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
    render() {
        return (
            <div className='App-header' >
                <Whatsapp />
                <div className='Home-Dach '>
                    <div className='headerDach headerPgSeguros backgroundColor1'>
                        <div className='headerTitle headerPgSeguros'>
                            <h1>Proteção completa para o seu veículo</h1>
                            <p>Dirija com tranquilidade, sabendo que seu carro ou moto está seguro.</p>
                            <input type="button" className='btnHome-lp btnSeguros' value="Quero proteger meu veículo" />
                        </div>
                        <div className='headerImg'>
                            <img className='bgImg1 imgSeguros' alt='imagem de um carro moderno' src={headerImg} />
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

                        <input type="button" className='btnHome-lp btnSeguros btnActionSeguros' value="Simular seguro para meu veículo" />
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
                </div>
            </div>
        );
    }
}

export default HomeDashboard;
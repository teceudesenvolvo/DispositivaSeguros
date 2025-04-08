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

class HomeDashboard extends Component {
    render() {
        return (
            <div className='App-header' >
                <Whatsapp />
                <div className='Home-Dach '>
                    <div className='headerDach headerPgSeguros'>
                        {/* <div className='headerTitle headerPgSeguros'>
                            <h1>Viaje com mais segurança e tranquilidade</h1>
                            <p>Proteção completa para você aproveitar cada momento da sua viagem.</p>
                            <input type="button" className='btnHome-lp btnSeguros' value="Quero viajar seguro" />
                        </div> */}
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

                        <input type="button" className='btnHome-lp btnSeguros btnActionSeguros' value="Garanta sua proteção de viagem" />
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
                </div>
            </div>
        );
    }
}

export default HomeDashboard;
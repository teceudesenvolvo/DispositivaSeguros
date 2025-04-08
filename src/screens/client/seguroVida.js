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

class HomeDashboard extends Component {
    render() {
        return (
            <div className='App-header' >
                <Whatsapp />
                <div className='Home-Dach '>
                    <div className='headerDach headerPgSeguros backgroundColor3'>
                        {/* <iv className='headerTitle headerPgSeguros headerSeguroVida'>
                            <h1>Proteja o futuro da sua família com cuidado</h1>
                            <p>Segurança financeira planejada para você e seus entes queridos.</p>
                            <input type="button" className='btnHome-lp btnSeguros' value="Quero proteger minha família" />
                        </div> */}
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

                        <input type="button" className='btnHome-lp btnSeguros btnActionSeguros' value="Começar a proteger minha família" />
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
                </div>
            </div>
        );
    }
}

export default HomeDashboard;
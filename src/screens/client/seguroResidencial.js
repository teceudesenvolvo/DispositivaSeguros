import React, { Component } from 'react';

// Imagens
import headerImg from '../../../src/assets/residencia.avif';

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
                    <div className='headerDach headerPgSeguros backgroundColor2'>

                    <div className='imgSeguroResidencial headImgSeguros'>
                        <img className='bgImg1 imgSeguros' alt='imagem de uma casa segura' src={headerImg} />
                    </div>
                        {/* <div className='headerTitle headerPgSeguros'>
                            <h1>Proteja o seu lar com segurança</h1>
                            <p>Coberturas completas para garantir o bem-estar da sua casa.</p>
                            <input type="button" className='btnHome-lp btnSeguros' value="Quero proteger minha casa" />
                        </div> */}

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

                        <input type="button" className='btnHome-lp btnSeguros btnActionSeguros' value="Simular seguro residencial" />
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
                </div>
            </div>
        );
    }
}

export default HomeDashboard;
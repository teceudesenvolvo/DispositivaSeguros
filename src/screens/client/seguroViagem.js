import React, { Component } from 'react';



//Imagens
import headerImg from '../../../src/assets/seguroVeiculos.png'

// Icones
import {
    FaRegClock,
    FaLock,
    FaLaptop,
    FaRegGrinWink

} from 'react-icons/fa';


// Components
import Whatsapp from '../../componets/whatsappIcon';
// import { List } from '@mui/material';


//mudança de páginas

class homeDashboard extends Component {
    render() {
        return (

            <div className='App-header' >
                <Whatsapp />
                <div className='Home-Dach '>
                    <div className='headerDach headerPgSeguros'>
                        <div className='headerTitle headerPgSeguros'>
                            <h1>Seguro para o seu veiculo</h1>
                            <p>Mais proteção para o seu carro ou moto.</p>
                            <input type="button" className='btnHome-lp btnSeguros' value="Quero me proteger" />
                        </div>
                        <div className='headerImg'>
                            <img className='bgImg1 imgSeguros' alt='imagem de homem apontando' src={headerImg} />

                        </div>
                    </div>

                    <div className='section-home-3 section-seguros'>
                        <h1>Confira as vatagens do</h1>
                        <h2>Seguro de veiculos da Dispositiva</h2>
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
                        </div>

                        <input type="button" className='btnHome-lp btnSeguros btnActionSeguros' value="Quero me proteger" />
                    </div>




                    <div className='section-home-2 section-seguros'>
                        <h1>Cobertura Seguro de Veiculos</h1>

                        <div className='organize-arg-sec-2'>
                            <div className='arguments-section-2'>
                                <div className='as2-number argsSeguro'>
                                    <h1>1</h1>
                                </div>
                                <h2>Experiência</h2>
                                <p>Menos papelada, menos preocupação e mais agilidade. Você controla tudo pelo App.</p>
                            </div>

                            <div className='arguments-section-2'>
                                <div className='as2-number argsSeguro'>
                                    <h1>2</h1>
                                </div>
                                <h2>Experiência</h2>
                                <p>Menos papelada, menos preocupação e mais agilidade. Você controla tudo pelo App.</p>
                            </div>

                            <div className='arguments-section-2'>
                                <div className='as2-number argsSeguro'>
                                    <h1>3</h1>
                                </div>
                                <h2>Experiência</h2>
                                <p>Menos papelada, menos preocupação e mais agilidade. Você controla tudo pelo App.</p>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        );
    }
}

export default homeDashboard;
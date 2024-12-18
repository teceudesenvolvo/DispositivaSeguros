import React, { Component } from 'react';



//Imagens

// Icones
import {


} from 'react-icons/fa';

// Components
import SlideFeacures from '../componets/slideFeactures';
// import { List } from '@mui/material';


//mudança de páginas

class homeDashboard extends Component {
    render() {
        return (

            <div className='App-header' >
                <div className='Home-Dach'>
                    <div className='headerDach'>
                    </div>

                    <div className='HomeDesktopCarrosel'>
                        <SlideFeacures />
                        <input type="button" value="Faça seu cadastro e acompanhe seu processo online." />
                    </div>

                    <div className='section-home-1'>
                        <h1>Faça sua cotação online</h1>
                        <a href='/'>Agora mesmo</a>
                        <div className='balon-segurados'>
                            <div className='balon-left'>
                                <p>Segurados</p>
                                <h1>+4.000</h1>
                            </div>
                            <div className='balon-rigt'>
                                <p>A Dispositiva teve a oprtunidade de assegurar mais de 4.000 pessoas em todo o Brasil desde 2018.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className='section-home-2'>
                        <h1>Segurança em todos os momentos, 100% digital.</h1>
                        
                        <div className='arguments-section-2'>
                            <div className='as2-number'>
                                <h1>1</h1>
                            </div>
                            <h2>Experiência</h2>
                            <p>Menos papelada, menos preocupação e mais agilidade. Você controla tudo pelo App.</p>
                        </div>

                        <div className='arguments-section-2'>
                            <div className='as2-number'>
                                <h1>1</h1>
                            </div>
                            <h2>Experiência</h2>
                            <p>Menos papelada, menos preocupação e mais agilidade. Você controla tudo pelo App.</p>
                        </div>

                        <div className='arguments-section-2'>
                            <div className='as2-number'>
                                <h1>1</h1>
                            </div>
                            <h2>Experiência</h2>
                            <p>Menos papelada, menos preocupação e mais agilidade. Você controla tudo pelo App.</p>
                        </div>

                        <input type="button" value="Realize sua cotação agora mesmo." />
                   

                    </div>

                    <div className='section-home-3'>
                        <h1>Vantagens</h1>
                        <h2>Seguro eficiente para transformar sua vida</h2>
                        <p>Eficiência é escolher o que faz mais sentido para você alcançar a sua liberdade. Sinta a experiência de ter as melhores soluções para os seus objetivos:</p>

                        <div className='args-section-3'>
                            <div className='arg-1-section-3'>
                                <p>Icone</p>
                                <h3>Rápido</h3>
                                <p>Menos papelada, menos preocupação e mais agilidade. Você controla tudo pelo App.</p>
                            </div>
                            <div className='arg-2-section-3'>
                                <p>Icone</p>
                                <h3>Rápido</h3>
                                <p>Menos papelada, menos preocupação e mais agilidade. Você controla tudo pelo App.</p>
                            </div>
                            <div className='arg-3-section-3'>
                                <p>Icone</p>
                                <h3>Rápido</h3>
                                <p>Menos papelada, menos preocupação e mais agilidade. Você controla tudo pelo App.</p>
                            </div>
                            <div className='arg-4-section-3'>
                                <p>Icone</p>
                                <h3>Rápido</h3>
                                <p>Menos papelada, menos preocupação e mais agilidade. Você controla tudo pelo App.</p>
                            </div>
                            <div className='arg-5-section-3'>
                                <p>Icone</p>
                                <h3>Rápido</h3>
                                <p>Menos papelada, menos preocupação e mais agilidade. Você controla tudo pelo App.</p>
                            </div>
                        </div>

                    </div>

                    <div className='section-home-4'>
                        <div className='title-section-4'>
                            <p>DEPOIMENTOS</p>
                            <h1>O que os clientes falam da Dispositiva</h1>
                            <p>Confira o depoimento de quem já melhorou a vida com a gente.</p>
                        </div>
                        <div className='depoimentos'>
                            {/* Criar ListView */}
                        </div>

                    </div>

                </div>



            </div>
        );
    }
}

export default homeDashboard;
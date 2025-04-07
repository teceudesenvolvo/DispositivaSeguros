import React, { Component } from 'react';

// Imagens
import FamilyImg from '../../assets/familia.jpg';
import HouseImg from '../../assets/casa.jpg';

// Ícones
import { } from 'react-icons/fa';

// Components
import Whatsapp from '../../componets/whatsappIcon';

class Categorias extends Component {
    render() {
        return (
            <div className='App-header' >
                <Whatsapp />
                {/* Seção 1: Apresentação Quem Somos */}
                <div className='section1-quem-somos'>
                    <div className='designQuemSomos'>
                        <img className='bgImgQuemSomos' alt='Imagem de uma família unida' src={FamilyImg} />
                    </div>
                    <div className='section-home-3 section-side'>
                        <h1>Quem somos</h1>
                        <h2>Seguros personalizados, feitos sob medida para você.</h2>
                        <p>Priorizamos suas necessidades para oferecer soluções eficientes e que realmente fazem sentido para sua liberdade e objetivos.</p>
                    </div>
                </div>

                {/* Seção 2: Propósito da Dispositiva */}
                <div className='section1-quem-somos'>
                    <div className='section-home-3 section-side'>
                        <h1>Nossa Missão</h1>
                        <h2>Segurança que vai além do contrato, focada no seu bem-estar.</h2>
                        <p>Nosso propósito é cuidar do que é essencial para você, proporcionando tranquilidade e a confiança de estar bem protegido.</p>
                    </div>
                    <div className='designQuemSomos designColor'>
                        <img className='bgImgQuemSomos' alt='Imagem de uma casa aconchegante' src={HouseImg} />
                    </div>
                </div>

                {/* Seção 3: Diferencial da Dispositiva */}
                <div className='section1-quem-somos'>
                    <div className='section-home-3'>
                        <h2>Inovação e tecnologia a serviço de um atendimento humano e eficaz.</h2>
                        <p>Combinamos o melhor dos dois mundos para criar soluções de seguro inteligentes e um suporte presente em todos os momentos. Queremos que você se sinta seguro e bem assistido, com os melhores serviços do mercado. Para nós, eficiência significa facilitar o seu caminho para alcançar seus objetivos com segurança e praticidade.</p>
                    </div>
                </div>

                {/* Seção 4: Nossos Valores */}
                <div className='section1-quem-somos'>
                    <div className='section-home-3'>
                        <h1>Nossos Valores</h1>
                        <div className='section1-quem-somos section-value'>
                            <div className='valores'>
                                <h2>Evolução Contínua</h2>
                                <p>Aprendemos, aplicamos e evoluímos constantemente, buscando sempre a simplicidade em nossos processos.</p>
                            </div>
                            <div className='valores'>
                                <h2>Inovação com Coragem</h2>
                                <p>Enfrentamos o novo com ousadia, enxergando oportunidades além dos limites convencionais.</p>
                            </div>
                            <div className='valores'>
                                <h2>Diversidade com Propósito</h2>
                                <p>Valorizamos a diversidade como um pilar que enriquece nossas perspectivas e fortalece nossos objetivos comuns.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categorias;
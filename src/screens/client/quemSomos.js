import React, { Component } from 'react';

//Imagens
import FamilyImg from '../../assets/familia.jpg'
import HouseImg from '../../assets/casa.jpg'

// Icones
import {


} from "react-icons/fa";


// Components
import Whatsapp from '../../componets/whatsappIcon';




class categorias extends Component {
  render() {
    return (

      <div className='App-header' >
        <Whatsapp />
        {/* Seção 1 */}
        <div className='section1-quem-somos'>
          <div className='designQuemSomos'>
            <img className='bgImgQuemSomos' alt='imagem de homem apontando' src={FamilyImg} />
          </div>
          <div className='section-home-3 section-side'>
            <h1>Quem somos</h1>
            <h2>Conseguir um seguro montado especialmente para você ficou mais facil</h2>
            <p>Eficiência é escolher o que faz mais sentido para você alcançar a sua liberdade.
              Sinta a experiência de ter as melhores soluções para os seus objetivos.</p>
          </div>
        </div>

        {/* Seção 2 */}

        <div className='section1-quem-somos'>

          <div className='section-home-3 section-side'>
            <h1>Na Dispositiva</h1>
            <h2> Acreditamos que segurança vai além de simples contratos. </h2>
            <p>Nosso propósito é cuidar do que importa para você, proporcionando tranquilidade e confiança.</p>
          </div>
          <div className='designQuemSomos designColor'>
            <img className='bgImgQuemSomos' alt='imagem de homem apontando' src={HouseImg} />
          </div>
        </div>

        {/* Seção 3 */}

        <div className='section1-quem-somos'>

          <div className='section-home-3'>
            <h2> Combinamos inovação, tecnologia e atendimento
              humanizado para criar soluções </h2>
            <p>Estamos aqui para oferecer suporte em todos os momentos, garantindo que você esteja protegido com os melhores serviços do mercado.
              O resultado é o que chamamos de eficiência e isso mudou a forma das pessoas
              enxergarem o seguro. Afinal, o mais importante para nós é que você alcance seus
              objetivos da maneira mais fácil e segura possível.</p>
          </div>
        </div>

        <div className='section1-quem-somos'>

          <div className='section-home-3'>
            <h1>Valores</h1>
            <div className='section1-quem-somos section-value'>
              <div className='valores'>
                <h2> Melhores que ontem </h2>
                <p>A gente aprende, aplica e evolui o tempo todo com simplicidade.</p>
              </div>
              <div className='valores'>
                <h2> Coragem para construir o novo </h2>
                <p>O que é novo pode até dar medo, mas a gente enxerga além do limite.</p>
              </div>
              <div className='valores'>
                <h2> Diferentes e com o mesmo propósito </h2>
                <p>Diversidade pra gente é uma fronteira que vai muito além do respeito às diferenças, ela fortifica os diversos pontos de vista.</p>
              </div>
            </div>
          </div>

        </div>



      </div>
    );
  }
}

export default categorias;
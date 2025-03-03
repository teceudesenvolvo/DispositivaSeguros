import React, { Component } from 'react';

//Imagens
import FamilyImg from '../../assets/familia.jpg'

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

        <div className='headerImg'>
          <div className='designQuemSomos'>
            <img className='bgImgQuemSomos' alt='imagem de homem apontando' src={FamilyImg} />
          </div>
        </div>



      </div>
    );
  }
}

export default categorias;
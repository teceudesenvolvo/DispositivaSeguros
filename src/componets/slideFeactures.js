import React, { Component } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';


// use Redux
import { connect } from 'react-redux'
import { clickButton } from '../store/actions/index'
import { bindActionCreators } from 'redux';

// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';

//Imagen
import ImgSeg1 from '../../src/assets/seguradora-1.png'
import ImgSeg2 from '../../src/assets/seguradora-2.png'
import ImgSeg3 from '../../src/assets/seguradora-3.png'
import ImgSeg4 from '../../src/assets/seguradora-4.png'
import ImgSeg5 from '../../src/assets/seguradora-5.png'
import ImgSeg6 from '../../src/assets/seguradora-6.png'
import ImgSeg7 from '../../src/assets/seguradora-7.png'
import ImgSeg8 from '../../src/assets/seguradora-8.svg'
import ImgSeg9 from '../../src/assets/seguradora-9.jpg'
import ImgSeg10 from '../../src/assets/seguradora-10.png'
import ImgSeg11 from '../../src/assets/seguradora-11.png'
import ImgSeg12 from '../../src/assets/seguradora-12.png'
import ImgSeg13 from '../../src/assets/seguradora-13.png'
import ImgSeg14 from '../../src/assets/seguradora-14.webp'

//mudança de páginas

class slideFeactures extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [
                {
                    name: 'Seguradora 1',
                    imagem: ImgSeg1
                },
                {
                    name: 'Seguradora 1',
                    imagem: ImgSeg2
                },
                {
                    name: 'Seguradora 1',
                    imagem: ImgSeg3
                },
                {
                    name: 'Seguradora 1',
                    imagem: ImgSeg4
                },
                {
                    name: 'Seguradora 1',
                    imagem: ImgSeg5
                },
                {
                    name: 'Seguradora 1',
                    imagem: ImgSeg6
                },
                {
                    name: 'Seguradora 1',
                    imagem: ImgSeg7
                },
                {
                    name: 'Seguradora 1',
                    imagem: ImgSeg8
                },
                {
                    name: 'Seguradora 1',
                    imagem: ImgSeg9
                },
                {
                    name: 'Seguradora 1',
                    imagem: ImgSeg10
                },
                {
                    name: 'Seguradora 1',
                    imagem: ImgSeg11
                },
                {
                    name: 'Seguradora 1',
                    imagem: ImgSeg12
                },
                {
                    name: 'Seguradora 1',
                    imagem: ImgSeg13
                },
                {
                    name: 'Seguradora 1',
                    imagem: ImgSeg14
                },
            ]
        }
    }
    

    componentDidMount(){
    }


    render() {
        const posts = this.state.posts

        const listPosts = posts.map((post) =>
            <SplideSlide key={post.id} className="slidesFeacture"
                onClick={
                    () => {
                        this.setState({ id: post.id }, () => {
                            (this.props.clickButton(this.state))
                            console.log(this.state)
                                // (window.location.href = "/produto")

                        })
                    }
                }
            >
                <div class="DestaquesDescricao" >
                    <img class="imagDestaques" src={post.imagem} alt="logomarca seguradora"></img>
                </div>
            </SplideSlide>
        )


        return (
            <>
                <Splide
                    options={{
                        perPage: 3,
                        focus: 'center',
                        drag: 'free'
                    }} aria-label="My Favorite Images" className='slideMatriz' >
                    {listPosts}
                </Splide>
            </>

        );
    }
}

const mapStateToProps = state => ({
    idProduct: state.service.id
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ clickButton }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(slideFeactures);

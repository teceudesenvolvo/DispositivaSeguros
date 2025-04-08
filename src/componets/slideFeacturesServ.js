import React, { Component } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

class SlideDepoimentos extends Component {
    state = {
        depoimentos: [
            {
                id: 1,
                texto: "Excelente atendimento! Encontrei o seguro perfeito para minhas necessidades de forma rápida e fácil. Recomendo a todos!",
                autor: "Maria Silva"
            },
            {
                id: 2,
                texto: "Estou muito satisfeito com o serviço. A equipe é prestativa e sempre disposta a ajudar. Me sinto seguro e bem cuidado.",
                autor: "João Pereira"
            },
            {
                id: 3,
                texto: "A plataforma online é muito intuitiva. Consegui fazer a cotação e contratar meu seguro sem nenhuma dificuldade. Parabéns!",
                autor: "Ana Rodrigues"
            },
            {
                id: 4,
                texto: "Tive um sinistro e a forma como fui atendido fez toda a diferença. Resolveram tudo de maneira ágil e eficiente. Super recomendo!",
                autor: "Carlos Souza"
            },
            {
                id: 5,
                texto: "Ótimos preços e coberturas completas. Me sinto tranquilo sabendo que meu patrimônio está protegido por uma empresa de confiança.",
                autor: "Fernanda Oliveira"
            },
            {
                id: 6,
                texto: "O suporte ao cliente é excepcional. Sempre que precisei, minhas dúvidas foram esclarecidas rapidamente. Um serviço de alta qualidade.",
                autor: "Ricardo Santos"
            },
            {
                id: 7,
                texto: "A variedade de opções de seguro me permitiu escolher exatamente o que eu precisava, com um ótimo custo-benefício.",
                autor: "Patrícia Gomes"
            },
            {
                id: 8,
                texto: "Desde que contratei o seguro, me sinto muito mais seguro e tranquilo. A Dispositiva realmente se importa com seus clientes.",
                autor: "Lucas Martins"
            },
            {
                id: 9,
                texto: "Um serviço moderno e eficiente. A facilidade de gerenciar tudo online é um grande diferencial. Estou muito contente.",
                autor: "Sofia Almeida"
            }
        ]
    }

    render() {
        const { depoimentos } = this.state;

        const listDepoimentos = depoimentos.map((depoimento) => (
            <SplideSlide key={depoimento.id} className="slidesDepoimento">
                <div className="depoimentoTexto">
                    <p>"{depoimento.texto}"</p>
                    <span className="depoimentoAutor">- {depoimento.autor}</span>
                </div>
            </SplideSlide>
        ));

        return (
            <>
                <Splide
                    options={{
                        perPage: 1,
                        focus: 'center',
                        drag: 'free',
                        autoplay: true,
                        interval: 5000,
                        arrows: false,
                        pagination: true,
                        snap: true,
                        gap: '20px',
                        breakpoints: {
                            768: {
                                perPage: 1,
                            },
                            1024: {
                                perPage: 1,
                            },
                        },
                    }}
                    aria-label="Depoimentos de Clientes"
                    className='slideDepoimentos'
                >
                    {listDepoimentos}
                </Splide>
            </>
        );
    }
}

export default SlideDepoimentos;
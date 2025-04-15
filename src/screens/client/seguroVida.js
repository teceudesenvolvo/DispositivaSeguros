import React, { Component } from 'react';
import emailjs from '@emailjs/browser';

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

// Importe o arquivo CSS (certifique-se de que o caminho está correto)
// import './HomeDashboard.css'; // Se você tiver estilos específicos para esta página

const estadosBrasil = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
    'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

class HomeDashboard extends Component {
    state = {
        showPopupVida: false,
        tipoSeguro: 'Seguro Vida',
        nome: '',
        email: '',
        whatsapp: '',
        dataNascimento: '',
        cpf: '',
        estadoCivil: '',
        sexo: '',
        cep: '',
        endereco: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        formErrors: {},
        isSubmitting: false,
        submissionMessage: ''
    };

    handleButtonClickVida = () => {
        this.setState({ showPopupVida: true });
    };

    handleClosePopupVida = () => {
        this.setState({ showPopupVida: false, formErrors: {}, submissionMessage: '' });
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmitVida = async (event) => {
        event.preventDefault();
        this.setState({ isSubmitting: true, submissionMessage: '', formErrors: {} });

        const { nome, email, whatsapp, dataNascimento, cpf, estadoCivil, sexo, cep, endereco, numero, complemento, bairro, cidade, estado } = this.state;
        const formData = {
            tipoSeguro: 'Seguro de Vida',
            nome,
            email,
            whatsapp,
            dataNascimento,
            cpf,
            estadoCivil,
            sexo,
            cep,
            endereco,
            numero,
            complemento,
            bairro,
            cidade,
            estado
        };

        // Seu SERVICE_ID, TEMPLATE_ID e PUBLIC_KEY do EmailJS
        const serviceId = 'service_04m0s8d';
        const templateId = 'template_p7g0xsi';
        const publicKey = 'TtE0io7wrvJ8m5Wqq';

        try {
            const response = await emailjs.send(serviceId, templateId, formData, publicKey);
            console.log('SUCCESS!', response.status, response.text);
            this.setState({
                isSubmitting: false,
                submissionMessage: 'Sua solicitação foi enviada com sucesso! Verifique seu e-mail.', tipoSeguro: 'Seguro Vida',
                nome: '', email: '', whatsapp: '', dataNascimento: '', cpf: '', estadoCivil: '', sexo: '',
                cep: '', endereco: '', numero: '', complemento: '', bairro: '', cidade: '', estado: ''
            });
            setTimeout(this.handleClosePopupVida, 3000); // Fecha o popup após 3 segundos
        } catch (error) {
            console.log('FAILED...', error);
            this.setState({
                isSubmitting: false,
                submissionMessage: 'Houve um erro ao enviar sua solicitação. Por favor, tente novamente.',
                formErrors: { general: 'Erro ao enviar o formulário.' }
            });
        }
    };

    renderPopupVida() {
        return (
            <div className="popup-overlay" onClick={this.handleClosePopupVida}>
                <div className="popup-content section-home-1" onClick={(e) => e.stopPropagation()}>
                    <h2 className='popup-title'>Solicite sua cotação de Seguro de Vida</h2>
                    {this.state.submissionMessage && <div className={this.state.formErrors.general ? 'error-message' : 'success-message'}>{this.state.submissionMessage}</div>}
                    <form onSubmit={this.handleSubmitVida}>
                        <div className="form-group">
                            <input
                                placeholder='Digite Seu Nome'
                                type="text"
                                id="nome"
                                name="nome"
                                className='conteinar-Add-Products-select'
                                value={this.state.nome}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                placeholder='Seu email (exemplo@dominio.com)'
                                type="email"
                                className='conteinar-Add-Products-select'
                                id="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                placeholder='Digite seu WhatsApp Ex: (85)99999-XXXX'
                                type="tel"
                                className='conteinar-Add-Products-select'
                                id="whatsapp"
                                name="whatsapp"
                                value={this.state.whatsapp}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dataNascimento" className='popup-label'>Data de Nascimento:</label><br/>
                            <input
                                type="date"
                                id="dataNascimento"
                                name="dataNascimento"
                                className='conteinar-Add-Products-select'
                                value={this.state.dataNascimento}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                placeholder='Digite seu CPF'
                                className='conteinar-Add-Products-select'
                                value={this.state.cpf}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <select
                                id="estadoCivil"
                                name="estadoCivil"
                                className='conteinar-Add-Products-select'
                                value={this.state.estadoCivil}
                                onChange={this.handleInputChange}
                                required
                            >
                                <option value="">Estado Civil</option>
                                <option value="solteiro">Solteiro</option>
                                <option value="casado">Casado</option>
                                <option value="separado">Separado</option>
                                <option value="divorciado">Divorciado</option>
                                <option value="viuvo">Viúvo</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select
                                id="sexo"
                                name="sexo"
                                className='conteinar-Add-Products-select'
                                value={this.state.sexo}
                                onChange={this.handleInputChange}
                                required
                            >
                                <option value="">Sexo</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                id="cep"
                                name="cep"
                                placeholder='Digite seu CEP'
                                className='conteinar-Add-Products-select'
                                value={this.state.cep}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                id="endereco"
                                name="endereco"
                                placeholder='Rua, Avenida...'
                                className='conteinar-Add-Products-select'
                                value={this.state.endereco}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                id="numero"
                                name="numero"
                                placeholder='Número'
                                className='conteinar-Add-Products-select'
                                value={this.state.numero}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                id="complemento"
                                name="complemento"
                                placeholder='Apartamento, Bloco...'
                                className='conteinar-Add-Products-select'
                                value={this.state.complemento}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                id="bairro"
                                name="bairro"
                                placeholder='Seu Bairro'
                                className='conteinar-Add-Products-select'
                                value={this.state.bairro}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                id="cidade"
                                name="cidade"
                                placeholder='Sua Cidade'
                                className='conteinar-Add-Products-select'
                                value={this.state.cidade}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <select
                                id="estado"
                                name="estado"
                                className='conteinar-Add-Products-select'
                                value={this.state.estado}
                                onChange={this.handleInputChange}
                                required
                            >
                                <option value="">Estado</option>
                                {estadosBrasil.map(estado => (
                                    <option key={estado} value={estado}>{estado}</option>
                                ))}
                            </select>
                        </div>
                        <div className="popup-buttons">
                            <button type="submit" className='buttonLogin btnFormPopup' disabled={this.state.isSubmitting}>
                                {this.state.isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className='App-header' >
                <Whatsapp />
                <div className='Home-Dach '>
                    <div className='headerDach headerPgSeguros backgroundColor3'>
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

                        <input
                            type="button"
                            className='btnHome-lp btnSeguros btnActionSeguros'
                            value="Começar a proteger minha família"
                            onClick={this.handleButtonClickVida} // Adicionei o onClick para o novo popup
                        />
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

                    {/* Renderização condicional do popup de seguro de vida */}
                    {this.state.showPopupVida && this.renderPopupVida()}
                </div>
            </div>
        );
    }
}

export default HomeDashboard;
import React, { Component } from 'react';
import emailjs from '@emailjs/browser';

// Imagens
import headerImgVeicular from '../../../src/assets/veicular.jpg';

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

const marcasCarro = [
    'Acura', 'Alfa Romeo', 'Audi', 'BMW', 'BYD', 'Caoa Chery', 'Chevrolet', 'Chrysler', 'Citroën',
    'Dodge', 'Effa', 'Ferrari', 'Fiat', 'Ford', 'GWM', 'Hafei', 'Hafey', 'Honda', 'Hyundai',
    'Jac', 'Jaguar', 'Jeep', 'Kia', 'Lamborghini', 'Land Rover', 'Lexus', 'Lifan', 'Mahindra',
    'Maserati', 'Mercedes-Benz', 'Mini', 'Mitsubishi', 'Nissan', 'Peugeot', 'Porsche', 'RAM',
    'Renault', 'Rolls-Royce', 'Seat', 'Shineray', 'Smart', 'SsangYong', 'Subaru', 'Suzuki',
    'Toyota', 'Troller', 'Volkswagen', 'Volvo'
];

class HomeDashboard extends Component {
    state = {
        showPopupResidencial: false,
        showPopupVeicular: false,
        nome: '',
        email: '',
        whatsapp: '',
        cpf: '',
        dataNascimento: '',
        estadoCivil: '',
        sexo: '',
        cep: '',
        endereco: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        possuiVeiculo: '',
        marcaVeiculo: '',
        modeloVeiculo: '',
        anoFabricacaoVeiculo: '',
        formErrors: {},
        isSubmitting: false,
        submissionMessage: ''
    };

    handleButtonClickResidencial = () => {
        this.setState({ showPopupResidencial: true });
    };

    handleButtonClickVeicular = () => {
        this.setState({ showPopupVeicular: true });
    };

    handleClosePopupResidencial = () => {
        this.setState({ showPopupResidencial: false });
    };

    handleClosePopupVeicular = () => {
        this.setState({ showPopupVeicular: false, formErrors: {}, submissionMessage: '' });
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmitResidencial = (event) => {
        event.preventDefault();
        const { nome, email, whatsapp } = this.state;

        console.log('Solicitação de seguro residencial:', { nome, email, whatsapp });
        alert(`Sua solicitação de seguro residencial foi enviada. Verifique seu e-mail (${email}) para mais informações.`);

        this.handleClosePopupResidencial();
        this.setState({ nome: '', email: '', whatsapp: '' });
    };

    handleSubmitVeicular = async (event) => {
        event.preventDefault();
        this.setState({ isSubmitting: true, submissionMessage: '', formErrors: {} });

        const { nome, email, whatsapp, cpf, dataNascimento, estadoCivil, sexo, cep, endereco, numero, complemento, bairro, cidade, estado, possuiVeiculo, marcaVeiculo, modeloVeiculo, anoFabricacaoVeiculo } = this.state;
        const formData = {
            nome,
            email,
            whatsapp,
            cpf,
            dataNascimento,
            estadoCivil,
            sexo,
            cep,
            endereco,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            possuiVeiculo,
            marcaVeiculo,
            modeloVeiculo,
            anoFabricacaoVeiculo
        };

        // Seu SERVICE_ID, TEMPLATE_ID e PUBLIC_KEY do EmailJS
        const serviceId = 'YOUR_SERVICE_ID';
        const templateId = 'YOUR_TEMPLATE_ID_VEICULAR'; // Crie um template específico para veicular
        const publicKey = 'YOUR_PUBLIC_KEY';

        try {
            const response = await emailjs.send(serviceId, templateId, formData, publicKey);
            console.log('SUCCESS!', response.status, response.text);
            this.setState({
                isSubmitting: false,
                submissionMessage: 'Sua solicitação de seguro veicular foi enviada com sucesso! Verifique seu e-mail.',
                nome: '', email: '', whatsapp: '', cpf: '', dataNascimento: '', estadoCivil: '', sexo: '',
                cep: '', endereco: '', numero: '', complemento: '', bairro: '', cidade: '', estado: '',
                possuiVeiculo: '', marcaVeiculo: '', modeloVeiculo: '', anoFabricacaoVeiculo: ''
            });
            setTimeout(this.handleClosePopupVeicular, 3000); // Fecha o popup após 3 segundos
        } catch (error) {
            console.log('FAILED...', error);
            this.setState({
                isSubmitting: false,
                submissionMessage: 'Houve um erro ao enviar sua solicitação. Por favor, tente novamente.',
                formErrors: { general: 'Erro ao enviar o formulário.' }
            });
        }
    };

    renderPopupResidencial() {
        return (
            <div className="popup-overlay" onClick={this.handleClosePopupResidencial}>
                <div className="popup-content section-home-1" onClick={(e) => e.stopPropagation()}>
                    <h2 className='popup-title'>Solicite sua cotação de Seguro Residencial</h2>
                    <form onSubmit={this.handleSubmitResidencial}>
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
                        <div className="popup-buttons">
                            <button type="submit" className='buttonLogin btnFormPopup'>Enviar Solicitação</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    renderPopupVeicular() {
        return (
            <div className="popup-overlay" onClick={this.handleClosePopupVeicular}>
                <div className="popup-content section-home-1 form-veicular" onClick={(e) => e.stopPropagation()}>
                    <h2 className='popup-title'>Solicite sua cotação de Seguro Veicular</h2>
                    {this.state.submissionMessage && <div className={this.state.formErrors.general ? 'error-message' : 'success-message'}>{this.state.submissionMessage}</div>}
                    <form onSubmit={this.handleSubmitVeicular}>
                        <div className="form-group">
                            <input
                                placeholder='Digite Seu Nome Completo'
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
                                placeholder='Seu Email'
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
                                placeholder='Seu WhatsApp (DDD + Número)'
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
                            <input
                                placeholder='Digite seu CPF'
                                type="text"
                                id="cpf"
                                name="cpf"
                                className='conteinar-Add-Products-select'
                                value={this.state.cpf}
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
                                placeholder='CEP'
                                type="text"
                                id="cep"
                                name="cep"
                                className='conteinar-Add-Products-select'
                                value={this.state.cep}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                placeholder='Endereço'
                                type="text"
                                id="endereco"
                                name="endereco"
                                className='conteinar-Add-Products-select'
                                value={this.state.endereco}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                placeholder='Número'
                                type="text"
                                id="numero"
                                name="numero"
                                className='conteinar-Add-Products-select'
                                value={this.state.numero}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                placeholder='Complemento (opcional)'
                                type="text"
                                id="complemento"
                                name="complemento"
                                className='conteinar-Add-Products-select'
                                value={this.state.complemento}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                placeholder='Bairro'
                                type="text"
                                id="bairro"
                                name="bairro"
                                className='conteinar-Add-Products-select'
                                value={this.state.bairro}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                placeholder='Cidade'
                                type="text"
                                id="cidade"
                                name="cidade"
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
                        <div className="form-group">
                            <select
                                id="possuiVeiculo"
                                name="possuiVeiculo"
                                className='conteinar-Add-Products-select'
                                value={this.state.possuiVeiculo}
                                onChange={this.handleInputChange}
                                required
                            >
                                <option value="">Possui Veículo?</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>
                        {this.state.possuiVeiculo === 'sim' && (
                            <>
                                <div className="form-group">
                                    <select
                                        id="marcaVeiculo"
                                        name="marcaVeiculo"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.marcaVeiculo}
                                        onChange={this.handleInputChange}
                                        required
                                    >
                                        <option value="">Marca do Veículo</option>
                                        {marcasCarro.sort().map(marca => (
                                            <option key={marca} value={marca}>{marca}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input
                                        placeholder='Modelo do Veículo'
                                        type="text"
                                        id="modeloVeiculo"
                                        name="modeloVeiculo"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.modeloVeiculo}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        placeholder='Ano de Fabricação'
                                        type="number"
                                        id="anoFabricacaoVeiculo"
                                        name="anoFabricacaoVeiculo"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.anoFabricacaoVeiculo}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </div>
                            </>
                        )}
                        <div className="popup-buttons">
                            <button type="submit" className='buttonLogin btnFormPopup' disabled={this.state.isSubmitting}>
                                {this.state.isSubmitting ? 'Enviando...' : 'Cotar Seguro Veicular'}
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
                    <div className='headerDach headerPgSeguros backgroundColor1'>
                        <div className=' imgSeguroResidencial headImgSeguros'>
                            <img className='bgImg1 imgSeguros' alt='imagem de um carro moderno' src={headerImgVeicular} />
                        </div>
                    </div>

                    <div className='section-home-3 section-seguros'>
                        <h1>Conheça as vantagens do nosso</h1>
                        <h2>Seguro de Veículos Dispositiva</h2>
                        <p>Escolha a proteção inteligente para o seu patrimônio, com soluções que simplificam o seu dia a dia:</p>

                        <div className='args-section-3'>
                            <div className='argAll-section-3 arg-1-section-3'>
                                <h2><FaRegClock /></h2>
                                <h3>Agilidade</h3>
                                <p>Cotação e contratação online, sem complicações. Tudo ao alcance do seu App.</p>
                            </div>
                            <div className='argAll-section-3 arg-2-section-3'>
                                <h2><FaLock /></h2>
                                <h3>Segurança</h3>
                                <p>Diversas coberturas para proteger seu veículo contra imprevistos.</p>
                            </div>
                            <div className='argAll-section-3 arg-3-section-3'>
                                <h2><FaLaptop /></h2>
                                <h3>100% Digital</h3>
                                <p>Gerencie sua apólice e acione o seguro de forma prática e digital.</p>
                            </div>
                            <div className='argAll-section-3 arg-4-section-3'>
                                <h2><FaRegGrinWink /></h2>
                                <h3>Atendimento Personalizado</h3>
                                <p>Conte com nosso time para te auxiliar em todas as etapas.</p>
                            </div>
                        </div>

                        <input
                            type="button"
                            className='btnHome-lp btnSeguros btnActionSeguros'
                            value="Simular seguro para meu veículo"
                            onClick={this.handleButtonClickVeicular} // Adicionei o onClick para o novo popup
                        />
                    </div>

                    <div className='section-home-2 section-seguros'>
                        <h1>Coberturas Essenciais do Seguro de Veículos</h1>

                        <div className='organize-arg-sec-2'>
                            <div className='arguments-section-2'>
                                <div className='as2-number argsSeguro'>
                                    <h1>1</h1>
                                </div>
                                <h2>Roubo ou Furto</h2>
                                <p>Indenização em caso de roubo ou furto do seu veículo.</p>
                            </div>

                            <div className='arguments-section-2'>
                                <div className='as2-number argsSeguro'>
                                    <h1>2</h1>
                                </div>
                                <h2>Colisão e Danos</h2>
                                <p>Cobertura para reparos em caso de acidentes e outros danos ao veículo.</p>
                            </div>

                            <div className='arguments-section-2'>
                                <div className='as2-number argsSeguro'>
                                    <h1>3</h1>
                                </div>
                                <h2>Incêndio e Fenômenos Naturais</h2>
                                <p>Proteção contra incêndios, raios, enchentes e outros eventos.</p>
                            </div>
                        </div>
                    </div>

                    {/* Renderização condicional dos popups */}
                    {this.state.showPopupResidencial && this.renderPopupResidencial()}
                    {this.state.showPopupVeicular && this.renderPopupVeicular()}
                </div>
            </div>
        );
    }
}

export default HomeDashboard;
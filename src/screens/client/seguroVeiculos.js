import React, { Component } from 'react';
import emailjs from '@emailjs/browser';

// Imagens
import headerImgVeicular from '../../../src/assets/veicular.png';

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
        showPopupResidencial: false,
        showPopupVeicular: false,
        // Dados Pessoais
        nomeCompleto: '',
        email: '',
        telefoneCelular: '',
        cpf: '',
        dataNascimento: '',
        sexo: '',
        estadoCivil: '',
        // Endereço
        cep: '',
        endereco: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        // Dados do Veículo
        possuiVeiculo: '',
        marcasVeiculo: [],
        marcaVeiculoSelecionada: '',
        modelosVeiculo: [],
        modeloVeiculoSelecionado: '',
        anosVeiculo: [],
        anoVeiculoSelecionado: '',
        valorVeiculo: '',
        zeroKm: '',
        utilizacaoVeiculo: '',
        kmAnual: '',
        possuiGaragem: '',
        // Histórico de Seguro
        jaTeveSeguro: '',
        classeBonus: '',
        seguradoraAtual: '',
        renovacaoSeguro: '',
        // Condutor Principal
        condutorPrincipal: '',
        dataNascimentoCondutor: '',
        sexoCondutor: '',
        estadoCivilCondutor: '',
        habilitacaoCondutor: '',
        tempoHabilitacao: '',
        // Outros Condutores
        outrosCondutores: '',
        nomeOutroCondutor: '',
        dataNascimentoOutroCondutor: '',
        sexoOutroCondutor: '',
        estadoCivilOutroCondutor: '',
        habilitacaoOutroCondutor: '',
        tempoHabilitacaoOutroCondutor: '',
        // ...

        formErrors: {},
        isSubmitting: false,
        submissionMessage: ''
    };

    componentDidMount() {
        this.carregarMarcas();
    }

    carregarMarcas = async () => {
        try {
            const response = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas');
            const data = await response.json();
            this.setState({ marcasVeiculo: data });
        } catch (error) {
            console.error('Erro ao carregar marcas:', error);
            this.setState({ formErrors: { ...this.state.formErrors, marcaVeiculoSelecionada: 'Erro ao carregar marcas.' } });
        }
    };

    carregarModelos = async (marcaId) => {
        if (marcaId) {
            try {
                const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaId}/modelos`);
                const data = await response.json();
                this.setState({ modelosVeiculo: data.modelos, modeloVeiculoSelecionado: '', anosVeiculo: [], anoVeiculoSelecionado: '', valorVeiculo: '' });
            } catch (error) {
                console.error('Erro ao carregar modelos:', error);
                this.setState({ formErrors: { ...this.state.formErrors, modeloVeiculoSelecionado: 'Erro ao carregar modelos.' } });
                this.setState({ modelosVeiculo: [], modeloVeiculoSelecionado: '', anosVeiculo: [], anoVeiculoSelecionado: '', valorVeiculo: '' });
            }
        } else {
            this.setState({ modelosVeiculo: [], modeloVeiculoSelecionado: '', anosVeiculo: [], anoVeiculoSelecionado: '', valorVeiculo: '' });
        }
    };

    carregarAnos = async (marcaId, modeloCodigo) => {
        if (marcaId && modeloCodigo) {
            try {
                // Use modeloCodigo em vez de modeloNome
                const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaId}/modelos/${modeloCodigo}/anos`;
                console.log('URL da API de anos (USANDO CÓDIGO DO MODELO):', url);
                const response = await fetch(url);
                const data = await response.json();
                console.log('Dados de anos recebidos:', data);
                this.setState({ anosVeiculo: Array.isArray(data) ? data : [], anoVeiculoSelecionado: '', valorVeiculo: '' });
            } catch (error) {
                console.error('Erro ao carregar anos:', error);
                this.setState({ formErrors: { ...this.state.formErrors, anoVeiculoSelecionado: 'Erro ao carregar anos.' } });
                this.setState({ anosVeiculo: [], anoVeiculoSelecionado: '', valorVeiculo: '' });
            }
        } else {
            this.setState({ anosVeiculo: [], anoVeiculoSelecionado: '', valorVeiculo: '' });
        }
    };

    carregarValor = async (marcaId, modeloNome, ano) => {
        if (marcaId && modeloNome && ano) {
            try {
                const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaId}/modelos/${encodeURIComponent(modeloNome)}/anos/${ano}`;
                console.log('URL da API de valor:', url);
                const response = await fetch(url);
                const data = await response.json();
                this.setState({ valorVeiculo: data.Valor });
            } catch (error) {
                console.error('Erro ao carregar valor:', error);
                this.setState({ formErrors: { ...this.state.formErrors, valorVeiculo: 'Erro ao carregar valor.' } });
                this.setState({ valorVeiculo: '' });
            }
        } else {
            this.setState({ valorVeiculo: '' });
        }
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

    handlePossuiVeiculoChange = (event) => {
        this.handleInputChange(event);
        if (event.target.value === 'nao') {
            this.setState({
                marcaVeiculoSelecionada: '',
                modeloVeiculoSelecionado: '',
                anoVeiculoSelecionado: '',
                valorVeiculo: '',
                zeroKm: '',
                utilizacaoVeiculo: '',
                kmAnual: '',
                possuiGaragem: ''
            });
        }
    };

    handleMarcaChange = (event) => {
        const marcaId = event.target.value;
        this.setState({ marcaVeiculoSelecionada: marcaId, modelosVeiculo: [], modeloVeiculoSelecionado: '', anosVeiculo: [], anoVeiculoSelecionado: '', valorVeiculo: '' });
        this.carregarModelos(marcaId);
    };

    handleModeloChange = (event) => {
        const selectedModelo = this.state.modelosVeiculo.find(modelo => modelo.nome === event.target.value);
        if (selectedModelo) {
            const modeloCodigo = selectedModelo.codigo;
            console.log('Modelo selecionado (código):', modeloCodigo);
            this.setState({ modeloVeiculoSelecionado: modeloCodigo, anosVeiculo: [], anoVeiculoSelecionado: '', valorVeiculo: '' }, () => {
                this.carregarAnos(this.state.marcaVeiculoSelecionada, modeloCodigo);
            });
        } else {
            this.setState({ modeloVeiculoSelecionado: '', anosVeiculo: [], anoVeiculoSelecionado: '', valorVeiculo: '' });
        }
    };

    handleAnoChange = (event) => {
        const ano = event.target.value;
        this.setState({ anoVeiculoSelecionado: ano, valorVeiculo: '' });
        this.carregarValor(this.state.marcaVeiculoSelecionada, this.state.modeloVeiculoSelecionado, ano);
    };

    handleSubmitResidencial = (event) => {
        event.preventDefault();
        const { nomeCompleto, email, telefoneCelular } = this.state;

        console.log('Solicitação de seguro residencial:', { nomeCompleto, email, telefoneCelular });
        alert(`Sua solicitação de seguro residencial foi enviada. Verifique seu e-mail (${email}) para mais informações.`);

        this.handleClosePopupResidencial();
        this.setState({ nomeCompleto: '', email: '', telefoneCelular: '' });
    };

    handleSubmitVeicular = async (event) => {
        event.preventDefault();
        this.setState({ isSubmitting: true, submissionMessage: '', formErrors: {} });

        const formData = { ...this.state };

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
                // Resetar todos os campos do formulário veicular
                nomeCompleto: '', email: '', telefoneCelular: '', cpf: '', dataNascimento: '', sexo: '', estadoCivil: '',
                cep: '', endereco: '', numero: '', complemento: '', bairro: '', cidade: '', estado: '',
                possuiVeiculo: '', marcasVeiculo: [], marcaVeiculoSelecionada: '', modelosVeiculo: [], modeloVeiculoSelecionado: '',
                anosVeiculo: [], anoVeiculoSelecionado: '', valorVeiculo: '', zeroKm: '', utilizacaoVeiculo: '',
                kmAnual: '', possuiGaragem: '', jaTeveSeguro: '', classeBonus: '', seguradoraAtual: '',
                renovacaoSeguro: '', condutorPrincipal: '', dataNascimentoCondutor: '', sexoCondutor: '',
                estadoCivilCondutor: '', habilitacaoCondutor: '', tempoHabilitacao: '', outrosCondutores: ''
            });
            setTimeout(this.handleClosePopupVeicular, 3000); // Fecha o popup após 3 segundos
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
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
                                placeholder='Digite Seu Nome Completo'
                                type="text"
                                id="nomeCompleto"
                                name="nomeCompleto"
                                className='conteinar-Add-Products-select'
                                value={this.state.nomeCompleto}
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
                                placeholder='Digite seu WhatsApp (DDD + Número)'
                                type="tel"
                                className='conteinar-Add-Products-select'
                                id="telefoneCelular"
                                name="telefoneCelular"
                                value={this.state.telefoneCelular}
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
                        {/* Dados Pessoais */}
                        <h3>Dados Pessoais</h3>
                        <div className="form-group">
                            <input
                                placeholder='Nome Completo'
                                type="text"
                                id="nomeCompleto"
                                name="nomeCompleto"
                                className='conteinar-Add-Products-select'
                                value={this.state.nomeCompleto}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                placeholder='Email'
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
                                placeholder='Telefone Celular (DDD + Número)'
                                type="tel"
                                className='conteinar-Add-Products-select'
                                id="telefoneCelular"
                                name="telefoneCelular"
                                value={this.state.telefoneCelular}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                placeholder='CPF'
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
                            <label htmlFor="dataNascimento" className='popup-label'>Data de Nascimento:</label><br />
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

                        {/* Endereço */}
                        <h3>Endereço</h3>
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

                        {/* Dados do Veículo */}
                        <h3>Dados do Veículo</h3>
                        <div className="form-group">
                            <select
                                id="possuiVeiculo"
                                name="possuiVeiculo"
                                className='conteinar-Add-Products-select'
                                value={this.state.possuiVeiculo}
                                onChange={this.handlePossuiVeiculoChange}
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
                                        id="marcaVeiculoSelecionada"
                                        name="marcaVeiculoSelecionada"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.marcaVeiculoSelecionada}
                                        onChange={this.handleMarcaChange}
                                        required
                                    >
                                        <option value="">Marca do Veículo</option>
                                        {this.state.marcasVeiculo.sort((a, b) => a.nome.localeCompare(b.nome)).map(marca => (
                                            <option key={marca.codigo} value={marca.codigo}>{marca.nome}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select
                                        id="modeloVeiculoSelecionado"
                                        name="modeloVeiculoSelecionado"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.modeloVeiculoSelecionado}
                                        onChange={this.handleModeloChange}
                                        required={this.state.marcaVeiculoSelecionada !== ''}
                                    >
                                        <option value="">Modelo do Veículo</option>
                                        {this.state.modelosVeiculo.sort().map(modelo => (
                                            <option key={modelo.nome} value={modelo.nome}>{modelo.nome}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select
                                        id="anoVeiculoSelecionado"
                                        name="anoVeiculoSelecionado"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.anoVeiculoSelecionado}
                                        onChange={this.handleAnoChange}
                                        required={this.state.modeloVeiculoSelecionado !== ''}
                                    >
                                        <option value="">Ano de Fabricação</option>
                                        {/* Aqui está a correção: itere sobre this.state.anosVeiculo */}
                                        {Array.isArray(this.state.anosVeiculo) && this.state.anosVeiculo.sort((a, b) => b.nome.localeCompare(a.nome)).map(ano => (
                                            <option key={ano.codigo} value={ano.codigo}>{ano.nome}</option>
                                        ))}
                                    </select>
                                </div>
                                {this.state.valorVeiculo && (
                                    <div className="form-group">
                                        <label className='popup-label'>Valor do Veículo (FIPE):</label>
                                        <input
                                            type="text"
                                            className='conteinar-Add-Products-select'
                                            value={this.state.valorVeiculo}
                                            readOnly
                                        />
                                    </div>
                                )}
                                <div className="form-group">
                                    <select
                                        id="zeroKm"
                                        name="zeroKm"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.zeroKm}
                                        onChange={this.handleInputChange}
                                        required
                                    >
                                        <option value="">É 0km?</option>
                                        <option value="sim">Sim</option>
                                        <option value="nao">Não</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select
                                        id="utilizacaoVeiculo"
                                        name="utilizacaoVeiculo"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.utilizacaoVeiculo}
                                        onChange={this.handleInputChange}
                                        required
                                    >
                                        <option value="">Utilização do Veículo</option>
                                        <option value="lazer">Lazer</option>
                                        <option value="trabalho">Trabalho</option>
                                        <option value="lazer_trabalho">Lazer e Trabalho</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select
                                        id="kmAnual"
                                        name="kmAnual"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.kmAnual}
                                        onChange={this.handleInputChange}
                                        required
                                    >
                                        <option value="">KM Anual Estimado</option>
                                        <option value="ate_10000">Até 10.000 km</option>
                                        <option value="10000_15000">Entre 10.000 e 15.000 km</option>
                                        <option value="acima_15000">Acima de 15.000 km</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select
                                        id="possuiGaragem"
                                        name="possuiGaragem"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.possuiGaragem}
                                        onChange={this.handleInputChange}
                                        required
                                    >
                                        <option value="">Possui Garagem?</option>
                                        <option value="sim">Sim</option>
                                        <option value="nao">Não</option>
                                    </select>
                                </div>
                            </>
                        )}

                        {/* Histórico de Seguro */}
                        <h3>Histórico de Seguro</h3>
                        <div className="form-group">
                            <select
                                id="jaTeveSeguro"
                                name="jaTeveSeguro"
                                className='conteinar-Add-Products-select'
                                value={this.state.jaTeveSeguro}
                                onChange={this.handleInputChange}
                                required
                            >
                                <option value="">Já Teve Seguro?</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>
                        {this.state.jaTeveSeguro === 'sim' && (
                            <>
                                <div className="form-group">
                                    <select
                                        id="classeBonus"
                                        name="classeBonus"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.classeBonus}
                                        onChange={this.handleInputChange}
                                    >
                                        <option value="">Classe de Bônus (se houver)</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        {/* Adicione mais classes de bônus conforme necessário */}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input
                                        placeholder='Seguradora Atual (se houver)'
                                        type="text"
                                        id="seguradoraAtual"
                                        name="seguradoraAtual"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.seguradoraAtual}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <select
                                        id="renovacaoSeguro"
                                        name="renovacaoSeguro"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.renovacaoSeguro}
                                        onChange={this.handleInputChange}
                                    >
                                        <option value="">Vai Renovar o Seguro?</option>
                                        <option value="sim">Sim</option>
                                        <option value="nao">Não</option>
                                    </select>
                                </div>
                            </>
                        )}

                        {/* Condutor Principal */}
                        <h3>Condutor Principal (se diferente do solicitante)</h3>
                        <div className="form-group">
                            <select
                                id="condutorPrincipal"
                                name="condutorPrincipal"
                                className='conteinar-Add-Products-select'
                                value={this.state.condutorPrincipal}
                                onChange={this.handleInputChange}
                                required
                            >
                                <option value="mesmo">Mesmo que o solicitante</option>
                                <option value="outro">Outro condutor</option>
                            </select>
                        </div>

                        {this.state.condutorPrincipal === 'outro' && (
                            <>
                                <div className="form-group">
                                    <label htmlFor="dataNascimentoCondutor" className='popup-label'>Data de Nascimento do Condutor:</label><br />
                                    <input
                                        type="date"
                                        id="dataNascimentoCondutor"
                                        name="dataNascimentoCondutor"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.dataNascimentoCondutor}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <select
                                        id="sexoCondutor"
                                        name="sexoCondutor"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.sexoCondutor}
                                        onChange={this.handleInputChange}
                                        required
                                    >
                                        <option value="">Sexo do Condutor</option>
                                        <option value="masculino">Masculino</option>
                                        <option value="feminino">Feminino</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select
                                        id="estadoCivilCondutor"
                                        name="estadoCivilCondutor"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.estadoCivilCondutor}
                                        onChange={this.handleInputChange}
                                        required
                                    >
                                        <option value="">Estado Civil do Condutor</option>
                                        <option value="solteiro">Solteiro</option>
                                        <option value="casado">Casado</option>
                                        <option value="separado">Separado</option>
                                        <option value="divorciado">Divorciado</option>
                                        <option value="viuvo">Viúvo</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input
                                        placeholder='Número da Habilitação do Condutor'
                                        type="text"
                                        id="habilitacaoCondutor"
                                        name="habilitacaoCondutor"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.habilitacaoCondutor}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <select
                                        id="tempoHabilitacao"
                                        name="tempoHabilitacao"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.tempoHabilitacao}
                                        onChange={this.handleInputChange}
                                        required
                                    >
                                        <option value="">Tempo de Habilitação</option>
                                        <option value="menos_2">Menos de 2 anos</option>
                                        <option value="2_5">Entre 2 e 5 anos</option>
                                        <option value="mais_5">Mais de 5 anos</option>
                                    </select>
                                </div>
                            </>
                        )}

                        {/* Outros Condutores */}
                        <h3>Outros Condutores (opcional)</h3>
                        <div className="form-group">
                            <select
                                id="outrosCondutores"
                                name="outrosCondutores"
                                className='conteinar-Add-Products-select'
                                value={this.state.outrosCondutores}
                                onChange={this.handleInputChange}
                            >
                                <option value="nao">Não</option>
                                <option value="sim">Sim</option>
                            </select>
                        </div>
                        {this.state.outrosCondutores === 'sim' && (
                            <>
                                <h3>Dados do Outro Condutor</h3>
                                <div className="form-group">
                                    <input
                                        placeholder='Nome Completo do Outro Condutor'
                                        type="text"
                                        id="nomeOutroCondutor"
                                        name="nomeOutroCondutor"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.nomeOutroCondutor}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dataNascimentoOutroCondutor" className='popup-label'>Data de Nascimento do Outro Condutor:</label><br/>
                                    <input
                                        type="date"
                                        id="dataNascimentoOutroCondutor"
                                        name="dataNascimentoOutroCondutor"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.dataNascimentoOutroCondutor}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <select
                                        id="sexoOutroCondutor"
                                        name="sexoOutroCondutor"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.sexoOutroCondutor}
                                        onChange={this.handleInputChange}
                                        required
                                    >
                                        <option value="">Sexo do Outro Condutor</option>
                                        <option value="masculino">Masculino</option>
                                        <option value="feminino">Feminino</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select
                                        id="estadoCivilOutroCondutor"
                                        name="estadoCivilOutroCondutor"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.estadoCivilOutroCondutor}
                                        onChange={this.handleInputChange}
                                        required
                                    >
                                        <option value="">Estado Civil do Outro Condutor</option>
                                        <option value="solteiro">Solteiro</option>
                                        <option value="casado">Casado</option>
                                        <option value="separado">Separado</option>
                                        <option value="divorciado">Divorciado</option>
                                        <option value="viuvo">Viúvo</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input
                                        placeholder='Número da Habilitação do Outro Condutor'
                                        type="text"
                                        id="habilitacaoOutroCondutor"
                                        name="habilitacaoOutroCondutor"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.habilitacaoOutroCondutor}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <select
                                        id="tempoHabilitacaoOutroCondutor"
                                        name="tempoHabilitacaoOutroCondutor"
                                        className='conteinar-Add-Products-select'
                                        value={this.state.tempoHabilitacaoOutroCondutor}
                                        onChange={this.handleInputChange}
                                        required
                                    >
                                        <option value="">Tempo de Habilitação do Outro Condutor</option>
                                        <option value="menos_2">Menos de 2 anos</option>
                                        <option value="2_5">Entre 2 e 5 anos</option>
                                        <option value="mais_5">Mais de 5 anos</option>
                                    </select>
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
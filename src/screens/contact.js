import React, { Component } from 'react';
import emailjs from '@emailjs/browser';

class ContactPage extends Component {
    state = {
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
        emailEnviado: false,
        erroEnvio: null,
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { nome, email, telefone, mensagem } = this.state;

        const serviceId = 'service_04m0s8d'; // Substitua pelo seu Service ID do EmailJS
        const templateIdAdmin = 'template_p7g0xsi'; // Substitua pelo seu Template ID para o admin
        const templateIdClient = 'template_p7g0xsi'; // Substitua pelo seu Template ID para o cliente
        const publicKey = 'TtE0io7wrvJ8m5Wqq'; // Substitua pela sua Public Key do EmailJS

        const adminEmail = 'leonarrdoribeiro32@gmail.com'; // Email do administrador

        const adminParams = {
            to_email: adminEmail,
            subject: 'Nova solicitação recebida',
            message: 'Uma nova solicitação de contato foi recebida através do formulário.',
            from_name: nome,
            from_email: email,
            from_telefone: telefone,
            message_content: mensagem,
        };

        const clientParams = {
            to_email: email,
            subject: 'Recebemos seu contato, em breve o retornaremos.',
            message: 'Agradecemos seu contato. Em breve nossa equipe entrará em contato com você.',
        };

        try {
            await emailjs.send(serviceId, templateIdAdmin, adminParams, publicKey);
            await emailjs.send(serviceId, templateIdClient, clientParams, publicKey);
            this.setState({
                emailEnviado: true,
                nome: '',
                email: '',
                telefone: '',
                mensagem: '',
                erroEnvio: null,
            });
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
            this.setState({
                emailEnviado: false,
                erroEnvio: 'Houve um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.',
            });
        }
    };

    render() {
        const { emailEnviado, erroEnvio } = this.state;

        return (
            <div className='contact-page '>
                <div className='popup-content contact-container'>
                    <div className='contact-info'>
                        <h1 className='title-info '>Fale Conosco</h1>
                        <p className='contact-info-text'>Ligue agora mesmo</p>
                        <p className='contact-info-text marginBottom'>08000 000 000</p>
                        <a href='https://wa.me/' className="popup-buttons btnContactInfo buttonLogin btnFormPopup">What'sApp</a>
                    </div>
                    <div className='contact-form'>
                        <h2>QUER MANDAR UMA MENSAGEM?</h2>
                        <p>Duvidas, solicitações, reclamação ou elogio.</p>
                        {emailEnviado && <p style={{ color: 'green' }}>Mensagem enviada com sucesso! Verifique seu e-mail.</p>}
                        {erroEnvio && <p style={{ color: 'red' }}>{erroEnvio}</p>}
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input
                                    placeholder='Digite seu nome'
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    value={this.state.nome}
                                    onChange={this.handleInputChange}
                                    required
                                    className='conteinar-Add-Products-select'
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder='Digite seu email (exemplo@email.com)'
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    required
                                    className='conteinar-Add-Products-select'
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder='Digite seu WhatsApp (85) 99999-XXXX'
                                    type="tel"
                                    id="telefone"
                                    name="telefone"
                                    value={this.state.telefone}
                                    onChange={this.handleInputChange}
                                    className='conteinar-Add-Products-select'
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    placeholder='Digite sua mensagem'
                                    id="mensagem"
                                    name="mensagem"
                                    value={this.state.mensagem}
                                    onChange={this.handleInputChange}
                                    rows="5"
                                    required
                                    className='textarea-form'
                                />
                            </div>
                            <button type="submit" className="popup-buttons buttonLogin btnFormPopup">Enviar Mensagem</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactPage;
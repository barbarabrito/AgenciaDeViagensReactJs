import './style.css';

function Contato() {
    return (

        <main className="container contato-section">
            <div className="container">
                <div className="texto-contato-section">
                    <h2>Deseja entrar em contato conosco?</h2>
                    <h6>Informe seus dados no formulário abaixo:</h6>
                </div>
                <div className="formulario">
                    <form>
                        <fieldset>
                            <div className="form-group">
                                <label for="TextInput" className="form-label">Nome:</label>
                                <input type="text" id="TextInput" className="form-control" placeholder="seu nome"/>
                            </div>
                            <br />
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="seu email"/>
                            </div>
                            <br />
                            <div className="form-group">
                                <select id="dropdown" name="role" className="form-control" required>
                                    <option>Selecione o tipo de contato</option>
                                    <option value="ajuda">Ajuda</option>
                                    <option value="sugestoes">Sugestões</option>
                                    <option value="problemacomcompra">Problema com a compra</option>
                                    <option value="problemanaviagem">Problemas com a viagem</option>
                                    <option value="outro">Outro</option>
                                </select>
                            </div>
                            <br />
                            <textarea id="textareacontato" name="textareacontato" rows="4" cols="50">
                            </textarea>
                            <br />
                            <br />
                            <button type="submit" className="btn btn-primary" id="btn-contato">Enviar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </main>

    );
}

export default Contato;
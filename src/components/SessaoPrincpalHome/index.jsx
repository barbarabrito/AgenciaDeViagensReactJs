import './style.css';

function SessaoPrincipalHome() {
    return (
        <div className="container">
            <div className="container pq-section" id="pq">
                <div className="row pq-section-row">
                    <div className="col-md-4 col-sm-6" id="melhores-precos">
                        <h4>Por que</h4>
                        <br />
                        <i className="fa fa-hand-holding-heart"></i>
                        <br />
                        <br />
                        <p>Porque temos os melhores preços <br/>e o melhor serviço</p>
                    </div>
                    <div className="col-md-4 col-sm-6" id="rapido-e-facil">
                        <h4>Rápido e fácil</h4>
                        <br />
                        <i className="fa fa-suitcase"></i>
                        <br />
                        <br />
                        <p>Um simples clique e já está tudo<br/> pronto viajar</p>
                    </div>
                    <div className="col-md-4 col-sm-6" id="atendimento">
                        <h4>Fique tranquilo</h4>
                        <br />
                        <i className="fa fa-headset"></i>
                        <br />
                        <br />
                        <p>Temos o melhor suporte ao cliente<br/> que você já viu</p>
                    </div>
                </div>
            </div>
            <div className="container newsletter">
                <h2>Quer saber sobre novas viagens e promoções de pacotes?</h2>
                <h6>Assine nossa newsletter e nunca perca nenhuma novidade!</h6>
                <br />
                <form className="row row-cols-lg-auto g-2 align-items-center newsletter-form">
                    <div className="col-12">
                        <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
                        <div className="input-group">
                            <div className="input-group-text"><i className="fas fa-envelope"></i></div>
                            <input type="email" className="form-control" id="inlineFormInputGroupUsername"
                                placeholder="email@exemplo.com" />
                        </div>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" placeholder="nome" aria-label="nome" />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-warning" id="btn-newsletter">Inscrever</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SessaoPrincipalHome;
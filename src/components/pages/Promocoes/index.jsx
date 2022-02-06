import './style.css';
import Maceio from '../../../assets/imgs/maceio.jpg';
import Chapada from '../../../assets/imgs/chapadadiamantina.jpg';
import CanoaQuebrada from '../../../assets/imgs/canoaquebrada.jpg';
import CampinaGrande from '../../../assets/imgs/campinagrande.jpg';
import Cabaceiras from '../../../assets/imgs/cabaceiras.jpg';
import Cabo from '../../../assets/imgs/cabo.jpg';
import Genipabu from '../../../assets/imgs/dunasdegenipabu.jpg';


function Promocoes() {
    return (
        <main className="container promocoes-section">
            <br />
            <h1>Promoções perfeitas para você!</h1>
            <br />
            <hr />
            <br />

            <div className="promo-alagoas" id="p-alagoas">
                <div className="card mb-3" style={{ maxWidth: '1200px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Maceio} className="img-fluid rounded-start" alt="Maceió" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Maceió + Maragogi</h5>
                                <hr />
                                <h4 className="desconto">- 30%</h4>
                                <br />
                                <h3>R$ 680</h3>
                                <i className="fa fa-hotel"></i>
                                <i className="fa fa-plane"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="promo-bahia" id="p-bahia">
                <div className="card mb-3" style={{ maxWidth: '1200px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Chapada} className="img-fluid rounded-start" alt="Chapada Diamantina" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Salvador + Chapada Diamantina</h5>
                                <hr />
                                <h4 className="desconto">- 20%</h4>
                                <br />
                                <h3>R$ 800</h3>
                                <i className="fa fa-hotel"></i>
                                <i className="fa fa-plane"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="promo-ceara" id="p-ceara">
                <div className="card mb-3" style={{ maxWidth: '1200px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={CanoaQuebrada} className="img-fluid rounded-start" alt="Ceará" />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Fortaleza + Canoa Quebr/ada</h5>
                                <hr />
                                <h4 className="desconto">- 20%</h4>
                                <br />
                                <h3>R$ 650</h3>
                                <i className="fa fa-hotel"></i>
                                <i className="fa fa-plane"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="promo-paraiba" id="p-paraiba">
                <div className="card mb-3" style={{ maxWidth: '1200px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={CampinaGrande} className="img-fluid rounded-start" alt="Campina Grande" />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">João Pessoa + Campina Grande</h5>
                                <hr />
                                <h4 className="desconto">- 20%</h4>
                                <br />
                                <h3>R$ 680</h3>
                                <i className="fa fa-hotel"></i>
                                <i className="fa fa-plane"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="promo-paraiba" id="p-paraiba">
                <div className="card mb-3" style={{ maxWidth: '1200px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Cabaceiras} className="img-fluid rounded-start" alt="Cabaceiras" />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Cabedelo + Cabaceiras</h5>
                                <hr />
                                <h4 className="desconto">- 15%</h4>
                                <br />
                                <h3>R$ 680</h3>
                                <i className="fa fa-hotel"></i>
                                <i className="fa fa-plane"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="promo-pernambuco" id="p-pernambuco">
                <div className="card mb-3" style={{ maxWidth: '1200px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Cabo} className="img-fluid rounded-start" alt="Cabo de Santo Agostinho" />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Recife + Cabo de Santo Agostinho</h5>
                                <hr />
                                <h4 className="desconto">- 30%</h4>
                                <br />
                                <h3>R$ 700</h3>
                                <i className="fa fa-hotel"></i>
                                <i className="fa fa-plane"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="promo-rn" id="p-rn">
                <div className="card mb-3" style={{ maxWidth: '1200px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Genipabu} className="img-fluid rounded-start" alt="Dunas de Genipabu" />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Natal + Dunas de Genipabu</h5>
                                <hr />
                                <h4 className="desconto">- 25%</h4>
                                <br />
                                <h3>R$ 780</h3>
                                <i className="fa fa-hotel"></i>
                                <i className="fa fa-plane"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </main>
    );
}

export default Promocoes;
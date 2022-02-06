import './style.css';

import Maceio from '../../../assets/imgs/maceio.jpg';
import Maragogi from '../../../assets/imgs/maragogi.jpg';
import SaoMiguel from '../../../assets/imgs/saomiguel.jpg';
import Salvador from '../../../assets/imgs/salvador.jpg';
import PortoSeguro from '../../../assets/imgs/portoseguro.jpg';
import Ilheus from '../../../assets/imgs/ilheus.jpg';
import Chapada from '../../../assets/imgs/chapadadiamantina.jpg';
import Juazeiro from '../../../assets/imgs/juazeiro.jpg';
import Fortaleza from '../../../assets/imgs/fortaleza.jpg';
import CanoaQuebrada from '../../../assets/imgs/canoaquebrada.jpg';
import Jijoca from '../../../assets/imgs/jijoca.jpg';
import SaoLuis from '../../../assets/imgs/saoluis.jpg';
import Lencois from '../../../assets/imgs/lencoismaranhenses.jpg';
import JoaoPessoa from '../../../assets/imgs/joaopessoa.jpg';
import CampinaGrande from '../../../assets/imgs/campinagrande.jpg';
import Cabaceiras from '../../../assets/imgs/cabaceiras.jpg';
import Cabedelo from '../../../assets/imgs/cabedelo.jpg';
import Recife from '../../../assets/imgs/recife.jpg';
import PortoGalinhas from '../../../assets/imgs/portodegalinhas.jpg';
import Olinda from '../../../assets/imgs/olinda.jpg';
import Cabo from '../../../assets/imgs/cabo.jpg';
import Teresina from '../../../assets/imgs/teresina.jpg';
import SerraCapivara from '../../../assets/imgs/serradacapivara.jpg';
import Natal from '../../../assets/imgs/natal.jpg';
import Genipabu from '../../../assets/imgs/dunasdegenipabu.jpg';
import Mossoro from '../../../assets/imgs/mossoro.jpg';
import Aracaju from '../../../assets/imgs/aracaju.jpg';


function Destino() {

    return (
        <main className="container destino-section">
            <br />
            <h1><i className="fa fa-location-arrow iconearrow"></i> Encontre seu destino</h1>
            <br/>
            <hr/>
            <div className="alagoas" id="d-alagoas">
                <br />
                <a href="#d-alagoas"><h3><i className="fa fa-road"></i> Alagoas</h3></a>
                <br />
                <div className="row row-cols-1 row-cols-md-3 g-4 cards-section">
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={Maceio} className="card-img-top" alt="Maceió" />
                            <div className="card-body">
                                <h5 className="card-title">Maceió</h5>
                                <p className="card-text">Alagoas</p>
                                <p className="preco-destino">R$ 375,00</p>
                            </div>
                        </div>
                    </div>
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={Maragogi} className="card-img-top" alt="Maragogi" />
                            <div className="card-body">
                                <h5 className="card-title">Maragogi</h5>
                                <p className="card-text">Alagoas</p>
                                <p className="preco-destino">R$ 390,00</p>
                            </div>
                        </div>
                    </div>
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={SaoMiguel} className="card-img-top" alt="São Miguel dos Milagres" />
                            <div className="card-body">
                                <h5 className="card-title">São Miguel dos Milagres</h5>
                                <p className="card-text">Alagoas</p>
                                <p className="preco-destino">R$ 360,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bahia" id="d-bahia">
                <br />
                <a href="#d-bahia"><h3><i className="fa fa-road"></i> Bahia</h3></a>
                <br />
                <div className="row row-cols-1 row-cols-md-3 g-4 cards-section">
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={Salvador} className="card-img-top" alt="Salvador" />
                            <div className="card-body">
                                <h5 className="card-title">Salvador</h5>
                                <p className="card-text">Bahia</p>
                                <p className="preco-destino">R$ 380,00</p>
                            </div>
                        </div>
                    </div>
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={PortoSeguro} className="card-img-top" alt="Porto Seguro" />
                            <div className="card-body">
                                <h5 className="card-title">Porto Seguro</h5>
                                <p className="card-text">Bahia</p>
                                <p className="preco-destino">R$ 380,00</p>
                            </div>
                        </div>
                    </div>
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={Ilheus} className="card-img-top" alt="Ilheus" />
                            <div className="card-body">
                                <h5 className="card-title">Ilheus</h5>
                                <p className="card-text">Bahia</p>
                                <p className="preco-destino">R$ 375,00</p>
                            </div>
                        </div>
                    </div>
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={Chapada} className="card-img-top" alt="Chapada Diamantina" />
                            <div className="card-body">
                                <h5 className="card-title">Chapada Diamantina</h5>
                                <p className="card-text">Bahia</p>
                                <p className="preco-destino">R$ 400,00</p>
                            </div>
                        </div>
                    </div>
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={Juazeiro} className="card-img-top" alt="Juazeiro"/>
                                <div className="card-body">
                                    <h5 className="card-title">Juazeiro</h5>
                                    <p className="card-text">Bahia</p>
                                    <p className="preco-destino">R$ 370,00</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ceara" id="d-ceara">
                <br />
                <a href="#d-ceara"><h3><i className="fa fa-road"></i> Ceará</h3></a>
                <br />
                <div className="row row-cols-1 row-cols-md-3 g-4 cards-section">
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={Fortaleza} className="card-img-top" alt="Fortaleza" />
                            <div className="card-body">
                                <h5 className="card-title">Fortaleza</h5>
                                <p className="card-text">Ceará</p>
                                <p className="preco-destino">R$380,00</p>
                            </div>
                        </div>
                    </div>
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={CanoaQuebrada} className="card-img-top" alt="Canoa Quebrada" />
                            <div className="card-body">
                                <h5 className="card-title">Canoa Quebrada</h5>
                                <p className="card-text">Ceará</p>
                                <p className="preco-destino">R$350,00</p>
                            </div>
                        </div>
                    </div>
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={Jijoca} className="card-img-top" alt="Jijoca de Jericoacara" />
                            <div className="card-body">
                                <h5 className="card-title">Jijoca de Jericoacoara</h5>
                                <p className="card-text">Ceará</p>
                                <p className="preco-destino">R$ 390,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="maranhao" id="d-maranhao">
                <br />
                <a href="#d-maranhao"><h3><i className="fa fa-road"></i> Maranhão</h3></a>
                <br />
                <div className="row row-cols-1 row-cols-md-3 g-4 cards-section">
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={SaoLuis} className="card-img-top" alt="São Luís" />
                            <div className="card-body">
                                <h5 className="card-title">São Luís</h5>
                                <p className="card-text">Maranhão</p>
                                <p className="preco-destino">R$ 380,00</p>
                            </div>
                        </div>
                    </div>
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={Lencois} className="card-img-top" alt="Lençóis Maranhenses" />
                            <div className="card-body">
                                <h5 className="card-title">Lençóis Maranhenses</h5>
                                <p className="card-text">Maranhão</p>
                                <p className="preco-destino">R$ 380,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="paraiba" id="d-paraiba">
                <br />
                <a href="#d-paraiba"><h3><i className="fa fa-road"></i> Paraíba</h3></a>
                <br />
                <div className="row row-cols-1 row-cols-md-3 g-4 cards-section">
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={JoaoPessoa} className="card-img-top" alt="João Pessoa" />
                            <div className="card-body">
                                <h5 className="card-title">João Pessoa</h5>
                                <p className="card-text">Paraíba</p>
                                <p className="preco-destino">R$ 380,00</p>
                            </div>
                        </div>
                    </div>
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={CampinaGrande} className="card-img-top" alt="Campina Grande" />
                            <div className="card-body">
                                <h5 className="card-title">Campina Grande</h5>
                                <p className="card-text">Paraíba</p>
                                <p className="preco-destino">R$ 380,00</p>
                            </div>
                        </div>
                    </div>
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={Cabaceiras} className="card-img-top" alt="Cabaceiras" />
                            <div className="card-body">
                                <h5 className="card-title">Cabaceiras</h5>
                                <p className="card-text">Paraíba</p>
                                <p className="preco-destino">R$ 375,00</p>
                            </div>
                        </div>
                    </div>
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={Cabedelo} className="card-img-top" alt="Cabedelo" />
                            <div className="card-body">
                                <h5 className="card-title">Cabedelo</h5>
                                <p className="card-text">Paraíba</p>
                                <p className="preco-destino">R$ 380,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pernambuco" id="d-pernambuco">
                <br />
                <a href="#d-pernambuco"><h3><i className="fa fa-road"></i> Pernambuco</h3></a>
                <br />
                <div className="row row-cols-1 row-cols-md-3 g-4 cards-section">
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={Recife} className="card-img-top" alt="Recife" />
                            <div className="card-body">
                                <h5 className="card-title">Recife</h5>
                                <p className="card-text">Prenambuco</p>
                                <p className="preco-destino">R$ 380,00</p>
                            </div>
                        </div>
                    </div>
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={PortoGalinhas} className="card-img-top" alt="Porto de Galinhas" />
                            <div className="card-body">
                                <h5 className="card-title">Porto de Galinhas</h5>
                                <p className="card-text">Prenambuco</p>
                                <p className="preco-destino">R$ 400,00</p>
                            </div>
                        </div>
                    </div>
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={Olinda} className="card-img-top" alt="Olinda" />
                            <div className="card-body">
                                <h5 className="card-title">Olinda</h5>
                                <p className="card-text">Pernambuco</p>
                                <p className="preco-destino">R$ 360,00</p>
                            </div>
                        </div>
                    </div>
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={Cabo} className="card-img-top" alt="Cabo de Santo Agostinho" />
                            <div className="card-body">
                                <h5 className="card-title">Cabo de Santo Agostinho</h5>
                                <p className="card-text">Pernambuco</p>
                                <p className="preco-destino">R$ 390,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="piaui" id="d-piaui">
                <br />
                <a href="#d-piaui"><h3><i className="fa fa-road"></i> Piauí</h3></a>
                <br />
                <div className="row row-cols-1 row-cols-md-3 g-4 cards-section">
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={Teresina} className="card-img-top" alt="Teresina" />
                            <div className="card-body">
                                <h5 className="card-title">Teresina</h5>
                                <p className="card-text">Piauí</p>
                                <p className="preco-destino">R$ 380,00</p>
                            </div>
                        </div>
                    </div>
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={SerraCapivara} className="card-img-top" alt="Serra da Capivara" />
                            <div className="card-body">
                                <h5 className="card-title">Serra da Capivara</h5>
                                <p className="card-text">Piauí</p>
                                <p className="preco-destino">R$ 380,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rio-grande-do-norte" id="d-rn">
                <br />
                <a href="#d-rn"><h3><i className="fa fa-road"></i> Rio Grande do Norte</h3></a>
                <br />
                <div className="row row-cols-1 row-cols-md-3 g-4 cards-section">
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={Natal} className="card-img-top" alt="Natal" />
                            <div className="card-body">
                                <h5 className="card-title">Natal</h5>
                                <p className="card-text">Rio Grande do Norte</p>
                                <p className="preco-destino">R$ 370,00</p>
                            </div>
                        </div>
                    </div>
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={Genipabu} className="card-img-top" alt="Dunas de Genipabu" />
                            <div className="card-body">
                                <h5 className="card-title">Genipabu</h5>
                                <p className="card-text">Rio Grande do Norte</p>
                                <p className="preco-destino">R$ 400,00</p>
                            </div>
                        </div>
                    </div>
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={Mossoro} className="card-img-top" alt="Mossoró" />
                            <div className="card-body">
                                <h5 className="card-title">Mossoró</h5>
                                <p className="card-text">Rio Grande do Norte</p>
                                <p className="preco-destino">R$ 360,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sergipe" id="d-sergipe">
                <br />
                <a href="#d-sergipe"><h3><i className="fa fa-road"></i> Sergipe</h3></a>
                <br />
                <div className="row row-cols-1 row-cols-md-3 g-4 cards-section">
                    <div className="searchitem">
                        <div className="card h-100">
                            <img src={Aracaju} className="card-img-top" alt="Aracaju" />
                            <div className="card-body">
                                <h5 className="card-title">Aracaju</h5>
                                <p className="card-text">Aracaju</p>
                                <p className="preco-destino">R$ 360,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </main>
    );
}

export default Destino;
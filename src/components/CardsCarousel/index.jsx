import Carousel from 'react-elastic-carousel';

import './style.css';
import JoaoPessoa from '../../assets/imgs/joaopessoa.jpg';
import Porto from '../../assets/imgs/portoseguro.jpg'
import Salvador from '../../assets/imgs/salvador.jpg';
import Natal from '../../assets/imgs/natal.jpg';
import Recife from '../../assets/imgs/recife.jpg';
import Fortaleza from '../../assets/imgs/fortaleza.jpg';
import Maceio from '../../assets/imgs/maceio.jpg';
import CampinaGrande from '../../assets/imgs/campinagrande.jpg';
import { Link } from 'react-router-dom';

function CardsCarousel() {

    const breakPoints = [
        { width: 1, itemToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1100, itemsToShow: 4 },
    ]

    return (
        <>
            <Carousel breakPoints={breakPoints}>
                <div className="card c-carousel">
                    <div className="card-idx h-100 card-idx shadow">
                        <img src={JoaoPessoa} className="img-idx" alt="João Pessoa" />
                        <div className="card-body">
                            <h5 className="card-title">João Pessoa</h5>
                            <p>Paraíba</p>
                            <i className="fa fa-plane"></i>
                            <i className="fa fa-bed"></i>
                            <p className="card-text">R$ 380</p>
                        </div>
                        <div className="card-footer">
                            <Link to='/destino' target="_blank">Veja mais <i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="card c-carousel">
                    <div className="card-idx h-100 card-idx shadow">
                        <img src={Natal} className="img-idx" alt="Natal" />
                        <div className="card-body">
                            <h5 className="card-title">Natal</h5>
                            <p>Rio Grande do Norte</p>
                            <i className="fa fa-plane"></i>
                            <i className="fa fa-bed"></i>
                            <p className="card-text">R$ 370</p>
                        </div>
                        <div className="card-footer">
                            <Link to='/destino' target="_blank">Veja mais <i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="card c-carousel">

                    <div className="card-idx h-100 shadow">
                        <img src={Salvador} className="img-idx" alt="Salvador" />
                        <div className="card-body">
                            <h5 className="card-title">Salvador</h5>
                            <p>Bahia</p>
                            <i className="fa fa-plane"></i>
                            <i className="fa fa-bed"></i>
                            <p className="card-text">R$ 380</p>
                        </div>
                        <div className="card-footer">
                            <Link to='/destino' target="_blank">Veja mais <i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="card c-carousel">
                    <div className="card-idx h-100 shadow">
                        <img src={Recife} className="img-idx" alt="Recife" />
                        <div className="card-body">
                            <h5 className="card-title">Recife</h5>
                            <p>Pernambuco</p>
                            <i className="fa fa-plane"></i>
                            <i className="fa fa-bed"></i>
                            <p className="card-text">R$ 380</p>
                        </div>
                        <div className="card-footer">
                            <Link to='/destino' target="_blank">Veja mais <i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="card c-carousel">
                    <div className="card-idx h-100 shadow">
                        <img src={Fortaleza} className="img-idx" alt="Fortaleza" />
                        <div className="card-body">
                            <h5 className="card-title">Fortaleza</h5>
                            <p>Ceará</p>
                            <i className="fa fa-plane"></i>
                            <i className="fa fa-bed"></i>
                            <p className="card-text">R$ 380</p>
                        </div>
                        <div className="card-footer">
                             <Link to='/destino' target="_blank">Veja mais <i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="card c-carousel">
                    <div className="card-idx h-100 shadow">
                        <img src={Porto} className="img-idx" alt="Porto Seguro" />
                        <div className="card-body">
                            <h5 className="card-title">Porto Seguro</h5>
                            <p>Bahia</p>
                            <i className="fa fa-plane"></i>
                            <i className="fa fa-bed"></i>
                            <p className="card-text">R$ 400</p>
                        </div>
                        <div className="card-footer">
                             <Link to='/destino' target="_blank">Veja mais <i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="card c-carousel">
                    <div className="card-idx h-100 shadow">
                        <img src={Maceio} className="img-idx" alt="Maceió" />
                        <div className="card-body">
                            <h5 className="card-title">Maceió</h5>
                            <p>Alagoas</p>
                            <i className="fa fa-plane"></i>
                            <i className="fa fa-bed"></i>
                            <p className="card-text">R$ 375</p>
                        </div>
                        <div className="card-footer">
                            <Link to='/destino' target="_blank">Veja mais <i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="card c-carousel">
                    <div className="card-idx h-100 shadow">
                        <img src={CampinaGrande} className="img-idx" alt="Campina Grande" />
                        <div className="card-body">
                            <h5 className="card-title">Campina Grande</h5>
                            <p>Paraíba</p>
                            <i className="fa fa-plane"></i>
                            <i className="fa fa-bed"></i>
                            <p className="card-text">R$ 380</p>
                        </div>
                        <div className="card-footer">
                            <Link to='/destino' target="_blank">Veja mais <i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>


            </Carousel>

        </>
    );
}

export default CardsCarousel;
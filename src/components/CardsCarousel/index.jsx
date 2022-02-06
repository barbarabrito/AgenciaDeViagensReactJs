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
                    <div class="card-idx h-100 card-idx shadow">
                        <img src={JoaoPessoa} class="img-idx" alt="João Pessoa" />
                        <div class="card-body">
                            <h5 class="card-title">João Pessoa</h5>
                            <p>Paraíba</p>
                            <i class="fa fa-plane"></i>
                            <i class="fa fa-bed"></i>
                            <p class="card-text">R$ 380</p>
                        </div>
                        <div class="card-footer">
                            <Link to='/destino'><a href="# " target="_blank">Veja mais <i class="fa fa-arrow-right"></i></a></Link>
                        </div>
                    </div>
                </div>
                <div className="card c-carousel">
                    <div class="card-idx h-100 card-idx shadow">
                        <img src={Natal} class="img-idx" alt="Natal" />
                        <div class="card-body">
                            <h5 class="card-title">Natal</h5>
                            <p>Rio Grande do Norte</p>
                            <i class="fa fa-plane"></i>
                            <i class="fa fa-bed"></i>
                            <p class="card-text">R$ 370</p>
                        </div>
                        <div class="card-footer">
                            <Link to='/destino'><a href="# " target="_blank">Veja mais <i class="fa fa-arrow-right"></i></a></Link>
                        </div>
                    </div>
                </div>

                <div className="card c-carousel">

                    <div class="card-idx h-100 shadow">
                        <img src={Salvador} class="img-idx" alt="Salvador" />
                        <div class="card-body">
                            <h5 class="card-title">Salvador</h5>
                            <p>Bahia</p>
                            <i class="fa fa-plane"></i>
                            <i class="fa fa-bed"></i>
                            <p class="card-text">R$ 380</p>
                        </div>
                        <div class="card-footer">
                            <Link to='/destino'><a href="# " target="_blank">Veja mais <i class="fa fa-arrow-right"></i></a></Link>
                        </div>
                    </div>
                </div>

                <div className="card c-carousel">
                    <div class="card-idx h-100 shadow">
                        <img src={Recife} class="img-idx" alt="Recife" />
                        <div class="card-body">
                            <h5 class="card-title">Recife</h5>
                            <p>Pernambuco</p>
                            <i class="fa fa-plane"></i>
                            <i class="fa fa-bed"></i>
                            <p class="card-text">R$ 380</p>
                        </div>
                        <div class="card-footer">
                            <Link to='/destino'><a href="# " target="_blank">Veja mais <i class="fa fa-arrow-right"></i></a> </Link>
                        </div>
                    </div>
                </div>
                <div className="card c-carousel">
                    <div class="card-idx h-100 shadow">
                        <img src={Fortaleza} class="img-idx" alt="Fortaleza" />
                        <div class="card-body">
                            <h5 class="card-title">Fortaleza</h5>
                            <p>Ceará</p>
                            <i class="fa fa-plane"></i>
                            <i class="fa fa-bed"></i>
                            <p class="card-text">R$ 380</p>
                        </div>
                        <div class="card-footer">
                             <Link to='/destino'><a href="# " target="_blank">Veja mais <i class="fa fa-arrow-right"></i></a></Link>
                        </div>
                    </div>
                </div>
                <div className="card c-carousel">
                    <div class="card-idx h-100 shadow">
                        <img src={Porto} class="img-idx" alt="Porto Seguro" />
                        <div class="card-body">
                            <h5 class="card-title">Porto Seguro</h5>
                            <p>Bahia</p>
                            <i class="fa fa-plane"></i>
                            <i class="fa fa-bed"></i>
                            <p class="card-text">R$ 400</p>
                        </div>
                        <div class="card-footer">
                             <Link to='/destino'><a href="# " target="_blank">Veja mais <i class="fa fa-arrow-right"></i></a></Link>
                        </div>
                    </div>
                </div>
                <div className="card c-carousel">
                    <div class="card-idx h-100 shadow">
                        <img src={Maceio} class="img-idx" alt="Maceió" />
                        <div class="card-body">
                            <h5 class="card-title">Maceió</h5>
                            <p>Alagoas</p>
                            <i class="fa fa-plane"></i>
                            <i class="fa fa-bed"></i>
                            <p class="card-text">R$ 375</p>
                        </div>
                        <div class="card-footer">
                            <Link to='/destino'><a href="# " target="_blank">Veja mais <i class="fa fa-arrow-right"></i></a></Link>
                        </div>
                    </div>
                </div>
                <div className="card c-carousel">
                    <div class="card-idx h-100 shadow">
                        <img src={CampinaGrande} class="img-idx" alt="Campina Grande" />
                        <div class="card-body">
                            <h5 class="card-title">Campina Grande</h5>
                            <p>Paraíba</p>
                            <i class="fa fa-plane"></i>
                            <i class="fa fa-bed"></i>
                            <p class="card-text">R$ 380</p>
                        </div>
                        <div class="card-footer">
                            <a href="/destino" target="_blank">Veja mais <i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>


            </Carousel>

        </>
    );
}

export default CardsCarousel;
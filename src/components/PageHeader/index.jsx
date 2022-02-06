import './style.css';
import FotoHeader from '../../assets/imgs/praiadegenipabu.jpg';

function PageHeader() {
    return (
        <header>
            <div className="container container-inicial">
                <div className="img-wrapper">
                <img src={FotoHeader} alt='Praia de Genipabu'></img>
                
                </div>
                <div className="texto-banner">
                    <h3>Encontre o melhor lugar<br/> para passar suas férias</h3>
                    <br/>
                        <button id="btn-saiba-mais"><a href="#pq" id="pq-a">Saiba mais</a></button>
                </div>
            </div>
        </header>
    );
}

export default PageHeader;
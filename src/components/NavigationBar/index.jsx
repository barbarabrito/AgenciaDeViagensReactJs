import './style.css';
import { Link } from 'react-router-dom';

function NavigationBar(){
    return(
        
            <div className="container">
                <nav className="navbar navbar-custom navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                       
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <Link to="/" className="navbar-brand"><i className="fa fa-archway"></i></Link>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">                                   
                                    <Link to="/" className="nav-link active" aria-current="page">Home</Link>                                   
                                </li>
                                <li className="nav-item">                                   
                                    <Link to="/destino" className="nav-link">Destino</Link>                          
                                </li>
                                <li className="nav-item">
                                   <Link to="/promocoes"  className="nav-link">Promoções</Link>
                                </li>
                                <li className="nav-item">
                                  <Link to ="/contato" className="nav-link">Contato</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
   
      
    );
}

export default NavigationBar;
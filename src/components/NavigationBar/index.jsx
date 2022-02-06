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
                            <Link to="/"><a className="navbar-brand" href="# "><i class="fa fa-archway"></i></a></Link>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">                                   
                                    <Link to="/"><a className="nav-link active" aria-current="page" href="# ">Home</a></Link>                                   
                                </li>
                                <li className="nav-item">                                   
                                    <Link to="/destino"><a className="nav-link" href="# ">Destino</a></Link>                          
                                </li>
                                <li className="nav-item">
                                   <Link to="/promocoes"><a className="nav-link" href="# ">Promoções</a></Link>
                                </li>
                                <li className="nav-item">
                                  <Link to ="/contato"><a className="nav-link" href="# ">Contato</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
   
      
    );
}

export default NavigationBar;
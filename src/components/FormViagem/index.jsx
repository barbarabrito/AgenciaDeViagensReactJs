import './style.css';
import { connect } from 'react-redux';


/*uso do redux*/

function FormViagem(props) {
    console.log(props);

    const handleInc = (evt) => {
        props.dispatch({
            type: 'INCREMENT'
        })
    }
    const handleDec = (evt) => {
        props.dispatch({
            type: 'DECREMENT'
        })
    }
    const handleIncT = (evt) => {
        props.dispatch({
            type: 'INCREMENTTWO'
        })
    }
    const handleDecT = (evt) => {
        props.dispatch({
            type: 'DECREMENTTWO'
        })
    }
    return (
        <div className="container form-viagem-geral">

            <div className="form-viagem">
                <form>
                    <div className="input-container">
                        <div className="input-group">
                            <input type="text" aria-label="Destino" className="form-control inputgroup-viagem" placeholder="Destino" id="form-destino" />
                            <input type="text" aria-label="Check-in" className="form-control inputgroup-viagem" placeholder="Check-in" id="checkin" />
                            <input type="text" aria-label="Check-out" className="form-control inputgroup-viagem" placeholder="Checkout" id="checkout" />
                        </div>
                        <div className="counter-div">
                            <p>Quartos: </p>
                            <button type="button" className="btn inc-dec" onClick={handleDec}>-</button>
                            <p>{props.count}</p>
                            <button type="button" className="btn inc-dec" onClick={handleInc}>+</button>


                            <p>Hóspedes</p>
                            <button type="button" className="btn inc-dec" onClick={handleDecT}>-</button>
                            <p>{props.c}</p>
                            <button type="button" className="btn inc-dec" onClick={handleIncT}>+</button>
                            <button type="submit" className="btn" id="btn-buscar"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        count: state.count,
        c: state.c
    }
}

export default connect(mapStateToProps)(FormViagem);
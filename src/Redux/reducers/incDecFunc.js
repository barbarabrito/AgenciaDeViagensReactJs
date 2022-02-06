/*uso do state e do redux*/
//função de incremento e decremento

export default function incDecFunc(
    //uso do state
    state = {
        count: 0,
        c: 0
    },
    action
)
{

    if (action.type === 'INCREMENT' && state.count < 8){

        return {
            ...state,
            count: state.count + 1
        }
    }

    else if (action.type === 'DECREMENT' && state.count > 0) {
        return {
            ...state,
            count: state.count - 1
        }
    }
    else if (action.type === 'INCREMENTTWO' && state.c < 8){

        return {
            ...state,
            c: state.c + 1
        }
    }
    else if (action.type === 'DECREMENTTWO' && state.c > 0) {
        return {
            ...state,
            c: state.c - 1
        }
    }
    else{
        return state;
    }

}



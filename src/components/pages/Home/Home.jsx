import React from 'react';
import CardsCarousel from '../../CardsCarousel';
import FormViagem from '../../FormViagem';
import PageHeader from '../../PageHeader';
import SessaoPrincipalHome from '../../SessaoPrincpalHome';
import './style.css';

function Home() {


    return (
        <>         
            <PageHeader/>
            <div className="container">
                <FormViagem/>
            </div>
            <div className="container-carousel-idx">
                <CardsCarousel />
            </div>
            <SessaoPrincipalHome/>
        </>
    );
}

export default Home;
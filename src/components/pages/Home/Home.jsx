import React from 'react';
import CardsCarousel from '../../CardsCarousel';
import FormViagem from '../../FormViagem';
import PageHeader from '../../PageHeader';
import SessaoPrincipalHome from '../../SessaoPrincpalHome';


function Home() {


    return (
        <>
            
            <PageHeader/>
            <div className="container">
                <FormViagem/>
                <CardsCarousel />
            </div>
            <SessaoPrincipalHome/>

        </>
    );
}

export default Home;
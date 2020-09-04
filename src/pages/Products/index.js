import React from 'react';

import { Container } from './styles';
import Product from '../../components/Product';
import bolacoringa from '../../assets/img/bolacoringa.jpg';
import jabuca from '../../assets/img/jabuca.jpg';

export default function Products() {
    return (
        <Container>
            <Product 
                picture={bolacoringa} 
                name="timao balls" 
                price="4.90" 
                brand="Nike" 
            /> 
            <Product 
                picture={jabuca} 
                name="jabulani" 
                price="100" 
                brand="Nike" 
            /> 
        </Container>
    );
}
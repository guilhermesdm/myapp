import React from 'react';

import { Container } from './styles';
import Product from '../../components/Product';
import bolacoringa from '../../assets/img/bolacoringa.jpg';

export default function Products() {
    return (
        <Container>
            <Product 
                picture={bolacoringa} 
                name="coringa's ball" 
                price="4.90" 
                brand="Nike" 
            /> 
            <Product 
                picture={bolacoringa} 
                name="coringa's ball" 
                price="4.90" 
                brand="Nike" 
            /> 
        </Container>
    );
}
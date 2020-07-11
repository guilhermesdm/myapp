import React from 'react';

import { Container } from './styles';

export default function Product(props) {
     return (
        <Container>
            <a href="#">
                <img src={props.picture} alt="Foto do produto" />
                <h1>{props.name} - {props.brand}</h1>
                <p>R$ {props.price}</p>
            </a>
        </Container>
     );
}
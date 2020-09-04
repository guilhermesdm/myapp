import React from 'react';

import { Container } from './styles';

export default function Header(props) {
    return (
        <Container>
             <h1>La calamidad - <a href="www.google.com.br">{props.currentPage}</a></h1>
             <h2>Conta</h2>
        </Container>
    );
}
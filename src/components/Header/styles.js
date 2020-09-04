import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 60px;
    background-color: rgb(31, 32, 39);
    color: #EEE;

    display: flex;
    align-items: center;
    justify-content: center;

    a {
        text-decoration: none;
        color: #EEE;
        
        &:hover {
            color: #FFF;
        }
    }

`;
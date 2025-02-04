import styled, {css} from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: #333333;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1rem;
    
    &:hover {
        opacity: 0.6;
    }

    ${({variant}) => variant === "secondary" && css`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: #ef9a39;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1rem;
    
    &:hover {
        opacity: 0.6;
    }



`}
`
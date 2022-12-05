import styled, {css} from 'styled-components';

export const ButtonZeroContainer = styled.button`
    padding: 20px;
    width: 20px;
    border: 1px solid #CDCDCD;
    background-color: #a5a5a5;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 13.8rem;

    
    &:hover {
        opacity: 0.6;
    }

    ${({variant}) => variant !== "secondary" && css`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: #333333;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 13.8rem;

    
    &:hover {
        opacity: 0.6;
    }
`}
`
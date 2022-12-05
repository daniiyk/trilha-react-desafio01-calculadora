import React from 'react';
import { ButtonContainer } from './styles';

const Button = ({label, variant = "primary", onClick}) => {
    return (
      <ButtonContainer variant={variant}onClick={onClick} type="button">
       {label}
      </ButtonContainer>
    );
  }
  
  export default Button;
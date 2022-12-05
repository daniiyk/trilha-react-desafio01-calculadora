
import { ButtonZeroContainer } from './styles';

const ButtonZero = ({label, variant = "primary", onClick}) => {
    return (
      <ButtonZeroContainer variant={variant}onClick={onClick} type="button">
      {label}
      </ButtonZeroContainer>
    );
  }
  
  export default ButtonZero;
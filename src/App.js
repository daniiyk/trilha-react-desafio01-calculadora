
import Input from './components/Input';
import Button from './components/Button';
import ButtonZero from './components/ButtonZero';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      let sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      let sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }
  
    const handleSubNumbers = () => {

      if(firstNumber === '0'){
          setFirstNumber(String(currentNumber));
          setCurrentNumber('0')
          setOperation('*')
      }else {
        let sum = Number(firstNumber) * Number(currentNumber);
        setCurrentNumber(String(sum))
        setOperation('')
      }
  
    }

    const handleDivNumbers = () => {

      if(firstNumber === '0'){
          setFirstNumber(String(currentNumber));
          setCurrentNumber('0')
          setOperation('/')
      }else {
        let sum = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(sum))
        setOperation('')
      }
  
    }

    const handlePercentualNumbers = () => {

          setFirstNumber(String(currentNumber));
          setCurrentNumber(currentNumber/100)
          setOperation('')
    }


  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case '*':
            handleSubNumbers();
            break;
          case '/':
            handleDivNumbers(); 
            break;
          default: 
            break;
        }
    }

  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <ButtonZero label="AC" variant="secondary" onClick={handleOnClear}/>            
          <Button label="%" variant="secondary" onClick={handlePercentualNumbers}/>
          <Button label="÷" variant="secondary" onClick={handleDivNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="x" variant="secondary"  onClick={handleSubNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" variant="secondary" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" variant="secondary" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <ButtonZero label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="="  variant="secondary" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;

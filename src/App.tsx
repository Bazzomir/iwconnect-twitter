import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import ButtonClass from './components/Button/ButtonClass';

function App() {
  return (
    <>
      <div>
        <Button name="Tweet" backgraundColor="blue" textColor="white" />
        <Button name="Tweet 2" backgraundColor="red" textColor="black" />
        <Button name="Tweet 3" backgraundColor="green" textColor="yellow" />
        <Button backgraundColor="yellow" />
      </div>

      <br />
      <br />

      <div>
        <ButtonClass name="Tweet 4" backgraundColor="blue" textColor="white" />
        <ButtonClass name="Tweet 5" backgraundColor="red" textColor="black" />
        <ButtonClass
          name="Tweet 6"
          backgraundColor="green"
          textColor="yellow"
        />
        <ButtonClass backgraundColor="yellow" />
      </div>
    </>
  );
}

export default App;

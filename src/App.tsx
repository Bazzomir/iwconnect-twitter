import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div>
      <Button name="Tweet" backgraundColor='blue' textColor='white' />
      <Button name="Tweet 2" backgraundColor='red' textColor='black' />
      <Button name="Tweet 3" backgraundColor='green' textColor='yellow' />
      <Button backgraundColor='yellow' />
    </div>
  )
}

export default App;
import { useState } from 'react';
import './App.css';
import { InputGroup } from './components/InputGroup';

function App() {
  const [value, setValue] = useState<string>('');

  const handleValueChange = (value: string) => {
    setValue(value);
  };

  return (
    <>
      <InputGroup
        position='top'
        type='email'
        labelText='Email'
        id='text'
        tooltip="This is tooltip"
        required={false}
        disabled={false}
        size='md'
        error={false}
        placeholder='Input...'
        value={value}
        handleChange={handleValueChange}
        quiet={false}
      />
    </>
  );
}

export default App;

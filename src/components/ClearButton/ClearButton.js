import React, { useContext } from 'react'
import { CounterContext } from '../../Context/CounterContext';
import Button from '@mui/material/Button';

const ClearButton = () => {

  const { handleClear } = useContext(CounterContext);
  
  return (
    <div><Button sx={{width:'100%'}} variant={'outlined'} onClick={handleClear}>clear</Button></div>
  )
}

export default ClearButton
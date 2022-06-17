import React, { useContext } from 'react'
import { CounterContext } from '../../Context/CounterContext';
import Button from '@mui/material/Button';

const CounterButtons = ({signo}) => {

    const { handleIncrement, handleDecrement } = useContext(CounterContext);

    const handleOperator = () => {
        if(signo === "+"){
            handleIncrement();
        }else{
            handleDecrement();
        }
    }

    return (<>
        <Button sx={{m:2}} variant={'outlined'} onClick={handleOperator}>{signo}</Button>
    </>
    )
}

export default CounterButtons
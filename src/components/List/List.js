import React, { useState } from 'react'
import Button from '@mui/material/Button';
import './List.css'
import TextField from '@mui/material/TextField';

const List = () => {

    const [inputText, setInputText] = useState();
    const [list, setList] = useState([]);


    const handleAdd = () => {

        if (inputText) {
            const newList = [...list];
            newList.push(inputText);
            setList(newList);
        } else {
            alert("Please enter Text in the input")
        }

    }

    const handleDeleteItem = (indexItem) => {

        list.splice(indexItem, 1);
        setList([...list]);

    };


    return (
        <div>
            <div className='container'>
                <TextField
                    id="outlined-basic"
                    label="Write and Add!"
                    InputProps={{
                        style: {
                            color: 'DarkBlue',
                        }
                    }}
                    sx={{
                        color: 'white!important',
                        marginTop: '15px'
                    }}
                    variant="filled"
                    helperText="you can delete the items from the list by clicking on them."
                    onChange={(e) => setInputText(e.target.value)} />
                <Button sx={{ ml: '10px', mt: '25px' }} variant="outlined" onClick={handleAdd}>
                    Add
                </Button>
            </div>

            <ul>
                {list.map((item, index) => (
                    <li className='li-element' onClick={() => handleDeleteItem(index)} key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default List
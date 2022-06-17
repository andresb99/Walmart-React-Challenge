import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';

const DataApi = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const api = axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');

        api
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            {
                loading ? <CircularProgress sx={{ mt: 10 }} /> :
                    <ul>
                        {data?.map((item) => <li key={item.id}> name: {item.name}, id:{item.id}, postId: {item.postId}, email: {item.email}, body: {item.body}</li>)}
                    </ul>
            }
        </>
    )
}

export default DataApi
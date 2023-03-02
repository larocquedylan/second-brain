import React, { useEffect, useState } from 'react'
import Axios from 'axios'


const ApiCall = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data);
            setData(res.data);
            if (data.length > 1){
                setLoading(false);
            }
        })
        .catch(err => {
            console.log(err);
        })
        // how to make it wait?
    },[data]);

    console.log(data);

    const user = data.map(user => (
        <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    ));
    
    // wait to render until data is loaded
    if (loading) {
        return <h1>Loading...</h1>
    }



  return (
    <div>
        <h1>API Call</h1>
        {loading ? <h1>Loading...</h1> : user}

    </div>
  )
}

export default ApiCall;
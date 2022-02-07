import { useEffect, useState } from 'react';

const Simple = () => {

    const [message, setMessage] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Después de render');
    }, [message]);

    useEffect(() => {
        console.log('Después de render que modifica count');
    }, [count]);

    return <div>
        <h2>Ejemplo useEffect</h2>
        <p>{message}</p>
        <input type="text" onChange={(event) => {
            setMessage(event.target.value);
        }} />
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>CLICK</button>
    </div>
}

export default Simple;
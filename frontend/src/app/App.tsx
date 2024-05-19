import { useEffect, useState } from 'react';
import 'src/app/styles/index.css';

function App() {
    const [data, setData] = useState<string>();
    useEffect(() => {
        const send = async () => {
            const response = await fetch('http://localhost:3000/api/ping', {
                method: 'GET',
            });
            if (response.ok) {
                const text = await response.text();
                setData(text);
            } else {
                alert('Ошибка HTTP: ' + response.status);
            }
        };
        void send();
    }, []);
    return <div>{data}</div>;
}

export default App;

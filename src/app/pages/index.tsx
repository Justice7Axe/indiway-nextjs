import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/read');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  const submitData = async () => {
    try {
      await axios.post('/api/write', { name, value });
      fetchData();
    } catch (error) {
      console.error('Error writing data', error);
    }
  };

  return (
    <div>
      <h1>MySQL Data</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <ul>
        {data.map((item: any) => (
          <li key={item.id}>{item.name}: {item.value}</li>
        ))}
      </ul>
      <div>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Name" 
        />
        <input 
          type="text" 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          placeholder="Value" 
        />
        <button onClick={submitData}>Submit</button>
      </div>
    </div>
  );
}

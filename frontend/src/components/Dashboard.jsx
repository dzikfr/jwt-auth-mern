import axios from 'axios';
import { useEffect, useState } from 'react';

function Dashboard() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/auth/dashboard', {
          headers: { Authorization: token },
        });
        setMessage(res.data);
      } catch (err) {
        setMessage('Access Denied');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <h2>{message}</h2>
      )}
    </div>
  );
}

export default Dashboard;

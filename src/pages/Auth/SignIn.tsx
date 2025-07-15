import { useState } from 'react';
import styles from './SignIn.module.scss';
import { mockLogin } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const response = await mockLogin(username);
      localStorage.setItem('accessToken', response.accessToken);
      navigate('/'); 
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className={styles.signInWrapper}>
      <form onSubmit={handleSubmit} className={styles.signInForm}>
        <h1>Sign In</h1>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;

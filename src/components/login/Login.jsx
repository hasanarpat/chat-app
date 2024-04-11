import { useState } from 'react';
import './login.css';
import { toast } from 'react-toastify';

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: '',
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <main className='login'>
      <div className='item'>
        <p>Welcome Back</p>
        <form onSubmit={handleLogin}>
          <input type='text' placeholder='Email' name='email' />
          <input type='text' placeholder='Password' name='password' />
          <button>Signin</button>
        </form>
      </div>
      <div className='separator'></div>
      <div className='item'>
        <form action=''>
          <label htmlFor='file'>
            <img src={avatar.url || '/avatar.png'} alt='' />
            Upload an image
          </label>
          <input
            type='file'
            id='file'
            style={{ display: 'none' }}
            onChange={handleAvatar}
          />
          <input type='text' placeholder='Username' name='username' />
          <input type='text' placeholder='Password' name='password' />
          <input type='text' placeholder='Password' name='password' />
          <button>Signin</button>
        </form>
      </div>
    </main>
  );
};

export default Login;

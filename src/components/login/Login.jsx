import { useState } from 'react';
import './login.css';
import { toast } from 'react-toastify';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth, db } from '../../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import upload from '../../lib/upload';

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('You are logged in.');
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const avatarUrl = await upload(avatar.file);

      await setDoc(doc(db, 'users', res.user.uid), {
        username,
        email,
        avatar: avatarUrl,
        id: res.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, 'userchats', res.user.uid), {
        chats: [],
      });

      toast.success('Account created! You can login now.');
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className='login'>
      <div className='item'>
        <p>Welcome Back</p>
        <form onSubmit={handleLogin}>
          <input type='text' placeholder='Email' name='email' />
          <input type='text' placeholder='Password' name='password' />
          <button disabled={isLoading}>
            {isLoading ? 'Loading' : 'Sign In'}
          </button>
        </form>
      </div>
      <div className='separator'></div>
      <div className='item'>
        <form onSubmit={handleRegister}>
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
          <input type='text' placeholder='Email' name='email' />
          <input type='text' placeholder='Password' name='password' />
          <button disabled={isLoading}>
            {isLoading ? 'Loading' : 'Sign Up'}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;

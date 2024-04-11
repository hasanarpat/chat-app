import List from './components/list/List';
import Chat from './components/chat/Chat';
import Details from './components/details/Details';
import Login from './components/login/Login';
import Notification from './components/notification/Notification';

function App() {
  const user = true;

  return (
    <main className='container'>
      {user ? (
        <>
          {' '}
          <List />
          <Chat />
          <Details />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </main>
  );
}

export default App;

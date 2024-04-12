import { toast } from 'react-toastify';
import { auth } from '../../lib/firebase';
import './details.css';

const Details = () => {
  return (
    <section className='details'>
      <div className='user'>
        <img src='/avatar.png' alt='' />
        <span>Jane Doe</span>
        <p>
          Laboris laborum eiusmod occaecat adipisicing irure dolore elit aliquip
          reprehenderit ut duis laboris.
        </p>
      </div>
      <div className='info'>
        <div className='option'>
          <div className='title'>
            <span>Chat Settings</span>
            <img src='/arrowUp.png' alt='' />
          </div>
        </div>{' '}
        <div className='option'>
          <div className='title'>
            <span>Privacy & help</span>
            <img src='/arrowUp.png' alt='' />
          </div>
        </div>{' '}
        <div className='option'>
          <div className='title'>
            <span>Shared Photos</span>
            <img src='/arrowUp.png' alt='' />
          </div>
          <div className='photos'>
            <div className='photoItem'>
              <div className='photoDetail'>
                <img
                  src='https://images.pexels.com/photos/19961874/pexels-photo-19961874/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt=''
                />
                <span>photo_2024</span>
              </div>
              <img src='/download.png' alt='' className='downloadButton' />
            </div>
            <div className='photoItem'>
              <div className='photoDetail'>
                <img
                  src='https://images.pexels.com/photos/19961874/pexels-photo-19961874/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt=''
                />
                <span>photo_2024</span>
              </div>
              <img src='/download.png' alt='' className='downloadButton' />
            </div>
            <div className='photoItem'>
              <div className='photoDetail'>
                <img
                  src='https://images.pexels.com/photos/19961874/pexels-photo-19961874/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt=''
                />
                <span>photo_2024</span>
              </div>
              <img src='/download.png' alt='' className='downloadButton' />
            </div>
          </div>
        </div>{' '}
        <div className='option'>
          <div className='title'>
            <span>Shared Files</span>
            <img src='/arrowUp.png' alt='' />
          </div>
        </div>
        <button>Block User</button>
        <button
          className='logout'
          onClick={() => {
            auth.signOut();
            toast.success('Logged Out');
          }}
        >
          Log Out
        </button>
      </div>
    </section>
  );
};

export default Details;

import { useState } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState('');

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpenEmoji(false);
  };

  return (
    <section className='chat'>
      <div className='top'>
        <div className='user'>
          <img src='/avatar.png' alt='' />
          <div className='texts'>
            <span>Jane Doe</span>
            <p>Lorem sit doler amet.</p>
          </div>
        </div>
        <div className='icons'>
          <img src='/phone.png' alt='' />
          <img src='/video.png' alt='' />
          <img src='/info.png' alt='' />
        </div>
      </div>
      <div className='center no-scrollbar'>
        <div className='message'>
          <img src='/avatar.png' alt='' />
          <div className='texts'>
            <p>
              Dolor nulla non esse ullamco. Mollit voluptate reprehenderit in
              duis pariatur eu tempor reprehenderit voluptate consequat commodo
              dolor. Dolor id fugiat ullamco qui excepteur incididunt.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message'>
          <img src='/avatar.png' alt='' />
          <div className='texts'>
            <p>
              Dolor nulla non esse ullamco. Mollit voluptate reprehenderit in
              duis pariatur eu tempor reprehenderit voluptate consequat commodo
              dolor. Dolor id fugiat ullamco qui excepteur incididunt.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
            <p>
              Dolor nulla non esse ullamco. Mollit voluptate reprehenderit in
              duis pariatur eu tempor reprehenderit voluptate consequat commodo
              dolor. Dolor id fugiat ullamco qui excepteur incididunt.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
            <p>
              Dolor nulla non esse ullamco. Mollit voluptate reprehenderit in
              duis pariatur eu tempor reprehenderit voluptate consequat commodo
              dolor. Dolor id fugiat ullamco qui excepteur incididunt.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message'>
          <img src='/avatar.png' alt='' />
          <div className='texts'>
            <p>
              Dolor nulla non esse ullamco. Mollit voluptate reprehenderit in
              duis pariatur eu tempor reprehenderit voluptate consequat commodo
              dolor. Dolor id fugiat ullamco qui excepteur incididunt.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
            <img
              src='https://images.pexels.com/photos/19961874/pexels-photo-19961874/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
            />
            <p>
              Dolor nulla non esse ullamco. Mollit voluptate reprehenderit in
              duis pariatur eu tempor reprehenderit voluptate consequat commodo
              dolor. Dolor id fugiat ullamco qui excepteur incididunt.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='icons'>
          <img src='/img.png' alt='' />
          <img src='/camera.png' alt='' />
          <img src='/mic.png' alt='' />
        </div>
        <input
          type='text'
          placeholder='Type a message'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className='emoji'>
          <img
            src='/emoji.png'
            alt=''
            onClick={() => setOpenEmoji((prev) => !prev)}
          />
          <div className='picker'>
            <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </section>
  );
};

export default Chat;

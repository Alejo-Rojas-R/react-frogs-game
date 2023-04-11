import { useState } from 'react'
import './App.css'
import { Items } from './components/Items'
import { Points } from './components/Points'
import { Notification } from './components/Notification'

function App() {
  const [points, setPoints] = useState(0);

  const [notificationKey, setNotificationKey] = useState('');
  const [notificationContent, setNotificationContent] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationClassStyle, setNotificationClassStyle] = useState('');

  return (
    <>
      <header className='header'>
        <Points points={points} />
      </header>

      <section className='content'>
        <Items points={points} setPoints={setPoints} setShowNotification={setShowNotification} setNotificationClassStyle={setNotificationClassStyle} setNotificationContent={setNotificationContent}/>
        <Notification
          key={notificationKey}
          notificationContent={notificationContent}
          showNotification={showNotification}
          setShowNotification={setShowNotification}
          notificationClassStyle={notificationClassStyle}
        />
      </section>

      <footer>

      </footer>
    </>
  )
}

export default App

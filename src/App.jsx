import Dashboard from './layouts/Dashboard'
import Chatlist from './layouts/ChatList';
import Chatpage from './layouts/Chatpage';
function App() {
  return (
<section className='d-flex'>
  <Dashboard/>
  <Chatlist/>
  <Chatpage/>
</section>
  )
}

export default App

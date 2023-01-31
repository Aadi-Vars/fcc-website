import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Header} from './components/header'
import {Contact} from './contact'
import {Web} from './web'
import {NotFound} from './notfound'

export default function App() {

  return (<BrowserRouter>
  <Header />
  <Routes>
<Route index element={<Web/>} />
<Route path='contact' element={<Contact/ >} />
<Route path='*' element={<NotFound/>} />

  </Routes>
  </BrowserRouter>


   )
  }

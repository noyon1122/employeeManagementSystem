


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListEmployee from './components/ListEmployee'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import UpdateEmployee from './components/UpdateEmployee'
import AddEmployee from './components/AddEmployee'


function App() {
 
  return (
    <>
    <div>
      <BrowserRouter>
      <Header></Header>
     
     <Routes>
      <Route path='/' element={<ListEmployee></ListEmployee>}></Route>
      <Route path='/employees' element={<ListEmployee></ListEmployee>}></Route>
      <Route path='/add-employee' element={<AddEmployee/>}></Route>
      <Route path={`/update-employee/:id`} element={<UpdateEmployee></UpdateEmployee>}></Route>
     </Routes>
       <Footer></Footer>
       </BrowserRouter>
    </div>
    </>
  )
}

export default App

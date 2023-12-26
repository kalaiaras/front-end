import Nav from './Nav'
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
     <Routes>
      <Route path ='/' element={<h1>Product</h1>}></Route>
      <Route path ='/add' element={<h1> ADD Product</h1>}></Route>
      <Route path ='/update' element={<h1> UPDATE Product</h1>}></Route>
      <Route path ='/logout' element={<h1>logout</h1>}></Route>
      <Route path ='/profile' element={<h1>profile</h1>}></Route>

     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

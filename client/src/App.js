import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './componants/Navbar';
import Home from './componants/Home';
import Register from './componants/Register';
import Edit from './componants/Edit';
import Details from './componants/Details';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/register' Component={Register} />
        <Route exact path='/edit/:id' Component={Edit} />
        <Route exact path='/view/:id' Component={Details} />
      </Routes>
    </>
  );
}

export default App;

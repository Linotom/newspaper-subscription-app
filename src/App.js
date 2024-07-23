import logo from './logo.svg';
import './App.css';
import AddSubscribersPage from './components/AddSubscribersPage';
import DeleteSubscribersPage from './components/DeleteSubscribersPage';
import SearchSubscribersPage from './components/SearchSubscribersPage';
import ViewSubscribersPage from './components/ViewSubscribersPage';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<AddSubscribersPage/>}/>
    <Route path='/delete' element={<DeleteSubscribersPage/>}/>
    <Route path='/view' element={<ViewSubscribersPage/>}/>
    <Route path='/search' element={<SearchSubscribersPage/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

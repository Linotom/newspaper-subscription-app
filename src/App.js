import logo from './logo.svg';
import './App.css';
import AddSubscribersPage from './components/AddSubscribersPage';
import DeleteSubscribersPage from './components/DeleteSubscribersPage';
import SearchSubscribersPage from './components/SearchSubscribersPage';
import ViewSubscribersPage from './components/ViewSubscribersPage';

function App() {
  return (
    <div>
      <AddSubscribersPage/>
      <DeleteSubscribersPage/>
      <SearchSubscribersPage/>
      <ViewSubscribersPage/>
    </div>
  );
}

export default App;

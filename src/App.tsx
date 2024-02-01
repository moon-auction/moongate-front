import './App.css';
import { Outlet } from 'react-router-dom';
import Topnav from '@components/Topnav';
function App() {
  return (
    <div className="App">
      <Topnav />
      <Outlet />
    </div>
  );
}

export default App;

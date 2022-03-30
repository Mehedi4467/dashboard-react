
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <Header setToggle={setToggle} toggle={toggle}></Header>
      <Dashboard setToggle={setToggle} toggle={toggle}></Dashboard>
    </div>
  );
}

export default App;

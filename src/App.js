
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Analysis from './Components/Analysis/Analysis';

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <Header setToggle={setToggle} toggle={toggle}></Header>
      <Dashboard setToggle={setToggle} toggle={toggle}></Dashboard>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>} />
        <Route path="/analysis" element={<Analysis></Analysis>} />

      </Routes>
    </div>
  );
}

export default App;

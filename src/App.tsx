import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from './HeaderComponent/Header';

import EmployeeList from './EmployeeListComponent/EmployeeList';
import AddEmployee from './AddEmployeeComponent/AddEmployee';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<EmployeeList />}/>
        <Route path='/add-employee' element={<AddEmployee />}/>
        <Route path='*' element={<AddEmployee />}/>
        {/*<Route path='/edit-employee/:id' element={<AddEmployee />}/>*/}
      </Routes>
    </>
  );
}

export default App;

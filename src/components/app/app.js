import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';



function App() {

  //cоздаем массив с данными
  const data = [
    { name: 'John C.', salary: 800, increase: false, id: 1 },
    { name: 'Jake K.', salary: 1200, increase: true, id: 2 },
    { name: 'Mike B.', salary: 1500, increase: false, id: 3 },
    { name: 'Chris B.', salary: 2500, increase: true, id: 4 }
  ];
  return (
    <div div className="app" >
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  )
}

export default App;

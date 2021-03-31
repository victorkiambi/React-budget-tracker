import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/budget/Budget";
import Remaining from "./components/remaining/Remaining";
import ExpenseTotal from "./components/expenseTotal/ExpenseTotal";
import ExpenseList from "./components/expenseList/ExpenseList";
import AddExpense from "./components/addExpense/AddExpense";
import {AppProvider} from "./context/AppContext";


function App() {
  return (
      <AppProvider>
          <div className='container'>
              <h1 className='mt-3'>My Budget Planner</h1>
              <div className='row mt-3'>
                  <div className='col-sm'>
                      <Budget />
                  </div>
                  <div className='col-sm'>
                      <Remaining />
                  </div>
                  <div className='col-sm'>
                      <ExpenseTotal />
                  </div>
              </div>
              <h3 className='mt-3'>Expenses</h3>
              <div className='row mt-3'>
                  <div className='col-sm'>
                      <ExpenseList />
                  </div>
              </div>
              <h3 className='mt-3'>Add Expense</h3>
              <div className='row mt-3'>
                  <div className='col-sm'>
                      <AddExpense />
                  </div>
              </div>
          </div>
      </AppProvider>
  );
}

export default App;

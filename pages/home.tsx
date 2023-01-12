import ExpenseForm from '@components/NewExpense/ExpenseForm'
import { IExpenseData, IUserInput } from 'interfaces/components/NewExpense/NewExpenses';
import Head from 'next/head'

export default function Home() {
   const stopEditingHandler = () => {
      // setisEditing(false);
      console.log('cancel');
      
    };
    const saveExpenseDataHandler = (enteredExpensedData:IExpenseData) => {
      // setisEditing(false);
      console.log('enteredExpensedData', enteredExpensedData);
      
    };
  return (
      <>
        <ExpenseForm onCancel={stopEditingHandler}
            onSaveExpenseData={saveExpenseDataHandler}/>
      </>
  )
}

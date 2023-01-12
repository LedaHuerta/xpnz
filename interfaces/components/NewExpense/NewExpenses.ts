export interface IExpenseForm{
    onSaveExpenseData: (enteredExpensedData: IExpenseData) => void
    onCancel: React.MouseEventHandler<HTMLButtonElement> | undefined;
}


export interface IExpenseData {
    title: string
    amount: string | number
    date: Date | string
}

export interface IUserInput extends IExpenseData {
    date: string
}
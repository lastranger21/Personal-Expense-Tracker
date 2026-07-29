let expense = ({
    expenseName: 'BPJS',
    expenseAmount: 150000,
})

let totalExpense = 0;

function addExpense(expense) {
    totalExpense += expense.expenseAmount;
}

function submitExpense(name, amount) {
    expense.push({name,amount});
    console.log(`Total Expense: ${totalExpense}`);
}
function dipslayExpense() {
    let dataexpense = '';
    for (const exlist of expense) {
        dataexpense += `<li>${exlist.expenseName}: ${exlist.expenseAmount}</li>`;
    }
    document.getElementById('expense-list').innerHTML = dataexpense;
}
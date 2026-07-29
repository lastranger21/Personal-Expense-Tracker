let expense = [{
    expenseName: 'BPJS',
    expenseAmount: 150000,
},{
    expenseName: 'Internet',
    expenseAmount: 250000,
}]

localStorage.setItem('expense', JSON.stringify(expense));
console.log(localStorage.getItem('expense'));
let totalExpense = JSON.parse(localStorage.getItem("expense")).reduce((sum, item) => sum + item.expenseAmount, 0);

function addExpense(pengeluaran) {
    totalExpense += pengeluaran;
}

function submitExpense(name, amount) {
    //expense.push({name,amount});
    addExpense(amount);
    let currentExpense = JSON.parse(localStorage.getItem("expense")) || [];
    currentExpense.push({ expenseName: name, expenseAmount: amount });
    localStorage.setItem("expense", JSON.stringify(currentExpense));
    //console.log(`Total Expense: ${totalExpense}`);
}
function displayExpense() {
    let dataexpense = `<ul class="list-group w-100"> <li class="list-group-item d-flex justify-content-between align-items-center">
                <span><strong>Pengeluaran</strong></span>
                <span><strong>Jumlah</strong></span>
            </li>`;
    let expenses = JSON.parse(localStorage.getItem("expense")) || [];
    for (const exlist of expenses) {
        dataexpense += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${exlist.expenseName}</span>
                <span>Rp. ${Number(exlist.expenseAmount).toLocaleString('id-ID')}</span>
            </li>`;
    }
    dataexpense += '</ul>';
    document.getElementById('expense-history').innerHTML = dataexpense;
}

document.getElementById("myBtn").addEventListener("click", function(event) {
    event.preventDefault();
    const name = document.getElementById("exampleInputName1").value;
    const amount = document.getElementById("exampleInputAmount1").value;
    if(name=="" ||amount==""){
        alert("Please fill in all fields");
    }else{
        submitExpense(name, parseInt(amount));
        displayExpense();
        document.getElementById("total-expense").innerText = `Rp. ${Number(totalExpense).toLocaleString('id-ID')}`;
    }
    
});
displayExpense();
document.getElementById("total-expense").innerText = `Rp. ${Number(totalExpense).toLocaleString('id-ID')}`;
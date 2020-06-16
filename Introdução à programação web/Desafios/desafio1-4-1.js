const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

function createTransaction(transaction) {
  user.transactions.push(transaction)

  if (transaction.type == 'credit') {
    user.balance += transaction.value
  } else {
    user.balance -= transaction.value
  }
}

function getHigherTransactionByType(type) {
  let higher = 0;

  for (user.transaction of user.transactions) {
    if (user.transaction.type == type && user.transaction.value > higher) {
      higher = user.transaction.value
    }
  }

  console.log(`{ type: '${type}', value: '${higher}' }`)
}

function getAverageTransactionValue() {
  let soma = 0

  for (user.transaction of user.transactions) {
    soma += user.transaction.value
  }

  console.log(soma / user.transactions.length)
}

function getTransactionsCount() {
  let credit = 0
  let debit = 0

  for (user.transaction of user.transactions) {
    if (user.transaction.type == 'credit') {
      credit++
    } else {
      debit++
    }
  }

  console.log(`{ credit: ${credit}, debit: ${debit} }`)
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); 

getHigherTransactionByType("credit"); 
getHigherTransactionByType("debit"); 

getAverageTransactionValue(); 

getTransactionsCount();

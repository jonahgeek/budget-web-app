import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeAmount
  );

  const expenseAmounts = expenseTransactions.map(
    (expenseTransaction) => expenseTransaction.expenseAmount
  );

  const totalIncome = incomeAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalExpenses = expenseAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="card mt-4 mb-4">
      <div className="card-body">
        <div className="row">
          <div className="col-md">
            <h2>Transactions</h2>
          </div>
          <div className="col-md">
            <div className="row">
              <div className="col-md">
                Balance <br />${(totalIncome - totalExpenses).toFixed(2)}
              </div>
              <div className="col-md">
                Income <br /><span style={{ color: 'green' }}>+ ${totalIncome}</span>
              </div>
              <div className="col-md">
                Expenses <br /><span style={{ color: 'red'}}>- ${totalExpenses}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;

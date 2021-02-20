import React from "react";
import AddTransaction from "../components/AddTransaction";
import Balance from "../components/Balance";
import ExpenseList from "../components/ExpenseList";
import IncomeList from "../components/IncomeList";

const Transactions = () => {
  return (
    <>
    <AddTransaction />
      <Balance />
      <div className="row">
        <div className="col-md">
          <IncomeList />
        </div>
        <div className="col-md">
          <ExpenseList />
        </div>
      </div>
    </>
  );
};

export default Transactions;

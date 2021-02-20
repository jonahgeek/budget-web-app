import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();

    if (incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1,
      };

      addIncome(newIncomeTransaction);

      setIncome({
        incomeText: "",
        incomeAmount: 0,
      });
    }
  };

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
      };

      addExpense(newExpenseTransaction);

      setExpense({
        expenseText: "",
        expenseAmount: 0,
      });
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md">
          <form onSubmit={onSubmitIncome}>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                name="incomeText"
                value={incomeText}
                placeholder="Add Income..."
                autoComplete="off"
                onChange={onChangeIncome}
              />
              <span class="input-group-text">$</span>
              <input
                type="number"
                class="form-control"
                name="incomeAmount"
                value={incomeAmount}
                placeholder="Amount"
                autoComplete="off"
                onChange={onChangeIncome}
              />
              <button
                class="btn btn-outline-secondary"
                type="submit"
                id="button-addon2"
              >
                Create Income
              </button>
            </div>
          </form>
        </div>
        <div className="col-md">
          <form onSubmit={onSubmitExpense}>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                name="expenseText"
                value={expenseText}
                placeholder="Add Expense..."
                autoComplete="off"
                onChange={onChangeExpense}
              />
              <span class="input-group-text">$</span>
              <input
                type="number"
                class="form-control"
                name="expenseAmount"
                value={expenseAmount}
                placeholder="Amount"
                autoComplete="off"
                onChange={onChangeExpense}
              />
              <button
                class="btn btn-outline-secondary"
                type="submit"
                id="button-addon2"
              >
                Create Expense
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;

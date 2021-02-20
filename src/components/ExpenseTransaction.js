import React, { useContext } from "react";
import { ArrowRight, Trash } from "react-bootstrap-icons";
import { GlobalContext } from "../context/GlobalState";

const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li class="list-group-item">
      <div className="row">
        <div className="col-md-1">
          <ArrowRight />
        </div>
        <div className="col-md-9">
          <strong>{expenseTransaction.expenseText}</strong>{" "}
          <small className="px-5"> ${expenseTransaction.expenseAmount}</small>
        </div>
        <div className="col-md-2">
          <a onClick={() => deleteTransaction(expenseTransaction.id)}>
            <Trash />
          </a>
        </div>
      </div>
    </li>
  );
};

export default ExpenseTransaction;

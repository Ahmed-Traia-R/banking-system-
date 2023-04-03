import React from 'react'

const TransferForm = ({transferForm,selectedName,handleAmount,updateBalance}) => {
  return (
    <div>{transferForm ? (
        <div style={{ margin: "2%" }}>
          <h6>
            enter an amount in the input to transfer money to{" "}
            <span style={{ color: "green" }}> {selectedName} </span>{" "}
          </h6>
          <input
            type="number"
            className="form-control"
            placeholder="amount to transfer"
            onChange={handleAmount}
          />
          <button
            style={{ margin: "0.5%" }}
            className="btn btn-success"
            onClick={updateBalance}
          >
            {" "}
            send money
          </button>
        </div>
      ) : null}</div>
  )
}

export default TransferForm;
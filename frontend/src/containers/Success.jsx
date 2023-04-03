import React from 'react'

const SuccessTransfer = ({sendSucceed,selectedName,balance}) => {
  return (
    <div>{sendSucceed ? (
        <h5 style={{ margin: "5%" }}>
          your transfer to{" "}
          <span style={{ color: "green" }}> {selectedName} </span> done with
          success , here is your new balance:{" "}
          <span style={{ color: "green" }}>{balance}</span>
        </h5>
      ) : null}</div>
  )
}

export default SuccessTransfer;
import React from "react";

const RejctedTransfer = ({reject}) => {
  return (
    <div>
      {reject ? (
        <p style={{ color: "red" }}>
          <span>
            REQUEST REJECTED: One of the reasons below could reject your
            request:{" "}
          </span>
          <ul>
            <li>Amount exceeded 500</li>
            <li>your balance will be less than -200</li>
            <li>you Forgot to put your name</li>
          </ul>
        </p>
      ) : null}
    </div>
  );
};

export default RejctedTransfer;
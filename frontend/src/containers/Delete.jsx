import axios from "axios";
import React from "react";

const Delete = () => {
  const [deletedName, setDeletedName] = React.useState("");
  const [corrected, setCorrected] = React.useState("");
  const [id, setId] = React.useState("");
  const deleteAccount = () => {
    axios.delete(`http://localhost:3000/api/users/${deletedName}`);
  };
  const update = () => {
    axios.patch(`http://localhost:3000/api/users/${id}`, { name: corrected });
  };
  return (
    <div>
      <h5 style={{margin:"1%"}}>Delete or Update account</h5>
      <input
        style={{ margin: "0.5%" }}
        type="text"
        className="form-control"
        placeholder="enter your ID"
        onChange={(e) => setId(e.target.value)}
      />
      <input
        style={{ margin: "0.5%" }}
        type="text"
        className="form-control"
        placeholder="enter your registred name"
        onChange={(e) => setDeletedName(e.target.value)}
      />
      <input
        style={{ margin: "0.5%" }}
        type="text"
        className="form-control"
        placeholder="enter your new name : this case only for update event"
        onChange={(e) => setCorrected(e.target.value)}
      />
      <button
        style={{ margin: "0.5%" }}
        className="btn btn-danger"
        onClick={deleteAccount}
      >
        {" "}
        Delete your account{" "}
      </button>
      <button
        style={{ margin: "0.5%" }}
        className="btn btn-success"
        onClick={update}
      >
        {" "}
        Update your account{" "}
      </button>
      {corrected ? (
        <h6 style={{margin:"1%"}}>
          your name was updated to{" "}
          <span style={{ color: "green" }}>{corrected}</span> instead of{" "}
          <span style={{ color: "red" }}>{deletedName}</span>
        </h6>
      ) : null}
    </div>
  );
};

export default Delete;
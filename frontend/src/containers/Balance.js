import React, { useState } from "react";
import axios from "axios";
import Users from "./Users";
import data from "./dummy_data";
import SuccessTransfer from "./Success";
import RejctedTransfer from "./Rejcted";
import TransferForm from "./TransferModal";
import MyBalance from "./MyBalance";
import './Balance.css';
const Balance = () => {
  const [dummy_data, setDummy_data] = useState(data);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [balance, setBalance] = useState("");
  const [amount, setAmount] = useState("");
  const [transferForm, setTransferForm] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const [sendSucceed, setSendSucceed] = useState(false);
  const [reject, setReject] = useState(false);
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/users")
      .then((res) => setDummy_data(res.data));
  }, []);
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const getBalance = () => {
    let result = dummy_data.filter((e) => e.name === name);
    setBalance(result[0].balance);
    setId(result[0].id);
  };
  const transfer = (e) => {
    setReject(false);
    setAmount("");
    setTransferForm(true);
    setSelectedName(e.target.textContent);
  };
  const updateBalance = () => {
    if (amount <= 500 && name && balance - amount > -200) {
      axios.put(`http://localhost:3000/api/users/${selectedName}/${id}`, {
        amount: amount,
      });
      setReject(false);
      setTransferForm(false);
      setSendSucceed(true);
      setBalance(balance - amount);
    } else {
      setReject(true);
    }
  };

  return (
    <div style={{ margin: "3%" }}>
      <MyBalance balance={balance} getBalance={getBalance} handleChange={handleChange}/>
      <Users data={dummy_data} name={name} transfer={transfer} />
      <TransferForm
        selectedName={selectedName}
        transferForm={transferForm}
        handleAmount={handleAmount}
        updateBalance={updateBalance}
      />
      <SuccessTransfer
        sendSucceed={sendSucceed}
        balance={balance}
        selectedName={selectedName}
      />
      <RejctedTransfer reject={reject} />
    </div>
  );
};

export default Balance;
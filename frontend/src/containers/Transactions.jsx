import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from './dummy_data';
import { PageHeader, Table } from 'react-bootstrap';

function Transactions(props) {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get("http://localhost:3000/data/transactions");
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  
  useEffect(() => {
    fetchTransactions()
      .then((transactions) => setTransactions(transactions))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
      <PageHeader style={{ marginBottom: '20px', fontSize: '28px', fontWeight: 'bold', color: '#333' }}>Your Transactions</PageHeader>
      <Table style={{ borderCollapse: 'collapse', width: '100%', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', color: '#333' }}>Date</th>
            <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Transaction</th>
            <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Deposit</th>
            <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Credit</th>
            <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Balance</th>
          </tr>
        </thead>
        <tbody>
        {data.map((tran) => (
  <tr key={tran.id} style={{ ':hover': { backgroundColor: '#f5f5f5' } }}>
    <td>{tran.name}</td>
    <td>{tran.balance}</td>
    <td>{tran.date}</td>
  </tr>
))}

</tbody>

      </Table>
    </div>
  );
}

export default Transactions;

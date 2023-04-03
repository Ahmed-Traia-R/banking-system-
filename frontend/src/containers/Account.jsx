import React from 'react';
import axios from 'axios';

const Account = () => {
  const [deposit, setDeposit] = React.useState('')
  const [newName, setNewName] = React.useState('')

  const createAccount = () => {
    axios.post('http://localhost:3000/api/users', { balance: deposit, name: newName })
  }

  return (
    <div>
      <h4 style={{ margin: '1%' }}>Create new account</h4>
      <form>
        <input
         style={{ 
          width: '100%',
          height: '2rem',
          fontSize: '1rem',
          padding: '0.25rem',
          border: '1px solid #ccc',
          borderRadius: '0.25rem',
          marginTop: '0.5rem',
          marginBottom: '0.5rem'
        }}
          type="number"
          className="form-control"
          placeholder="amount to Deposit"
          onChange={(e) => setDeposit(e.target.value)}
        />
        <input
         style={{ 
          width: '100%',
          height: '2rem',
          fontSize: '1rem',
          padding: '0.25rem',
          border: '1px solid #ccc',
          borderRadius: '0.25rem',
          marginTop: '0.5rem',
          marginBottom: '0.5rem'
        }}
          type="text"
          className="form-control"
          placeholder="enter your name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <button style={{ 
      width: '100%',
      height: '2rem',
      fontSize: '1rem',
      backgroundColor: 'green',
      color: 'white',
      border: 'none',
      borderRadius: '0.25rem',
      marginTop: '0.5rem',
      marginBottom: '0.5rem'
    }}
     className="btn btn-primary" onClick={createAccount}>
          Create an account
        </button>
      </form>
    </div>
  )
}

export default Account

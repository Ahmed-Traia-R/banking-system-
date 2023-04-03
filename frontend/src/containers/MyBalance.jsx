import React from 'react';

const MyBalance = ({ handleChange, getBalance, balance }) => {
return (
<div style={{textAlign:'center'}}>
<h1 style={{ textAlign: 'center' }}>Banking System</h1>
<h6 style={{fontSize: '1.2rem'}}>Enter Your Name && Get Your Balance </h6>
<input
    type="text"
    className="form-control"
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
    placeholder="enter your name"
    onChange={handleChange}
  />
  <button
    style={{ 
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
    onClick={getBalance}
  >
    Get My Balance
  </button>
  <h3
    style={{
      margin: '0.5%',
      color: balance > 0 ? 'green' : 'red'
    }}
  >
    Your balance:<span style={{ fontWeight: 'bold' }}>{balance}</span>{' '}
  </h3>
</div>

  );
};

export default MyBalance;

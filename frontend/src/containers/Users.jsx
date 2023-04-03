import React from 'react';

function Users({ data, name, transfer }) {
  return (
    <div>
      <h2>List of users</h2>
      <table className="table table-dark table-striped">
        <thead>
          <tr><th>user</th></tr></thead>
        <tbody>
          {data.map(e => <tr key={e.id}><td onClick={transfer}>{e.name}</td></tr>)}
        </tbody>
      </table>
    </div>
  );
}
export default Users;
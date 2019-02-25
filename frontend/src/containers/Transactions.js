import React, { Component } from "react";
import { PageHeader, Table } from "react-bootstrap";

class Transactions extends Component {
    constructor(props) {
        super(props);

        this.state = {
          transactions: [],
        };
    }

    componentDidMount() {
        fetch(`http://localhost:4000/api/transactions?user=${this.props.location.state.user}`)
        .then(res => res.json())
        .then(transactions => (this.setState({transactions})))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="trans">
                <PageHeader>Your Transactions</PageHeader>
                <Table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Transaction</th>
                            <th>Deposit</th>
                            <th>Credit</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.transactions.map(tran => <tr>
                            <th>{tran.date}</th>
                            <th>{tran.transaction}</th>
                            <th>{tran.deposit}</th>
                            <th>{tran.credit}</th>
                            <th>{tran.balance}</th>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Transactions;

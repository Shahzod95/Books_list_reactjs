import React, { Component } from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';

import {GlobalProvider} from './context/GlobalState';

import './App.css';

export default class App extends Component {
    render() {
        return (
            <GLobalProvider>
                <Header />
                <div className='container'>
                    <Balance />
                    <IncomeExpenses />
                    <TransactionList />
                    <AddTransaction />
                </div>
            </GLobalProvider>
        );
    }
}
import React, { Component } from 'react';
import RowWithIcon from './RowWithIcon.js';
import './App.css';

import AccessAlarmIcon from 'material-ui-icons/AccessAlarm';
import AccountBoxIcon from 'material-ui-icons/AccountBox';
import DeleteIcon from 'material-ui-icons/Delete';
import DashboardIcon from 'material-ui-icons/Dashboard';
import TranslateIcon from 'material-ui-icons/Translate';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Icons catalog</h1>
                </header>
                <RowWithIcon icon={<AccessAlarmIcon />} />
                <RowWithIcon icon={<AccountBoxIcon />} />
                <RowWithIcon icon={<DeleteIcon />} />
                <RowWithIcon icon={<DashboardIcon />} />
                <RowWithIcon icon={<TranslateIcon />} />
            </div>
        );
    }
}

export default App;

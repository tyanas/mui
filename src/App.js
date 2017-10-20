import React, { Component } from 'react';
import RowWithIcon from './RowWithIcon.js';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AccessAlarmIcon from 'material-ui-icons/AccessAlarm';
import AccountBoxIcon from 'material-ui-icons/AccountBox';
import DeleteIcon from 'material-ui-icons/Delete';
import DashboardIcon from 'material-ui-icons/Dashboard';
import TranslateIcon from 'material-ui-icons/Translate';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
});


class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Icons catalog</h1>
                </header>
                <RowWithIcon icon={<AccessAlarmIcon />} />
                <RowWithIcon icon={<AccountBoxIcon />} />
                <RowWithIcon icon={<DeleteIcon />} />
                <RowWithIcon icon={<DashboardIcon />} />
                <RowWithIcon icon={<TranslateIcon />} />
                <CircularProgress
                    className={classes.progress}
                    color="accent"
                    size={350}
                    mode="indeterminate"
                    thickness={55}
                />
            </div>
            </BrowserRouter>
        );
    }
}

export default withStyles(styles)(App);

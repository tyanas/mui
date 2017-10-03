import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import cyan from 'material-ui/colors/cyan';
import grey from 'material-ui/colors/grey';
import common from 'material-ui/colors/common';
import { fade } from 'material-ui/styles/colorManipulator';

const cyan500 = cyan['500'];
const grey500 = grey['500'];
const white = common.white;
const styles = theme => ({
    root: {
        margin: theme.spacing.unit
    },
    icon: {
        paddingRight: theme.spacing.unit
    },
    flatPrimary: {
        color: cyan500,
        '&:hover': {
            backgroundColor: fade(grey500, 0.2),
            // Reset on mouse devices
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            }
        }
    },
    // https://github.com/callemall/material-ui/blob/v1.0.24/src/Button/Button.js#L85
    raisedPrimary: {
        backgroundColor: cyan500,
        '&:hover': {
            backgroundColor: fade(cyan500, 0.4),
            // Reset on mouse devices
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            }
        }
    }
});

class ButtonV0 extends Component {
    render() {
        return (
            <Button 
                dense={this.props.dense} 
                disabled={this.props.disabled} 
                raised={this.props.raised} 
                color={this.props.color} 
                classes={{
                    root: this.props.classes.root,
                    flatPrimary: this.props.classes.flatPrimary,
                    raisedPrimary: this.props.classes.raisedPrimary,
                }}
                >
                <span  className={this.props.classes.icon}>{this.props.icon}</span>
                {this.props.label}
            </Button>
        );
    }
}

ButtonV0.propTypes = {
    // raised: PropTypes.object.Boolean,
    // icon: PropTypes.object.isRequired,
    // label: PropTypes.object.String,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonV0);

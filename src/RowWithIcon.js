import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import ButtonV0 from './ButtonV0.js';
import IconButton from 'material-ui/IconButton';
import Link from 'react-router-dom/Link';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class RowWithIcon extends Component {
    constructor(props) {
        super(props);
        this.classes = props.classes;
        this.name = this.props.icon.type.displayName.substr(5, this.props.icon.type.displayName.length - 6);
    }

    render() {
        return (
            <div>
                <span style={{ width: '130px', overflow: 'hidden', display: 'inline-block' }}>{this.name}</span>
                <IconButton color="primary" className={this.classes.button} aria-label={this.name}>
                    {this.props.icon}
                </IconButton>
                <Button raised color="primary" className={this.classes.button}>
                    {this.props.icon}
                    Primary
                </Button>
                <Button color="primary" className={this.classes.button}>
                    {this.props.icon}
                    flat Primary
                </Button>
                <Button raised dense className={this.classes.button}>
                    {this.props.icon}
                    Default dense
                </Button>
                <Button raised color="accent" disabled className={this.classes.button}>
                    {this.props.icon}
                    Disabled
                </Button>
                <Link to="/">
                <Button fab color="primary" aria-label={this.name} className={this.classes.button}>
                    {this.props.icon}
                </Button>
                </Link>
                <Button fab color="default" aria-label={this.name} className={this.classes.button}>
                    {this.props.icon}
                </Button>
                <Button fab color="accent" aria-label={this.name} className={this.classes.button}>
                    {this.props.icon}
                </Button>
            </div>
        );
    }
}

RowWithIcon.propTypes = {
    icon: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RowWithIcon);

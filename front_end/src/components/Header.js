import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = ({
  root: {
    flexGrow: 1
  }
});

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: this.props.header_name,  //value is initalized in parent component (app.js)
      color: this.props.header_color  //value is initalized in parent component (app.js)
    }
  }

  render() {
    return (
      <div style={styles.root}>
        <AppBar position="static" color={this.state.color}>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              {this.state.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Header;
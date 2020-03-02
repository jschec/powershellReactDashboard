import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

class Counts extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            title: this.props.count_label, //value is initalized in parent component (app.js)
            count: this.props.count_value  //value is initalized in parent component (app.js)
        }
    }

    render() {
        return (
            <Card>
                <CardHeader
                        title={this.state.title}
                />
                <Divider variant="middle" />
                <CardContent>
                    <Typography variant="h2" component="h2">
                        {this.state.count}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default Counts; 
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { RadialChart, Hint } from 'react-vis';
import CardHeader from '@material-ui/core/CardHeader';
import '../../node_modules/react-vis/dist/style.css';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

class PieChart extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
            title: this.props.chart_title,  //value is initalized in parent component (app.js)
            data: this.props.chart_data,    //value is initalized in parent component (app.js)
            processed_data: [],
            hint: false,
      }
    }

    componentDidMount() {
        /*
            When component is initalized... data is restructured to
            fit pie chart
        */
        const data_copy = this.state.data;
        var new_data = [];
        for (let item of data_copy) {
            var data_row = {
                angle: item["Size(GB)"],
                label: item["Name"]
            };
            new_data.push(data_row);
        };
        this.setState({processed_data: new_data});
    }

    render() {
        return (
            <Card>
                <CardHeader
                    title={this.state.title}
                    //subheader="Placeholder subheader"
                />
                <Divider variant="middle" />
                <CardContent>
                    <Grid 
                        container 
                        direction="column" 
                        justify="center"
                        alignItems="center">
                        <RadialChart
                            data={this.state.processed_data}
                            innerRadius={100}
                            radius={140}
                            getAngle={d => d.angle}
                            width={300}
                            height={300}
                            onValueMouseOver={v => this.setState({hint: v})}
                            onSeriesMouseOut={v => this.setState({hint: false})}
                            padAngle={0.04}
                        >
                            {this.state.hint !== false && <Hint value={this.state.hint} />}
                        </RadialChart>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}

export default PieChart; 
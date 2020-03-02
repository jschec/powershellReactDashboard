import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { 
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries 
} from 'react-vis';
import CardHeader from '@material-ui/core/CardHeader';
import '../../node_modules/react-vis/dist/style.css';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

class BarChart extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
            title: this.props.chart_title,  //variable set in parent component (app.js)
            data: this.props.chart_data,    //variable set in parent component (app.js)
            first_bar_data: [],
            second_bar_data: [],
            hint: false,
      }
    }

    componentDidMount() {
        /*
            When component is initalized... data is restructured to
            bar pie chart
        */
        const data_copy = this.state.data;
        var new_first_bar_data = [];
        var new_second_bar_data = [];
        for (let item of data_copy) {
            var first_bar_data_row = {
                x: item["Name"],
                y: item["Size(GB)"]
            };
            var second_bar_data_row = {
                x: item["Name"],
                y: item["Free(GB)"]
            };
            new_first_bar_data.push(first_bar_data_row);
            new_second_bar_data.push(second_bar_data_row);
        };
        this.setState({first_bar_data: new_first_bar_data, second_bar_data: new_second_bar_data});
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
                        <XYPlot margin={{bottom: 70}} xType="ordinal" width={300} height={300}>
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis tickLabelAngle={-45} />
                            <YAxis />
                            <VerticalBarSeries
                                data={this.state.first_bar_data}
                            />
                            <VerticalBarSeries
                                data={this.state.second_bar_data}
                            />
                        </XYPlot>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}

export default BarChart; 
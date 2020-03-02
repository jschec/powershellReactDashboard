import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import 'typeface-roboto';

// our own imported components
import { Header, PieChart, BarChart, Table, LoadingAnimation, Counts } from './components';


const styles = ({
  /*
    Leverages react api to stylze component
    with css like elements
  */
  root: {
    flex: 1,
    overflow: 'hidden'
  },
  grid: {
    padding: 20
  }
});

class App extends Component {
  
  state = {
    table_data: [],
    isLoading: true,
    column_names: [
      { title: "Computer", field: "Computer" },
      { title: "Format", field: "Format" },
      { title: "Free(%)", field: "Free(%)" },
      { title: "Free(GB)", field: "Free(GB)" },
      { title: "Label", field: "Label" },
      { title: "Name", field: "Name" },
      { title: "Size(GB)", field: "Size(GB)" },
      { title: "Type", field: "Type" }
    ]
  }

  componentDidMount() {
    /*
      On the initalization of this component, a function calling the api
      is executed. Thus a powershell command is being executed and its
      results are returned everytime this web page is navigated to. Successful
      rest API call will allow for the isLoading state to be set to false and
      the contents of the web page to be shown
    */
    this.fetchApiData()
      .then(res => this.setState({ table_data: JSON.parse(res.data), isLoading: false }))
      .catch(err => console.log("api_error", err));
  }

  fetchApiData = async() => {
    /*
      Fetches data asynchroniously from node js api.
      Proxy is set to "localhost:4000" so that when fetch('/runPs1')
      is called... it makes concatenates that end point to the proxy
      which produces localhost:4000/runPs1. That end point runs a
      powershell command and returns its contents as json (instead of xml)
    */
    const response = await fetch('/runPs1');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    return body;
  }

  render() {

    return (
      //  if this.state is loading:
      //    display loading animation
      //  else:  
      //    display web page
      this.state.isLoading
      ? (<LoadingAnimation />)
      : (
        <div style={styles.root}>
            <Header
              header_name={"Dashboard Placeholder Title"}
              header_color={"primary"}
            />
            <Grid container spacing={3} style={styles.grid}>
              <Grid item xs={4}>
                <Counts
                  count_label="Number of computers"
                  count_value={1}
                />
                <div style={{height: 40}}></div> {/* A spacing element */}
                <Counts
                  count_label="Number of drives"
                  count_value={this.state.table_data.length}
                />
              </Grid>
              <Grid item xs={4}>
                <PieChart
                  chart_title={"Pie Chart Placeholder Title"}
                  chart_data={this.state.table_data}/>
              </Grid>
              <Grid item xs={4}>
                <BarChart
                  chart_title={"Bar Chart Placeholder Title"}
                  chart_data={this.state.table_data}/>
              </Grid>
              <Grid item xs={12}>
                <Table 
                  row_data={this.state.table_data} 
                  column_data={this.state.column_names}
                  table_title="Placeholder Title"
                />
              </Grid>
          </Grid>
        </div>
      )
    )
  }
};

export default App; 
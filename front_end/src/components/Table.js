import React from 'react';
import MaterialTable from 'material-table';

// Icons are imported through CLI package
// which introduces bloat to package but 
// allows for offline usage (doesn't need online to query
// another website's api containing these icons)
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import SaveAlt from '@material-ui/icons/SaveAlt';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Add from '@material-ui/icons/Add';
import Check from '@material-ui/icons/Check';
import FilterList from '@material-ui/icons/FilterList';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Remove from '@material-ui/icons/Remove';
import Clear from '@material-ui/icons/Clear';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: this.props.column_data,
      rows: this.props.row_data,
      title: this.props.table_title
    }
  }
  render() {
      return (
        <MaterialTable
          icons={{
            Add: Add,
            Check: Check,
            Clear: Clear,
            Delete: Delete,
            DetailPanel: ChevronRight,
            Edit: Edit,
            Export: SaveAlt,
            Filter: FilterList,
            FirstPage: FirstPage,
            LastPage: LastPage,
            NextPage: ChevronRight,
            PreviousPage: ChevronLeft,
            ResetSearch: Clear,
            Search: Search,
            SortArrow: ArrowUpward,
            ThirdStateCheck: Remove,
            ViewColumn: ViewColumn
          }}
          title={this.state.title}
          columns={this.state.columns}
          data={this.state.rows}        
          options={{
            exportButton: true,
            //grouping: true
          }}
        />
      )
    }
}

export default Table;
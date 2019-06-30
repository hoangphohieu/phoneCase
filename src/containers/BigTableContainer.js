import React, { Component } from 'react';
import { connect } from 'react-redux';
import BigTable from '../components/BigTable';
import * as action from './../actions';

function mapStateToProps(state) {

      return {
            items:state.items
      };
}
function mapDispatchToProps(dispatch) {
      return {
           getAllItems:()=>dispatch(action.getAllItemsAPI()),
           patchItem:(param)=>dispatch(action.patchitemAPI(param)),
           addNewItem:(param)=>dispatch(action.addNewItemAPI(param))
      };
}

class BigTableContainer extends Component {
      render() {
            return (
                  <React.Fragment>
                        <BigTable {...this.props} />
                  </React.Fragment>
            );
      }
}

export default connect(
      mapStateToProps,mapDispatchToProps
)(BigTableContainer);
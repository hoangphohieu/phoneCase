import React, { Component } from 'react';
import BangItems from './BangItems';
import _ from 'lodash';
class BanTo extends Component {
      render() {
            let  items  = this.props.itemsBanTo;
            
            let danhSachItem;
            items = _.orderBy(items, ['rePrint','phoneCase', 'idDesign'], ['asc','asc', 'desc']);
            
            items = _.chunk(items, 12);
            if (items !== undefined) {
                  danhSachItem=items.map((item,key)=><BangItems key={key} ban={"to"} itemsBang12Items={item}  numberTable={key} {...this.props} />)
            }
            return (<React.Fragment>
                  {danhSachItem}
            </React.Fragment>
            );
      }
}

export default BanTo;
import React, { Component } from 'react';
import MotBanInTo from './MotBanInTo';
class Bang12Items extends Component {

      render() {

            let items  = this.props.itemsBang12Items;
            let ban=this.props.ban;
            let danhSachItem;
            if (items !== undefined) {
                  danhSachItem = items.map((item, key) =>
                        <MotBanInTo
                              key={key}
                              id={item.id}
                              idClient={item.idClient}
                              amount={item.amount}
                              phoneCase={item.phoneCase}
                              idDesign={item.idDesign}
                              anyMore={item.anyMore}
                              rePrint={item.rePrint}
                              {...this.props}
                        />)
            }
            return (
                  <div>
                        
                        <div className="container-fluid mt-5">
                              <div className="container" style={{width:(ban=="to")?1000:700}}>
                                    <div className="row border_khung">
                                          <div className="col-12 border_khung" style={{height:70}}>
                                                <h1 >Bản {(this.props.ban==="to")?"to":"nhỏ"} : {this.props.numberTable +1}</h1>
                                          </div>
                                          {danhSachItem}
                                          
                                    </div>
                              </div>
                        </div>
                  </div>
            );
      }
}

export default Bang12Items;
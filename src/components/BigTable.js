import React, { Component } from 'react';
import BanTo from './BanTo';
import BanNho from './BanNho';
import ItemThua from './ItemThua';
import _ from 'lodash';

class BigTable extends Component {
      constructor(props) {
            super(props);
            this.state={printScreen:false}
      }
      
      componentDidMount() {
            this.props.getAllItems()
      }
       changeScreen =()=>{this.setState({printScreen:!this.state.printScreen})}

      render() {

            let items = this.props.items.listItem;

            let sumAmount, itemsBanTo, itemBanNho, itemThua;
            let amountAllPhoneCase = [];

            if (items != null) {
                  items = items.filter(item => (item.idClient !== undefined || item.amount !== undefined)); // lọc loại bỏ những item trắng

                  items = items.map(item => { return { rePrint: false, ...item, amount: parseInt(item.amount), anyMore: false } }) // chuyển amount từ string sang number, thêm trạng thái anyMore:0


                  sumAmount = items.reduce((sum, item) => { // tính tổng amount
                        return (sum + parseInt(item.amount))
                  }, 0);

                  items = items.map(item => { // đổi tên phoneCase cho ngắn gọn
                        if (item.phoneCase === undefined) return item
                        // iphone
                        else if (item.phoneCase.trim().toLowerCase().endsWith("ip6") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip6s") === true
                        ) return { ...item, phoneCase: "I 6" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("ip7") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("i phone 7") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("i phone 8") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("i phone8") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip8") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 7 8") === true
                        ) return { ...item, phoneCase: "I 7" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("ipx") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone x") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("i phone x") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("xs") === true
                        ) return { ...item, phoneCase: "I X" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("ip6plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip6splus") === true
                        ) return { ...item, phoneCase: "I 6+" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("ip7plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip8plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("7 8 plus") === true
                        ) return { ...item, phoneCase: "I 7+" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("xr") === true
                        ) return { ...item, phoneCase: "I XR" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("max") === true
                        ) return { ...item, phoneCase: "I MAX" }

                        // samsung
                        else if (item.phoneCase.trim().toLowerCase().endsWith("s7") === true
                        ) return { ...item, phoneCase: "S 7" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s8") === true
                        ) return { ...item, phoneCase: "S 8" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s9") === true
                        ) return { ...item, phoneCase: "S 9" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s10") === true
                        ) return { ...item, phoneCase: "S 10" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s7e") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s7 edge") === true
                        ) return { ...item, phoneCase: "S 7E" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s10e") === true
                        ) return { ...item, phoneCase: "S 10E" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s8plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s8 plus") === true
                        ) return { ...item, phoneCase: "S 8+" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s9plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s9 plus") === true
                        ) return { ...item, phoneCase: "S 9+" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s10plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s10 plus") === true
                        ) return { ...item, phoneCase: "S 10+" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("note 8") === true
                        ) return { ...item, phoneCase: "NOTE 8" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("note 9") === true
                        ) return { ...item, phoneCase: "NOTE 9" }
                        // huwei
                        else if (item.phoneCase.trim().toLowerCase().endsWith("p30 pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("p30p") === true
                        ) return { ...item, phoneCase: "H P30P" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("p20 pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("hwp20p") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("p20p") === true
                        ) return { ...item, phoneCase: "H P20P" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("mate 20pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("MATE20P") === true
                        ) return { ...item, phoneCase: "MATE20P" }

                        else return { ...item, phoneCase: item.phoneCase }
                  });   // hết đổi tên

                  for (let i = 0; i <= items.length - 1; i++) {  // lặp lại những item có amount >1
                        if (items[i].amount > 1) {
                              for (let j = 1; j < items[i].amount; j++) {
                                    items.push({ ...items[i], amount: 0 })
                              }
                        }
                  }

                  items = items.sort(function (a, b) { // lọc danh sách items theo idClient
                        var x = a.idClient.toLowerCase();
                        var y = b.idClient.toLowerCase();
                        if (x < y) { return -1; }
                        if (x > y) { return 1; }
                        return 0;
                  });

                  for (let i = 0; i < items.length - 1; i++) {
                        try {
                              if (items[i].idClient === items[i + 1].idClient || items[i].idClient === items[i - 1].idClient) {
                                    items[i].anyMore = true;
                              }
                        } catch (error) {

                        }

                  }


                  itemsBanTo = items.filter(item => {
                        return item.phoneCase === 'I 6+'
                              || item.phoneCase === "I 7+"
                              || item.phoneCase === "I XR"
                              || item.phoneCase === "I MAX"
                              || item.phoneCase === "S 8+"
                              || item.phoneCase === "S 9+"
                              || item.phoneCase === "S 10+"
                              || item.phoneCase === "NOTE 8"
                              || item.phoneCase === "NOTE 9"
                              || item.phoneCase === "H P30P"
                              || item.phoneCase === "H P20P"
                              || item.phoneCase === "MATE20P"
                  })

                  itemBanNho = items.filter(item => {
                        return item.phoneCase === "I 6"
                              || item.phoneCase === "I 7"
                              || item.phoneCase === "I X"
                              || item.phoneCase === "S 7"
                              || item.phoneCase === "S 8"
                              || item.phoneCase === "S 9"
                              || item.phoneCase === "S 10"
                              || item.phoneCase === "S 7E"
                              || item.phoneCase === "S 10E"

                  })

                  // itemThua = items.filter(item => {
                  //       return item.phoneCase !== 'I 6+'
                  //             && item.phoneCase !== "I 7+"
                  //             && item.phoneCase !== "I XR"
                  //             && item.phoneCase !== "I MAX"
                  //             && item.phoneCase !== "S 8+"
                  //             && item.phoneCase !== "S 9+"
                  //             && item.phoneCase !== "S 10+"
                  //             && item.phoneCase !== "NOTE 8"
                  //             && item.phoneCase !== "NOTE 9"
                  //             && item.phoneCase !== "H P30P"
                  //             && item.phoneCase !== "H P20P"
                  //             && item.phoneCase !== "I 6"
                  //             && item.phoneCase !== "I 7"
                  //             && item.phoneCase !== "I X"
                  //             && item.phoneCase !== "S 7"
                  //             && item.phoneCase !== "S 8"
                  //             && item.phoneCase !== "S 9"
                  //             && item.phoneCase !== "S 10"
                  //             && item.phoneCase !== "S 7E"
                  //             && item.phoneCase !== "S 10E"
                  //             && item.phoneCase !== "MATE20P"
                  // })


                  // lấy item thừa từ itemBanNho va itemBanTo
                  itemThua = _.difference(items, itemBanNho);
                  itemThua = _.difference(itemThua, itemsBanTo);

                  // đếm ốp
                  let allPhoneCase = [];
                  for (let j = 0; j < items.length; j++) { // lấy danh sách tên tất cả các đt trong items
                        if (allPhoneCase.indexOf(items[j].phoneCase) === -1)
                              allPhoneCase.push(items[j].phoneCase)
                  }

                  for (let j = 0; j < allPhoneCase.length; j++) {
                        let onePhoneCase = items.filter(item => { return item.phoneCase === allPhoneCase[j] })
                        amountAllPhoneCase.push(
                              <tr key={j}>
                                    <th scope="row">{j + 1}</th>
                                    <td className="cot_row">{allPhoneCase[j]}</td>
                                    <td className="cot_row">{onePhoneCase.length}</td>
                              </tr>)



                  }



            } // het if item!==undefined

            return (
                  <React.Fragment>
                        <h1>Tổng tất cả: {sumAmount}</h1>
                        <button type="button" className="btn btn-primary" onClick={this.changeScreen}>đổi theme</button>
                        <ItemThua itemsThua={itemThua} {...this.props} />
                        <BanTo itemsBanTo={itemsBanTo} printScreen={this.state.printScreen} {...this.props} />
                        <BanNho itemsBanNho={itemBanNho} printScreen={this.state.printScreen} {...this.props} />

                        <h2 style={{textAlign:'center', marginTop:50}}>Tổng tất cả: {sumAmount}</h2>
                       

                        <table className="table table-striped table_amounts">
                              <thead>
                                    <tr>
                                          <th scope="col">STT</th>
                                          <th scope="col">TÊn</th>
                                          <th scope="col">SỐ LƯỢNG</th>
                                    </tr>
                              </thead>
                              <tbody>
                              {amountAllPhoneCase}
                              </tbody>
                        </table>

                  </React.Fragment>
            );
      }
}

export default BigTable;
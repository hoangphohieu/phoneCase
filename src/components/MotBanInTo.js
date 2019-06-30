import React, { Component } from 'react';
import copy from 'copy-to-clipboard';
class ItemBanTo extends Component {

      tempAlert = (msg, duration) => {
            var el = document.createElement("div");
            el.setAttribute("style", "position:fixed;z-index:1000;top:10px;left:46%;background-color:#80ced6;padding:10px;font-size:2rem;color:white");
            el.innerHTML = msg;
            setTimeout(function () {
                  el.parentNode.removeChild(el);
            }, duration);
            document.body.appendChild(el);
      }

      copyVanban = (param) => {
            copy(param);
            this.tempAlert(param, 200);
      }
      inLai = (param) => {
            this.props.addNewItem(param)
      }

      render() {

            let {ban, id, idDesign, idClient, rePrint, anyMore, phoneCase } = this.props;
            
            return (
                  <div className={((ban==="to")?"col-3":"col-6")+"  border_khung mot_ban_to "} style={{ height: 150, position: 'relative' }}>
                        {/* <button type="button" className="btn btn-primary" style={{ position: "absolute" }} onClick={() => this.inLai({ idDesign, idClient, amount: 1, phoneCase,rePrint:true })}>lại</button> */}
                        <p className={"p_ban_to " + ((anyMore === true) ? "any_more " : "") + ((rePrint === true) ? "no_underline" : "")} onClick={() => this.copyVanban(idClient)}>{idClient}</p>
                        <p className="p_ban_to">{phoneCase}</p>
                        <p className="p_ban_to" onClick={() => this.copyVanban(idClient)}>{idDesign}</p>
                  </div>
            );
      }
}

export default ItemBanTo;
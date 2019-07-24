import React, { Component } from "react";
import Pie from "./PieChart_component";
import Pie1 from "./AreaChart_component";
import "./Main_styles.css";
class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="row text-center border ">
          <div className="col-6 col-xs-6 border">
            <i class="fas fa-donate fa-5x" />
            <span>Currency Convertor</span>
          </div>
          <div className="col-6 col-xs-6 border">
            <i class="fas fa-calendar-alt fa-5x" />
            <span>Recent Activites</span>
          </div>
        </div>

        <div className="row text-center border ">
          <div className="col-sm-6 border">
            <div className="cen">
              <Pie1 />
            </div>
            <span>Time spend in total</span>
          </div>
          <div className="col-sm-6 border">
            <div className="cen">
              <Pie />
            </div>
            <span>Time saving</span>
          </div>
        </div>

        <div className="row text-center border ">
          <div className="col-6 col-xs-6 border">
            <i class="fas fa-list-ul fa-5x" />
            <span>Favourite Snipp</span>
          </div>
          <div className="col-6 col-xs-6 border">
            <i class="fas fa-list-ul fa-5x" />
            <span>Favourite Clause</span>
          </div>
        </div>

        <div className="row text-center border ">
          <div className="col-6 col-xs-6 border">
            <i class="fas fa-user fa-5x" />
            <span>FAQ's</span>
          </div>
          <div className="col-6 col-xs-6 border">
            <i class="fas fa-user-cog fa-5x" />
            <span>Prefs</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

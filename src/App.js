import { Component } from "react";
import { AiFillPrinter } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import ItemsComponent from "./components/ItemsComponent";
import data from './data.json'

import Header from "./components/Header";
import "./App.css";

class App extends Component {

  render() {
  
    return (
      <div className="main-container">
       
        <Header />
        <div className="home-container">
          <div className="input-container">
            <div className="left-con">
              <input
                type="search"
                className="searchs"
                placeholder="Search..."
              />
              <button className="search-button"> <BiSearchAlt2 className="search-icon" /> </button>
              
            </div>

            <div className="right-con">
              <button className="add-button">Add item</button>
              <div>
                <AiFillPrinter className="printer-icon" />
              </div>
            </div>
          </div>
        <div className="item-table-container">
          <ul className="items-table">
         
            <li className="table-header">
              
              <p className="p-name">Product Name</p>
              <hr/>
              <p className="brand">Brand</p>
              <hr/>
              <p className="price">Price</p>
              <hr/>
              <p className="qunatity">Quantity</p>
              <hr/>
              <p className="total">Total</p>
              <hr/>
              <p className="status">Status</p>
            </li>

            {data.map(each => (
              <ItemsComponent details={each} key={each.id} onRight={this.onRight}/>
            ))}
          </ul>
        </div>
          
        </div>
      </div>
    );
  }
}
export default App;

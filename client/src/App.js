import React, { Component } from 'react';
import ReactTable from "react-table";
import api from "./services/api";
import Main from "./pages/main";
import "react-table/react-table.css";
import Routes from "./routes";


class App extends Component {
  
  render() {
    return (
      <div  style={{"background-color":"#ffff", border:"30px"}}>
            <div style={{"background-color":"#993333", padding:"10px"}}>
                <h1 style={{color:"#ffff", "text-align":"center"}}>PersonalNotes</h1>
            </div>
            <div style={{color:"993333","background-color":"#ffff", "text-align":"center", padding:"20px",margin:"25px", "padding-bottom":"365px"}}>
              <Routes />
            </div>
      </div>            
    )

  }
}

export default App;

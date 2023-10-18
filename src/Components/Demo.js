import React, { Component } from "react";
import imageSrc from './images/clr1.png';
import mul from './images/mul.png';
import divi from './images/div.png';
import sub from './images/sub.png';
import add from './images/add.png';
import './styele.css';

class Demo extends Component {
  handle = (value) => {
    if (value === "=") {
      try {
        const result = eval(this.state.num);
        this.setState({ num: result.toString(), res: "" }, () => {
          const resElement = document.getElementById("res");
          resElement.innerHTML = result.toString();
        });
      } catch (error) {
        this.setState({ num: "Error", res: "" }, () => {
          const resElement = document.getElementById("res");
          resElement.innerHTML = "Error";
        });
      }
    } else if (value === "clr") {
      this.setState({ num: "", res: "" }, () => {
        const resElement = document.getElementById("res");
        resElement.innerHTML = "";
      });
    } else {
      this.setState((prevState) => ({
        num: prevState.num + value
      }));
    }
  }
  
  
  constructor(props) {
    super(props);
    this.state = {
      num: ""
    };
  }

  render() {
    return (
  <div>
  <section>
    <aside className="aone">
    <div className="lone"> </div>
    <div className="ltwo"> </div>
    <div className="lthree"> </div>
    <div className="lfour"> </div>
    </aside>
  <div className="buttons">
          <p id="inp">&nbsp; {this.state.num}</p>
          <p id="res">&nbsp;</p> {/* Use "num" here instead of "nums" */}
          <div className="ff">
          <div className="top">
                <button onClick={() => this.handle("7")}>7</button>
                <button onClick={() => this.handle("4")}>4</button>
                <button onClick={() => this.handle("1")}>1</button>
                <button onClick={() => this.handle("0")}>0</button>
              </div>
              <div>
                <button onClick={() => this.handle("8")}>8</button>
                <button onClick={() => this.handle("5")}>5</button>
                <button onClick={() => this.handle("2")}>2</button>
                <button onClick={() => this.handle(".")}>.</button>
              </div>
              <div>
                <button onClick={() => this.handle("9")}>9</button>
                <button onClick={() => this.handle("6")}>6</button>
                <button onClick={() => this.handle("3")}>3</button>
                <button onClick={() => this.handle("=")}>=</button>
              </div>

          <div className="operators">
          <button onClick={() => this.handle("+")}><img src={add} alt="Image Alt Text" /></button>
            <button onClick={() => this.handle("/")}><img src={divi} alt="Image Alt Text" /></button>
            <button onClick={() => this.handle("*")}><img src={mul} alt="Image Alt Text" /></button>
            <button onClick={() => this.handle("-")}><img src={sub} alt="Image Alt Text" /></button>
            <button onClick={() => this.handle("clr")}> <img src={imageSrc} alt="Image Alt Text" /> </button>
          </div>
              
          </div>
        </div>
      <aside className="atwo">
        <div className="rone"> </div>
             <div className="rtwo"> </div>
              <div className="rthree"> </div>
               <div className="rfour"> </div>
        </aside>
        
  </section>
      </div>
    );
  }
}
export default Demo;

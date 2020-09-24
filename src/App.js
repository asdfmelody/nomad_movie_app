import React from 'react';
import PropTypes from "prop-types";
//import Potato from "./Potato"; //how to make component
//only one component can be used -> App안에 써야함

class App extends React.Component{ //class component사용 이유 - state객체. 동적 데이터 생성 가능. heap 사용하는 곳. 
  state={ //데이터가 계속 바뀌는 변수일 경우 state를 사용해야한다 = class componeent사용해야한다.
    count : 0 //하지만 state변수는 direct하게 변경 안됨 (count = 1 불가)
  }

  add = () =>{
    //this,state.count=1; 안된다. //직접적으로 바꾸는거 불가 -> 새로운 state로 refresh안됨
    this.setState(current => ({count: current.count +1})); //setState를 이용해야한다
    console.log("add"); //this.state.count를 이용하는 대신에 current를 이용하여 current.count 이용
  };
  minus = () =>{
    //this,state.count=-1; 안된다 //직접적으로 바꾸는거 불가 > 새로운 state로 refresh안됨
    this.setState(current=>({count: current.count -1})); //setState를 이용해야한다
    console.log("minus");};

  render(){ //!!!!setState를 호출할때마다 react는 새로운 state와 함께 render function을 호출!!!!!!
    return <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div> //this.state로 불러온다

  }
}

export default App;

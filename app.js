import React from "react";
import ReactDOM from "react-dom/client";

// const element=React.createElement("h1",{id:"first",className:"mera",style:{color:"blue",backgroundColor:"yellow",fontSize:"30px"}},"my name is prashant bhardwaj");

// const element2=React.createElement("h1",{id:"first",className:"mera",style:{color:"blue",backgroundColor:"yellow",fontSize:"30px"}},"my name is prashant bhardwaj from AIMT");

// const element3=React.createElement("h1",{id:"first",className:"mera",style:{color:"blue",backgroundColor:"yellow",fontSize:"30px"}},"my name is prashant bhardwaj from Sec C");

// // document.querySelector("#root");
// ReactDom.render(element,document.querySelector('#root'))
// upper line is not supported in react 18 it is supported for the react 17 or less

// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(element)
// root.render(element2)
// it does not print both element as it i do render another time then they do change and print element2

// This is by design. In React 18, rendering again on the same root always replaces the previous tree,
//  instead of appending like you might expect from vanilla JS.

// const container = React.createElement("div", {id:"second"}, [element, element2,element3]);
// root.render(container)
// yeh bhut bekar ho jayeg readble nhi rahega mano div ke aandar div ke nadar h1  tag ke nadar p tag bahut complex ho jayega


// JSX:javascript XML


const name="Prashant Bhardwaj";
const obj={
    age:27,
    company:"AIMT"
}
const root = ReactDOM.createRoot(document.querySelector("#root"));

// react based component

const newElement=(
    // <div>
<>
   <h1 id="mera" className="mera2" style={{backgroundColor:"yellow",color:"blue"}} >Hello coder {name} {obj.company} </h1>
    <h2>Maja aaay mujhe</h2>
      </>
    // </div>
  
)

// function based component
function greet(){
    return <h1>aur bhai kaise</h1>
}

const a=greet();
    
root.render(newElement)



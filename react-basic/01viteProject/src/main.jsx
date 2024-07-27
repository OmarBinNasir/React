import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){ // without using the App
  return (
    <div>
      <h1>kill you</h1>
      </div>
  )
}

// const ReactElement = 
//   {
//     type:'a',
//     props:{
//         href:"https://google.com",
//         target:"_self"
//     },
//     children:"click me to go to google"
// } // react element object (our own custom)

const anotherElement = (
  <a href="https://google.com" tagret="_blank">visit google</a>
)

const reactElement = React.createElement("a",{ 
  href:"https://google.com",
  target:"_blank"
  },
  "visit google after clicking",
  anotherElement // evaluated expression where variables are injected
) // babble injects this code

ReactDOM.createRoot(document.getElementById('root')).render(
 //<App/>
   reactElement // this will work 
 //<ReactElement/> // wont work because react .render() accepts object in diffrent order when it is converted into a tree
 // anotherElement this will work
   // <MyApp/>  
  // MyApp() my app can also be used this way
)

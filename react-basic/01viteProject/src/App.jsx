import { Ww2 } from "./Chai.jsx"

function App() { 
  const username = "we will miss you fuhrer"

  return (
    <>

    <Ww2/>
    <h1>lol boll {username}</h1> // this is called evaluated expression (no if or for, it should be finished product)
    </>
  ) // only single element needs to be exported wrap them under fragment
}

export default App

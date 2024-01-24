import Heading from "./components/Heading"
import Section from "./components/Section"
import Counter from "./components/Counter"
import { useState } from "react"
import List from "./components/List"

 //this is our own func components with props being passed through
 // anything inbetween tags is a child
function App() {
  
  const  [acount, setCount] = useState<number>(1)
  return (

    <>
   
      <Heading title={"hello"}/>
      <Section name={'hhhhhh'}> hello there</Section>
      <Counter setCount = {setCount}>Counter is {acount}</Counter>
      <List items={["yo", "hilo", "array"]} render={(item:string) => 
      <span className="bold">{item}</span> }/>

    </>
  )
}

export default App

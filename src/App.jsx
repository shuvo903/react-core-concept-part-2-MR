
import './App.css'
import Batsman from './Batsman';
import Counter from './Counter';
import Users from './Users';

function App() {

  function handleClick() {
    alert('I am Clicked')
  }

  // const handleClick3 = () => {
  //   alert('Clicked 3')
  // }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>

      <h3>Vite + React</h3>


      <Users></Users>

      
      <Batsman></Batsman>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>

      {/* <button onClick={handleClick3}>Click Me 3</button> */}

      <button onClick={() => handleAdd5(10)}>Click Me 4</button>
    </>
  )
}

export default App

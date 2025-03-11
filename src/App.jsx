import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("rtert");
  }, []);

  return (
    <>
      <h1>Hello, React Hooks!</h1>
    </>
  );
}

/*
const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};

const [count, setCount] = useState(0);
const handleIncrement = () => {
  setCount(prev => prev + 1);
};

return (
  <>
    <button onClick={handleIncrement}>Increment</button>
    <p>{count}</p>
  </>
);
*/

export default App;

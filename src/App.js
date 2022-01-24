import logo from './logo.svg';
import './App.css';
import { RiProductHuntFill, RiProductHuntLine } from 'react-icons/ri';
import Products from './component/Products';
import { useEffect, useState } from 'react';


function App() {
  const [state,setState] = useState([]);
  const fetchData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=>{
      const filterData = data.filter((dat)=>dat.id<10);
      setState(filterData);
    })
  }
  useEffect(()=>{
    async function renderdata(){
      await fetchData();
    }
    renderdata();
  },[])
 
  console.log(state);
  
  return (
    <div className="App">
      <header className="App-header">
        <div className='flex flex-row justify-center align-middle'>
          <RiProductHuntFill className="text-3xl text-center"/>
          <h1 className="text-3xl">Items</h1>
        </div>
        <Products state={state}/>
      </header>
    </div>
  );
}

export default App;

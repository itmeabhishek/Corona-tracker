import {useState, useEffect} from 'react';
import ButtonComp from './buttonComp';
import {useSelector,useDispatch} from 'react-redux';
import {updateStateData} from './actions/index';
import './App.css';

function App() {
  const [list,setList] = useState([]);
  // const [response,setResponse] = useState([]);
  const dispatch = useDispatch();
  const stateData = useSelector(state=>state.stateReducer);
  /*const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');

app.get('/getCharts', (req, res) => {
  const API = "https://api.deezer.com/chart";
  axios(API)
    .then(response => {
      console.log(response.data)
      res.json(response.data)
    }).catch(err => {
      res.send('errr!!!')
    })
})

app.listen(port, () => console.log(`Server running on http://localhost:${port}`)) 
  */
  useEffect(()=>{
    const fetchData = async() =>{
      // axios(config)
      //   .then(response => {
      //       setData(response);
      //       console.log(data)
      const api_call = await fetch(`https://cors-anywhere.herokuapp.com/` +`https://api.covid19india.org/state_district_wise.json`,{
      });
      const responseAPI = await api_call.json();
      console.log(responseAPI)
      // setResponse(responseAPI)
      dispatch(updateStateData(responseAPI))
      // console.log(list);
      
    }

     fetchData();
  },[])
  useEffect(()=>{
    if(stateData?.data){
    const arr = Object.keys(stateData.data)
    setList(arr)
  }
  },[stateData])
  
 
  return (
    <div className="App">
         
             <div class="wrapper">
  <nav>
    <a href="#" class="logo"><h1>Corona Tracker</h1></a>
    <ul>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Blogs</a>
      </li>
      <li>
        <a href="#">Precautions</a>
      </li>
      <li>
        <a href="#">FAQ</a>
      </li>
      <li>
        <a href="#">Contacts</a>
      </li>
    </ul>
  </nav>
</div>
<center>
      <div className="card" style={{overflow:'auto'}}>
      {list.length!== 0 ? list.map((data) =>
      <ButtonComp name={data} key={data} response={stateData.data[data]}/>
      ):<h2>No content avaliable....</h2>}
      </div>
      </center>
     </div>
  
  );
}

export default App;

import {React,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
// import updateStateData from './actions/index';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import {updateDistrictData,updateStateData} from './actions/index';

function MultiButtons(props){
   const {name,response} = props
   const Ddata= useSelector((state)=>state.stateReducer);
   const dispatch = useDispatch();
   const fetchSum = () =>{
   
    dispatch(updateStateData(response.districtData))
}
useEffect(()=>{
  console.log(Ddata.data)
},[])
// console.log("hello"+Ddata)
const history = useHistory()
 console.log({props})   
return(

  
  <div className="button">
     {/* {console.log("hello"+Ddata)}  */}
        <Button style={{width:'100%'}}  variant="contained" size="large" color="white" key={name} value={name} 
        onClick={()=>{
        fetchSum();
        history.push(`/page2`)}}>
          {name}
        </Button>
        
    </div>
)
}
export default MultiButtons;
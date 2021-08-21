const stateReducer = (state={},action) =>{
switch(action.type){
    case "Update state data":
    return {...state,data:action.payload};
    case "Update_district_data":
        return {...state,districtData:action.payload}
    default : return state;
};
}
export default stateReducer;
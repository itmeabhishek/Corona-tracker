const updateStateData=(data)=>{
    return {type:"Update state data",
            payload:data};
}
const updateDistrictData=(data)=>{
    return {type:"Update_district_data",
            payload:data};
}
export {
    updateDistrictData,
    updateStateData
};

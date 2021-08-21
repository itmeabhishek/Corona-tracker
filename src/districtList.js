import { React, useState, useEffect } from 'react';
import './districtList.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import highchartsRender from './HighchartsRenderer';
import { updateDistrictData } from './actions/index';
// import { chart } from 'highcharts';
const Statewise = () => {
    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.stateReducer);
    console.log(data);
    const arr = data ? Object.keys(data) : [];
    useEffect(() => {
       getGraphData()
        console.log(arr)
    }, []);
    const getGraphData = ()=>{
        // const fetchSum = () =>{
            // let arr = Object.keys(Ddata.data)
            let active = 0;
            let confirmed = 0;
            let deceased = 0;
            let recovered = 0;
            arr.forEach((el)=>{
              active+=data[el].active;
              confirmed+=data[el].confirmed;
              deceased+=data[el].deceased;
              recovered+=data[el].recovered;
              
            })
            highchartsRender("chart",[active,confirmed,deceased,recovered])
    }
    const history = useHistory()
    return (
        <div className="container-fluid-mt-5">
            <div className="main-heading">

                <div className="mb-5"><h1> Districtwise Data</h1></div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>District</th>
                                <th>active</th>
                                <th>confirmed</th>
                                <th>deceased</th>
                                <th>recovered</th>
                            </tr>
                        </thead>
                        <tbody>

                            {arr.length ? arr.map((el, index) => {
                                return (
                                    <tr>

                                        <td onClick={() => {
                                            history.push(`/page3`)
                                            dispatch(updateDistrictData({
                                                name: el,
                                                active: data[el].active,
                                                confirmed: data[el].confirmed,
                                                deceased: data[el].deceased,
                                                recovered: data[el].recovered
                                            }))
                                        }}>{el}</td>
                                        <td>{data[el].active}</td>
                                        <td>{data[el].confirmed}</td>
                                        <td>{data[el].deceased}</td>
                                        <td>{data[el].recovered}</td>
                                    </tr>
                                )
                            }) : <h1>Loading Data...</h1>}
                            
                            <div className="chart" id="chart"></div>
                            <h3>State Data Chart</h3>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Statewise
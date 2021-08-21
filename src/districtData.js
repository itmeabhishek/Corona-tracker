import React, { useEffect } from 'react';
import './districtData.css';
import { useSelector } from 'react-redux';
import HighchartsRenderer from './HighchartsRenderer'
function DistrictData() {
    // const [data,setData] = useState([])
    const { districtData } = useSelector((state) => state.stateReducer)
    useEffect(() => {
        HighchartsRenderer("district-chart",
            [
                districtData.active,
                districtData.confirmed,
                districtData.deceased,
                districtData.recovered,
            ])
    }, [])
    return (
        <div className="District-Data">
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>District</th>
                        <th>active</th>
                        <th>confirmed</th>
                        <th>deceased</th>
                        <th>recovered</th>
                    </tr>
                    <tr>
                        <td>{districtData.name}</td>
                        <td>{districtData.active}</td>
                        <td>{districtData.confirmed}</td>
                        <td>{districtData.deceased}</td>
                        <td>{districtData.recovered}</td>
                    </tr>
                </thead>
            </table>
            <div id="district-chart"></div>
            <h3>District-level</h3>
        </div>
    )
}
export default DistrictData;
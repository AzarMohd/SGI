import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import "./Screen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';




function Screen() {
    
    const [data, getData] = useState({});
    const[go,setGo] =useState('')
    const [id, setId] = useState();
    
    

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res);
                getData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])
    
    
    function reset(e){
        setGo("");
    }
    
    return (
        <div className='container-fluid'>

            <div className='bg-white box'>
                <span className='from'>From Date -<input className='date' type="date" /></span>
                <span className='from'>To Date -<input className='date' type="date" /> </span>
                <div className='box2'>
                    <span className='search'>
                        <FontAwesomeIcon className="icon" icon={faSearch} />
                        <input type="search" value={go} name="fname" onChange={e => setGo(e.target.value)} placeholder='search for docs...' className='input input-group-prepend' />

                    </span>
                </div>
                <div className='min'>
                    <button type="button" id='btn' onClick={()=>reset()} className="btn btn-warning">Reset<span className='fa fa-refresh' id='icon'></span></button>
                    <button type="button" id='btn' onClick={()=>setId(go)}className="btn btn-success">Go <span className="fa fa-play-circle" id='icon'></span></button>
                </div>

            </div>

            <div className='header'>
                Header Information</div>
            <div className='info' >

                <Table  className="table description  text-center">
                    <thead >
                        <tr className='bg-white'>
                            <th><i class="fa fa-cogs"></i>  Batch Number</th>
                            <th><i class="fa fa-tag"></i> Date of Birth</th>
                            <th><i class="fa fa-calendar-times-o"></i> Time</th>
                            <th><i class="fa fa-list"></i> Total Quantity</th>
                            <th><i class="fa fa-external-link"></i> Read More Info.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id='row'>
                            <td key={1}>{data.title}</td>
                            <td key={2}>{data.userId}</td>
                            <td key={3}>{data.id}</td>
                            <td key={4}>{data.body}</td>
                            <td key={5}><FontAwesomeIcon className='icons' icon={faArrowRightFromBracket} /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Screen
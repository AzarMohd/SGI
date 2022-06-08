import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import "./Screen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Screen() {
    const [id1, setId1] = useState(() => initials());
    const [id2, setId2] = useState(() => initials());
    const [go, setGo] = useState('');
    const [fun, setFun] = useState('');

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${fun}`)
        .then(res=>{
            console.log(res);
            setGo(res);
        })
        .catch(err=>{
            console.log(err);
        })
    },[fun])

    function play() {
        // let room = id1.toString()
        // let room2 =id2.toString()
        const fake=JSON.parse(go);
        fake.dob = new Date(fake.dob);//setDate(sets day of the month)
        const game= fake.dob.toJSON().slice(0,10).split("-").reverse().join("/");
        const show = game.slice(id1,id2);
        return setFun(show);
    }
    function reset() {
        setId1("");
        setId2("");
    }

    function initials() {
        var date = new Date();
        var showDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
        return showDate;
    }
    return (
        <div className='container-fluid'>

            <div className='bg-white box'>
                
                    <div className='box1'>
                        <span for="date">Start date</span>
                        <div className='input-group'>
                            <div className='input-group-prepend'>
                                <span className='input-group-text fa fa-calendar'>
                                </span>
                            </div>
                            <input type="text" name='date' value={id1} onChange={(e) => setId1(e.target.value)} id='date' placeholder='dd/mm/yyyy' className='form-control' ></input>
                        </div>
                    </div>
                    <div className='box1'>
                        <label for="date">To date</label>
                        <div className='input-group'>
                            <div className='input-group-prepend'>
                                <span className='input-group-text fa fa-calendar'>
                                </span>
                            </div>
                            <input type="text" name='date' value={id2} id='date' onChange={(e) => setId2(e.target.value)} placeholder='dd/mm/yyyy' className='form-control' />
                        </div>
                    </div>
                    <div className='max'>
                        <button type="button" id='btn' onClick={() => reset()} className="btn btn-warning">Reset<span className='fa fa-refresh' id='icon'></span></button>
                        <button type="button" id='btn' onClick={() => play()} className="btn btn-success">Go <span className="fa fa-play-circle" id='icon'></span></button>
                    </div>
                
            </div>

            <div className='header'>
                Header Information</div>
            <div className='info' >

                <Table striped bordered className="table description  text-left" >
                    <thead>
                        <tr >
                            <th><i class="fa fa-cogs"></i>  Batch Number</th>
                            <th><i class="fa fa-tag"></i> Date of Birth</th>
                            <th><i class="fa fa-calendar-times-o"></i> Time</th>
                            <th><i class="fa fa-list"></i> Total Quantity</th>
                            <th className='text-center'><i class="fa fa-external-link"></i> Read More Info.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id='row'>
                            <td  key={1}></td>
                            <td key={2}></td>
                            <td key={3}></td>
                            <td key={4}></td>
                            <td key={5} className="text-center"><FontAwesomeIcon className='icons' icon={faArrowRightFromBracket} /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Screen
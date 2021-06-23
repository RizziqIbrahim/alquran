import axios from 'axios';
import React, { useState, useEffect } from 'react';
const Surat = props => {
    const [data,setData] = useState([]);
    const [search,setSearch] = useState("");
    useEffect(() => {
        axios.get("https://api.npoint.io/99c279bb173a6e28359c/data").then(res => {
            setData(res.data)
        })
    })
    const click = id => {
        props.history.push('/' + id);
    }
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 info-panel">
                        <div class="row justify-content-center">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nama Surat</th>
                                <th scope="col">Arti</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                            data.length > 0 ?
                                data.map((param,index) => {
                                    return(
                                        
                                            <tr style={{cursor:'pointer'}}key={index} onClick={() => click(param.nomor)}>
                                                <td>{param.nomor}</td>
                                                <td>{param.nama}</td>
                                                <td>{param.arti}</td>
                                            </tr>
                                    )
                                })
                            :
                            <div class="row align-content-center justify-content-center">
                                <div class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        }
                            </tbody>
                            </table>
                        {/*  */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Surat;
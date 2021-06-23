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
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Al-Quran Indonesia</h1>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 info-panel">
                        <div class="row justify-content-center">
                        {
                            data.length > 0 ?
                                data.map((param,index) => {
                                    return(
                                        
                                            <div className="col-md-3 col-sm-12 info-surat" key={index} onClick={() => click(param.nomor)}>
                                                <h5>{param.nomor}.{param.nama}</h5>
                                                <p>{param.arti}</p>
                                            </div>
                                    )
                                })
                            :
                            <div class="row justify-content-center">
                                <div className="col-md-12 col-sm-12">
                                    <div class="spinner-border text-primary" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Surat;
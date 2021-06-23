import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Ayat = props => {
    const [data, setData] = useState ([]);

    const id = props.match.params.id
    useEffect(() => {
        axios.get("https://api.npoint.io/99c279bb173a6e28359c/surat/"+id+"").then(res => {
            setData(res.data)
        })
    })
    return(
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 info-panel">
                        <div className="row justify-content-center">
                            {
                                data.length > 0 ?
                                    data.map(param => {
                                        return(
                                            <div className="col-md-10 col-sm-10 mb-5 pb-4" key={param.nomor}>
                                                <h2 className="float-right">
                                                    {param.ar}
                                                </h2>
                                                <br/>
                                                <h5>
                                                    {param.nomor}.{param.id}
                                                </h5>
                                            </div>
                                        )
                                    })
                                    :
                                    <div class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ayat;
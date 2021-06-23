import React from 'react';

const Dashboard = props => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">
                        Al-Quran
                    </a>
                </div>
            </nav>
            <div className="div">
                {props.children}
            </div>
        </div>
    )
}

export default Dashboard;
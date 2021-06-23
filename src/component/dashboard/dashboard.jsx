import React from 'react';

const Dashboard = props => {
    return (
        <div>
            <div className="div">
                {props.children}
            </div>
        </div>
    )
}

export default Dashboard;
import React from "react";



function Project(props) {
    return (
        <div className="card bg-white">
            <img src={props.image} className="card-img" alt={props.name} />
            <div className="card-img-overlay">
                <ul>
                    <li><strong>Name:</strong> {props.name}</li>
                    <li><strong>Project:</strong> {props.project}</li>
                    <li><a href={props.deployment} target="_blank" rel="noreferrer">Click Here For Deployed Application</a></li>
                    <li><a href={props.repository} target="_blank" rel="noreferrer">Click Here For GitHub Repository</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Project;
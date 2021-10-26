import React from "react";



function Project(props) {
    return (
        <div className="card bg-dark text-white">
            <img src={props.image} className="card-img" alt={props.name} />
            <div className="card-img-overlay">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Project:</strong> {props.project}
                    </li>
                    <li>
                        <strong>Demo:</strong> {props.location}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Project;
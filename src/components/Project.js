import React from "react";



function Project(props) {
    return (
        <div class="col">
            <div className="card project__card">
                <img src={props.image} className="card-img" alt={props.name} />
                <div className="card-body project__card-body">
                    <ul className="project__card-details">
                        <li>{props.name}</li>
                        <li>{props.project}</li>
                        <li><a href={props.deployment} target="_blank" rel="noreferrer">Click Here For Deployed Application</a></li>
                        <li><a href={props.repository} target="_blank" rel="noreferrer">Click Here For GitHub Repository</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Project;
import React from "react";



function Project(props) {
    return (
        <div class="col">
            <div className="card project__card">
                <img src={props.image} className="card-img" alt={props.name} />
                <div className="card-body project__card-body">
                    <ul className="project__card-details">
                        <li className="project__name">{props.name}</li>
                        <li className="homework__name">{props.project}</li>
                        <li><a href={props.deployment} target="_blank" rel="noreferrer">Deployed Application</a></li>
                        <li><a href={props.repository} target="_blank" rel="noreferrer">GitHub Repository</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Project;
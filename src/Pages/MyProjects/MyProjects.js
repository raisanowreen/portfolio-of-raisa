import React from 'react';
import { Link } from 'react-router-dom';

const MyProjects = (props) => {
    const {id, projectName, img}= props.project;
    return (
        <div class="col">
        <div class="card bg-white">
          <img src={img} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{projectName}</h5>
            <Link to={`/projects/${id}`}><button type="button" class="btn btn-secondary">Details</button></Link>
          </div>
       
      </div>
      
        </div>
    );
};

export default MyProjects;
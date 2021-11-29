import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Projects = () => {
    const {projectId} = useParams();
    const [project, setProject] = useState({});

    useEffect( () =>{
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => {
            const p = data.find(m => m.id == projectId)
            setProject(p)
            console.log(data)
        })
    }, [projectId]);   
    
    return (
        <div class="col">
    <div class="card bg-white">
      <div>
      <img src={project.img} class="card-img-top" alt="..." style={{width: '50%'}}/>
      </div>
      <div class="card-body">
        <h5 class="card-title">{project.projectName}</h5>
<p>{project.details}</p>
      </div>

     
    </div>
  </div>
    );
};

export default Projects;
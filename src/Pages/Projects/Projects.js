import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

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
    <div class="card bg-dark text-white">
      <div>
      <div class="card-body w-50 mx-auto">
        <h5 class="card-title">{project.projectName}</h5>
<p>{project.details}</p>
<a href={project.live}><button type="button" class="btn btn-outline-primary me-3">Live Site</button></a>
<a href={project.gitClient}><button type="button" class="btn btn-outline-primary me-3">GitHub Code</button></a>
      </div>
        <div className="d-flex justify-content-around mt-5">      
        <img src={project.imgOne} class="card-img-top" alt="..." style={{width: '60%'}}/>
        <img src={project.imgTwo} class="card-img-top me-5 ms-5" alt="..." style={{width: '30%'}}/>

</div>
      
      <div className="d-flex justify-content-around mt-5"> 
      <img src={project.imgThree} class="card-img-top" alt="..." style={{width: '30%'}}/>
      </div>
      </div>
     

     
    </div>
  </div>
    );
};

export default Projects;
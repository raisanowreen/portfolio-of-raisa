import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../src/images/Raisa Nowreen Prome_resume.pdf';
import pic1 from '../../../images/p1.png';
import 'animate.css';
import './Banner.css'
import MyProjects from '../../MyProjects/MyProjects';



  
const Banner = () => {
    const [projects, setProjects] = useState([])

    useEffect(() =>{
        fetch('./projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[]);
   

   

    
    
    return (
        <div class="row w-100">
  <div class="col-sm-3">
    <div class="card bg-dark">
    <div class="card bg-dark h-100 mb-3 text-secondary sticky-top"  style={{backgroundColor: 'black' }}>
  <img src="https://i.ibb.co/D4ZzWbn/mew-xlw-icon.png" class="card-img-top pt-5 ps-5 pe-5" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Raisa Nowreen Prome</h5>
    <p class="card-text text-center">Full-Stack Web Developer</p>
    <Link to={logo} target="_blank" download><button type="button" class="btn btn-secondary ms-5 mb-4">Download Resume <i class="fas fa-download"></i></button></Link>
<br />
    <h5>Junior Level</h5>
    <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
    <hr />
    
    <ul class="list-group list-group-flush">
  <ol><i class="fas fa-check"></i> HTML, CSS, JS</ol>
  <ol><i class="fas fa-check"></i> React, Git, SPA</ol>
  <ol><i class="fas fa-check"></i> NodeJs, MongoDb</ol>
  <ol><i class="fas fa-check"></i> Bootstrap, Tailwind, MUi</ol>
</ul>
<hr />


   
    <div className="sticky-top">
    <button type="button" class="btn btn-secondary"><i class="fab fa-github ps-5 fs-2"></i> <i class="fab fa-linkedin-in pt-2 pb-2 ps-3 pe-3 fs-2"></i> <i class="fas fa-envelope ps-2 pe-5 fs-2"></i> </button>

    </div>

  </div>
</div>
    </div>
  </div>







  <div class="col-sm-9 pt-3">
 <div className="d-flex justify-content-end pb-3">
 <Link to="/contact"><button type="button" class="btn btn-outline-warning">Contact Me</button></Link>
 </div>

    <div class="card bg-secondary">

   


      <img src="https://i.ibb.co/wB414MH/hth.jpg" class="card-img" alt="..." style={{width: "100%"}}/>
  <div class="card-img-overlay text-white ms-5">
  <h2 className="animate__animated animate__fadeInDown pt-5">
      Hello!
    </h2>
    <h4 className="animate__animated animate__fadeInUp pb-3">I am Raisa</h4>
    <div class="typewriter">
  <h4 className="text-warning">I build web interfaces and functionalities</h4>
</div>
  </div>






  
    </div>

<h4 className="pt-3 pb-3 text-white">Projects</h4>
    <div class="row row-cols-1 row-cols-md-2 g-4">
    {
                projects.map(project => <MyProjects
                id= {projects.id}
                project= {project}
                ></MyProjects>)
            }
 
</div>


</div>
</div>
 


 

  

    );
};

export default Banner;
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../src/images/Raisa Nowreen Prome_resume.pdf'
import emailjs  from 'emailjs-com';

const Banner = () => {


    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_9txh0aa', 'template_95w0n4e', e.target, 'user_RouLsXm9fiMWA0rQC8BHp')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    e.target.reset()
    }
   

    
    
    return (
        <div class="row w-100">
  <div class="col-sm-3">
    <div class="card h-100">
    <div class="card mb-3">
  <img src="https://i.ibb.co/D4ZzWbn/mew-xlw-icon.png" class="card-img-top pt-5 ps-5 pe-5" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Raisa Nowreen Prome</h5>
    <p class="card-text text-center">Full-Stack Web Developer</p>
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
<Link to={logo} target="_blank" download><button type="button" class="btn btn-secondary ms-5">Download Resume <i class="fas fa-download"></i></button></Link>


    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
   
    <div className=" sticky-top">
    <button type="button" class="btn btn-dark"><i class="fab fa-github ps-5 fs-2"></i> <i class="fab fa-linkedin-in pt-2 pb-2 ps-3 pe-3 fs-2"></i> <i class="fas fa-envelope ps-2 pe-5 fs-2"></i> </button>

    </div>

  </div>
</div>
    </div>
  </div>







  <div class="col-sm-9">
  <div>
     <div className=" d-flex justify-content-end">
     <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Explore More</button>
     </div>

<div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
<div class="offcanvas-header">
<h5 class="offcanvas-title" id="offcanvasScrollingLabel">Colored with scrolling</h5>







</div>
<div class="offcanvas-body">
<p>Try scrolling the rest of the page to see this option in action.</p>
</div>
</div>
      </div>
    <div class="card">

   


      <img src="https://i.ibb.co/yBkJrx4/mewww.jpg" class="card-img" alt="..." style={{width: "100%"}}/>
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>





  
    </div>
  </div>


  <form onSubmit={sendEmail}> 
<input type="text" placeholder="name" name="name" />
<input type="text" placeholder="subject" name="subject" />
<input type="email" placeholder="email" name="email" />
<input type="text" placeholder="comment" name="message" />
<button type="submit">Send</button>
</form>



  
</div>
    );
};

export default Banner;
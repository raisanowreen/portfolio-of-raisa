import React from 'react';

const About = () => {
    return (
        <div className="pt-5">
           <div className="d-flex justify-content-center">
           <h1 className="text-white pt-5 pe-5">Meet me!</h1>

           <div class="card mb-3 p-5 bg-dark text-info" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://i.postimg.cc/nzK3XwSd/meme.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Raisa Nowreen Prome</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
           </div>
        </div>
    );
};

export default About;
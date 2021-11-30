import React from 'react';

const About = () => {
    return (
        <div>
           <div className="d-flex justify-content-center">
           <h1 className="text-white pt-5 ps-3 pe-5">Meet me!</h1>

           <div class="card mb-3 p-5 bg-dark text-info">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://i.postimg.cc/nzK3XwSd/meme.jpg" class="img-fluid rounded-start p-5" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        
     <div className="p-5">
     <p class="card-text pt-5 pb-5">My name is Raisa Nowreen. I'm a Front End Web Developer based in Bangladesh. I describe myself as a passionate developer who loves coding, designing, and the web platform. As a Front-End Developer I created a lot of different websites as my assignment projects using HTML, CSS and JavaScript to built the sites.</p>
        <p className="pb-5">The things I learned by myself became the vast majority of what I know today. When I create websites, I primarily work with React just because it is such a fantastic and flexible tool that is constantly evolving with the times. </p>
        <p>Of course, I also work with techniques such as bootstrap, tailwind but I prefer to create new websites with vanilla CSS. I enjoy creating beautifully designed, intuitive and functional websites.</p>
     </div>
      </div>
    </div>
  </div>
</div>
           </div>
        </div>
    );
};

export default About;
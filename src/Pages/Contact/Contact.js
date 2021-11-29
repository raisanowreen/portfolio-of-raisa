import React from 'react';
import emailjs  from 'emailjs-com';




const Contact = () => {
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
        <form onSubmit={sendEmail} className="w-50 mx-auto pt-5 text-white">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name Please</label>
    <input type="text" class="form-control" id="exampleInputEmail1" name="name" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name Please</label>
    <input type="text" class="form-control" id="exampleInputEmail1" name="subject" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name Please</label>
    <textarea type="text" class="form-control" id="exampleInputEmail1" name="message" aria-describedby="emailHelp"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    );
};

export default Contact;
import React from 'react';
import contact from "../../assest/VRFiMzM.png"

const Contact = () => {
    
    return (
        <div className='bg-light'>
      
           
               <div id='contact' className="container">
                    
<section className="mb-4 p-5">

    
    <h2 className="h1-responsive font-weight-bold text-center my-4 text-danger pt-5">Contact Us</h2>
   
   <div className='text-start'>
   <h6>Get In Touch</h6>
   </div>
    
    <div className="row    text-center">
           <div className="col-md-4">
            <img className='img-fluid' src={contact} alt="" />
           </div>
      
        <div className="col-md-8  text-center">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

               
                <div className="row">

                   
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" placeholder='Name' id="name" name="name" className="form-control rounded-pill" required/>
                            
                        </div>
                    </div>
                    </div>
                    <div className="row pt-3">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="email" placeholder='Email' id="email" name="email" className="form-control rounded-pill" required/>
                            
                        </div>
                    </div>
                   

                </div>
                <div className="row pt-3">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" placeholder='Phone' id="email" name="email" className="form-control rounded-pill" required/>
                            
                        </div>
                    </div>
                   

                </div>
               
              

              
                <div className="row">

                  
                    <div className="col-md-12 text-start">
                 
                        <div className="md-form">
                        <p>Your Message</p>
                            <textarea type="text" id="message" name="message" rows="4" className="form-control md-textarea"></textarea>
                            
                        </div>

                    </div>
                </div>
             <button className='btn btn-danger m-3'>Send</button>

            </form>

            
        </div>

       
          

             
          
      
        

    </div>

</section>

</div>  
                   
        </div>
    );
};

export default Contact;
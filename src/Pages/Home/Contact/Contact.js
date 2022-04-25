import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register } = useForm();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        // emailjs.sendForm('service_c5vzzio', 'template_qwjun09', e.target, 'user_zZphiMGynpKAggEL5e2A5')
        // .then((result) => {
        //     alert('Message sent successfully!');
        //   }, (error) => {
        //     alert(error.message);
        //   });
        // e.target.reset();
      };
    return (

        <Container>
        <Row className="my-5 ">
           
          {/* <h2 className="my-5 ">OUR CONTACTS</h2> */}
            <Col lg={5} md={5} sm={5} xs={12} className="mt-5 pt-5">
           <h6>Phone: +9432657654667</h6>
           <hr />
           <h6>Email: najnin@gmail.com</h6>
           <hr />
           <h6>Facebook: https://www.facebook.com/nazninnnn</h6>
           <hr />
           <h6>Instagram: https://www.instagram.com/nazninn</h6>
           <hr />
           <h6>Tweeter: https://www.tweeter.com/nazninn</h6>

        </Col>
        <Col lg={7} md={7} sm={7} xs={12}>
        <div>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="mt-5 ">
                                       <h4 className="mt-5 ">If you have any question or quaries, you can contact us directly...</h4>
                                    <input {...register("name")} placeholder="  Your Name" className="back-ground contact-size w-100" required /> <br />

                                    <input  {...register("email", { required: true })} placeholder="  Your Email" className=" back-ground  contact-size w-100 my-3" required />  <br />

                                    <input  {...register("subject", { required: true })} placeholder="  Subject" className=" back-ground  contact-size w-100 my-3" required />  <br />
                                  


                                    <textarea {...register("message", { required: true })} placeholder=" Write your Message" className=" back-ground  contact-size w-100 my-3" required  style={{height:"150px"}}/>
                                   
                                    
                                    <input type="submit" style={{backgroundColor: "#ee2d7a", borderRadius:5, border:"none", width:"30%", padding:12 }} size="lg" />


                                </div>


                            </form>

                        </div>
            </Col>
           
        </Row>
        </Container>
    );
};

export default Contact;

import React from 'react';
import { Container } from 'react-bootstrap';

const Video = () => {
    return (
        <div className='py-5 '>
           <Container>
           <div className='row m-auto py-5'>
          
          {/* <h3 className='my-5'>Doctors Answer Commonly Googled Questions About Skin Care</h3>  */}
              <div className='col-lg-7 '>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/YXjF6vcYUpE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className='col-lg-5 text-lg-start '>
                   <h3>Why is healthy skin important?</h3>
                <h6> Since your skin plays such an important role in protecting your body, you should keep it as healthy as you can. This will help you keep from getting sick or having damage to your bones, muscles, and internal organs.Since your skin plays such an important role in protecting your body, you should keep it as healthy as you can. This will help you keep from getting sick or having damage to your bones, muscles, and internal organs.Since your skin plays such an important role in protecting your body, you should keep it as healthy as you can. This will help you keep from getting sick or having damage to your bones, muscles, and internal organs.</h6>
             </div>
  
          </div>
           </Container>
        </div>
    );
};

export default Video;
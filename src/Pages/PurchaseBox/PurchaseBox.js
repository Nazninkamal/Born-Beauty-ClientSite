import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './PurchaseBox.css'

const PurchaseBox = () => {
    const { register, handleSubmit, reset } = useForm();
    // const { user } = useAuth();
  const onSubmit = data => {
    console.log(data);

    axios.post('https://young-inlet-53249.herokuapp.com/purchase', data)
    .then(res => {
      if(res.data.insertedId){
        alert('added successfully');
        reset();
      }
    })
  };
    return (
        <div className="purchase py-5 rounded-3">
        <h1 className='d-flex justify-content-center  py-5'>Purchase Box</h1>
        <form onSubmit={handleSubmit(onSubmit)} >
      {/* <input defaultValue={user.displayName} {...register("name", { required: true })}className="form-control"/>
      <input defaultValue={user.email}  {...register("email", { required: true })} className="form-control"/>  */}
      <input type="text" {...register("name")} placeholder="Your Name" className="form-control"/>
      <input type="email" {...register("email")} placeholder="Your Email" className="form-control"/>
      <input type="number" {...register("phoneNumber")} placeholder=" Phone Number" className="form-control"/>
      <input type="text" {...register("placeName")} placeholder="Product Name" className="form-control"/>
      <input type="number" {...register("price")} placeholder=" Price" className="form-control"/>
    
      {/* <input type="date" className="form-control" id="date" /> */}
      <textarea type="text" {...register("message")} placeholder="Type your Message" className='rounded-3 area '  />
     
      
      
      <input type="submit" style={{backgroundColor: "#ee2d7a", borderRadius:5, border:"none", width:"30%", padding:12}} />
    </form>
        </div>
    );
};

export default PurchaseBox;
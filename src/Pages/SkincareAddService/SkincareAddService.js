import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './SkincareAddService.css'

const SkincareAddService = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);

    axios.post('https://young-inlet-53249.herokuapp.com/services', data)
    .then(res => {
      if(res.data.insertedId){
        alert('added successfully');
        reset();
      }
    })
  };
    return (
        <div className="add-service pt-5 ">
      
      <div>
      <h1 className='py-5 d-flex flex-column align-items-center justify-content-center text-lg-start'>Add Your Favourite Skincare Product</h1> 
           <form onSubmit={handleSubmit(onSubmit)} >
      <textarea {...register("name")} placeholder="Name"/>
      <textarea {...register("description")}  placeholder="Description" 
      style={{height:"150px"}}/>
      <textarea type="number" {...register("purchase")} placeholder="purchase"/>
      <textarea {...register("img")} placeholder="img url"/>
   
      <input type="submit" style={{backgroundColor: "#ee2d7a", borderRadius:5, border:"none", width:"30%", padding:12}} size="lg"/>
    </form>
      </div>
          
        </div>
    );
};

export default SkincareAddService;
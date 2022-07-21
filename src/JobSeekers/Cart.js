import React from 'react';
import './Cart.css';
import data from '../data.json';
const cart = () => {
  return (
  <div>
    <div>
      <h1 className='center'>Active IT Jobseeker</h1>
    </div>
     <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <div className="row">
        {data.map((item,index)=>
       <div key={index} className="col-4" style={{marginTop:'10px'}}>
       <div className="card-1">
         <div className="card">
           <div className="card-body">
             <div className="row">
               <div className="col-2">
                 <img src={item.img} alt="ananth"  style={{width:"70px",height:"70px"}}/>
               </div>
               <div className="col-8">
                 <h2>{item.name}</h2>
                 <p>{item.native}</p>
               </div>
               <div className="col-2">
                 <h5>1</h5>
                 <h5>2</h5>
               </div>
             </div>
             
             <div className="row">
               <div className="col-4">
                 <div className='right '>
                   <h5>Primary Skills</h5>
                   <p>Html,Css,Bootstrap,JavaScript,<br />WordPress,React.</p>
                   <h5>Secondary Skills</h5>
                   <p>Visual Studio Code,Git</p>
                   <h5>Expected Salary</h5>
                   <p>2.5L</p>
                 </div>
               </div>
               <div className="col-8">
                 <div className='left'>
                   <h5>Education</h5>
                   <p>BE - CSE - 2021 - 9.99 CGPA.</p>
                   <p>HSC - State Board - 2017 - 74%.</p>
                   <p>SSLC - State Board - 2015 - 83%.</p>
                   <h5>Availability to join</h5>
                   <p>Immediate</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div> )}
          
        </div>
      </div>
    </div>

  </div>
  </div>
  )
}

export default cart
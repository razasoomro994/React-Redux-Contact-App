import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const contacts =useSelector(state=>state)
  console.log(contacts)

  const dispatch =useDispatch()

  const deleteContact=(id)=>{
    dispatch({type:'DELETE_SUCCESSFULL',payload:id})
    toast.success('Delete Successfull !')
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5 text-right">
            <Link to='add' className="btn btn-outline-dark  "> Add Contact</Link>
        </div>

        <div className="col-md-6 mt-5 mx-auto ">
          <h1>React_Redux_Contact_Book</h1>
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
           <tr>
             <th scope='col' >
               #
             </th>
             <th scope='col' >
               Name
             </th>
             <th scope='col' >
               Email
             </th>
             <th scope='col' >
               Number
             </th>
             <th scope='col' >
               Action
             </th>
 
 
           </tr>

            </thead>

           <tbody>
             {
             contacts.map((contact,id)=>(
                 <tr key={id}>
                   <td>{id +1}</td>
                   <td>{contact.name}</td>
                   <td>{contact.email}</td>
                   <td>{contact.number}</td>
                   <td >
                     <Link to={`/edit/${contact.id}` } className='btn-small btn  btn-primary' >Edit</Link>
                   
                   
                     <button type="button" className="btn btn-danger btn-small" onClick={()=>deleteContact(contact.id)}> Delete</button>
                   </td>


                 </tr>
             ))
              }
             </tbody> 

          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

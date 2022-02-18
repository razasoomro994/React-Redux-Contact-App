
import React, { useEffect, useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { Link,useParams,useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';

const EditData = () => {
    
    
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [phone, setPhone] = useState("");
    
        
    const {id} =useParams()
    const contacts = useSelector(state=> state)
     const currentContact = contacts.find(contact=> contact.id=== parseInt(id))
    useEffect(()=>{
        if(currentContact){
            setName(currentContact.name)
            setEmail(currentContact.email)
            setPhone(currentContact.number)

        }
        
    },[currentContact])


    const dispatch= useDispatch()
    const history =useHistory()
     const handleSubmit = (e) => {
       e.preventDefault();
       const checkEmail = contacts.find(
         contact => contact.id!== parseInt(id) && contact.email === email && email
       );
   
       const checkNumber = contacts.find(
         contact => contact.id!== parseInt(id) &&    contact.number ===  parseInt(phone)  
       );
   
       console.log(checkNumber)
   
       if (!name || !email || !phone) {
         return toast.warning("please fill all fields!");
         // alert('fill all field')
       }
       if(checkEmail){
         return toast.error("This Email Already Exists !");
   
       }
       if(checkNumber){
         return toast.error("This Number Already Exists !");
   
       }
       const data = {
         id: parseInt(id),
         email,
         name,
         phone,
       };
   
       dispatch({type: "UPDATE_SUCCESSFULL" ,payload: data})
       toast.success('Student Update Successfully !!')
       history.push('/')
   
     };

  return (
    
      
      <div className="container">
        {currentContact?(
<>
<div className="row">
        <h1 className="display-3  text-center">Edit Contacts</h1>

        <div className="col-md-6 shadow p-5   mx-auto ">
          <form onSubmit={handleSubmit}>
            <div className="form-group ">
              <input type="text" placeholder="Name"
               value={name}
               onChange={(e) => setName(e.target.value)}
              
               className="form-control" />
            </div>
            <div className="form-group mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
               
                placeholder="Email"
                className="form-control"
              />
            </div>
            <div className="form-group mt-2">
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
               
                placeholder="Phone No"
                className="form-control"
              />
            </div>

          
            <div className="form-group p-2">
            <div className="d-grid gap-2 mt-2 d-md-block">
  <button className="btn btn-dark" type="submit" >Update </button>
  <Link to="/" className="btn btn-danger ml-5" >
                  Cancel
                </Link></div>
            </div>
            
          </form>
        </div>
      </div>
      </>


         
    ) 
    :(
             <h1 className="display-3  text-center">Student Contacts With Id {id}  not Exist</h1>

         ) }      
         
     

</div>
  
    
  )
}

export default EditData

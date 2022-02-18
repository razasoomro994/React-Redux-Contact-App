import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {


  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  
  const contacts = useSelector((state) => state);
  console.log(contacts)
  const dispatch= useDispatch()
 const history =useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmail = contacts.find(
      contact => contact.email === email && email
    );

    const checkNumber = contacts.find(
      contact => contact.number ===  parseInt(phone)  
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
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      email,
      name,
      phone,
    };

    dispatch({type: "ADD_CONTACT" ,payload: data})
    toast.success('Student added Successfully !!')
    history.push('/')

  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3  text-center">Add Stdsudent</h1>

        <div className="col-md-6 shadow p-5   mx-auto ">
          <form onSubmit={handleSubmit}  >
            <div className="form-group ">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="form-control"
              />
            </div>
            <div className="form-group mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
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
            <div className="form-group">
              <div class="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-dark mt-5" type="submit">
                  Add Student
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;

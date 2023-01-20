import React, {useState} from "react";
import '../App.css';


function Contact(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  //---------------

 //--------------


 const [users , setUsers]=useState([]);

 const [myForm , setMyForm]=useState({
   name:"",
   surname:"",
   email:"",
   phone:"",
   select:"",
   usertype:null,
   message:"",
 });
 
 //--------------
 
 
  const handleChangeForm=(event) =>{
     event.preventDefault();
     console.log("you filled the input");
 
 //destructurare obiect
 // setMyForm({...myForm, [event.target.name]: event.target.value});
 
 const newCopyMyForm={...myForm, [event.target.name]: event.target.value};
 setMyForm(newCopyMyForm);
 
 console.log("new name is: " , newCopyMyForm.name);
 console.log("new surname is: " , newCopyMyForm.surname);
 console.log("new email is: " , newCopyMyForm.email);
 console.log("new phone is: " , newCopyMyForm.phone);
 console.log("new select is: " , newCopyMyForm.select);
 console.log("new usertype is: " , newCopyMyForm.usertype);
 console.log("new message is: " , newCopyMyForm.message);
 
  }
   
 
 console.log("outside input function new name is: " , myForm.name);
 console.log("outside input function new surname is: " , myForm.surname);
 console.log("outside input function new email is: " , myForm.email);
 console.log("outside input function new phone is: " , myForm.phone);
 console.log("outside input function new select is: " , myForm.select);
 console.log("outside input function new usertype is: " , myForm.usertype);
 console.log("outside input function new message is: " , myForm.message);
 
 //----------------
 
 const handleSubmit=(event) =>{
     event.preventDefault();
     console.log("you clicked the submit btn");
 //get user info in console afer clicking the submit btn
     console.log("myForm is : " , myForm);
 
     //adaug datele fiecarui user obj in arr users
     //destructurare array
 
     const newUsersArr=[...users , myForm];
     setUsers(newUsersArr);
 
 
     
 console.log("users arr is : " , users);
 
 console.log("users.length is : " , users.length);
 
 }
 
 

  //------------------------------------------------------------------------------------------------------------------------------------------------------


return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

 <h1>Contact page WITH FORM</h1>


 <p className="lead">Fill out this form and show your data</p>

<form className="form" onSubmit={handleSubmit}>

<div className="mb-3">

<label htmlFor="name" className="col-form-label">First Name:
<input type="text" className="form-control" id="name" name="name" required="required" placeholder="Enter a name..."  onChange={handleChangeForm}/>
</label>

</div>



<div className="mb-3">

<label htmlFor="surname" className="col-form-label">Last Name:
<input type="text" className="form-control" id="surname" name="surname" required="required"  placeholder="Enter a surname..."   onChange={handleChangeForm}/>
</label>

</div>



<div className="mb-3">

<label htmlFor="email" className="col-form-label">Email:
<input type="email" className="form-control" id="email" name="email" required="required"  placeholder="Enter an email..."   onChange={handleChangeForm}/>
</label>

</div>



<div className="mb-3">

<label htmlFor="phone" className="col-form-label">Phone:
<input type="tel" className="form-control" id="phone" name="phone" required="required"  placeholder="Enter a tel..."   onChange={handleChangeForm}/>
</label>

</div>



<div className="mb-3">

<label htmlFor="select" className="col-form-label">Select option:
<select name="select" id="cars" className="form-control"  required="required"  onChange={handleChangeForm}>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
</label>

</div>



<label>User type<br></br>

        <label htmlFor="basic">
          <input type="radio" id="basic" name="usertype" value="basic" checked={myForm.usertype == "basic"} onChange={handleChangeForm}/>basic
          </label><br></br>
        <label htmlFor="super">
          <input type="radio" id="super" name="usertype" value="super" checked={myForm.usertype == "super"} onChange={handleChangeForm}/>super
          </label><br></br>
        <label htmlFor="admin">
          <input type="radio" id="admin" name="usertype" value="admin" checked={myForm.usertype == "admin"} onChange={handleChangeForm}/>admin
          </label>

      </label><br></br>


      <label htmlFor="message">Message<br></br>
       <textarea name="message" id="message" placeholder="Your message" onChange={handleChangeForm}></textarea>
       </label><br></br>




  <button type="submit" className="btn btn-primary">Submit</button>





</form>


{users.map( (user , index) =>{
    //map are intotdeauna return
    return(<>
    <ul key={index}  className="list-group list-group-flush lead border">
      <li className="list-group-item border">{user.name}</li>
      <li className="list-group-item border">{user.surname}</li>
      <li className="list-group-item border">{user.email}</li>
      <li className="list-group-item border">{user.phone}</li>
      <li className="list-group-item border">{user.select}</li>
      <li className="list-group-item border">{user.usertype}</li>
      <li className="list-group-item border">{user.message}</li>
    </ul>
    </>);
} )}





  </>);

}

export default Contact;

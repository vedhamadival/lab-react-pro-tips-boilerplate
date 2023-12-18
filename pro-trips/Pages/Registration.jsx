import { useState } from 'react';

const Registration = () => {
  const [field, setField] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [validate, setValidate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (field.firstName && field.lastName && field.email && field.phoneNumber){
      setValidate(true);
    }
  };

  return (
    <div id="Form-Container">
    <div id="Form">
      {/* <h3>Registration Form</h3> */}
      <form onSubmit={handleSubmit}>

        {submitted && validate? <div id="message">Registration Successful!!!</div>:null}

        <input type="text" placeholder="firstname" value={field.firstName} onChange={(e) => setField({ ...field, firstName: e.target.value })}/>
        {submitted && !field.firstName ?<span>Please Enter your FirstName</span> : null}

        <input type="text"placeholder="lastname"value={field.lastName}  onChange={(e) => setField({ ...field, lastName: e.target.value })}/>
        {submitted && !field.lastName ? <span> Please Enter your LastName</span> : null}

        <input type="email" placeholder="email" value={field.email} onChange={(e) => setField({ ...field, email: e.target.value })}/>
        {submitted && !field.email ? <span>Please Enter your Email</span> : null}

        <input type="number" placeholder="phoneNumber" value={field.phoneNumber} onChange={(e) => setField({ ...field, phoneNumber: e.target.value })}/>
        {submitted && !field.phoneNumber ? <span>Please Enter your PhoneNumber</span> : null}

        <button type="submit">Register</button>
      </form>
    </div>
    </div>
  );
};

export default Registration;

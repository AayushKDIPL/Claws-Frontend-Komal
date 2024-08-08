import React, { useRef,useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";

function Forms() {
  const form = useRef();

  const getdata = useSelector((state) => state.cartreducer.carts);

  let arr = getdata.map((ele) => {
    return ele.rname + "#" + ele.qnty + "#" + ele.somedata + "#" + ele.price;
  });

  let finalarray=arr.map((element) => {
      return element.split("#").map((ele) => {
        return ele+' ';
      });
    });
   

    let str='';
    let total=0;

    for (let i=0;i<finalarray.length;i++)
    {
   
      let arr1=finalarray[i];
      str+='Product Name :- '+arr1[0]+'\n';
      str+='Product Quantity :- '+arr1[1]+'\n';
      str+='Product Details :- '+arr1[2]+'\n';
      str+='Product Price :- '+arr1[3]+'\n';
      str+='\n';
      total+=arr1[1]*arr1[3];
    }
    str+='----------------------------------------------';
    str+='\nTotal:-'+total;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_g9t85ou", "template_thvvzje", form.current, {
        publicKey: "xkGY50idhqDJuqLzG",
      })
      .then(
        () => {
            alert('Email has been sent');
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };



    const [telephone, setTelephone] = useState('');
  
    const handleTelephoneChange = (event) => {
      const { value } = event.target;
      // Limiting input to 15 characters
      if (value.length <= 15) {
        setTelephone(value);
      }
    };


    // email validation 

    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
  
    const handleChange = (event) => {
      const inputEmail = event.target.value;
      setEmail(inputEmail);
      setIsValid(validateEmail(inputEmail));
    };
  
    const validateEmail = (email)=> {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email)
  ;
    };
  
  return (  
    <div className="container my-5">
          <h3 className="text-center pb-2 mb-5"  style={{borderBottom:'1px solid black'}} > Checkout Form</h3>
          
        <Form className="col-12 d-flex flex-wrap-reverse align-items-center justify-content-around " ref={form} onSubmit={sendEmail}>
      <div style={{width:"25em"}}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name <sup style={{color:'red'}}>*</sup> </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"  
              name="user_name" required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email <sup style={{color:'red'}}>*</sup></Form.Label>
            <Form.Control
              type="email"  onChange={handleChange} style={{ borderColor: isValid ? 'green' : 'red' }} 
              placeholder="Enter email"
              name="user_email" required
            />
             <div style={{ color: isValid ? 'green' : 'red',display: isValid ? 'none' : 'block' }}>
        {isValid ? 'Email is valid.' : 'Email is invalid.'}
      </div>
          </Form.Group>
          <Form.Group controlId="formTelephone">
        <Form.Label>Telephone <sup style={{color:'red'}}>*</sup></Form.Label>
        <Form.Control
          type="tel" name="user_number"
          value={telephone}
          onChange={handleTelephoneChange}
          maxLength={10} // Setting maximum length
          placeholder="Enter telephone number"
        />
      </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Address <sup style={{color:'red'}}>*</sup></Form.Label>
            <Form.Control
              type="text"
              name="user_address"
              placeholder="Enter address" required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Addtional Details</Form.Label>
            <Form.Control
              type="text"
              name="message"
              placeholder="Enter message"
            />
          </Form.Group>


          <button class="button">
    <span class="button_lg" value="Send" type="submit">
        <span class="button_sl"></span>
        <span class="button_text">confirm order!</span>
    </span>
</button>
          {/* <Button variant="primary" value="Send" type="submit">
            Confirm Order
          </Button> */}
      </div>
      <div style={{width:"25em"}}>
      <Form.Group className="" controlId="formCart Values">
        <Form.Label> <h3 className="mb-2" style={{borderBottom:'1px solid black'}}>
           Cart Details
          </h3>
           </Form.Label>
        <Form.Control as="textarea" style={{height:"13rem",backgroundColor:"white",color:"black",}} name="cart"  value={str} />
      </Form.Group>
      </div>
        </Form>
      
    </div>
  );
}

export default Forms;

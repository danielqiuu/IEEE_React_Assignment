import React, {useState} from 'react'
import axios from 'axios'
function Message(){

    const url = 'https://dry-shelf-88643.herokuapp.com/https://cloudsking.com/react_api.php'



    const submitForm = (e) => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("phone_number", phone);
        formData.append("message", msg);
        e.preventDefault();

        axios
          .post(url, formData)
          .then((res) => {
            setResponse(res.data["message"]);
          });
  };
    const[name, setName] = useState('')
    function getName(val){
        setName(val.target.value)
    }
    const[phone, setPhone] = useState('')
    function getPhone(val){
        setPhone(val.target.value)
    }
    const[msg, setMsg] = useState('')
    function getMsg(val){
        setMsg(val.target.value)
    }

    const [response, setResponse] = useState('');
    return(
        <div>
            <h1>Hey, this is "send message" page</h1>
                <form onSubmit={submitForm}>
                    <label>Name:</label>
                    <input type="text" placeholder="tell me your name" value={name} onChange={getName}/>

                    <label>Phone number:</label>
                    <input type="text" placeholder="tell me your phone number" value={phone} onChange={getPhone}/>

                    <label>Message:</label>
                    <input type="text" placeholder="tell me your message" value={msg} onChange={getMsg}/>

                    <button type={"submit"}>Submit</button>
                </form>
            <h3>{response}</h3>

        </div>
    )
}
export default Message
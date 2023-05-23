import React, { useState } from "react";


const Form = () => {
    
    const [name, setName] = useState();
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState();
    const [pass, setPass] = useState('');

    const onInput = (event)=> {
        setName(event.target.value);
    }

    const onEnter = (event)=>{
        setPassword(event.target.value)
    }

    const Submit = (event) => {
        event.preventDefault();
        setFullName(name);
        setPass(password);
        if(pass === "vivek"){
            alert(`Log In Success \n${fullName}\n ${pass}`);
        }else{alert(`Enter Password Again`);}
    
    };

    return (
        <div style={{width:'100vw', height:'100vh'}}>
            <form onSubmit={Submit} style={{backgroundColor:'#fff', display:"flex", flexDirection:"column", margin:"10rem", borderRadius:"1rem", padding:"1rem"}}>
                <h1>Hello {fullName}</h1>
                <input 
                    type="text" 
                    placeholder="Enter Your Name" 
                    value={name} 
                    onChange={onInput}
                />
                <input 
                    type="password" 
                    placeholder="Enter Your Password" 
                    value={password} 
                    onChange={onEnter} 
                />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default Form;
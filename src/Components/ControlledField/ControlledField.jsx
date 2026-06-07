import { useState } from "react";

const ControlledField = () => {

       const[password, setPassword] = useState('');
       const [error, setError] = useState('')
     const handleSubmit = (e) => {
         e.preventDefault();
         console.log('submitted')
         if(password.length < 6){
             setError('6 characters or longer  password needed.')
         }

         else{
             setError('')
         }
     }

     const handlePasswordOnChange = (e) => {
           console.log(e.target.value);
           setPassword(e.target.value);

        //    if(password.length < 6){
        //       setError('Password must be 6  characters or longer.')
        //    }

        //    else{
        //        setError('');
        //    }
     }
      
    return(

        <div>
             <form onSubmit={handleSubmit}>
                 <input type="email" name="email" id="" placeholder="Email" />
                 <br />

                 <input type="password" name="password" defaultValue={password}  onChange={handlePasswordOnChange}  placeholder="password"/>

                 <br />
 
                 <input type="submit" value="Submit" />
             </form>
        </div>
    )
}

export  default ControlledField;
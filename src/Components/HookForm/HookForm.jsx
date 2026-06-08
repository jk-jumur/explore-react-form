import useInputField from "../Hooks/UseInputField";

const  HookForm = () => {
      const [name, nameOnChange] = useInputField('');
      const [email, emailOnChange] = useInputField('');
      const [password, passwordOnChange] = useInputField('');
      const handleSUbmit = e => {
         e.preventDefault();
         console.log('submit', name, email, password)
      }
    return(
         <div>
              <form onSubmit={handleSUbmit}>
                  <input defaultValue={name} type="text" onChange={nameOnChange} />

                  <br />

                  <input type="email" onChange={emailOnChange} name="" id=""/>
                   <br/>
                   <input  onChange={passwordOnChange}type="password" name=""  />
                  <input type="submit" value="Submit" />
              </form>
         </div>
    )
}

export default HookForm;
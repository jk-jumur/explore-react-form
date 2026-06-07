const FormAction = () => {

    const handlerFormAction = (formData) => {
          console.log(formData.get('name'));
          console.log(formData.get('email'))
    }
     
    return(
         <div>
            <form action={handlerFormAction}>

                <input type="text" name="name"  placeholder="Your Name" />
                <br />
                <input type="email" name="email" 
                placeholder="Type your email" />
                <br />

                <input type="submit" value="Submit" />
            </form>
         </div>
    )
}

export default FormAction;
import { useState } from 'react'

export default function Forms() {

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputIndustry, setInputIndustry] = useState("");

  const handleOnChangeName = (e)=> setInputName(e.target.value);
  const handleOnChangeEmail = (e)=> setInputEmail(e.target.value);
  const handleOnChangeIndustry = (e)=> setInputIndustry(e.target.value);




  const handleSubmit = ((e) => {
    e.preventDefault()
    
    console.log("inputName", inputName)
    console.log("inputEmail", inputEmail)
    console.log("inputIndustry", inputIndustry)



  })
    
    return(
        <div className="joinForm">
        <h2 className="mailingList">Join our Mailing List</h2>
        <div className="formContainer">
          <div className="formContainer">
            <form className="formInputs" onSubmit={handleSubmit} >
              <div>
              <label className="Label" >Full Name</label>
              <input type="text" name="name" id="name" className="singleInput" onChange={handleOnChangeName} placeholder="Jane Doe"></input>
              <label className="Label" >Email</label>
              <input type="email" name="email" id="email"className="singleInput" onChange={handleOnChangeEmail} placeholder="jane_doe@email.com"></input>
              <label className="Label" >Industry</label>
              <input type="text" name="industry" id="industry" className="singleInput" onChange={handleOnChangeIndustry} placeholder="E-Sports"></input>
              </div>
              <div className="buttonContainer">
                <h3 className="join">Join our mailing to recieve notifications about program availability and special discounts</h3>
                <button className="button" type="submit"  >Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}
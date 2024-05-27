import { useState } from "react";
import { Wrapper } from "../wrapper/Card";
import { FormWrapper } from "../wrapper/FormWrapper";
import { FormInput } from "../sub-components/FormInput";
import { Button } from "../sub-components/Button";
import { Title } from "../sub-components/Header";

function  Signup() {
    function handleSubmit() {

    }

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div>
            <Wrapper>
                <Title title="Sign Up"/>
                <FormWrapper>
                    <FormInput label="First Name" placeholder="Vaidik" onChange={(e) => setFirstName(e.target.value)} id="firstname" inputType="text"/>
                    <FormInput label="Last Name" placeholder="Bajpai" onChange={(e) => setLastName(e.target.value)} id="lastname" inputType="text"/>
                    <FormInput label="Email" placeholder="vaidikb@gmail.com" onChange={(e) => setEmail(e.target.value)} id="email" inputType="text"/>
                    <FormInput label="Password" placeholder="********" onChange={(e) => setPassword(e.target.value)} id="password" inputType="text"/>
                    <Button buttonText="Submit" onClick={handleSubmit} customStyles="text-white border-2 border-yellow-200 bg-purple-500"/>
                </FormWrapper>
            </Wrapper>
        </div>
    )
}

export default Signup;
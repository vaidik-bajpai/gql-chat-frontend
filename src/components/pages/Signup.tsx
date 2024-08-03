import { useState, MouseEvent, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { Wrapper } from "../wrapper/Card";
import { FormWrapper } from "../wrapper/FormWrapper";
import { FormInput } from "../sub-components/FormInput";
import { EventButton } from "../sub-components/Button";
import { Title } from "../sub-components/Header";
import { SIGNUP_USER } from "../../Queries";
import { Form, useNavigate } from "react-router-dom";
import { BottomText } from "../sub-components/BottomText";

interface Form {
    firstName: string
    lastName: string
    email: string
    password: string
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
}

function  Signup() {
    const navigate = useNavigate()
    const [signupUser, {}] = useMutation(SIGNUP_USER);

    const [formData, setFormData] = useState<Form>({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const [formErrors, setFormErrors] = useState<FormErrors>({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const validate = () => {
        let errors: FormErrors = {};

        if (!formData.firstName) errors.firstName = "First name must be provided";
        else if (formData.firstName.trim().length < 3) errors.firstName = "First name must be at least 3 characters";
        else if (formData.firstName.trim().length > 20) errors.firstName = "First name must not be greater than 20 characters";

        if (!formData.lastName) errors.lastName = "Last name must be provided";
        else if (formData.lastName.trim().length < 3) errors.lastName = "Last name must be at least 3 characters";
        else if (formData.lastName.trim().length > 20) errors.lastName = "Last name must not be greater than 20 characters";

        if (!formData.email) errors.email = "Email must be provided";

        if (!formData.password) errors.password = "Password must be provided";
        else if (formData.password.length < 8) errors.password = "Password must contain at least 8 characters";
        else if (formData.password.length > 72) errors.password = "Password must not contain more than 72 characters";

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target
        setFormData({...formData, [id]: value})
    }
    

    async function handleSubmit(e: MouseEvent<HTMLButtonElement>) { 
        e.preventDefault();
        if (!validate()) {
            return;
        }

        try {
            const { data } = await signupUser({
                variables: {
                    firstname: formData.firstName,
                    lastname: formData.lastName,
                    email: formData.email,
                    password: formData.password,
                },
            });
            if (data) {
                navigate("/login");
                setFormData({firstName: "", lastName: "", email: "", password: ""})
            }
        } catch (err) {
            console.error(err);
        }
        
        
    }   

    return (
        <div>
            <Wrapper>
                <Title title="Sign Up"/>
                <FormWrapper>
                    <FormInput label="First Name" placeholder="Vaidik" error={formErrors.firstName} onChange={handleChange} id="firstName" inputType="text" value={formData.firstName}/>
                    <FormInput label="Last Name" placeholder="Bajpai" error={formErrors.lastName} onChange={handleChange} id="lastName" inputType="text" value={formData.lastName}/>
                    <FormInput label="Email" placeholder="vaidikb@gmail.com" error={formErrors.email} onChange={handleChange} id="email" inputType="email" value={formData.email}/>
                    <FormInput label="Password" placeholder="********" error={formErrors.password}  onChange={handleChange} id="password" inputType="password" value={formData.password}/>
                    <EventButton buttonText="Submit" onClick={(e) => handleSubmit(e)} customStyles="text-white border-2 border-yellow-200 bg-purple-500"/>
                </FormWrapper>
                <BottomText text="Already have an account?" buttonText="login" handleClick={() => navigate("/login")}/>
            </Wrapper>
        </div>
    )
}

export default Signup;
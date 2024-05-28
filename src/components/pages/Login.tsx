import { useState, MouseEvent, ChangeEvent } from "react";
import { Wrapper } from "../wrapper/Card";
import { FormWrapper } from "../wrapper/FormWrapper";
import { FormInput } from "../sub-components/FormInput";
import { EventButton } from "../sub-components/Button";
import { Title } from "../sub-components/Header";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../Queries";

interface LoginForm {
    email: string
    password: string
}

interface LoginErrors {
    email?: string
    password?: string
}

function  Login() {
    const navigate = useNavigate()
    const [loginUser, {}] = useMutation(LOGIN_USER)

    const [loginData, setLoginData] = useState<LoginForm>({
        email: "",
        password: ""
    })

    const [loginErrors, setLoginErrors] = useState<LoginErrors>({
        email: "",
        password: ""
    })

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const {id, value} = e.target
        setLoginData({...loginData, [id]: value})
    }

    const validate = () => {
        let errors: LoginErrors = {};

        if (!loginData.email) errors.email = "Email must be provided";

        if (!loginData.password) errors.password = "Password must be provided";
        else if (loginData.password.length < 8) errors.password = "Password must contain at least 8 characters";
        else if (loginData.password.length > 72) errors.password = "Password must not contain more than 72 characters";

        setLoginErrors(errors);
        return Object.keys(errors).length === 0;
    };
    
    async function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        if (!validate()) {
            return
        }

        const {data} = await loginUser({
            variables: {
                email: loginData.email,
                password: loginData.password,
            },
        })
        if (data) {
            localStorage.setItem("token", data.login)
            console.log(data.login)
            navigate("/chatrooms")
            setLoginData({email: "", password: ""})
        }
    }

    
    return (
        <div>
            <Wrapper>
                <Title title="Login"/>
                <FormWrapper>
                    <FormInput label="Email" placeholder="vaidikb@gmail.com" error={loginErrors.email} onChange={(e) => handleChange(e)} id="email" inputType="email" value={loginData.email}/>
                    <FormInput label="Password" placeholder="********" error={loginErrors.password} onChange={(e) => handleChange(e)} id="password" inputType="password" value={loginData.password}/>
                    <EventButton buttonText="Submit" onClick={(e) => handleSubmit(e)} customStyles="text-white border-2 border-yellow-200 bg-purple-500"/>
                </FormWrapper>
            </Wrapper>
        </div>
    )
}

export default Login;
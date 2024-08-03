import { useNavigate } from "react-router-dom"
import { Title } from "../sub-components/Header"
import { SubHeading } from "../sub-components/SubHeading"
import { Wrapper } from "../wrapper/Card"
import { NavButton } from "../sub-components/Button"
import { FormWrapper } from "../wrapper/FormWrapper"

function Home() {
    const navigate = useNavigate()
    const formattedText = "Hello, Iam Vaidik Bajpai the creator of this WebApp, this webapp is a realtime chatting app wherein users can create their own chat rooms which can be joined by other users who wish to have a good chat. \nTechnology used\n-> GraphQL\n-> Prisma (ORM)\n-> React"
    return (
        <Wrapper>
            <Title title="About Us"/>
            <FormWrapper>
                <SubHeading text={formattedText}/>
                <NavButton onClick={() => navigate("/chatrooms")} buttonText="Enter" customStyles="text-white border-2 border-yellow-200 bg-purple-500"/>
            </FormWrapper>
        </Wrapper>
    )
}

export default Home
import { memo } from "react"
import logo from '../../img/logo.png'
import { HeaderDescription, ItemHeader, WrapperHeader } from "./index.styled"
import {AiOutlineMail, AiFillPhone} from 'react-icons/ai'
import { Span } from "../../index.styled"
import Navigate from "./Navigate/Navigate"

const Header = () => {
    return <WrapperHeader>
        <HeaderDescription>
            <ItemHeader>
                <img src={logo} alt="Logo" />
            </ItemHeader>
            <ItemHeader>
                <Span fs="14px" fw={500}>Федеральное государственное бюджетное образовательное учреждение высшего образования</Span>
                <Span fs="25px" fw={900}>«Северо-Кавказская государственная академия»</Span>
            </ItemHeader>
            <ItemHeader feedback={true}>
                <Span fs="15px" fw={500} m={9}><AiOutlineMail size={50} /></Span>
                <Span fs="15px" fw={500} m={9}><AiFillPhone size={50} /></Span>
            </ItemHeader>
        </HeaderDescription>
        <Navigate />
    </WrapperHeader>
}


export default memo(Header)
import React, { memo } from "react"
import styles from './index.module.css'
import {RiMenu3Fill} from 'react-icons/ri'
import { Span } from "../../../index.styled"
import { dataNav } from "./dataNav"

const Navigate = () => {
    return <div className={styles.navigate}>
        <nav className={styles.WrapperNav}>
            
        {dataNav.map((item, index) => item.nestedArray 
        ? <AccordionHover key={index} title={item.title}>
                {item.nestedArray.map((item, index) => <a key={index} href="/#">{item.title}</a>)}
        </AccordionHover>
        : <a key={index} href="/#">{item.title}</a>
        )}

        </nav>
        <div className={styles.burgerIcon}>
            <Span fs="19px" fw={500}>
                МЕНЮ
            </Span>
            <RiMenu3Fill size={35} color="#fff" />
        </div>
    </div>
}

export default memo(Navigate)

type PropsType = {
    children: React.ReactNode
    title: string
}

export const AccordionHover = (props: PropsType) => {
    return <div className={styles.dropdown}>
        <button className={styles.dropbtn}>{props.title}</button>
        <div className={styles.dropdownContent}>
            {props.children}
        </div>
        </div>  
}
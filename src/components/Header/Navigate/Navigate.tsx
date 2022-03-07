import React, { memo } from "react"
import styles from './index.module.css'
import {RiMenu3Fill} from 'react-icons/ri'
import { Span } from "../../../index.styled"

const Navigate = () => {
    return <div className={styles.navigate}>
        <nav className={styles.WrapperNav}>
        <Accardion title="ОБЩИЕ СВЕДЕНИЯ">
            <a href="#">qwe</a>
        </Accardion>
        <a href="#">НОВОСТИ</a>
        <a href="#">ОБЪЯВЛЕНИЧ</a>
        <Accardion title="АБИТУРИЕНТУ">
            <a href="#">qwe</a>
        </Accardion>
        <Accardion title="ИНСТИТУТЫ">
            <a href="#">qwe</a>
        </Accardion>
        <Accardion title="НАУКА">
            <a href="#">qwe</a>
        </Accardion>
        <a href="#">ВЫПУСКНИКУ</a>
        <a href="#">КОНТАКТЫ</a>
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

const Accardion = (props: PropsType) => {
    return <div className={styles.dropdown}>
        <button className={styles.dropbtn}>{props.title}</button>
        <div className={styles.dropdownContent}>
            {props.children}
        </div>
        </div>  
}
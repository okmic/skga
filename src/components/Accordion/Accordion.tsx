import React, { memo, useEffect, useState } from "react"
import styles from './Accordion.module.css'
import {BiCaretDown, BiCaretUp} from 'react-icons/bi'

type PropsType = {
    title: string
    accordion: string
    setAccordion: (a: string) => void
    children: React.ReactNode
}

const Accordion: React.FC<PropsType> = ({title, accordion, setAccordion, children}) => {

    const [active, setActive] = useState(false)

    const handleSubmit = () => {
        if(!active) {
            setActive(true)
            setAccordion(title)
        } else {
            setAccordion("Title")
            setActive(false)
        }
    }
    useEffect(() => {
            if (title !== accordion){
                setActive(false)
            }   
    }, [accordion])

    return <div className={styles.accordion}>
        <div className={styles.accordionHeading}>
            <div className={styles.container} onClick={handleSubmit}>
                <p>
                {title}
                <span>
                    {accordion === title ? <BiCaretUp size={15} /> : <BiCaretDown size={15} />}
                </span>
                </p>
            </div>
        </div>
        <div className={(accordion === title ? styles.show : "") + " " + styles.accordionContent}>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    </div>
}

export default memo(Accordion)
import { memo } from "react"
import { Link } from "react-router-dom"
import Accordion from "../Accordion/Accordion"
import { dataNavBar } from "./dataNavBar"
import { ItemNavLink, WrapperNavBar } from "./index.styled"

type PropsType = {
    accordion: string
    setAccordion: (a: string) => void
}

const NavBar: React.FC<PropsType> = ({accordion, setAccordion}) => {
    return <WrapperNavBar>  

            {dataNavBar.map((item, index) => !item.nestedArray
            ? <Link to={item.href} key={index}>
                <ItemNavLink>
                    {item.title}
                </ItemNavLink>
            </Link>
            : <Accordion key={index} title={item.title} accordion={accordion}  setAccordion={setAccordion}>
                {item.nestedArray.map((item, index) => <ItemNavLink key={index} style={{color: "black"}}>
                    {item.title}
                </ItemNavLink>)}
            </Accordion>
            )}

    </WrapperNavBar>
}

export default memo(NavBar)

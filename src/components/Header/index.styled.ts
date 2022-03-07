import styled from 'styled-components'

export const WrapperHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
`
export const HeaderDescription = styled.div`
    display: flex;
    padding: 1em;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background: linear-gradient(45deg, #1a2a6c, #b21f1f, #fdbb2d);
    background-size: 300% 300%;
    animation: gradient 5s ease infinite;
    overflow: hidden;
    text-align: center;
    @keyframes gradient {
        0% {
            background-position: 0 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0 50%;
        }
    };
    @media screen and (max-width: 950px) {
        display: flex;
        flex-direction: column;
    }
`

type ItemType = {
    feedback?: boolean
}

export const ItemHeader = styled.div<ItemType>`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    word-wrap: wrap;
    @media screen and (max-width: 1150px) {
        ${props => props.feedback && "flex-direction: row;"}       
    }
`


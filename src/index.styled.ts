import styled from "styled-components"

type SpanType = {
    fs: string
    fw: number | string
    m?: number
}

export const Span = styled.span<SpanType>`
    font-size: ${props => props.fs};
    font-weight: ${props => props.fw};
    margin: ${props => props.m ? props.m : 0}px;

`
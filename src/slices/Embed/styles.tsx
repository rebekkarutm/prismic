'use client'

import styled from "styled-components";

export const EmbedContainer = styled.div<{$color? :string}>`
background: ${props => props.$color === 'Blue' ? '#CADEDF' : '#7CB7AF'};
display: flex;
flex-direction: column;
align-items: center;
padding: 48px;
justify-content: space-evenly;
height: 500px;
`

export const TextField = styled.div<{$textcolor? :string}>`
    align-items: center;
    justify-content: center;
    line-height: 32px;
    color: ${props => props.$textcolor === 'Light' ? '#CADEDF' : '#16796F'};
`
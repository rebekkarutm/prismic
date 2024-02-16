'use client'

import styled from "styled-components";

export const Container = styled.div<{$color? :string, $align? :string, $direction? :string}>`
    background: ${props => props.$color === 'Blue' ? '#CADEDF' : '#7CB7AF'};
    text-align: ${props => props.$align === 'Center' ? 'center' : 'left'};
    display: flex;
    flex-direction: ${props => props.$direction === 'imageRight' || props.$direction === 'imageRightButtonLeft' ? 'row-reverse' : 'row'};
    align-items: center;
    padding: 48px;
    justify-content: space-evenly;
`

export const TextField = styled.div<{$textcolor? :string}>`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    min-height: 480px;
    max-width: 500px;
    line-height: 32px;
    color: ${props => props.$textcolor === 'Light' ? '#CADEDF' : '#16796F'};
`
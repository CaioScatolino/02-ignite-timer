import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVariants = {

    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
};

export const ButtonContainer = styled.button<ButtonContainerProps>`

width: 100px;
height: 40px;
margin: 8px;
border-radius: 8px;

border: 1px solid ${props => props.theme.secondary};

background-color: ${props => props.theme.primary} ;
color: ${props => props.theme.white};

/* ${props => {
        return css`background-color: ${buttonVariants[props.variant]}`
    }} */

`
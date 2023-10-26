import styled from 'styled-components'


export const RightButton = styled.button`
color: ${(props) => (props.outline ? "green" : '')};
`


export const WrongButton = styled.button`
color: ${(props) => (props.outline ? "Red" : '')};
`


export const TextButton = styled.button`
background-color: ${(props) => (props.outline ? "green" : '')};
`
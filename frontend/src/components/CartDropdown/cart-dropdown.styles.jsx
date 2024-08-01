import styled from 'styled-components'
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../Button/button.styles'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
`

import styled from 'styled-components'

export const Button = styled.button`
  background: linear-gradient(to left, #b500b5, #ff8c00);
  border-radius: 5px;
  color: #fff;
  height: 45px;
  display: block;
  width: 100%;
  text-align: center;
  cursor: pointer;
  &[disabled] {
        opacity: .3; 
  }
`

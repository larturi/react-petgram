import styled, { css } from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    width: 0;
  }
  ${props => props.fixed && css`
  {
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 470px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
    padding: 30px 10px 7px;
  }
  `}
`

export const Item = styled.li`
  padding: 0 8px;
`

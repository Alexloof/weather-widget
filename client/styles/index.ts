import styled from 'styled-components'

export const Container = styled.div`
  font-family: sans-serif;
  display: flex;
  justify-content: center;
`

export const WidgetWrapper = styled.div`
  width: 300px;
  margin-top: 200px;
  height: min-content;
  box-shadow: 0px 3px 5px #0000001c;
`

export const Row = styled.div`
  border-bottom: 1px solid lightgray;
  height: 55px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  &:last-child {
    border-bottom: 0;
  }
  span {
    font-weight: bold;
  }
`

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid #b9b9b9;
  padding: 3px;
  outline: 0;
`

export const SearchButton = styled.button`
  border: 0;
  height: 35px;
  cursor: pointer;
  padding: 0 15px;
  border-radius: 4px;
  background: #c3ddff;
  margin-left: 10px;
  &:active,
  &:focus {
    outline: 0;
  }
`

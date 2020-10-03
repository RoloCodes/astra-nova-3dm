import React from 'react'
import styled from 'styled-components'

const Books = ({ library, books }) => {
  return (
    <StyledBooks>
      <h2>Books</h2>
      {library.map(({ name, id, quantity, color }) => (
        <div className="book" key={`books-${id}`}>
          <div className="name">{name}:</div>
          <div className="circles">{displayQuantity(quantity, color)}</div>
        </div>
      ))}
      <p>
        Click the numbers below to select the books you'd like each student to
        receive
      </p>
    </StyledBooks>
  )
}

const StyledBooks = styled.div`
  max-width: 982px;
  margin: auto;

  h2 {
    text-align: center;
  }

  .book {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .name {
    text-align: right;
    flex: 1;
  }

  .circles {
    flex: 1;
    display: flex;
    margin-left: 15px;
  }

  p {
    text-align: center;
  }
`

const StyledCircle = styled.div`
  margin-right: 6px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => `rgb(${color})` || 'black'};
`

const displayQuantity = (quantity, color) => {
  const solution = []
  for (let i = 0; i < quantity; i++) {
    solution.push(
      <StyledCircle color={color} key={'color' + String(i)}></StyledCircle>
    )
  }
  return solution
}

export default Books

import React from 'react'
import styled from 'styled-components'

const Books = ({ library }) => {
  return (
    <StyledBooks>
      <h2>Books</h2>
      {library.map(({ name, id, quantity, initialQuantity, color }) => (
        <div className="book" key={`books-${id}`}>
          <div className="name">{name}:</div>
          <div className="circles">
            {displayQuantity(quantity, initialQuantity, color)}
          </div>
        </div>
      ))}
      <p>
        Click the numbers below to select the books you'd like each student to
        receive.
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
  background-color: ${({ color }) => color || 'black'};
  transition: all 0.3s;
`

const displayQuantity = (quantity, initialQuantity, color) => {
  const circles = []
  for (let i = 0; i < initialQuantity; i++) {
    let finalColor = quantity < i + 1 ? 'rgba(50, 50, 50, .5)' : `rgb(${color})`
    circles.push(
      <StyledCircle color={finalColor} key={'color' + String(i)}></StyledCircle>
    )
  }
  return circles
}

export default Books

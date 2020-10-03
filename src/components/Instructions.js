import React from 'react'
import styled from 'styled-components'

const Instructions = () => {
  return (
    <StyledInstructions>
      <h3>
        As summer readers pour into her library, Tara faces an optimization
        dilemma...
      </h3>
      <p>
        Tara the librarian has a puzzle to solve, but it's a good problem to
        solve. Many students want to read over the summer, however many students
        want to read the same books and the library has a limited number of
        books to provide to students. Each student has ranked six books from
        <span> 1 (the book they want to read the most)</span> to
        <span> 6 (the book they wouldn't read in 1,000 years).</span>
      </p>
      <div className="questions">
        Can you help Tara decide who will get each book? Her goal is to get as
        many students their highest ranked books as possible. The library is as
        follows:
      </div>
    </StyledInstructions>
  )
}

const StyledInstructions = styled.div`
  margin: auto;
  max-width: 960px;

  h3 {
    font-size: 42px;
    line-height: 1.2;
    font-weight: 500;
  }

  p {
    font-size: 16px;
    font-weight: 400;

    span {
      color: rgb(225, 103, 55);
    }
  }

  .questions {
    max-width: 725px;
    margin: auto;
    border: 2px rgb(225, 103, 55) solid;
    padding: 10px 16px;
  }
`

export default Instructions

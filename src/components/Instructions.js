import React from 'react'
import styled from 'styled-components'
import logo from '../../public/optimize-logo.svg'

const Instructions = () => {
  return (
    <StyledInstructions>
      <div className="logo-row">
        <div className="logo-wrapper">
          <img src={logo} alt="Optimize Logo" />
        </div>
      </div>
      <h3>
        As summer readers pour into her library, Tara faces an optimization
        dilemma...
      </h3>
      <p>
        Tara the librarian has a puzzle to solve, but it's a good problem to
        have. Students want to read over the summer; however many students want
        to read the same books, and the library has a limited number of books to
        provide to students. Each student has ranked six books from
        <span> 1 (the book they want to read the most)</span> to
        <span> 6 (the book they wouldn't read in 1,000 years).</span>
      </p>
      <div className="questions">
        Can you help Tara decide who will get each book? Her goal is to get as
        many students as possible their highest ranked books. The library is as
        follows:
      </div>
    </StyledInstructions>
  )
}

const StyledInstructions = styled.div`
  margin: auto;
  max-width: 960px;

  .logo-row {
    display: flex;
    justify-content: center;
    border-bottom: 2px solid black;
  }

  .logo-wrapper {
    box-sizing: content-box;
    padding-top: 25px;
    padding-bottom: 20px;
    width: 130px;
    height: 143px;

    img {
      width: 100%;
    }
  }

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

import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { clearStudentChoices, updateStudentChoice } from '../logic'

const Students = ({ library, students, setStudents, score }) => {
  return (
    <>
      <StyledStudents>
        <h2>Students</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr className="titles">
                <th></th>
                {library.map(({ shortName, id, color }) => (
                  <StyledTitle key={`table-${id}`} color={color}>
                    {shortName}
                  </StyledTitle>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map(({ name, books, choice }, studentIndex) => (
                <tr key={name}>
                  <th className="student-name">{name}</th>
                  {books.map((bookScore, choiceIndex) => (
                    <StyledSelection
                      className="points"
                      key={name + bookScore}
                      color={library[choiceIndex].color}
                      index={studentIndex}
                      active={choiceIndex === choice}
                      onClick={() => {
                        setStudents(
                          updateStudentChoice(
                            students,
                            studentIndex,
                            choiceIndex,
                            library
                          )
                        )
                      }}
                    >
                      {bookScore}
                    </StyledSelection>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="score-wrapper">Score: {score}</div>
        <div className="button-wrapper">
          <Button onClick={() => setStudents(clearStudentChoices(students))}>
            Clear All
          </Button>
        </div>
      </StyledStudents>
      <div className="logo-wrapper"></div>
    </>
  )
}

const StyledStudents = styled.div`
  margin: auto;
  max-width: 664px;
  width: 100%;

  h2 {
    text-align: center;
  }

  .table-wrapper {
    margin: auto;
    margin-bottom: 20px;
  }

  table {
    margin: auto;
    border-collapse: collapse;

    @media (max-width: 768px) {
      display: block;
    }
  }

  tr:nth-child(odd) .student-name {
    background-color: rgba(0, 0, 0, 0.1);
  }

  td,
  th {
    padding: 4px 8px;
  }

  td {
    text-align: center;
    font-weight: 700;
  }

  .student-name {
    text-transform: uppercase;
    padding-left: 15px;
    padding-right: 25px;
    text-align: right;
  }

  .score-wrapper {
    text-align: right;
    padding-right: 6px;
    font-size: 22px;
    font-weight: bold;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
  }
`

const StyledTitle = styled.th`
  color: white;
  padding-left: 8px;
  padding-right: 8px;
  text-transform: uppercase;
  min-width: 88px;
  background-color: ${({ color }) => `rgb(${color})` || 'transparent'};
`

const StyledSelection = styled.td`
  position: relative;
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  transition: all 0.1s;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.1;
    backface-visibility: hidden;
  }

  &::before {
    z-index: -10;
    background-color: white;
  }

  &::after {
    z-index: -5;
    background-color: ${({ active, color, index }) => {
      let alpha = 0
      index % 2 === 0 ? (alpha = 0.2) : (alpha = 0.1)
      active ? (alpha = 0.5) : null
      return `rgba(${color}, ${alpha})`
    }};
  }

  &:hover {
    z-index: 10;
    transform: scale(1.15);
  }

  &:active {
    transform: scale(1.07);
  }
`

export default Students

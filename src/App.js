import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import GlobalStyles from './styles/GlobalStyles'
import Instructions from './components/Instructions'
import Books from './components/Books'
import Students from './components/Students'
import Footer from './components/Footer'

import {
  library as seedLibrary,
  students as seedStudents,
  updateLibrary,
  calculateScore,
} from './logic'

const App = () => {
  const [library, setLibrary] = useState(seedLibrary)
  const [students, setStudents] = useState(seedStudents)
  const [score, setScore] = useState(0)

  useEffect(() => {
    setLibrary(updateLibrary(library, students))
    setScore(calculateScore(students))
  }, [students])

  return (
    <StyledApp>
      <GlobalStyles />
      <Instructions />
      <Books library={library} students={students} />
      <Students
        library={library}
        students={students}
        setStudents={setStudents}
        score={score}
      />
      <Footer />
    </StyledApp>
  )
}

const StyledApp = styled.main`
  margin-bottom: 40px;
  padding-left: 16px;
  padding-right: 16px;
`

export default App

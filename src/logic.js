export const students = [
  { name: 'Alecia', books: [5, 4, 3, 6, 2, 1], choice: null },
  { name: 'Alisia', books: [1, 2, 4, 3, 5, 6], choice: null },
  { name: 'Breana', books: [5, 4, 6, 3, 1, 2], choice: null },
  { name: 'Cheiko', books: [2, 1, 3, 4, 5, 6], choice: null },
  { name: 'Eddie', books: [4, 3, 2, 5, 6, 1], choice: null },
  { name: 'Elden', books: [6, 1, 5, 2, 3, 4], choice: null },
  { name: 'Ellena', books: [6, 4, 5, 2, 3, 1], choice: null },
  { name: 'Francene', books: [5, 3, 4, 2, 6, 1], choice: null },
  { name: 'Kaitlyn', books: [2, 1, 6, 5, 3, 4], choice: null },
  { name: 'Kizzy', books: [2, 6, 4, 1, 5, 3], choice: null },
  { name: 'Lecia', books: [1, 4, 5, 3, 2, 6], choice: null },
  { name: 'Lewis', books: [6, 3, 4, 5, 1, 2], choice: null },
  { name: 'Matilde', books: [5, 1, 3, 4, 2, 6], choice: null },
  { name: 'Neville', books: [5, 3, 6, 1, 2, 4], choice: null },
  { name: 'Nick', books: [3, 1, 5, 4, 6, 2], choice: null },
  { name: 'Nora', books: [3, 4, 1, 6, 2, 5], choice: null },
  { name: 'Orville', books: [5, 6, 4, 1, 2, 3], choice: null },
  { name: 'Raymundo', books: [1, 4, 6, 5, 2, 3], choice: null },
  { name: 'Sonny', books: [2, 6, 3, 4, 5, 1], choice: null },
  { name: 'Waldo', books: [2, 6, 5, 3, 4, 1], choice: null },
]

export const library = [
  {
    id: 0,
    name: "Harry Potter and the Sorcerer's Stone",
    shortName: 'Potter',
    initialQuantity: 6,
    quantity: 6,
    color: '91, 156, 142',
  },
  {
    id: 1,
    name: 'A Wrinkle in Time',
    shortName: 'Wrinkle',
    initialQuantity: 3,
    quantity: 3,
    color: '119, 48, 122',
  },
  {
    id: 2,
    name: "Charlotte's Web",
    shortName: 'Web',
    initialQuantity: 4,
    quantity: 4,
    color: '200, 103, 53',
  },
  {
    id: 3,
    name: 'To Kill A Mockingbird',
    shortName: 'Mock',
    initialQuantity: 2,
    quantity: 2,
    color: '163, 41, 47',
  },
  {
    id: 4,
    name: 'Lord of the Flies',
    shortName: 'Lord',
    initialQuantity: 4,
    quantity: 4,
    color: '100, 159, 202',
  },
  {
    id: 5,
    name: 'The Hobbit',
    shortName: 'Hobbit',
    initialQuantity: 1,
    quantity: 1,
    color: '150, 189, 77',
  },
]

export function checkFavoriteBookDuplicates(students) {
  for (let student of students) {
    const found = {}
    for (let book of student.books) {
      if (found[book]) {
        return 'found duplicate in students favorite books'
      } else {
        found[book] = true
      }
    }
  }
  return 'No duplicates in students favorite books'
}

export function findSolutions(students, library) {
  const lib = []
  for (let book of library) {
    const { id, name, quantity } = book
    if (
      typeof quantity !== 'number' ||
      isNaN(quantity) ||
      isFinite(quantity) === false
    ) {
      console.log(`${name} has an invalid quantity in library`)
      return []
    } else {
      for (let i = 0; i < quantity; i += 1) {
        lib.push({ name, id })
      }
    }
  }
  console.log(lib)

  // let result = []
  let lowestScore = 100
  let possibleSolutions = 0
  let listOfSolutions = []
  let iterations = 0

  function permute(arr, m = []) {
    if (arr.length === 0) {
      // result.push(m)
      const score = calculateScore(students, m)
      if (typeof score === 'number' && score < lowestScore) {
        lowestScore = score
        possibleSolutions = 1
        listOfSolutions.push(m)
      }
      if (typeof score === 'number' && score === lowestScore) {
        possibleSolutions += 1
        listOfSolutions.push(m)
      }
      iterations += 1
      process
        ? nodeLog(lowestScore, possibleSolutions, iterations)
        : console.log(lowestScore, possibleSolutions, iterations)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice()
        let next = curr.splice(i, 1)
        permute(curr.slice(), m.concat(next))
      }
    }
  }
  permute(lib)
}

export function updateStudentChoice(students, studentIndex, choice, library) {
  let remove = false
  if (choice === students[studentIndex].choice) {
    remove = true
  }

  if (library[choice].quantity < 1 && remove === false) {
    return students
  }

  return students.map((student, index) => {
    if (index !== studentIndex) {
      return student
    } else {
      if (remove) {
        return {
          ...student,
          choice: null,
        }
      } else {
        return {
          ...student,
          choice,
        }
      }
    }
  })
}

export function updateLibrary(library, students) {
  const newLibrary = library.map((book) => ({
    ...book,
    quantity: book.initialQuantity,
  }))

  students.map(({ choice }) => {
    if (choice !== null) {
      newLibrary[choice].quantity -= 1
    }
  })

  return newLibrary
}

export function calculateScore(students) {
  let score = 0
  students.map(({ books, choice }) => {
    if (typeof choice === 'number') score += books[choice]
  })
  return score
}

export function clearStudentChoices(students) {
  return students.map((student) => {
    return {
      ...student,
      choice: null,
    }
  })
}

export function nodeLog() {
  const args = Array.from(arguments).map((item) => String(item))
  process.stdout.write(args.join(' '))
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  process.stdout.write('\n')
}

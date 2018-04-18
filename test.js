import test from 'ava'
import csvTemplate from './'

test('csv-template example', t => {
  t.plan(1)
  return csvTemplate({
    template: './example.csv',
    output: './output.csv',
    data: {
      name: 'John Doe',
      age: 26,
      email: 'johndoe@example.com',
      birthdate: '01/01/1990',
      projects: ['project1', 'project2', 'project3']
    }
  }).then((res) => {
    t.true(res)
  })
})

test('csv-template fail example', t => {
  t.plan(1)
  return csvTemplate({
    template: './exampleFail.csv',
    output: './output.csv',
    data: {
      name: 'John Doe',
      age: 26,
      email: 'johndoe@example.com',
      birthdate: '01/01/1990',
      projects: ['project1', 'project2', 'project3']
    }
  }).then((res) => {
    t.false(res)
  })
})

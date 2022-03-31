class PersonsController {
  renderPersons (req, res) {
    const persons = [
      { firstName: 'Maria', lastName: 'Silva' },
      { firstName: 'João', lastName: 'Souza' },
      { firstName: 'Pedro', lastName: 'Alves' },
      { firstName: 'Ana', lastName: 'Santos' }
    ]

    res.render('persons', {
      persons,
      quantity: persons.length,
      hasPersons: persons.length !== 0
    })
  }
}

module.exports = PersonsController

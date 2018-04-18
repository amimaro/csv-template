# csv-template [![Build Status](https://secure.travis-ci.org/amimaro/csv-template.svg?branch=master)](https://travis-ci.org/amimaro/csv-template) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

CSV templating with EJS

## Installation

```bash
npm install --save csv-template
```

## Usage

```javascript
const csvTemplate = require('csv-template')

csvTemplate({
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
  console.log(res)
})
```

## Testing

```bash
npm run test
```

## License

MIT [LICENSE.md](LICENSE.md)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin new-feature`)
5. Create new Pull Request

Crafted with <3 by [amimaro](https://github.com/amimaro).

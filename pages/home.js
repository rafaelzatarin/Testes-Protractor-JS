const TagsComponent = require('./components/tags')

class Home {
  constructor () {
    this.tags = new TagsComponent()
  }

  visit () {
    browser.get('https://www.americanas.com.br/')
  }
}

module.exports = Home

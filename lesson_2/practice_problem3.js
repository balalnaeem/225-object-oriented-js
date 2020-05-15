function makeCountry(name, continent, visited = false) {
  return {
    name: name,
    continent: continent,
    visited: visited,
    getDescription: function() {
      console.log(this.name + ' is located in ' + this.continent + '. '
        + 'I ' + `${visited ? 'have' : 'haven\'t'} visited this country.`);
    },

    visitCountry: function() {
      this.visited = true;
    },
  };
}

let chile = makeCountry('The Republic of Chile', 'South America', true);
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');


chile.getDescription();
canada.getDescription();
southAfrica.getDescription();
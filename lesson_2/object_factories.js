function makeCountry(name, continent, visited = false) {
  return {
    name: name,
    continent: continent,
    visited: visited,
    visitCountry: function(country) {
      this.visited = true;
    },

    getDescription: function() {
      return `${this.name} is located in ${this.continent}. I ${this.visited ? 'have' : 'haven\'t'} visited this country`;
    },
  };
}

var chile = makeCountry('The Republic of Chile', 'South America');
var canada = makeCountry('Canada', 'North America');
var southAfrica = makeCountry('The Republic of South Africa', 'Africa');


console.log(canada.getDescription());      // "Canada is located in North America."
canada.visitCountry();
console.log(canada.getDescription());


var fs = require('fs');

var DefaultMixer = function (cocktail) {
    this.getOutputExt = function () {
        return false;
    };
    
    this.mix = function (input, output) {
        console.log(input, output);
    }
}

module.exports = function (cocktail) {
    return new DefaultMixer(cocktail);
}
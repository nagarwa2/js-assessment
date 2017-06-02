exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
      return /\d/g.test(str);
  },

  containsRepeatingLetter: function(str) {
      return /([a-zA-Z])\1/g.test(str);
  },

  endsWithVowel: function(str) {
      return /[a|e|i|o|u]$/i.test(str);
  },

  captureThreeNumbers: function(str) {
      if(/\d{3}/.test(str)){
          return /\d{3}/.exec(str)[0];
      }
      return false;
  },

  matchesPattern: function(str) {
      return /^\d{3}-\d{3}-\d{4}$/g.test(str);
  },

  isUSD: function(str) {

  }
};

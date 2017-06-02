exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {
      return parseInt(str,2);
  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {
      var len = a.toString().indexOf(".") >= 0 ? a.toString().split(".")[1].length : 0;
      var len1 = b.toString().indexOf(".") >= 0 ? b.toString().split(".")[1].length : 0;
      var exp = 1;
      var exp1 = 1;
      var i;
      for(i=0;i<len;i++){
          exp = exp*10;
      }
      for(i=0;i<len1;i++){
          exp1 = exp1*10;
      }
      return (a*exp) * (b*exp);
  }
};

exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
      var arr = str.split("");
      var dup = [];
      var output = "";
      var i;
      var len = arr.length;
      for(i=0;i<len;i++){
          if(amount === 0){
              return str;
              break;
          }
          var currL = 0;
          if(dup[arr[i]] === undefined){
              dup = [];
              dup[arr[i]] = 1;
              currL = 1;
          }else{
              dup[arr[i]] = dup[arr[i]] + 1;
              currL = dup[arr[i]];
          }
          if(currL <= amount){
              output = output + arr[i];
          }
      }
      return output;
  },

  wordWrap: function(str, cols) {
      
      var output = [];
      var i;
      var arr = str.split("");
      var len = arr.length;
      var lastWord = "";
      for(i=0;i<len;i++){
          if(arr[i] !== " "){
              lastWord += arr[i];
          }
          if(arr[i] === " " && lastWord.length >= cols){
              output = output + "\n";
          }else if(arr[i] === " " && lastWord.length >= 2){
              output = output + "\n";
          }else if(arr[i] === " " && i%cols === 0){
              output = output + "\n";
          }
          else{
              output = output + arr[i];
          }
          if(arr[i] === " "){
              lastWord = "";
          }
      }
      return output;
  },

  reverseString: function(str) {
      var output = "";
      var arr = str.split("");
      var len = arr.length;
      var i;
      for(i=len-1;i>=0;i--){
          output += arr[i];
      }
      return output;
  }
};

exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
      return fn.apply(null,arr);
  },

  speak: function(fn, obj) {
      return fn.call(obj);
  },

  functionFunction: function(str) {
      return function(str1){
          return str + ", " + str1;
      }
  },

  makeClosures: function(arr, fn) {
      var fun = [];
      var i;
      var len = arr.length;
      for(i=0;i<len;i++){
          fun[i] = (function(){
                    var squareNumber = arr[i];
                    return function(){
                        return squareNumber * squareNumber;
                    }
          })();
      }
      return fun;
  },

  partial: function(fn, str1, str2) {
      return function(str3){
          return fn(str1,str2,str3);
      }
  },

  useArguments: function() {
      var i;
      var len = arguments.length;
      var sum = 0;
      for(i=0;i<len;i++){
          sum += arguments[i];
      }
      return sum;
  },

  callIt: function(fn) {
      var newArgs = [];
      var i;
      var len = arguments.length;
      for(i=1;i<len;i++){
          newArgs.push(arguments[i]);
      }
      fn.apply(null,newArgs);
  },

  partialUsingArguments: function(fn) {
      var newArgs = [];
      var i;
      var len = arguments.length;
      for(i=1;i<len;i++){
          newArgs.push(arguments[i]);
      }
      return function(){
          len = arguments.length;
          for(i=0;i<len;i++){
              newArgs.push(arguments[i]);
          }
          return fn.apply(null,newArgs);
      }
  },

  curryIt: function(fn) {
      var requiredArgs = fn.length;
      var innerArguments = [];
      function checkCurryFn(){
          return function(arg){
              innerArguments.push(arg);
              if(innerArguments.length === requiredArgs){
                  return fn.apply(null,innerArguments);
              }else{
                  return checkCurryFn();
              }
          }
      }
      return checkCurryFn();
  }
};

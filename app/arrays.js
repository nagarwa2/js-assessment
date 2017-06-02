exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      var i;
      var len = arr.length;
      for(i = 0;i<len;i++){
          if(arr[i] === item){
              return i;
          }
      }
      return -1;
  },

  sum: function(arr) {
      var sum = 0;
      var i;
      var len = arr.length;
      for(i=0;i<len;i++){
          sum += arr[i];
      }
      return sum;
  },

  remove: function(arr, item) {
      var output = [];
      var i;
      var len = arr.length;
      for(i=0;i<len;i++){
          if(arr[i] !== item){
              output.push(arr[i]);
          }
      }
      return output;
  },

  removeWithoutCopy: function(arr, item) {
      var i;
      var len = arr.length;
      for(i=0;i<len;i++){
          if(item === arr[i]){
              arr.splice(i,1);
              i--;
          }
      }
      return arr;
  },

  append: function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate: function(arr) {
      arr.pop();
      return arr;
  },

  prepend: function(arr, item) {
      arr.unshift(item);
      return arr;
  },

  curtail: function(arr) {
      arr.shift();
      return arr;
  },

  concat: function(arr1, arr2) {
      var output = arr1.concat(arr2);
      return output;
  },

  insert: function(arr, item, index) {
      arr.splice(index,0,item);
      return arr;
  },

  count: function(arr, item) {
      var count = 0;
      var i;
      var len = arr.length;
      for(i=0;i<len;i++){
          if(item === arr[i]){
              count++;
          }
      }
      return count;
  },

  duplicates: function(arr) {
      var output = [];
      var duplicates = [];
      var temp = [];
      var i;
      var len = arr.length;
      for(i=0;i<len;i++){
          if(duplicates[arr[i]] === undefined){
              duplicates[arr[i]] = 1;
          }else if(temp[arr[i]] === undefined){
              output.push(arr[i]);
              temp[arr[i]] = 1;
          }
      }
      return output;
  },

  square: function(arr) {
      var output = [];
      var i;
      var len = arr.length;
      for(i=0;i<len;i++){
          output.push(arr[i] * arr[i]);
      }
      return output;
  },

  findAllOccurrences: function(arr, target) {
      var output = [];
      var i;
      var len = arr.length;
      for(i=0;i<len;i++){
          if(arr[i] === target){
              output.push(i);
          }
      }
      return output;
  }
};

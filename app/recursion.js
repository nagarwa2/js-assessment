exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
      var output = [];
      var isDirName = arguments.length == 2 ? true:false;
      function getFilesList(tempData){
          if(isDirName){
              if(tempData.dir === dirName){
                  var dirFiles = tempData.files;
                  var i;
                  var len = dirFiles.length;
                  for(i=0;i<len;i++){
                      if(typeof dirFiles[i] === 'string'){
                          output.push(dirFiles[i]);
                      }else{
                          getFilesList(dirFiles[i]);
                      }
                  }
              }else{
                  var dirFiles = tempData.files;
                  var i;
                  var len = dirFiles.length;
                  for(i=0;i<len;i++){
                      if(typeof dirFiles[i] !== 'string'){
                         getFilesList(dirFiles[i]);
                      }
                  }
              }
          }else{
              var dirFiles = tempData.files;
              var i;
              var len = dirFiles.length;
              for(i=0;i<len;i++){
                  if(typeof dirFiles[i] === 'string'){
                      output.push(dirFiles[i]);
                  }else{
                      getFilesList(dirFiles[i]);
                  }
              }
          }
          return output;
          
      }
      return getFilesList(data);

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
      if(n === 0){
          return 0;
      }
      else if(n === 1){
          return 1;
      }else{
         return this.fibonacci(n-1) + this.fibonacci(n-2);
      }

  },

  validParentheses: function(n) {

  }
};

exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
      var timeoutRef;
      function calculateCount(){
          
          console.log(start);
          start++;
          if(start <= end){
              timeoutRef = setTimeout(calculateCount,100);
          }
      }
      calculateCount();
      
      return{
        cancel : function(){
            if(timeoutRef){
                clearTimeout(timeoutRef);
            }
        }
      };
  }
};

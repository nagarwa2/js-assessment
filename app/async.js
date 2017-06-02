exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {

  },

  manipulateRemoteData: function(url) {
      
      $.ajax({
             url:url,
             type:"GET",
             success:function(response){
                var people = [];
                var i;
                var len = response.people.length;
                for(i=0;i<len;i++){
                    people.push(response.people[i].name);
                }
                return people.sort();
             }
      
    });

  }
};


$(document).ready(function(){
  
//  if (location.protocol != 'https:')
// {
//  location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
// }
$("#searchTerm").keypress(function(i){
  
   if(i.keyCode === 13){
      var searchTerm = $("#searchTerm").val();
     $("#output").empty();
       url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm         +"&format=json&callback=?";
    $.ajax({
            dataType: "json",
            url: url,
            }).done(function ( data ) {
        // do my stuff  
              
              for(var i = 0; i < data[1].length; i++) {
                
               if(typeof(data[2][i])=="string"){  
                 
                $("#output").append("<a target='_blank' id='anchor' href="+data[3][i]+"><div id='paragraph'><div class='well'><h2 id='title'>"+data[1][i]+ "</h2>" + "<p id ='summary'>" + data[2][i] + "</p></div></div></a>");
     $(".well").hover(function(){
        $(this).css("transform", "scale(1.03)");
        }, function(){
        $(this).css("transform", "scale(1)");
    });                            
       
               }//if
             }//for loop
             
               }); //done function(data)
     
    }//end of if with keyCode 13
                     
}); //keypress function

}); //document ready

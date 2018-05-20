//Event Handlers
//set all text to hidden


    var classDetails = document.getElementsByClassName('classDetails');
    var zumba = document.getElementById('zumba');
$(document).ready(function(){
    $(zumba).hover(function(){
        $(classDetails).css('visibility', 'visible');
    }, function() {
        $(classDetails).css('visibility', 'hidden');
        

    });
});


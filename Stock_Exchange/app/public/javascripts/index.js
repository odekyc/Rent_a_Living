$(document).ready(function() {
    $('[name=language]').change(function(){
        if($(this).val() === 'ch-simplified'){
             $(".english").css("visibility","hidden");
             $(".ch-simplified").css("visibility","visible");
        }
        else if ( $(this).val() === 'english' ){
          alert("hi");
             $(".english").css("visibility","visible");
             $(".ch-simplified").css("visibility","hidden");
        }
    });
});
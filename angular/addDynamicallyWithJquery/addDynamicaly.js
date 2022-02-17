$(document).ready(function(){


    $('#inpuText').keyup(function(){

        $value = $(this).val();
        $("#para").text($value);
    })

});
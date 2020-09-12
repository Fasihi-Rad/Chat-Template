$(window).resize(function() {
    var width = $(window).width();
    if (width < 330){
       $('.login_card').css({'padding': '0' , 'box-shadow': 'none'})
       $('body').css({'background-color': '#2c3338'})

    }
    else{
        $('.login_card').css({'padding': '5rem 2rem' , 'box-shadow': '0 0 64px 10px rgba(0,0,0,0.6)'})
        $('body').css({'background-color': '#c5c5c5'})
    }
});

$(document).ready(function () {
    $('#login_btn').click(function(){
        var userName = $('#login__username').val();
        var password = $('#login__password').val();
        console.log(password)
        console.log(userName)
    })

});
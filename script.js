

{/* <script src="https://code.jquery.com/jquery-3.3.1.js"></script> */}
// {/* <script type="text/javascript"> */}
$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else{
        $('nav').removeClass('black');
    }
})
/*menu button onclick function*/         $(document).ready(function(){
        $('.menu h4').click(function(){
            $("nav ul").toggleClass("active")
    })
    })





    // BOX 3
    

    
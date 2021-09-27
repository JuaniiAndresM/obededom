function desplegar(){

    if($('.sidebar-menu').hasClass('desplegado') == false){
        $('.sidebar-menu').addClass('desplegado');
    }else{
        $('.sidebar-menu').removeClass('desplegado');
    }
    
}
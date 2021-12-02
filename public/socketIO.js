var socket = io();

socket.on("startSpinning", function(){
    spinner.spin();
});

socket.on("setupMaps", function(data){
    spinner = new Spinner(width/2, 100, width-100, 100, data);    
});

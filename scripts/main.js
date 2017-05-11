var funds = 45;
var meter = $('#meter');
var intervalID = window.setInterval(update, 1000);

function update() {
    meter.css({"bottom":funds+"%"});
    if (funds < 50) {
        funds ++;
    }else {
        console.log("launch!");
        launch();
    }
}

function launch() {
    $(".rocket-container").addClass("launch");
    $(".rocket").addClass("shake shake-constant");
}

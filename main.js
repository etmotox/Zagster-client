$(updateView)

const BASE_URL = "https://zagster-service.herokuapp.com"


var ctx = document.getElementById("myChart");

function updateView() {
    $.getJSON(BASE_URL + "/rides/count", updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/per_year", updateYearTable)
    $.getJSON(BASE_URL + "/rides/count/per_month", updateMonthTable)
}
new Chart(ctx, {
    type: 'polarArea',
    data = {
        datasets: [{
            data: [10, 20, 30]
        }],
            labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    }
});
function updateRideCount(data) {
    numberOfRides = data.count 
    $(".rideCount").html(numberOfRides)
}
function updateYearTable(data){
    numberOfRides = data['2016']
    $("p#2016").html(numberOfRides)
}
function updateYearTable(data){
    numberOfRides = data['2017']
    $("p#2017").html(numberOfRides)
}
function updateYearTable(data){
    numberOfRides = data['2018']
    $("p#2018").html(numberOfRides)
}

function updateMonthTable(data){
    console.log(data)
}
function updateMonthTable(data){
    numberOfRides = data['2017']
    $("p#2018").html(numberOfRides)
}
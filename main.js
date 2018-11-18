$(updateView)

const BASE_URL = "https://zagster-service.herokuapp.com"

var year = []
var month = []

function updateView() {
    $.getJSON(BASE_URL + "/rides/count", updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/per_year", updateYearTable)
    $.getJSON(BASE_URL + "/rides/count/per_month", printData)
}
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

function printData(data){
    console.log(data)
}
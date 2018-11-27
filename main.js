$(updateView)

const BASE_URL = "https://zagster-service.herokuapp.com"

var monthRides = []
var chartData =[]

function updateView() {
    $.getJSON(BASE_URL + "/rides/count", updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/per_month", updateMonthTable,)
}

function updateRideCount(data) {
    numberOfRides = data.count 
    $(".rideCount").html(numberOfRides)
}

function updateMonthTable(data) {
    monthRides = data;
    for (var i = 0; i <=11; ++i){
        chartData.push(monthRides[2017] [i] [i+1]);
    }

    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [{
                label: 'Rides Per Month',
                data: chartData,
                backgroundColor: [
                    '#d10000',
                    '#0b15c6',
                    '#23dd1c',
                    '#cc0aa5',
                    '#d10000',
                    '#0b15c6',
                    '#23dd1c',
                    '#cc0aa5',
                    '#d10000',
                    '#0b15c6',
                    '#23dd1c',
                    '#cc0aa5'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

}

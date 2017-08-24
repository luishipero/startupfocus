var areaChart = Morris.Area({
        element: 'morris-area-chart',
        data: [{
            month: '2017-02-28',
            development: 2400,
            management: 1400,
            admin: 1000
        }, {
            month: '2017-03-27',
            development: 2450,
            management: 1300,
            admin: 800
        }, {
            month: '2017-04-22',
            development: 2400,
            management: 1400,
            admin: 900
        }, {
            month: '2017-05-20',
            development: 2500,
            management: 1500,
            admin: 900
        }, {
            month: '2017-06-14',
            development: 3000,
            management: 2500,
            admin: 1000
        }, {
            month: '2017-07-24',
            development: 4500,
            management: 2400,
            admin: 1500
        }],
        xkey: 'month',
        ykeys: ['development', 'management', 'admin'],
        labels: ['development', 'management', 'admin'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });


var myBarY = ['a', 'b'];

var myData1 = [{
            m: 'Admin',
            b: 1400
        }, {
            m: 'Development',
            b: 3800
        }, {
            m: 'Management',
            b: 2500
        }, {
            m: 'Taxes',
            b: 2450
        }, {
            m: 'Business',
            b: 1500
        }, {
            m: 'WSBO',
            b: 1450
        }];

var morrisData = localStorage.getItem("newData");

    if(morrisData === null){
        morrisData = myData1;
    } else {
        morrisData = JSON.parse(morrisData);
    }


var barChart = 
    Morris.Bar({
        element: 'morris-bar-chart',
        data: morrisData,
        xkey: 'm',
        ykeys: myBarY,
        labels: ['Previous Month', 'Last Month'],
        hideHover: 'false',
        resize: false,
        barColors: ['#81A6DE', '#2363C1']
    });

// var myBarChart = new Chart(ctx, {
//     type: 'bar',
//     data: data,
//     options: options
// });



var donutChart =  Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Revenue",
            value: 5000 
        }, {
            label: "Investment",
            value: 20000
        }],
        resize: true
    });

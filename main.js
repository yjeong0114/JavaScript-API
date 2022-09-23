// $.getJSON("http://api.coinlayer.com/api/live?access_key=cc402f56d87077fc9bc15f9e735421a3",
// function(data){
//     console.log(data)
// })

// set endpoint and your API access key
endpoint = 'live'
access_key = 'cc402f56d87077fc9bc15f9e735421a3';

// get the most recent exchange rates via the "live" endpoint:
$.ajax({
    url: 'http://api.coinlayer.com/api/' + endpoint + '?access_key=' + access_key,   
    dataType: 'jsonp',
    success: function(json) {

        // exchange rata data is stored in json.rates
        // alert(json.rates.BTC);
        let rate = Math.floor(json.rates.BTC); 
        console.log(rate);
        
        // target currency is stored in json.target
        // let target = json.target;
        
        // timestamp can be accessed in json.timestamp
        // alert(json.timestamp);
        
    }
});

function convert(){
    //1. 환전
    // 얼마를 환전? 가지고있는곤, 바꾸고자하는 돈
    // 돈*환율
    let amount = document.getElementById("from-input").value;
    console.log(amount)
    let convertedAmount = amount * rate;

    console.log("환전결과!", convertedAmount);

    document.getElementById("to-input").value = convertedAmount;
}

convert()
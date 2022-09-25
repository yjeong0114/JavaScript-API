// $.getJSON("http://api.coinlayer.com/api/live?access_key=cc402f56d87077fc9bc15f9e735421a3",
// function(data){
//     console.log(data)
// })

// set endpoint and your API access key
endpoint = 'live'
access_key = '2615d5ef07fb58d9753f35e417d3df24';

// get the most recent exchange rates via the "live" endpoint:
$.ajax({
    url: 'http://api.coinlayer.com/api/' + endpoint + '?access_key=' + access_key,   
    dataType: 'jsonp',
    success: function(json) {

        // exchange rata data is stored in json.rates
        // alert(json.rates.BTC);
        let rate = Math.floor(json.rates.BTC); 
        // console.log(rate);
        convert(rate)
        // target currency is stored in json.target
        // let target = json.target;
        
        // timestamp can be accessed in json.timestamp
        // alert(json.timestamp);
        
    }
});



function convert(rate){
    //1. 환전
    // 얼마를 환전? 가지고있는곤, 바꾸고자하는 돈
    // 돈*환율
    // let amount = document.getElementById("from-input").value;
    // console.log(rate)
    // let convertedAmount = amount * rate;

    console.log("환전결과!", rate);

    document.getElementById("to-input").value = rate;
}
// convert()
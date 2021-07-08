const express = require('express')
const app = express()
const port = 4000
const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// scraper code 
var title, release, rating
var json = { title: "", release: "", rating: "" }
// end scraper code 
var url;
app.get('/scraper', (req, res) => {
    // url = "https://www.goodreturns.in/gold-rates/delhi.html#Gold+Rate+in+Delhi+for+Last+10+Days+%2810+g%29";
    // url = "https://en.wikipedia.org/wiki/List_of_largest_companies_by_revenue";
    url = "https://www.moneycontrol.com/";
    // console.log('call');
    // console.log(url);
    // return
    request(url, function (error, response, html) {
        var $ = cheerio.load(html);
        // console.log(html);
        let rowwww = $('#market_action .mob-hide').filter(function(){
            var data = $(this)
            carat = data.find('#cp').first().text();
            console.log(carat.trim());
        });
        let rowwww2 = $('#market_action .mob-hide').filter(function(){
            var data = $(this)
            carat = data.find('#chg').first().text();
            console.log(carat.trim());
        });
        let rowwww3 = $('#market_action .mob-hide').filter(function(){
            var data = $(this)
            carat = data.find('#percentchange').first().text();
            console.log(carat.trim());
        });
        // let rows = $('#market_action .mob-hide').each((idx, elem) => {
        //     rank = $(elem).find('#cp').first().text().replace(/[\n\r]+/g, '');
        //     console.log(rank);
        // });
        
        // let $ = cheerio.load(html);
        // let data = [];
        // let data2 = [];
        // let name, rank, cols, col;
        // let rows = $('table.wikitable tbody tr').each((idx, elem) => {
        //     rank = $(elem).find('th').text().replace(/[\n\r]+/g, '');
        //     //name = $(elem).find('td a').html();
        //     data2 = [];
        //     cols = $(elem).find('td').each((colidx, colelem) => {
        //         col = $(colelem).text().replace(/[\n\r]+/g, '');
        //         data2.push(col,);
        //     });

        //     data.push({
        //         rank,
        //         ...data2,
        //     });

        //     console.log(data);
        // });

        // next
        // let rows = $('.gold_silver_table_10_days table tbody tr').each((idx, elem) => {
        //     // rank = $(elem).find('td').text().replace(/[\n\r\t]+/g, '');
        //     data2 = [];
        //     cols = $(elem).find('td').each((colidx, colelem) => {
        //         col = $(colelem).text().replace(/[\n\r\t]+/g, '').trim();
        //         data2.push(col,);
        //         // console.log('check ',JSON.stringify(col));
        //     });
        //     // console.log(JSON.stringify(rank));
        //     data.push({
        //         // rank,
        //         ...data2,
        //     });

        //     // // data2 = [];
        //     // console.log();
        //     // data.push(JSON.stringify(rank));
        //     // return
        // })
        // console.log(JSON.stringify(data));
        // $(".topRightText").filter(function () {
        //     console.log('adsf');
        //     var data = $(this)
        //     carat = data.children().first().text();
        //     console.log('ajay',carat);
        // }), console.error(error);
        // end next
    });

});

// <ul id="fruits">
//   <li class="apple">Apple</li>
//   <li class="orange">Orange</li>
//   <li class="pear">Pear</li>
// </ul>
// $('.apple', '#fruits').text()

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
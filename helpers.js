// load puppeteer
const puppeteer = require('puppeteer')

//load configs
require('dotenv').config()

// function to crap the price from the received url and selector
var scrapeFromUrlAndSelector = async function(URL, SELECTOR) {
    return new Promise(async(resolve) => {

        console.log(`
        ----------
        PARSING
        URL: ${URL}
        SELECTOR: ${SELECTOR}
        -----`.trim())

        var data = { "preco": "NA" }

        // start new browser
        const browser = await puppeteer.launch({})
        const page = await browser.newPage()

        // parse from the selector
        await page.goto(URL)
        var element = await page.waitForSelector(SELECTOR)
        var text = await page.evaluate(element => element.textContent, element)
        browser.close()


        data.preco = text.trim().replace('€', '').replace(',', '.')

        console.log(`
        RETURNED: ${JSON.stringify(data)}
        ----------`.trim())

        resolve(data.preco)
    })
}



var authenticate = function(authorization) {
    return authorization == process.env.AUTHORIZATION
}




module.exports = {

    scrapeFromUrlAndSelector,
    authenticate

}
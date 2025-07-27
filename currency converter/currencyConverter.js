import https from "https"; 
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const url = 'https://v6.exchangerate-api.com/v6/8021a651163d96e5afd667d3/latest/USD'; 
const apiKey = '8021a651163d96e5afd667d3'; 

const convertCurrency = (amount, rate)=>{
    return (amount * rate).toFixed(2);
}

https.get(url, (response)=>{

    let data = ""; 

    response.on('data', (chunk)=>{
        data+= chunk;
    })

response.on('end',()=>{
        const rates = JSON.parse(data).conversion_rates; 

        rl.question(chalk.yellow("💵 Enter the amount in USD: "), (amount)=>{
            rl.question(chalk.cyan('💱 Enter the target currency (e.g. INR, NPR, AUD): '), (currency)=>{
                const rate = rates[currency.toUpperCase()]; 
                if(rate){
                    console.log(
                        chalk.green.bold(`${amount} USD is approx. ${convertCurrency(amount, rate)} ${currency.toUpperCase()}`)
                    );
                }
                else{ 
                    console.log(chalk.red.bold("❌ Invalid Currency code"));
                }
                rl.close(); 
            })
        }); 
    })
})
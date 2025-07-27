import https from 'https'; 
import chalk from 'chalk'; 

const getJoke = () =>{
    const url = 'https://official-joke-api.appspot.com/random_joke'

    https.get(url, (response)=>{
        let data  = " "; 
        response.on('data',(chunk)=>{
            data += chunk
        })
        response.on('end', () => {
            const joke = JSON.parse(data);
            console.log(chalk.green('\nHere is a random joke:\n'));
            console.log(chalk.red(joke.setup));
            console.log(chalk.blue.bgRed.bold(joke.punchline));
        });
    }).on('error', (err) => {
        console.error(chalk.red('Error fetching joke:'), err.message);
    });
}


getJoke(); 


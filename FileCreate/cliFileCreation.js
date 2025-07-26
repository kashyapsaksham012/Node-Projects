// 1: Enter the file name 
// 2: Enter the content 

// import { Readline } from 'readline';
// import fs from 'fs'; 

const readline = require('readline')
const fs = require('fs')


const rl = readline.createInterface({
    input:process.stdin, 
    output: process.stdout
})

const fileCreation=()=>{
    rl.question("Enter the File name: ", (fileName)=>{
        rl.question("Enter the content: ", (content)=>{
            fs.writeFile(`${fileName}.txt`, content,(err)=>{
                if(err){
                    console.log(`Error is there, ${err.message}`); 
                }
                else{
                    console.log(`File ${fileName} created sucessfully`)
                }
            })
        })
    })
}

fileCreation(); 

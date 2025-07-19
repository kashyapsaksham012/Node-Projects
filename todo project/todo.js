    import readline from 'readline';

    const rl = readline.createInterface({
        // to read and write the data
        input: process.stdin, 
        output: process.stdout
        
    })

    const todos = []; 

    const showMenu= ()=>{
        console.log("\n1: Add a task"); 
        console.log("2: View a task"); 
        console.log("3: Exit"); 
        rl.question("\nchoose an options: ", handleInput);
    }

    const handleInput = (option)=>{
        if(option === "1"){
            rl.question("\nEnter a Task: ", (task)=>{
            todos.push(task);
            console.log("Task Added"); 
            showMenu();
        })
        }else if(option==="2"){
            console.log("\n Your todo-list"); 
            todos.forEach((task, idx)=>{
                console.log(`${idx+1}.${task}`)
            })
            showMenu();
        }
        else if(option === "3"){
            console.log("\nGood Bye"); 
            rl.close();
        }
        else{
            console.log("\nInvalid Option, Please try again")
            showMenu();
        }
    }

    showMenu();
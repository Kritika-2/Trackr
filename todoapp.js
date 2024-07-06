let todo=[];
let request = prompt("Please enter your request (add, list, delete, help, quit)");
while(true){
    if(request=="quit"){
        console.log("Quittig the app");
        break;
    }

    if (request=="list"){
        console.log("------");
        for (let i=0; i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("------");
    }
    else if (request=="add"){
        let task=prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if (request=="delete"){
        let idx=prompt("Please enter the task index");
        todo.splice(idx,1);
        console.log("task deleted");

    }
    else{
        console.log("Wrong Request");
    }
    request=prompt("Please enter your request");
}

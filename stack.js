stack =[]
comand = ["push 2","push 4","pop","push 5","pop","push 8","push 5","pop","push 9", "add 2 3","add 2 4"]
changes(comand)

function changes(arr){
    for(let i = 0; i < arr.length;i++){
       let eachElement = arr[i].split(" ");
       if (eachElement[0] =="push")  stack.push(eachElement[1]);
       else if(eachElement[0] =="pop") stack.pop(); 
       else if(eachElement[0] =="add") add(stack, eachElement)
        if(stack.length == 0) console.log("stack is empty");
    }
    return stack
}
function add(stack, eachElement) {
    for(let j=1; j<=eachElement[1]; j++){
        stack[stack.length-j] = parseInt(stack[stack.length-j]) + parseInt(eachElement[2]);
    }
}

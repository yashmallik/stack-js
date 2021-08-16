stack =[]
changes(["push 2","push 4 ","pop","push 5","pop","push 8","push 5","pop","push 9", "add 2 3","add 2 4"])

function changes(arr){
    for(i in arr){
       let eachElement = i.split(" ");
       if (eachElement[0] =="push")  stack.push(eachElement[1]);
       else if(eachElement[0] =="pop") stack.pop(); 
       else if(eachElement[0] =="add") add();
       console.log(eachElement)
    }
    console.log(stack)
}
function add(){
    for(let j=1; j<eachElement[1]; j++){
        stack[i] += eachElement[2];

    }
}
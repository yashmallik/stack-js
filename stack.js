stack =[]

function changes(arr){
    for(i in arr){
       let eachElement = i.split(" ");
       if (eachElement[0] =="push")  stack.push(eachElement[1]);
       else if(eachElement[0] =="pop") stack.pop(); 
       else if(eachElement[0] =="add") eachElement=> 
       console.log(eachElement)

    }

}
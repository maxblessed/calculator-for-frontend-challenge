//creating a custom function to access all html element
function id(id){
      return document.getElementById(id).children;
    }

//initialising all variable and assigning click event to them

let arr=['+','-','*','/'];
let displayAnswer

 id('row')[18].onclick=computeInput
 id('row')[1].onclick=clearAllOperator
 id('row')[2].onclick=deleteOneOperator
 let displayOutput=id('row')[0];

 
function assingClick(el){
        for(let i=3; i<el.length-1; i++){
            el[i].onclick=getInput
        }
  }

//function that display initial input
function getInput(e){
 
       for(item of arr){
          
           if(displayOutput.value.endsWith(item)&&e.target.innerHTML==='+'){
               return
           }else if(displayOutput.value.endsWith(item)&&e.target.innerHTML==='/'){
               return
           
           }else if(displayOutput.value.endsWith(item)&&e.target.innerHTML==='-'){
             return
           
           }else if(displayOutput.value.endsWith(item)&&e.target.innerHTML==='*'){
             return
           }
       }

   displayOutput.value+=e.target.innerHTML;
}

//function that compute all input and display answer
function computeInput(){
   
        displayAnswer=  displayOutput.value===''?'0':displayOutput.value;
        for(item of arr){
            if(displayAnswer.endsWith(item)&&displayOutput.value.length>1){
                return
            }else if(displayAnswer.startsWith(item)){
                displayOutput.value='';
                return
            }
        }
        
        displayOutput.value=eval(displayAnswer);
}

//clearscreen function
function clearAllOperator(){
    displayOutput.value=''      
}

//delete one item at a time function
function deleteOneOperator(){
    displayOutput.value=displayOutput.value.substring(0,displayOutput.value.length-1);
}





assingClick(id('row'))


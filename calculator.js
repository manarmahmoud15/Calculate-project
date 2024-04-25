var  display =document.querySelector(".display");
var button =document.querySelectorAll("button");
var special = ["%" ,"*", "/", "-", "+" ,"="];
var output =""; 
var calculate = (btnvalue) => {
    if(btnvalue === "=" && btnvalue !== "")
    {
        output = eval(output.replace("%", "/100" ));
    }
    else if (btnvalue==="AC")
    {
        output =" ";
    }
    else if (btnvalue=== "DEL")
    {

      output = output.toString().slice(0,-1);
    }
    else {
        if (output === "" && special.includes(btnvalue))
       { return;}
       output +=btnvalue;
    }
    display.value=output;
}
button.forEach((button) =>{
    button.addEventListener("click", (e)=>calculate(e.target.dataset.value));
});

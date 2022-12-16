function myFunc(){
    let name=prompt("enter your name");
    let n=parseInt(prompt("enter the value"));
    for(i=1;i<=n;i++){
        document.write(i+" ."+name +"<br>");
    }
}
myFunc();

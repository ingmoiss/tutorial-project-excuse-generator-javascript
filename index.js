window.onload = function (){
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
    
    let whoR = Math.floor(Math.random() * who.length)
    let actionR = Math.floor(Math.random() * action.length)
    let whatR = Math.floor(Math.random() * what.length)
    let whenR = Math.floor(Math.random() * when.length)

    document.querySelector("the-excute").innerHTML = who[whoR]+" "+action[actionR]+" "+what[whatR]+" "+when[whenR];
};
function ask (question, yes, no){
    if (confirm(question)){ 
    yes()
    }
    else no();
}

ans = (question, yes, no)=>{
    if (confirm(question)){ 
        yes()
        }
        else no();
} 

ask(
    "Do you agree",
    function() { alert("you agreed"); },
    function() { alert("You cancelled execution"); }
);

action = ( "Do you agree", yes = ()=>{
    alert("you agreed"); }, no = ()=>{ alert("You cancelled execution"); }
)
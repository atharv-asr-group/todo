const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());

var todos=[];
var ctr=0;
app.get('/',(req,res)=>{
    res.send(todos);
})
app.post('/todo',(req,res)=>{
    const body=req.body;
    const todo={title: body.title,
    description: body.description,
    id:ctr

}
    ctr++;
    todos.push(todo);
    res.send(todos);
})
app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    const tempTodos=todos;
    todos=[];
    for(var i=0;i<tempTodos.length;i++){
        if(tempTodos[i].id!=id){
            todos.push(tempTodos[i]);
        }
        
        
    }
    res.send('todo deleted successfully');
});


app.listen('3000',()=>{
    console.log('listening on example port 3000');
})
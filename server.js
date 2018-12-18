const app  = require('express')();
const port = process.env.PORT || 8888;

app.get('/',(req,res)=>{
    res.send("I feel fantastic and I'm still alive");
})

app.listen(port, () => console.log(`I hear you dog. Listening on ${port}`));
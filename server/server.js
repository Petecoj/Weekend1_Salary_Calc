let express = require('express');
let app = express();
const PORT = 5000;

app.use(express.static('server/public'))

app.listen(PORT,function(){
    console.log('app is running on 5000');
    
})
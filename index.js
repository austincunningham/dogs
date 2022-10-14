import express from 'express';
import request from 'request';
import { engine } from 'express-handlebars';

var app = express(); 

// Register 'handelbars' extension with The Mustache Express
app.engine('hbs', engine({extname:'hbs',
  defaultLayout:'layout.hbs'
  })
);
app.set('view engine', 'hbs');

// serves files from the root directory
app.get('/',function(req,res){
    request('https://dog.ceo/api/breeds/image/random', function (error, response, body){
        if (!error && response.statusCode == 200) {
        
            console.log(body) 
            body = JSON.parse(body)
            //res.json(body.message)
            res.render('index',{
                 dogImage: body
            });
        
        }
    })
})

app.listen(8080, function () {    
  console.log('Listening at http://localhost:8080');  
});
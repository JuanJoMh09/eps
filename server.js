var mongoose = require('mongoose');

const port = process.env.PORT || 5000;

var app = require('./app');



mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/EPS',{ useNewUrlParser: true })
        .then(() => {
            console.log("Conexion establecida con exito");

            //Creacion del servidor
            app.listen(port, () => console.log(`Server running on port ${port}`));
            
        }).catch(err => console.log(err));





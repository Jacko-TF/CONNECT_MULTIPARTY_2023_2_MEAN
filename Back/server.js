const express = require('express');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
const cors = require('cors');

const PORT = 3000;
const app = express();

app.use(cors());

const multiPartMiddelware = multipart({
    uploadDir: './imagenes'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/api/subir', multiPartMiddelware, (req, res) => {
    if(Object.keys(req.files).length === 0){
        res.json({
            'message': 'No se ha enviado un archivo.....!!!'
        })
    }else{
        console.log(req.files)
        res.json({
            'message': 'Fichero subido correctamente.....!!!'
        }).status(200)
    }
})

app.get('/', (req, res) => {
    res.send('Hola Mundo....!!!');
});

app.listen(3000, () => console.log(`Servidor corriendo en puerto ${PORT}`));
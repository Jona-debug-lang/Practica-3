import express from 'express';
import { getCorrientes } from './corrientes.js';

const router = express.Router();

router.get('/', (req, res) => {

    const corrientes = getCorrientes(0,3);

    res.render('index', { 
        corrientes: corrientes
    });
});

router.get('/corrientes', (req, res) => {

    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);

    const corrientes = getCorrientes(from,to);

    res.render('corrientes_elem', { 
        corrientes: corrientes 
    });
});


export default router;
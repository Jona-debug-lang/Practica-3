import express from 'express';
import * as service from './service.js';

const router = express.Router();

router.get('/', (req, res) => {

    const posts = service.getPosts(0,3);

    res.render('index', {
        posts: posts
    });
});

router.get('/corriente', (req, res) => { //Corriente es el HTML

    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);

    const posts = service.getPosts(from,to);

    res.render('corriente', {    //Corriente es el HTML
        posts: posts
    });
});

// Definición de una ruta GET para mostrar un post específico utilizando Express Router
router.get('/post/:id', (req, res) => {
    let post = service.getPost(req.params.id);
    res.render('show_post', { post });
});

//Ruta para actualizar una publicación con los subelementos
router.post('/post/:id/update', (req, res) => {
    const { image, title, date1, date2, edad1, edad2, descripcion, subelemento } = req.body;
    const postId = req.params.id;
    const subelementoArray = subelemento ? [subelemento] : [];
    service.updatePost(postId, { image, title, date1, date2, edad1, edad2, descripcion, subelemento: subelementoArray[0] });
    let post = service.getPost(req.params.id);
    res.render('show_post', { post });
});

// Definición de una ruta GET para eliminar un post específico utilizando Express Router
router.get('/post/:id/delete', (req, res) => {
    service.deletePost(req.params.id);
    res.redirect('/');
});

// Definición de una ruta GET para mostrar el formulario de edición de un post específico utilizando Express Router
router.get('/post/:id/edit', (req, res) => {
    let post = service.getPost(req.params.id);
    res.render('edit_post', { post });
});

// Definición de una ruta POST para procesar la edición de un post específico utilizando Express Router
router.post('/post/:id/edit/edits', (req, res) => {
    let { image, title, date1, date2, edad1, edad2, descripcion, subelemento } = req.body;
    let id = req.params.id;
    let referer = req.get('referer');
    console.log('Referer:', referer);
    let updatedReferer = referer.replace('/edit', '');
    let existingPost = service.getPost(id);
    existingPost.image = image;
    existingPost.title = title;
    existingPost.date1 = date1;
    existingPost.date2 = date2;
    existingPost.edad1 = edad1;
    existingPost.edad2 = edad2;
    existingPost.descripcion = descripcion;
    service.edit_post(existingPost, id);
    res.redirect(updatedReferer);
});

export default router;
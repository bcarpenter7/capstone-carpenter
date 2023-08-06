const express = require('express')
const router = express.Router();
const postController = require('../controllers/posts')
const userController = require('../controllers/users')


router.get('/posts/', postController.index)
router.post('/posts/', postController.create);
router.delete('/posts/:id', postController.deletePost)
router.get('/posts/:id', postController.show)
router.put('/posts/:id', postController.edit)
// router.get('/posts/:id', postController.index)

router.get('/users/', userController.index)
router.post('/users/', userController.create);
router.delete('/users/:id', userController.deleteUser)
router.get('/users/:id', userController.show)
router.put('/users/:id', userController.edit)






module.exports = router

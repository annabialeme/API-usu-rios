const Post = require("../models/Post");
const PostList = require("../models/PostList");

const lista  = new PostList();

const post1 = new Post("Com minha amiga", "@wxleme", "1000", "@user123: lindassss!", "https://br.pinterest.com/pin/621285711068651272/" );
lista.addPost(post1);

lista.addPost(new Post("Com meu amor", "@wxleme", "2000", "@thais: meu casalll", "https://br.pinterest.com/pin/751608625283593918/" ));

const router = {
    getAllPosts: (req, res) => {
        try {
            const posts = lista.getAllPosts();
            res.status(200).json(posts);
        } catch (error) {
            res.staus(404).json({message: "Erro ao buscar post:(", error})
        }
    },

    getPostById: (req, res) => {
        try {
            const post = lista.getPostById(req.params.id);
            res.status(200).json(post);
        } catch (error) {
            res.status(404).json({message: "Post não encontrado:(", error});
        }
    },

    addPost: (req, res) => {
        try {
            const {description, user, like, comment, url} = req.body;
            if (!description || !user|| !like || !comment || !url == undefined) {
                throw new Error("Todos os campos são obrigatórios");
            }

            const newPost = new Post(description, user, like, comment, url);
            lista.addPost(newPost);
            res.status(201).json({message: "Post criado com sucesso:)"});
        } catch (error) {
            res.status(400).json({ message:"Erro ao adicionar post :(",error});
        }
    },

    updatePost: (req, res) => {
        try {
            const updatePost = lista.updatePost(req.params.id, req.body);
            res.status(200).json(updatePost)
        } catch (error) {
            res.status(404).json({message: "Erro ao atualizar o post :(", error});
        }
    },

    deletePost: (req, res) => {
        try {
            lista.deletePost(req.params.id);
            res.status(200).json({message:"Post deletado com sucesso", IdDeletado: req.params.id});
        } catch (error) {
            res.status(404).json({message: "Erro ao deletar post :(", error});
        }
    }
};


module.exports = router;
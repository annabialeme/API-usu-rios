const User = require("../models/User");
const UserList = require("../models/UserList");

const lista = new UserList();


const user1 = new User("Beatriz", "bia@gmail.com", 20);
lista.addUser(user1);

lista.addUser(new User("Bruno", "bruno@gmail.com", 25));


const router = {
    getAllUsers: (req, res) => {
        try {
            const users = lista.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.staus(404).json({message: "Erro ao buscar usuário:(", error})
        }
    },

    getUserById: (req, res) => {
        try {
            const user = lista.getUserById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({message: "Usuário não encontrado:(", error});
        }
    },

    addUser: (req, res) => {
        try {
            const {name, email, age} = req.body;
            if (!name || !email || !age == undefined) {
                throw new Error("Todos os campos são obrigatórios");
            }

            const newUser = new User(name, email, age);
            lista.addUser(newUser);
            res.status(201).json({message: "Usuário criado com sucesso:)"});
        } catch (error) {
            res.status(400).json({ message:"Erro ao adicionar usuário :(",error});
        }
    },

    updateUser: (req, res) => {
        try {
            const updatedUser = lista.updateUser(req.params.id, req.body);
            res.status(200).json(updatedUser)
        } catch (error) {
            res.status(404).json({message: "Erro ao atualizar o usuário :(", error});
        }
    },

    deleteUser: (req, res) => {
        try {
            lista.deleteUser(req.params.id);
            res.status(200).json({message:"Usuário deletado com sucesso", IdDeletado: req.params.id});
        } catch (error) {
            res.status(404).json({message: "Erro ao deletar usuário :(", error});
        }
    }
};

module.exports = router;

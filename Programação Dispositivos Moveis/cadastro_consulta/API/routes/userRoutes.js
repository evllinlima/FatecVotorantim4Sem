const express = require("express");
const router = express.Router();

let users = [];

router.post("/cadastro", (req, res) => {
    const { nome, email, senha } = req.body;
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);

    if (!nome || !email || !senha) {
        return res.status(400).json({ message: "Nome, email e senha são obrigatórios" });
    }

    const newUser = { nome, email, senha };
    users.push(newUser);

    res.status(201).json({ message: "Usuário cadastrado com sucesso", user: newUser });
});

router.get("/consulta", (req, res) => {
    if (users.length === 0) {
        return res.status(404).json({ message: "Nenhum usuário encontrado" });
    }

    res.status(200).json(users);
});

module.exports = router;
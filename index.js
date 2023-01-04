const express = require('express');

const server = express();

server.use(express.json());


const cursos = ['fullStack Master', 'Desenvolvimento de Games', 'Viver de Youtube'];

//Retorna um curso

server.get('/cursos/:index', (req,res) => {

    const {index} =  req.params;

    return res.json(cursos[index]);
});

// Returnar todos os cursos

server.get('/cursos', (req, res) => {
   return res.json(cursos);
});

// Criar um novo curso

server.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name);
});

// Atualizar um curso

server.put('/cursos/:index', (req,res) => {
  const { index } = req.params;
  const {name} = req.body;

  cursos[index] = name;
  return res.json(cursos);

});

// Excluir um curso

server.delete('/cursos/:index', (req,res) => {
 const {index} = req.params;

 cursos.splice(index,1);
 return res.json({ message: "O curso foi deletado"})

})

server.listen(3000)
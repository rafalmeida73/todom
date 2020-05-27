const jwt = require("jsonwebtoken");

module.exports = {
 index: (req,res)=>{
  res.send(req.headers);

  // verificar se existe um campo Authorization nos headers

  //capturar o token

  //Levantar qual user é o dono do token

  //Levantar as tarefas desse usuario

  //Mandar as tarefas com req.status(200).json(tarefas)
 }
}
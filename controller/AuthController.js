 const {Usuario} = require("../models/Usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
 login: async (req,res)=>{

  //Ler dados do body para variaveis email e senha.
  let  {email, senha} = req.body;

  //Usar o model Usuarui para acher um usuario com o email dado
  const u = await Usuario.findOne({where:{email}});

  //Verificar se o usuario existe
  if(!u){
   res.status(403).json({error: "Login inválido"});
  }

  //Verificar a senha passada versus a do banco
  if(bcrypt.compareSync(senha, u.senha)){
   res.status(403).json({error: "Login inválido"});
  }

  //Removendo a senha para que ela não seja enviada de volta
  u.senha = undefined;

  //Criando o token
  let token = jwt.sign({usuario: u},"secret");

  //Caso esteja tudo ok
  res.status(200).json({usuario:u, token});
 }
}
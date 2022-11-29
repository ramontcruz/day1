import express from "express"

const userRoute = express.Router();

const bancoDados = [
    {
        id: "b39bd69c-a553-4173-90fe-1484294aee64",
        name: "Ramon",
        age: 35,
        role: "aluno",
        active: true,
        tasks: [
            "estudar express",
            "fazer trabalhos da faculdade"
        ]
    }
]

//rotas
userRoute.get("/enap",(req,res)=>{
    const bemVindo = "bem vindo ao servidor de testes"
    
    return res.status(200).json(bemVindo)
})


userRoute.get("/all-users",(req,res)=>{
    return res.status(200).json(bancoDados)
})

userRoute.post("/new-user",(req,res)=>{
    bancoDados.push(req.body)
    console.log(bancoDados)
    return res.status(201).json(bancoDados)

})

userRoute.delete("/delete/:id", (req,res)=>{
    console.log(req.params.id)
    const {id} = req.params
    const deleteById = bancoDados.find((user) => user.id ===id)
    const index = bancoDados.indexOf(deleteById)
    bancoDados.splice(index,1)

    return res.status(200).json(bancoDados)

})

userRoute.put("/edit/:id", (req, res) => {
    const { id } = req.params;  
    const editUser = bancoDados.find((user) => user.id === id);
    const index = bancoDados.indexOf(editUser);

    bancoDados[index] = {
      ...editUser,
      ...req.body,
    };
  
    return res.status(200).json(bancoDados[index]);
  });
  

export default userRoute;
const { Router } = require("express")//espera-se usar o express para fazer esta conexao
const controle = require ('./controle')

const router = Router();//um obj do tipo router

router.get("/", controle.getTemperatura)
router.get("/:cod", controle.getTemperaturaCod)
router.post("/", controle.addTemperatura)

module.exports = router


const getTemperatura = "SELECT * FROM  public.dados"
const getTemperaturaCod = "SELECT * FROM dados WHERE cod = $1"
const checkClimaExists = "SELECT c FROM dados c WHERE c.clima = $1"

module.exports = {
    getTemperatura,
    getTemperaturaCod,
    checkClimaExists,
}
const connection = require('../database/conection'); 
module.exports = {

async index(request,responde) {

    const ong_id = request.headers.authorization;
    console.log(ong_id);

    const incident =await connection('incidents')
    .where('ong_id',ong_id)
    .select('*');

    return responde.json(incident);


}

}
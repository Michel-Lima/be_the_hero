const connection = require('../database/conection');

module.exports ={
async create (request,response){
    const {title,description,values} =request.body;
    const ong_id =request.headers.authorization;

const [id] =await connection("incidents").insert({
    title,description,values,ong_id,


});
return response.json({id});

},


async index (request,Response) {

    const {page =1} =request.query;
    const [count] = await connection('incidents').count( );
    console.log(count)

    const ongs =await connection('incidents')
    .join('ongs','ongs.id','=','incidents.ong_id').limit(5).offset((page -1)*5)
    .select(['incidents.*','ongs.name','ongs.email','ongs.whatapps','ongs.city','ongs.uf']);
    Response.header('x-total-count',count['count(*)'])
    
    return Response.json(ongs);
    
    },

    async delete (request,response) {

        const {id} =request.params;

        const ong_id =request.headers.authorization;
        const incident =await connection('incidents').where('id',id).select('ong_id').first();

        if(incident.ong_id != ong_id)
        return response.status(401).json({error:'operacação não permitida'});

        await connection('incidents').where('id',id).delete();

        return response.status(204).send();
    
        



    }

};
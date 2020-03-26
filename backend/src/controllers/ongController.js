const crypto =require('crypto');
const connection =require('../database/conection');


module.exports  ={ 

    async index (request,Response) {
        const ongs =await connection('ongs').select('*');
        
        return Response.json(ongs);
        
        },
     
    async create(request,response) {

        const {name,email,whatapps,city,uf} =request.body

        const id  =crypto.randomBytes(4).toString("HEX");

       await connection('ongs').insert({

           id,
           name,
           email,
           whatapps ,
          city,
           uf,
        })
    return response.json({ id });

    }

};
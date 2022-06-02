import { sequel } from '..'
import { QueryTypes } from 'sequelize'


const obtenerDao = async () => {
    const queryStr = `select * from tabla_prueba`

    return sequel.query(queryStr, {
        type: QueryTypes.SELECT
    })
}

export default {
obtenerDao 
}
import obtener from "../database/dao/obtener"

// Obtiene motivos de renuncia voluntaria
export const obtenerService = async (req, res) => {
    console.log('obtener')

    try {
        const data = await obtener.obtenerDao()
        console.log('data',data);
        return res.json({
            message: 'OK',
            data: data
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Ocurrio un error',
            code: err.code
        });
    }
}
responseCodes = {};
responseCodes['201'] = { message: 'Insertó OK', returnCode: 201 };
responseCodes['202'] = { message: 'Actualizó OK', returnCode: 202 };
responseCodes['401'] = { message: 'No existe el Id', returnCode: 401 };
responseCodes['402'] = { message: 'Falta un parámetro en el servicio', returnCode: 401 };
responseCodes['403'] = { message: 'Formato de fecha inválido', returnCode: 401 };

function sendOk (res, content, code) {

    if ( code ) {
        return res.status( responseCodes[code].returnCode ).json({
            ok: true,
            message: responseCodes[code].message
        });
    } else {
        return res.status(200).json({
            ok: true,
            message: content
        });
    }

}

function sendNotOk (res, error, code) {

    if ( code ) {
        return res.status( responseCodes[code].returnCode ).json({
            ok: false,
            message: responseCodes[code].message
        });
    } 

    else {
        return res.status(400).json({
            ok: false,
            message: error
        });
    }
}

module.exports = {
    sendOk,
    sendNotOk
};
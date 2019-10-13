responseCodes = {};
responseCodes['201'] = 'Insertó OK';
responseCodes['202'] = 'Actualizó OK';
responseCodes['401'] = 'No existe el Id';
responseCodes['402'] = 'Falta un parámetro en el servicio';

function responseOk (res, content, code) {

    return res.status(200).json({
        ok: true,
        message: (content) ? content : responseCodes[code]
    });
}

function responseNotOk (res, error, code) {

    return res.status(400).json({
        ok: false,
        message: (error) ? error : responseCodes[code]
    });

}

module.exports = {
    responseOk,
    responseNotOk
};
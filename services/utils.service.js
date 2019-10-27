var moment = require ('moment');

function checkDateForSP ( object, field ) {

    if ( object[field] != '' && object[field] != undefined && object[field] != null ) {
        if ( !moment ( object[field], 'DD/MM/YYYY', true).isValid() ) {
            return false;
        }
        object[field] = moment ( object[field], 'DD/MM/YYYY' ).format( 'YYYY/MM/DD' );
    } else {
        object[field] = null;
    }
    return true;
}

module.exports = {
    checkDateForSP
}
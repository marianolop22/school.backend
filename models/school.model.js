class School {
    constructor(){
        this.idSchool = null;
        this.name = null;
        this.address = null;
        this.locality = null;
        this.province = null;
        this.creationDate = null;
        this.endDate = null;
        this.idUser = null;
        this.urlImage = null;
        this.urlShield = null;
    }

    set ( data ) {
        this.idSchool = data.idSchool;
        this.name = data.name;
        this.address = data.address;
        this.locality = data.locality;
        this.province = data.province;
        this.creationDate = data.creationDate;
        this.endDate = data.endDate;
        this.idUser = data.idUser;
        this.urlImage = data.urlImage;
        this.urlShield = data.urlShield;
    }
}
module.exports = School;

// idSchool double
// name varchar(45)
// address varchar(45)
// locality varchar(45)
// province varchar(45)
// creationDate datetime
// endDate datetime
// idUser int(11)
// urlImage varchar(256)
// urlShield varchar(256)

class Group {

    constructor(){
        this.idSchool = null;
        this.idGroup = null;
        this.year = null;
        this.creationDate = null;
        this.modifiedDate = null;
        this.endDate = null;
        this.idUser = null;
    }

    set ( data ) {
        this.idSchool = data.idSchool;
        this.idGroup = data.idGroup;
        this.year = data.year;
        this.creationDate = data.creationDate;
        this.modifiedDate = data.modifiedDate;
        this.endDate = data.endDate;
        this.idUser = data.idUser;
    }

}
module.exports = Group;


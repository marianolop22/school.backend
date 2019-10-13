class GroupTemplate {

    constructor(){
        this.idSchool = null;
        this.idGroup = null;
        this.description = null;
        this.creationDate = null;
        this.endDate = null;
        this.idUser = null;
    }

    set ( data ) {
        this.idSchool = data.idSchool;
        this.idGroup = data.idGroup;
        this.description = data.description;
        this.creationDate = data.creationDate;
        this.endDate = data.endDate;
        this.idUser = data.idUser;
    }

}
module.exports = GroupTemplate;


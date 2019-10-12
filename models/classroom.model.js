class Classroom {

    constructor(){
        this.idSchool = null;
        this.idClassroom = null;
        this.description = null;
        this.creationDate = null;
        this.endDate = null;
        this.idUser = null;
    }

    set ( data ) {
        this.idSchool = data.idSchool;
        this.idClassroom = data.idClassroom;
        this.description = data.description;
        this.creationDate = data.creationDate;
        this.endDate = data.endDate;
        this.idUser = data.idUser;
    }

}
module.exports = Classroom;


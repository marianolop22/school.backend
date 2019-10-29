class People {

    constructor(){
        this.idSchool = null;
        this.idPeople = null;
        this.name = null;
        this.lastName = null;
        this.gender = null;
        this.birthday = null;
        this.startDate = null;
        this.email = null;
        this.avatar = null;
        this.creationDate = null;
        this.modifiedDate = null;
        this.endDate = null;
        this.password = null;
        this.idFunction = null;
        this.idUser = null;
    }

    set ( data ) {
        this.idSchool = data.idSchool;
        this.idPeople = data.idPeople;
        this.name = data.name;
        this.lastName = data.lastName;
        this.gender = data.gender;
        this.birthday = data.birthday;
        this.startDate = data.startDate;
        this.email = data.email;
        this.avatar = data.avatar;
        this.creationDate = data.creationDate;
        this.modifiedDate = data.modifiedDate;
        this.endDate = data.endDate;
        this.password = data.password;
        this.idFunction = data.idFunction;
        this.idUser = data.idUser;
    }

}
module.exports = People;


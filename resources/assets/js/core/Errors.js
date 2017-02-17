class Errors {
    constructor() {
        this.errors = {};
    }

    has(field) {
        //if this.errors contains a 'field' property
        return this.errors.hasOwnProperty(field);
    }

    //get a error record by the field
    get(field) {
        if(this.errors[field]) {
            return this.errors[field][0];
        }
    }
    //setup the errors datas
    record(data) {
        this.errors = data;
    }

    //clear the errors datas
    clear(field) {
        if(field) {
            delete this.errors[field];
        } else {
            this.errors = {};
        }

    }

    //check if the errors has any data
    any() {
        return Object.keys(this.errors).length > 0;
    }
}

export default Errors;
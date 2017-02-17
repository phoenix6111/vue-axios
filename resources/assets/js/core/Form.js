import Errors from './Errors';

class Form {
    constructor(data) {
        this.originalData = data;

        for(let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();
    }
    //reset the form data
    reset() {
        for(let field in this.originalData) {
            this[field] = '';
        }

        this.errors.clear();
    }

    //Get the form data
    data() {

        /*let data = Object.assign({},this);

         delete data.originalData;
         delete data.errors;*/

        let data = {};
        for(let field in this.originalData) {
            data[field] = this[field];
        }

        return data;
    }

    //submit the form data
    submit(requestType,url) {
        return new Promise((resolve,reject) => {
            axios[requestType](url,this.data())
                .then(response => {
                    this.onSuccess(response.data);

                    resolve(response.data);
                })
                .catch(error => {
                    this.onError(error.response.data);

                    reject(error.response.data);
                });
        });

    }

    post(url) {
        return this.submit('post',url);
    }

    onSuccess(data) {

        this.reset();
    }

    onError(errors) {
        this.errors.record(errors);
    }
}

export default Form;

import bootstrap from './bootstrap';
import Form from './core/Form';

const app = new Vue({
    el: '#app',
    data: {
        form: new Form({
            name:'',
            description:''
        })
    },
    mounted() {

    },
    methods: {
        onSubmit(){
            this.form.submit("post","/projects")
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.log(error.data);
                });
        }
    }
});

const app = Vue.createApp({
    data() {
        return { 
            dollar: 0,
            exchanges:[
                {country:"新台幣",exchange:30},
                {country:"日幣",exchange:120},
                {country:"美元",exchange:1}
            ]
        }
    },
    methods: {
        trans(event){
            this.message=event.value/exchange.exchange
        }
    }
})
app.mount('#app')

const app_2 = Vue.createApp({
    data() {
        return{
            colors:['black','red','green'],
            home:[{father:'tim'},{father:'jerry'}],
        }
    },
    methods: {
        showalert(){
            alert('1234')
        }
    }
})
app_2.mount("#app_2")

const app_3 = Vue.createApp({
    data() {
        return {
            todos: [],
            newtodo:'',
            show:'showall'
        }
    },
    methods: {
        addtodo() {
            this.todos.push({content:this.newtodo,done:false});
            this.newtodo = ''
        },
        removetodo(index) {
            this.todos.splice(index,1);
        },
        check(todo) {
            todo.done = 0
        },
        alldone(){
            for(let i=0;i<this.todos.length;i++)
                this.todos[i].done=true
        }
    }
})
app_3.mount("#app_3")

"use strict";

var app = Vue.createApp({
  data: function data() {
    return {
      dollar: 0,
      exchanges: [{
        country: "新台幣",
        exchange: 30
      }, {
        country: "日幣",
        exchange: 120
      }, {
        country: "美元",
        exchange: 1
      }]
    };
  },
  methods: {
    trans: function trans(event) {
      this.message = event.value / exchange.exchange;
    }
  }
});
app.mount('#app');
var app_2 = Vue.createApp({
  data: function data() {
    return {
      colors: ['black', 'red', 'green'],
      home: [{
        father: 'tim'
      }, {
        father: 'jerry'
      }]
    };
  },
  methods: {
    showalert: function showalert() {
      alert('1234');
    }
  }
});
app_2.mount("#app_2");
var app_3 = Vue.createApp({
  data: function data() {
    return {
      todos: [],
      newtodo: '',
      show: 'showall'
    };
  },
  methods: {
    addtodo: function addtodo() {
      this.todos.push({
        content: this.newtodo,
        done: false
      });
      this.newtodo = '';
    },
    removetodo: function removetodo(index) {
      this.todos.splice(index, 1);
    },
    check: function check(todo) {
      todo.done = 0;
    },
    alldone: function alldone() {
      for (var i = 0; i < this.todos.length; i++) {
        this.todos[i].done = true;
      }
    }
  }
});
app_3.mount("#app_3");
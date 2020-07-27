import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            todos: [
                { name: "Clean Bathroom", priority: "high"},
                { name: "Hoovering", priority: "low"},
                { name: "Go Shopping", priority: "high"}
            ],
            newTodo: "",
            newPriority: "",
        },
        methods: {
            saveNewTodo: function() {
                this.todos.push({
                    name: this.newTodo,
                    priority: this.newPriority
                });
                this.newTodo = "";
                this.newPriority = "";
            }
        }
    });
});
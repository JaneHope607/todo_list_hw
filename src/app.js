import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            todos: ["Clean Bathroom", "Hoover", "Go shopping"],
            newTodo: ''
        },
        methods: {
            saveNewTodo
        }
    });
});
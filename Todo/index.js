var app = new Vue({
    el: '#todo-app',
    data: function(){
        return {
            todos: [
                {id:0 , title: '学习前端', completed: false},
                {id:1 , title: '运动', completed: false},
                {id:2 , title: '开奶茶店', completed: false},
            ],
            newTodoTitle: '',
            emptyContent:false,
            editTodo: null,
        }
    },
    methods: {
        addTodo: function (){
            if(!this.newTodoTitle){
                this.emptyContent = true
                return
            }
            this.emptyContent = false
            this.todos.push({id: this.todos.length, title: this.newTodoTitle, completed: false})
            this.newTodoTitle = ''
        },
        markAsCompleted: function(todo){
            todo.completed = true
        },
        markAsUncompleted: function(todo){
            todo.completed = false
        },
        deleteTodo: function(todo){
            const pressButton = confirm("您确定要删除该Todo吗？")
            if(pressButton == true)
                this.todos.splice(this.todos.indexOf(todo),1)
        },
        modifyTodo: function(todo){
            this.editTodo = {id: todo.id, title: todo.title}
        },
        modifyDone: function(todo){
            if(todo.title === ''){
                this.deleteTodo(todo)
            }
            this.editTodo = null
        },
        modifyCancel: function(todo){
            todo.title = this.editTodo.title
            this.editTodo = null
        }
    },
    computed: {
        inputBorder: function(){
            if(this.emptyContent)
                return 'red'
            else 
                return ''
        }
    }
})
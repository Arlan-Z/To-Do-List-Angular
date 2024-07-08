export class Column{
    constructor(public name: string, public tasks: string[]){
        
    }

    public addTask(newTask: string){
        if(this.tasks.length > 3) {
            alert("Too Many elements in a column");
            return;
        }
        this.tasks.push(newTask);
    }

    public deleteTask(task: string){
        this.tasks = this.tasks.filter((element) => element !== task);
    }
}
const button = document.querySelector(".btn");
const tasksUl = document.querySelector(".tasksUl");
const input = document.querySelector(".input");

let tasksArray = [];

const handleClickAdd = () => {
    tasksArray.push(input.value);
    render(tasksArray)
    input.value = "";
}

const handleClickRemove = (index) => {
    tasksArray.splice(index, 1)
    render(tasksArray)
}

const render = (newTasksArray) => {
    tasksUl.innerHTML = ""
    if (newTasksArray) {
        newTasksArray.forEach((tasks, index) => {
            let taskItem = document.createElement("li")
            let removeBtn = document.createElement("button");
            removeBtn.innerHTML = "X";
            taskItem.className = "taskItem";
            removeBtn.className = "removeBtn";
            taskItem.innerHTML = tasks;
            tasksUl.prepend(taskItem)
            taskItem.append(removeBtn)


            document.querySelector(".removeBtn").addEventListener("click", () => { handleClickRemove(index) })

        });

    }
}
window.onload = render(tasksArray);
button.addEventListener("click", handleClickAdd);


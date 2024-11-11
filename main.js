
const task = document.getElementById("userTask")

const addTodoBTn = document.getElementById("addButton")

const dataTable = document.getElementById("forTaskData")

let todoData = [
    {
        "name": "Going to Markeet"
    },
    
]

// console.log(task)
// console.log(addTodoBTn)





// show Data

const showData = () => {
    let data = ""

    todoData.map((item, index) => {
        data += `<div class="card bg-warning  text-primary-content w-[500px]">
                <div class="card-body">
                  <h2 class="card-title">${item.name}</h2>

                  <div class="card-actions justify-end">
                    <button class="btn btn-secondary">Edit</button>
                    <button onclick="deleteTodo(${index})" class="btn btn-error">Delete</button>
                  </div>
                </div>
              </div>`
    })

    dataTable.innerHTML = data

}

// Delete Todo

const deleteTodo = (index) => {
    console.log(index)
    todoData = todoData.filter((_, i) => i !== index)
    console.log(todoData)
    showData()
}


const addTodo = () => {

    // console.log("Add todo function called")
    const data = {
        "name": task.value
    }

    // console.log(data)

    todoData = [data, ...todoData]

    // console.log(todoData)

    task.value = ""
    showData()
}

// event listener
addTodoBTn.addEventListener("click", addTodo)


showData()
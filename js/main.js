let openCard = document.querySelector(".open-add-task-card-btn");
let cardPlace = document.querySelector(".card-place");
let allTasksCards = document.querySelector(".all-tasks-card");

openCard.addEventListener('click' , ()=>{
    cardPlace.classList.add('card')
    cardPlace.innerHTML = `<div class="card-header">
    <div style="height: 5px"></div>
    <h4>Add Task</h4>
    <button class ="close">X</button>
  </div>

  <div class="card-form">
    <p class="add-task-label">Add Task</p>
    <input type="text" class="task-input" value="" />
    <button class="add-task-button">Add Task</button>
  </div>

  <div class="card-footer">
    <button class="card-close-button close">Close</button>
  </div>`
})
function close()
{
    cardPlace.innerHTML ="";
    cardPlace.classList.remove('card');
}
document.body.addEventListener('click' , (e)=>{
    if (e.target.classList.contains('close'))
    {
        close();
    }
    else if (e.target.classList.contains('add-task-button'))
    {
        taskInput = document.querySelector(".task-input");
        if (taskInput.value.trim() == "")
        {
            alert("Please Enter a Valid task");
        }
        else
        {
            //remove no Data added yet if it's there
            let noDatDiv = document.querySelector(".no-tasks-yet");
            if (noDatDiv != undefined)
            {
                noDatDiv.remove();
            }
            //remove the last div
            document.querySelector('#margin').remove();
            //Add the element
            let taskDiv = document.createElement('div');
            taskDiv.classList.add("task");

            let taskName = document.createElement('span');
            taskName.classList.add('task-name')
            taskName.innerText= taskInput.value.trim();

            let delBtn = document.createElement('button');
            delBtn.innerText = "Delete";
            delBtn.classList.add("task-delete");

            taskDiv.appendChild(taskName);
            taskDiv.appendChild(delBtn);
            allTasksCards.appendChild(taskDiv);
            
            //Add Margin div
            let marginDiv = document.createElement("div")
            marginDiv.id ="margin";
            marginDiv.style.height ="1px";
            allTasksCards.appendChild(marginDiv);
            //close add task
            close();
        }
    }
    else if (e.target.classList.contains('task-delete'))
    {
        e.target.parentElement.remove();
        let taskDiv = document.querySelector(".task");
        if (taskDiv == undefined)
        {
            //remove the last div
            document.querySelector('#margin').remove();

            // Add no data div
            let noDataDiv = document.createElement("div");
            noDataDiv.classList.add("no-tasks-yet")
            noDataDiv.innerText = "No Data Added Yet";
            allTasksCards.appendChild(noDataDiv);

            //Add Margin div
            let marginDiv = document.createElement("div")
            marginDiv.id ="margin";
            marginDiv.style.height ="1px";
            allTasksCards.appendChild(marginDiv);
        }
    }
    //Line Throgh the div to be Done

    
    /*else if (e.target.classList.contains("task"))
    {
        if (e.target.style.text-decoration == "line-through")
        {
            e.target.style.text-decoration ="none";
        }
    }*/
    //console.log(e.target);
} , true)

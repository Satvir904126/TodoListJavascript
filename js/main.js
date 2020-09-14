var num = 1;

function addTask() {
    let task = document.getElementById('task');
    add = `<div>`;
    add += `<span style="font-size: 25px;" id="task${num}" contenteditable="false">${task.value} </span>`;
    add += `<input type="checkbox" id="check${num}" onchange="completeTask(${num})">`;
    add += `<button onclick='edittask(${num})' id="edit${num}">Edit</button>&nbsp;`;
    add += `<button onclick='deletetask(${num})'>Delete</button><br><hr class="tas-hr">`;
    add += `</div>`;
    document.getElementById('alltasks').innerHTML += add;

    num++;
    task.value = '';
}

function completeTask(id) {
    let cond = document.getElementById(`check${id}`).checked;
    if (cond) {
        task = document.getElementById(`task${id}`);
        task.style.textDecoration = "line-through";
    }
    else {
        task = document.getElementById(`task${id}`);
        task.style.textDecoration = "none";
    }
}

function clearAll() {
    document.getElementById('alltasks').innerHTML = ' ';
}

function edittask(id) {
    var cond = document.getElementById(`edit${id}`).innerHTML;
    if (cond != "Edit") {
        document.getElementById(`task${id}`).setAttribute("contenteditable", "false");
        document.getElementById(`edit${id}`).innerHTML = "Edit";

    }
    else {
        document.getElementById(`task${id}`).setAttribute("contenteditable", "true");
        document.getElementById(`edit${id}`).innerHTML = "Save";
    }

}

function deletetask(id) {
    var div = event.target.parentNode;
    var out = div.parentNode;
    out.removeChild(div);
}
document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');

        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});

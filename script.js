document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const li = document.createElement('li');
            li.className = 'task';

            const taskTitle = document.createElement('span');
            taskTitle.textContent = taskText;
            li.appendChild(taskTitle);

            const taskActions = document.createElement('div');
            taskActions.className = 'task-actions';

            const completeBtn = document.createElement('button');
            completeBtn.textContent = '✔️';
            completeBtn.className = 'complete-btn';
            completeBtn.addEventListener('click', () => {
                li.classList.toggle('completed');
            });
            taskActions.appendChild(completeBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '❌';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', () => {
                taskList.removeChild(li);
            });
            taskActions.appendChild(deleteBtn);

            li.appendChild(taskActions);
            taskList.appendChild(li);

            taskInput.value = '';
        }
    }
});

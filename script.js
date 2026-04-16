let task = {
    title: "Complete Stage 1A",
    description: "This is a very long description intended to test the expand and collapse functionality of the task card. It should hide after a certain point.",
    priority: "High",
    status: "Pending",
    dueDate: new Date(new Date().getTime() + 86400000), 
    isExpanded: false
};

const viewMode = document.getElementById('view-mode');
const editMode = document.getElementById('edit-mode');

function render() {
  
    document.getElementById('display-title').innerText = task.title;
    document.getElementById('display-description').innerText = task.description;
    document.getElementById('display-priority').innerText = task.priority;
    document.getElementById('display-status').innerText = task.status;


    const checkbox = document.getElementById('complete-checkbox');
    checkbox.checked = (task.status === "Done");
    
    const titleEl = document.getElementById('display-title');
    task.status === "Done" ? titleEl.classList.add('done-state') : titleEl.classList.remove('done-state');

    const descSection = document.getElementById('collapsible-section');
    const expandBtn = document.getElementById('expand-btn');
    if (task.isExpanded) {
        descSection.classList.remove('max-h-12', 'overflow-hidden');
        expandBtn.innerText = "Show Less";
    } else {
        descSection.classList.add('max-h-12', 'overflow-hidden');
        expandBtn.innerText = "Show More";
    }

    const card = document.getElementById('todo-card');
    const dot = document.getElementById('priority-dot');
    card.className = `bg-white w-full max-w-md rounded-3xl shadow-xl p-8 transition-all border-l-8 priority-${task.priority.toLowerCase()}`;
    
    const dotColors = { High: 'bg-red-500', Medium: 'bg-amber-500', Low: 'bg-emerald-500' };
    dot.className = `w-3 h-3 rounded-full ${dotColors[task.priority]}`;


    updateTimeLogic();
}

function updateTimeLogic() {
    const now = new Date();
    const diff = task.dueDate - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));


    const options = { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    document.getElementById('display-due-date').innerText = `Due: ${task.dueDate.toLocaleDateString('en-US', options)}`;

    let hint = "";
    const overdueBadge = document.getElementById('overdue-badge');

    if (task.status === "Done") {
        hint = "Completed";
        overdueBadge.classList.add('hidden');
    } else if (diff <= 0) {
        const pastHours = Math.abs(hours);
        hint = `Overdue by ${pastHours} hour${pastHours === 1 ? '' : 's'}`;
        overdueBadge.classList.remove('hidden');
    } else {
        overdueBadge.classList.add('hidden');
        if (hours >= 24) hint = `Due in ${Math.floor(hours/24)} days`;
        else if (hours >= 1) hint = `Due in ${hours} hours`;
        else hint = `Due in ${Math.floor(diff/60000)} minutes`;
    }
    document.getElementById('display-time-remaining').innerText = hint;
}


function toggleExpand() {
    task.isExpanded = !task.isExpanded;
    render();
}

function toggleComplete() {
    task.status = (task.status === "Done") ? "Pending" : "Done";
    render();
}

function enterEditMode() {
    viewMode.classList.add('hidden');
    editMode.classList.remove('hidden');
    
    document.getElementById('edit-title').value = task.title;
    document.getElementById('edit-desc').value = task.description;
    document.getElementById('edit-priority').value = task.priority;
    document.getElementById('edit-status').value = task.status;
    document.getElementById('edit-due-date').value = task.dueDate.toISOString().slice(0, 16);
}

function exitEditMode() {
    editMode.classList.add('hidden');
    viewMode.classList.remove('hidden');
}

function saveTask() {
    task.title = document.getElementById('edit-title').value;
    task.description = document.getElementById('edit-desc').value;
    task.priority = document.getElementById('edit-priority').value;
    task.status = document.getElementById('edit-status').value;
    task.dueDate = new Date(document.getElementById('edit-due-date').value);
    
    exitEditMode();
    render();
}


setInterval(updateTimeLogic, 30000);
render();
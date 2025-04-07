// const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector('.todoCard');
const tasksContainer = document.querySelector('#todoCards');

const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', function(){ // delete default task on click 
    deleteTask(taskCard); // target the right task
});
const addBtn = document.querySelector('#btn');
addBtn.addEventListener('click', addTask); // add a task on click
console.log("addBtn");


function addTask() {
    const newTask = taskCard.cloneNode(true) // clone the task card  
    const newTextArea = newTask.querySelector('.task')
        
        newTextArea.value = "New Task" // set new task text to "New Task"
    
        tasksContainer.appendChild(newTask) // append(add, attach,adjoin) new task to the tasks container
        console.log('addTask');
    }
    function addTask(){
        const newTask = taskCard.cloneNode(true) // clone the task card  
        const newDelBtn = newTask.querySelector('.delBtn')
        const newTextArea = newTask.querySelector('.task')
        
        newTextArea.value = "New Task" // set new task text to "New Task"
        newDelBtn.addEventListener('click', function(){ // add delete event listener to new task
            deleteTask(newTask);
        });
        
        tasksContainer.appendChild(newTask) // append new task to the tasks container
        updateCount(); // mets à jour le compteur après ajout
    }
    
    function deleteTask(task){
        task.remove();  // remove the task
        updateCount(); // mets à jour le compteur aprèe suppression
    }
    console.log('deleteTask');
    // console.log('addTask');// Exemple de mise à jour du compteur
    
    // let cardCount = 0;
    
    // function updateCardCount() {
        //     cardCount++;
        //     document.getElementById('cardCount').textContent = cardCount;
        // }
        
        // Appel de la fonction pour démonstration
        // updateCardCount();
        // updateCardCount();
        
        // // Fonction pour mettre à jour le compteur de cartes
        // function updateCardCounter() {
        //     const cardContainer = document.getElementById('card-container');
        //     const cardCounter = document.getElementById('card-counter');
        //     // const numberOfCards = cardContainer.children.length;
        //     cardCounter.textContent= (`Nombre de cartes: ${numberOfCards}`);
        // }

        function deleteTask(task){
            task.remove();  //remove the task
        }
        
        function updateCount() {
            const count = 
            document.querySelectorAll('.taskCard').length;
            document.getElementById('cardCounter'). textContent = `Nombre de cards : ${count}`;

        }

        window.addEventListener('DOMContentLoaded', updateCount);




   console.log('updateCardCounter'); 
    



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
        
        newTextArea.value = "New Task" // set new tsk text to "New Task"
    
        tasksContainer.appendChild(newTask) // append(add, attach,adjoin) new task to the tasks container
        console.log('addTask');
    }
    function addTask(){
        const newTask = taskCard.cloneNode(true) // clone the task card  
        const newDelBtn = newTask.querySelector('.delBtn')
        const newTextArea = newTask.querySelector('.task')
        
        newTextArea.value = "New Task" // set new tsk text to "New Task"
        newDelBtn.addEventListener('click', function(){ // add delete event listener to new task
            deleteTask(newTask);
        });
        
        tasksContainer.appendChild(newTask) // append new task to the tasks container
        // updateCount();
    }
    
    function deleteTask(task){
        task.remove();  //remove the task
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
        
        // Fonction pour mettre à jour le compteur de cartes
        function updateCardCounter() {
            const cardContainer = document.getElementById('card-container');
            const cardCounter = document.getElementById('card-counter');
            // const numberOfCards = cardContainer.children.length;
            cardCounter.textContent = (`Nombre de cartes: ${numberOfCards}`);
        }
        
        function deleteTask(task){
            task.remove();  //remove the task
        }
        // Fonction pour ajouter une carte
        // function addCard() {
//     const cardContainer = document.getElementById('card-container');
//     const newCard = document.createElement('div');
//     newCard.className = 'card';
//     newCard.textContent = 'Carte';
//     cardContainer.appendChild(newCard);
//     updateCardCounter();
// }

// Fonction pour supprimer une carte
// function removeCard() {
//     const cardContainer = document.getElementById('card-container');
//     if (cardContainer.children.length > 0) {
//         cardContainer.removeChild(cardContainer.lastChild);
//         updateCardCounter();
//     }
// }

// Appeler la fonction de mise à jour du compteur au chargement de la page
// document.addEventListener('DOMContentLoaded', updateCardCounter);

   console.log('updatCardCounter'); 
    



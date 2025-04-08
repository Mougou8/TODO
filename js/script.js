// const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector('.todoCard'); // return the 1st element right found to selector
const tasksContainer = document.querySelector('#todoCards');

const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', function(){ // to attach one function=>delete default task on click 
    deleteTask(taskCard); // target the right task
});
const addBtn = document.querySelector('#btn');
addBtn.addEventListener('click', addTask); // add a task on click
console.log("addBtn");


let nb ;
nb = 1;
document.getElementById("count").innerHTML = nb;







function addTask() {
    const newTask = taskCard.cloneNode(true) // clone the task card / nodeList=>collections de noeuds
    const newTextArea = newTask.querySelector('.task')
        
        newTextArea.value = "New Task" // set new task text to "New Task"
    
        tasksContainer.appendChild(newTask) // append(add, attach,adjoin) new task to the tasks container
        console.log('addTask');
    }
    function addTask(){
        nb++
        document.getElementById("count").innerHTML = nb;
        console.log(nb);
        // nb--
        // document.getElementById("count").innerHTML = -nb;
        // console.log(nb);
        const newTask = taskCard.cloneNode(true) // clone the task card  
        const newDelBtn = newTask.querySelector('.delBtn')
        const newTextArea = newTask.querySelector('.task')
        
        newTextArea.value = "New Task" // set new task text to "New Task"
        newDelBtn.addEventListener('click', function(){ // add delete event listener(écouteur d'évenement) to new task
            deleteTask(newTask);
        });
        
        tasksContainer.appendChild(newTask) // append new task to the tasks container
        // updateCount(); // mets à jour le compteur après ajout
    }
    
    function deleteTask(task){
        task.remove();  // remove the task
        // updateCount(); // mets à jour le compteur après suppression
    }
    console.log('deleteTask');
    // console.log('addTask');// Exemple de mise à jour du compteur
    
    
    // function updateCardCounter() {
    // //    DOMContentLoaded=>declenché lorsque le contenu HTML est chargé et accesible,
    // //  avant le chargement des ressources externes(stylesheets, images, frames,...) 
    // // window.addEventListener('DOMContentLoaded', updateCardCounter); // method to attach an event handler
    // //(gestionnaire d'évenement => click for exemple)



    // let cardCounter;
    // cardCounter = 1;
    // cardCounter ++
    // document.getElementById("Count").innerHTML = cardCounter;
    


    console.log('updateCardCounter'); 
   

    // const cardCounter = document.querySelector('cardCounter');
    

     console.log('cardCounter')
     
     

//    // Initialiser le compteur à partir du stockage local ou à 0 si non défini
//    let  = localStorage.getItem('pageCounter') ? parseInt(localStorage.getItem('pageCounter')) : 0;

//    // Incrémenter le compteur
//             ++;

//    // Mettre à jour le stockage local avec la nouvelle valeur du compteur
//    localStorage.setItem('pageCounter',        );

//    // Afficher la valeur du compteur dans l'élément HTML
//    document.getElementById('     ').textContent =          ;








     
        //     //  let cardCounter = 0;
     
        //      function CardCounter() {
        //      cardCounter++;
        //      console.log(cardCounter);
        //  }
       
         // function () {
         //     if (cardCounter > 0) {
         //         cardCounter--;
         //     }
         //     console.log('deleteTask'); 
         // }













    // 
    


    // function deleteTask(task){
    //     task.remove();  //remove the task
    //     // updateCount(); // mets à jour le compteur après suppression
        
    // }

    

    
    // function addTask() {
    //     const newTask = taskCard.cloneNode(true) // clone the task card / nodeList=>collections de noeuds
    //     const newTextArea = newTask.querySelector('.task')
            
    //         newTextArea.value = "New Task" // set new task text to "New Task"
        
    //         tasksContainer.appendChild(newTask) // append(add, attach,adjoin) new task to the tasks container
    //         console.log('addTask');
    //     }
    //     function addTask(){
    //         const newTask = taskCard.cloneNode(true) // clone the task card  
    //         const newDelBtn = newTask.querySelector('.delBtn')
    //         const newTextArea = newTask.querySelector('.task')
            
    //         newTextArea.value = "New Task" // set new task text to "New Task"
    //         newDelBtn.addEventListener('click', function(){ // add delete event listener(écouteur d'évenement) to new task
    //             deleteTask(newTask);
    //         });
            
    //         tasksContainer.appendChild(newTask) // append new task to the tasks container
    //         // updateCount(); // mets à jour le compteur après ajout
    //     }

        // function deleteTask(task){
        //     task.remove();  //remove the task
        //     // updateCount(); // mets à jour le compteur après suppression
            
        // }




    
        

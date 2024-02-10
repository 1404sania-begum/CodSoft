function showinformation (){
    let info = document .getElementById('information');
   if(info.style.display === "none"){
    info.style.display = "block";
   }else{
    info.style.display = "none";
   }
   
}
function information1 (){
    let info = document .getElementById('card1');
   if(info.style.display === "none"){
    info.style.display = "block";
   }else{
    info.style.display = "none";
   }
   
}
function information2 (){
    let info = document .getElementById('card2');
   if(info.style.display === "none"){
    info.style.display = "block";
   }else{
    info.style.display = "none";
   }
   
}
function information3 (){
    let info = document .getElementById('card3');
   if(info.style.display === "none"){
    info.style.display = "block";
   }else{
    info.style.display = "none";
   }
   
}


document.getElementById("submitButton").addEventListener("click", function () {
    // Assuming you have a form with the id "myForm"
    var form = document.getElementById("myForm");

    // Add your form validation logic here, if needed

    // Display a simple alert for demonstration purposes
    alert("Your form is successfully! Submitted");

    // Alternatively, you can show a custom popup/modal instead of using alert
    // Example: showModal("Form submitted successfully!");
});

// Function to show a custom modal/popup
function showModal(message) {
    var modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = "<p>" + message + "</p><button onclick='closeModal()'>Close</button>";
    document.body.appendChild(modal);
}

// Function to close the custom modal/popup
function closeModal() {
    var modal = document.querySelector(".modal");
    modal.parentNode.removeChild(modal);
}

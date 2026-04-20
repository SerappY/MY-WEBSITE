 const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("add-btn");

// Yeni Görev Ekleme
function addTask() {
    const text = inputBox.value.trim();
    
    if (text === "") {
        alert("Lütfen bir hobi ismi girin!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = text;


    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btnContainer");
    
    // Silme Butonu (X)
    const span = document.createElement("bbuton");
    span.innerHTML = "❌";
    span.classList.add("span");
    span.onclick = function() {
        li.remove();
        saveData();
    };
btnContainer.appendChild(span);

      const editBtn = document.createElement("bbutton");
    editBtn.textContent = "✏️";
    editBtn.classList.add("editBtn");
    editBtn.onclick = function() {
        inputBox.value = text;   // Mevcut metni inputBox'a geri yükle
        li.remove();             // Eski öğeyi listeden kaldır
        saveData();              // Güncel veriyi kaydet
    };
   btnContainer.appendChild(editBtn);

   li.appendChild(btnContainer);
    listContainer.appendChild(li);
    inputBox.value = "";
    saveData();
}


listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "BUTTON" && e.target.classList.contains("SPAN")) {
        e.target.parentElement.remove();
        saveData();
    }
     else if (e.target.tagName === "BBUTTON" && e.target.classList.contains("editBtn")) {

        const li = e.target.parentElement.parentElement; 
        const text = li.firstChild.textContent; 
        inputBox.value = text;  
        li.remove();             
        saveData();
}
});


inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

addBtn.addEventListener("click", addTask);


function saveData() {
    localStorage.setItem("hobbies", listContainer.innerHTML);
}


function showHobbies() {
    const data = localStorage.getItem("hobbies");
    if (data) {
        listContainer.innerHTML = data;
    }
}

showHobbies();

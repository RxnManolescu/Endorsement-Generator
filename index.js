import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const databaseURL = {
    databaseURL: "https://realtime-database-rxn-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(databaseURL)
const database = getDatabase(app)
const endorsementsListInDb = ref(database, "endorsementsList")

const inputEl = document.getElementById("input-field")
const publishBtnEl = document.getElementById("publish-btn")
const endorsementsListEl = document.getElementById("endorsements-list")

publishBtnEl.addEventListener("click", function() {
    let inputValue = inputEl.value
    appendEndorsementToList(inputValue)
    push(endorsementsListInDb, inputValue)
    inputEl.value = ""
})

function appendEndorsementToList(userInput) {
    // let userInputID = userInput[0]
    // let userInputValue = userInput[1]

    let newEndorsementEl = document.createElement("p")
    newEndorsementEl.className = "endorsement"
    newEndorsementEl.innerHTML = userInput

    endorsementsListEl.append(newEndorsementEl)
}
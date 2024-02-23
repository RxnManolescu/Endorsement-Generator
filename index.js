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
const fromEl = document.getElementById("from-btn")
const toEl = document.getElementById("to-btn")

publishBtnEl.addEventListener("click", function() {
    let inputValue = inputEl.value
    let fromValue = fromEl.value
    let toValue = toEl.value
    appendEndorsementToList(inputValue, fromValue, toValue)
    push(endorsementsListInDb, inputValue)
    inputEl.value = ""
    fromEl.value = ""
    toEl.value = ""
})

function appendEndorsementToList(userInput, from, to) {
    // let userInputID = userInput[0]
    // let userInputValue = userInput[1]

    let newEndorsementEl = document.createElement("p")
    newEndorsementEl.className = "endorsement"

    newEndorsementEl.innerHTML = `<strong>To ${to}</strong>\n\n
                                  <div style="margin: 10px 0;">${userInput}</div>\n
                                  <div style="display: flex; align-items: center;">
                                  <strong>From ${from}</strong>
                                  <span style="margin-left: auto;"><img src="./assets/like-heart.png"></span>
                                  </div>`;
    endorsementsListEl.append(newEndorsementEl)
}
let submitBtn = document.querySelector("#submit-btn");
let form = document.querySelector("form");
const togleBtn = document.querySelector("#togle-btn");
let togleText = document.querySelector(".togle-text");

togleBtn.addEventListener("change", (e) => {
    if (togleBtn.checked){
        togleText.innerText = "On";
    } else {
        togleText.innerText = "Off";
    }
});

const passwordInput = document.querySelector("#password")
const passwordInfo = document.querySelector(".info-lable")

passwordInput.addEventListener("input", (e) => {
    if(!(e.target.value.length >= 4 && e.target.value.length <= 12)){
        passwordInput.style.border = "2px solid red"
        passwordInfo.style.display = "block"
        passwordInfo.innerText = "Your password is between 4 and 12 characters"
    } else{
        passwordInput.style.border = "2px solid #fff"
        passwordInfo.innerText = "everything is correct"
    }
    if(e.target.value === ""){
        passwordInfo.innerText = ""
        passwordInput.style.border = "2px solid #fff"
    }
})

const textLable = document.querySelector("#text__lable")
const errorInfo = document.querySelector(".error-info")

textLable.addEventListener("input", (e) =>{
    if (e.target.value.length <= 10) {
        errorInfo.style.display = "block"
        textLable.style.border = "2px solid red"
        errorInfo.innerText = "The number of characters must be more than 10"
    } else {
        textLable.style.border = "2px solid #fff"
        errorInfo.style.color = "#fff"
        errorInfo.innerText = "everything is correct"
    }
    if(e.target.value === ""){
        textLable.style.border = "2px solid #fff"
        errorInfo.style.display = "none"
    }
})

const username = document.querySelector("#username")
const rememberChackBox = document.querySelector("#remember-chack__box")
const radioBtns = document.querySelectorAll("input[name='radio-btn']")

let selectedRadioValue = "";
function getSelectedRadio() {
    radioBtns.forEach((radio) => {
        if (radio.checked) {
            selectedRadioValue = radio.value;
        }
    });
}

radioBtns.forEach((radio) => {
    radio.addEventListener("change", () => {
        getSelectedRadio(); 
        console.log("Tanlangan radio tugma:", selectedRadioValue);
    });
});

const dropdownTitleSelect = document.querySelector("#dropdown-title__select")

form.addEventListener("submit", (e) => {
    e.preventDefault();
})



submitBtn.addEventListener("click", async(e) => {
    let date = {
        username : username.value,
        password : passwordInput.value,
        textLable : textLable.value,
        rememberMe : rememberChackBox.checked,
        togleType : togleBtn.checked,
        radioRespons : selectedRadioValue,
        selectValue : dropdownTitleSelect.value
    }
    // console.log("date", date);
    
    let url = "https://jsonplaceholder.typicode.com/posts"
    try{
        e.preventDefault();
        let request = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(date)
        }) 
        if(!request.ok){
            throw new Error("kelgan ma'lumot xato")
        }

        let result = await request.json()
        console.log(result);
        updateForm()
    }
    catch(error) {
        console.log('Xatolik:', error);
    }
});



function updateForm() {
    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#text__lable").value = "";
    document.querySelector("#remember-chack__box").checked = false;
    document.querySelector("#togle-btn").checked = false; 
    selectedRadioValue = ""; 
    radioBtns.forEach(radio => radio.checked = false); 
    document.querySelector("#dropdown-title__select").selectedIndex = 0; 

    passwordInput.style.border = "2px solid #fff";
    passwordInfo.innerText = "";
    textLable.style.border = "2px solid #fff";
    errorInfo.innerText = "";
    errorInfo.style.display = "none";

}
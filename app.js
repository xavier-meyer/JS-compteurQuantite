// Nos déclarations de variables :
let buttonMore = document.getElementById("button-more");
let buttonLess = document.getElementById("button-less");
let nbProductsInput = document.getElementById("numberOfProducts");
let txtConfirmCmd = document.getElementById("txt-cmd");
let avertissement = document.getElementById("avertissement");
let btnReset = document.getElementById("button-reset");
let btnCmd = document.getElementById("button-commander");
let pushProducts = document.getElementById("panier");

let buttonMore2 = document.getElementById("button-more2");
let buttonLess2 = document.getElementById("button-less2");
let nbProductsInput2 = document.getElementById("numberOfProducts2");
let txtConfirmCmd2 = document.getElementById("txt-cmd2");
let avertissement2 = document.getElementById("avertissement2");
let btnReset2 = document.getElementById("button-reset2");
let btnCmd2 = document.getElementById("button-commander2");
let pushProducts2 = document.getElementById("panier2");



cardQuantity(buttonMore,buttonLess,nbProductsInput,3, avertissement,btnReset, btnCmd, txtConfirmCmd, pushProducts);
cardQuantity(buttonMore2,buttonLess2,nbProductsInput2, 3, avertissement2,btnReset2, btnCmd2, txtConfirmCmd2, pushProducts2);


function cardQuantity(buttonAdd,buttonMinus,input,max,avertissement,resetBtn,cmdBtn,cmdConfirmTxt, productsPush){
    // fonction incrémenter la quantité
    buttonAdd.addEventListener("click", function(){
        let quantity = input.value;
        if(quantity < max){
            quantity++;
            input.value = quantity;
        }
    })
    // fonction décrémenter la quantité
    buttonMinus.addEventListener("click", function(){
        let quantity = input.value;
        if(quantity > 0){
            quantity--;
            input.value = quantity;
        }
    })
    input.addEventListener("input", ()=>{
        controlInput(input, max, avertissement);
    })
    input.addEventListener("keydown", (event)=>{
        let arrayBadLetters = [
            "e",
            "-",
            "+"
        ];
        if(arrayBadLetters.includes(event.key)){
            event.preventDefault();
        }
        if(event.key == "ArrowRight"){
            console.log(event.key);
            let quantity = input.value;
            if(quantity < max){
                quantity++;
                input.value = quantity;
            }
        }
        if(event.key == "ArrowLeft"){
            let quantity = input.value;
            if(quantity > 0){
                quantity--;
                input.value = quantity;
            }
        }if(event.key == "Enter"){
            let quantity = input.value;
            if( quantity == 0){
                cmdConfirmTxt.style.display = "block";
                cmdConfirmTxt.innerHTML = `Vous devez avoir au moins 1 article pour commmander!`;
                setTimeout(()=>{
                    cmdConfirmTxt.style.display = "none";
                }, 4500)
            }else if(quantity == 1){
                cmdConfirmTxt.style.display = "block";
                cmdConfirmTxt.innerHTML = `Vous avez ajouté ${input.value} article au panier.`;
                input.value = 0;
                setTimeout(()=>{
                    cmdConfirmTxt.style.display = "none";
                }, 4500)
            }else{
                cmdConfirmTxt.style.display = "block";
                cmdConfirmTxt.innerHTML = `Vous avez ajouté ${input.value} articles au panier.`;
                input.value = 0;
                setTimeout(()=>{
                    cmdConfirmTxt.style.display = "none";
                }, 4500)
            }    
        }
    })
    resetBtn.addEventListener("click", ()=>{
        input.value = 0;
    })
    cmdBtn.addEventListener("click", ()=>{
        let quantity = input.value;
        if( quantity == 0){
            cmdConfirmTxt.innerHTML = `Vous devez avoir au moins 1 article pour commmander!`;
            setTimeout(()=>{
                cmdConfirmTxt.innerHTML="";
            }, 4500)
        }else if(quantity == 1){
            cmdConfirmTxt.innerHTML = `Vous avez ajouté ${input.value} article au panier.`;
            input.value = 0;
            setTimeout(()=>{
                cmdConfirmTxt.innerHTML="";
            }, 4500)
        }else{
            cmdConfirmTxt.innerHTML = `Vous avez ajouté ${input.value} articles au panier.`;
            input.value = 0;
            setTimeout(()=>{
                cmdConfirmTxt.innerHTML="";
            }, 4500)
        }    
    }
)}
function controlInput(input, max, avertissement){
    let valueInput = input.value;
    if(isNaN(valueInput)){
        // avertissement
        avertissement.innerHTML = "veuillez saisir un nombre";
        setTimeout(()=>{
            avertissement.innerHTML="";
        }, 2500)
    }
    if(valueInput < 0){
        // avertissement
        avertissement.innerHTML = "veuillez saisir un nombre supérieur à 0";
        setTimeout(()=>{
            avertissement.innerHTML="";
        }, 2500)
    }
    if(valueInput > max){
        // avertissement
        avertissement.innerHTML = "veuillez saisir un nombre inférieur à "+max;
        setTimeout(()=>{
            avertissement.innerHTML="";
        }, 2500)
    }
}


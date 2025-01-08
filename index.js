function search(){

    let item = document.getElementById("meal").value ;

    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`;

    fetch(url)
    .then(res => res.json())
    .then(data => search2(data));


}

function search2(data){

    let allMeals = data.meals;

    let disArea = document.getElementById("display");
    disArea.textContent = " ";

    if(allMeals.length > 5){
        for(i = 1; i<= 5; i++){
            if(i==5){
                let newDiv = document.createElement("div");
                newDiv.innerHTML = `Meal ID: ${allMeals[i-1].idMeal} <br> Meal Name: ${allMeals[i-1].strMeal} <br> <img src="${allMeals[i-1].strMealThumb}"> <br> Cooking Instruction: <br> ${allMeals[i-1].strInstructions} <br> <br> <button id="show" onclick="allItem()">SHOW ALL</button>
`;

                newDiv.classList.add("fix");
                disArea.appendChild(newDiv);
            }
            else{
                let newDiv = document.createElement("div");
                newDiv.innerHTML = `Meal ID: ${allMeals[i-1].idMeal} <br> Meal Name: ${allMeals[i-1].strMeal} <br> <img src="${allMeals[i-1].strMealThumb}"> <br> Cooking Instruction: <br> ${allMeals[i-1].strInstructions}`;

                newDiv.classList.add("fix");
                disArea.appendChild(newDiv);

            }

    }

    }

    else{

        for(let i = 1; i <= allMeals.length;i++){
            let newDiv = document.createElement("div");
                newDiv.innerHTML = `Meal ID: ${allMeals[i-1].idMeal} <br> Meal Name: ${allMeals[i-1].strMeal} <br> <img src="${allMeals[i-1].strMealThumb}"> <br> Cooking Instruction: <br> ${allMeals[i-1].strInstructions}`;

                newDiv.classList.add("fix");
                disArea.appendChild(newDiv);
        }

    }


}


function allItem(){

    let item = document.getElementById("meal").value ;

    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`;

    fetch(url)
    .then(res => res.json())
    .then(data => allItem2(data));

}

function allItem2(data){

    let allMeal = data.meals;

    let disArea = document.getElementById("display");

    for(let i = 6; i <= allMeal.length;i++){
        let newDiv2 = document.createElement("div");
            newDiv2.innerHTML = `Meal ID: ${allMeal[i-1].idMeal} <br> Meal Name: ${allMeal[i-1].strMeal} <br> <img src="${allMeal[i-1].strMealThumb}"> <br> Cooking Instruction: <br> ${allMeal[i-1].strInstructions}`;

            newDiv2.classList.add("fix");
            disArea.appendChild(newDiv2);
    }
}
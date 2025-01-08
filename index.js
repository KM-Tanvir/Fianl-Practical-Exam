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
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `Meal ID: ${allMeals[i-1].idMeal} <br> Meal Name: ${allMeals[i-1].strMeal} <br> <img src="${allMeals[i-1].strMealThumb}">`;

            newDiv.classList.add("fix");
            disArea.appendChild(newDiv);
        }

    }

    else{

        for(let i = 1; i <= allMeals.length;i++){
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `Meal ID: ${allMeals[i-1].idMeal}`;

            newDiv.classList.add("fix");
            disArea.appendChild(newDiv);
        }

    }




}
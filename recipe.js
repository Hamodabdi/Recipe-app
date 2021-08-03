const meals = ducoment.getElementById('meals');

GetRandomMeal();

async function GetRandomMeal() {
   const resp = await fetch ("https://www.themealdb.com/api/json/v1/1/random.php"); 
   const respData =await resp.json();  
    const randomMeal = respData.meals[0];
   
   addMeal(randomMeal, true);  

}

async function GetMealById(id) {
   const meal = await fetch ("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"+id
   );

}

async function GetMealBySearch(term) {
  const meals = await  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata" + term ); 
}
 

import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import Recipe from './Recipe';

function App() {

  const APP_ID = '3971b672';
  const APP_KEY = '02b3274f057656b27f503da9a9386ce0';

  
  const [recipes,setRecipes] = useState([]);    /* we have all the recipes data now in this state */
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('chicken'); /* created query state to only serach on click of submit. */

  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;


  useEffect(()=>{
   // console.log("Use Effect");
   getRecipes();
  },[query]);

  /* API call */
  const getRecipes = async () =>{          //any external request you are making should work with async and await
    const response = await fetch(URL);
    const data = await response.json(); // add await everytime you have a promise
    setRecipes(data.hits);
    console.log(data.hits);

  /*   fetch(URL).then(response=>response.json()) */  
  }

  /* functions */
  const updateSearch = e =>{
    setSearch(e.target.value);
    //console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
        <form  onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit">Search</button>
        </form>
        <div className="recipes">
            {recipes.map(recipe =>(
              <Recipe 
              key={recipe.recipe.label}
              title={recipe.recipe.label}       /* Pass props to Recipe */
              calories={recipe.recipe.calories} 
              image={recipe.recipe.image}
              ingredientLines={recipe.recipe.ingredientLines}/> 
            ))}
        </div>
    </div>
  );
}

export default App;
 
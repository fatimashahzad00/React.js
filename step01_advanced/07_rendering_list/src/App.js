import './App.css';
import Poem from './Haiku';
import List1 from './List1';
import List2 from './List2/List2';
import List3 from './List3/List3';
import List4 from './List4/List4';
import RecipeList from './RecipeList/Recipe';

function App() {
  return (
    <div>
      <List1 />
      <List2 />
      <List3 />
      <List4 />
      <RecipeList />
      <Poem />
    </div>
  );
}

export default App;

import {store} from './app/store'
import {useSelector} from 'react-redux'
import NumberForm from "./components/NumberForms";

function App() {
  const numbersState = useSelector(state => state.numbers)
  return (
    <div>
      <NumberForm/>
    </div>
  );
}

export default App;
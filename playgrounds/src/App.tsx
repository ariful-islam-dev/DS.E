import {Button} from '@ds.e/react/lib';

const App=()=>{
  return <div>
    <h2>Hello MonoRepo</h2>
    <Button title='I am a cute title button' onClick={()=> alert('Hello World')}>Clice Me</Button>
  </div>
}
export default App;
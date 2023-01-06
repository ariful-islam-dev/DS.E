import {Button, Color, Text} from '@ds.e/react/lib';

const App=()=>{
  return <div>
    <h2>Hello MonoRepo</h2>
    <Text size='xx'>Hello World</Text>
    <Color hexCode='#212121' width="xxxl" height="xxxl"/>
    <Button title='I am a cute title button' onClick={()=> alert('Hello World')}>Clice Me</Button>
  </div>
}
export default App;
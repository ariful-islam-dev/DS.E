import {Button, Color, Text, Margin, Select} from '@ds.e/react/lib';
import './App.css'

const colorOptions=[
  {label: 'Red', value: 'Red'},
  {label: 'Green', value: 'Green'},
  {label: 'Blue', value: 'Blue'},
  {label: 'Yellow', value: 'Yellow'},
  {label: 'Black', value: 'Black'},
];

const App=()=>{
  return <div className='App'>
    <h2>Hello MonoRepo</h2>
    <Margin space='lg'><Text size='xx'>Hello World</Text></Margin>
    <Color hexCode='#212121' width="xxxl" height="xxxl"/>
    <Button title='I am a cute title button' onClick={()=> alert('Hello World')}>Clice Me</Button>
    <Margin space='xs' top bottom >
      <Text>This is a Select Component</Text>
      <Select label='Select A Color' options={colorOptions} onOptionSelected={console.log}/>
    </Margin>
    <Text>End Of Select</Text>
  </div>
}
export default App;
import React, {useState} from 'react';
function App() {
  // const [email, setEmail] = useState ('');
  // const [name, setName] = useState ('');
  const emailState= useState('');
  const nameState= useState('');

  const email = emailState[0];
  const setEmail = emailState[1];

  const name = nameState[0];
  const setName = nameState[1];

  function handleEmail (e) {
    setEmail(e.target.value)
  }
  function handleName(e) {
    setName(e.target.value)
  }

  return (
    <div className='App' style={{padding:10}}>
      <input 
        value={email}
        placeholder='abc@gmail.com'
        onChange={handleEmail}
      />
      <br/>
      <input 
        value={name}
        placeholder='abc'
        onChange={handleName}
      />
      <p>Email: {email} </p>
      <p>Name: {name} </p>
    </div>
  );
}
export default App;

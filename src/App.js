import React, {useState} from 'react';
function App() {
  const [email, setEmail] = useState ('');

  function handleChange (e) {
    setEmail(e.target.value)
  }

  return (
    <div className='App' style={{padding:10}}>
      <input 
        value={email}
        placeholder='abc@gmail.com'
        onChange={handleChange}
      />
      <p>Email: {email} </p>
    </div>
  );
}
export default App;

import { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');

  const handleChange = (event) => setName(event.target.value);

  return (
    <form>
      <label htmlFor='name'>
        Type name
        <input id='name' onChange={handleChange} />
      </label>
      {name ? <strong> Hello {name} </strong> : 'type your name'}
    </form>
  );
}

export default Greeting;

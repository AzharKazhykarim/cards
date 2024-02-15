import './App.css';
import React, { useState } from 'react';

function App() {

  const [form, setForm] = useState({ name:'', surname:'' });
  const [forms, setForms] = useState([]);


  const addToForm = () => {
    setForms([...forms, {name: form.name, surname: form.surname}]);
  }

  return (
    <>
    <div className='container'>
    <input type='text' value={form.name} placeholder='Имя'/>
    <input type='text'value={form.surname} placeholder='Фамилия'/>
    <button onClick={addToForm()}>Сохранить</button>

    <div>
    {
        forms.map((item, index) => (
        <div key={index}>{item. name} {item.surname}</div>    
      ))
    }
    </div>
    </div>
    </>
  );
}

export default App;

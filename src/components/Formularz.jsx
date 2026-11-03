import { useState } from 'react';

function Formularz() {
  const [tytul, setTytul] = useState("");
  const [rodzaj, setRodzaj] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("tytul: " + tytul + "; rodzaj: " + rodzaj);
  }

  return (
    <div className="container mt-3 text-start">
      <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label htmlFor="inputTytul" className="form-label">Tytuł filmu</label>
          <input 
            type="text" 
            className="form-control" 
            id="inputTytul" 
            value={tytul} 
            onChange={(e) => setTytul(e.target.value)} 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="selectRodzaj" className="form-label" >Rodzaj</label>
          <select 
            className="form-select" 
            id="selectRodzaj" 
            value={rodzaj} 
            onChange={(e) => setRodzaj(e.target.value)}
          >
            <option value=""></option>
            <option value="1">Komedia</option>
            <option value="2">Obyczajowy</option>
            <option value="3">Sensacyjny</option>
            <option value="4">Horror</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Dodaj</button>
      </form>
    </div>
  );
}

export default Formularz;
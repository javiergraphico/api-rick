import React from "react";
import { useEffect, useState } from "react";
import Character from "./Character";


function NavPage(props) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <p>Page: {props.page}</p>
      <button className="btn btn-primary btn-sm"
        onClick={() => props.setPage(props.page + 1)}
      >
        page {props.page + 1}
      </button>
    </header>
  )
}

const CharacterList = () => {
  const [nombre, setNombre] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function flechData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setNombre(data.results);
    }
    flechData();
  }, [page]);

  return (
    <div className="container">

      <NavPage page={page} setPage={setPage} />

      <div className="row">
        {nombre.map((nombres) => {
          return <div key={nombres.id} className="col-md-4">
            <Character key={nombres.id} nombres={nombres} />;
          </div>
        })}
      </div>

      <NavPage page={page} setPage={setPage} />
    </div>
  );
};

export default CharacterList;

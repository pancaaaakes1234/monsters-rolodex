import "./App.css";
import { useEffect, useState, ChangeEvent } from "react";
import { getData } from "./utils/fetch.utils";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchFeild] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchFeild(searchFieldString);
  };

  useEffect(() => {
    const newFilterMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );

    setFilteredMonsters(newFilterMonsters);
  }, [searchField, monsters]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        className={"monsters-search-box"}
        placeholder={"search monsters"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

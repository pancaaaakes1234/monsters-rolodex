import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    // console.log("constructor");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(users);
          }
        )
      );
    // console.log("componentDidMount");
  }

  onSearchChange = (e) => {
    // console.log(e.target.value);
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {
        searchField,
      };
    });
  };

  render() {
    // console.log("render");
    const { onSearchChange } = this;
    const { searchField, monsters } = this.state;

    const filterMonsters = monsters.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          className={"monsters-search-box"}
          placeholder={"search monsters"}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;

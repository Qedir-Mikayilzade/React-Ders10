import { Component } from "react";
export default class Search extends Component {
  state = {
    items: [],
    inpvalue: "",
    trueorfalse: false,
  };
  componentDidMount() {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ items: data });
      });
  }
  searchValue = (e) => {
    this.setState({
      inpvalue: e.target.value,
      trueorfalse: false,
    });
  };
  searchValue1 = (e) => {
    this.setState({
      inpvalue: e.target.value,
      trueorfalse: true,
    });
  };

  render() {
    const { inpvalue } = this.state;
    return (
      <div>
        <input placeholder="name" type="search" onChange={this.searchValue} />
        <input
          placeholder="department"
          type="search"
          onChange={this.searchValue1}
        />
        {this.state.items
          .filter((z) =>
            z[this.state.trueorfalse ? "department" : "name"]
              .toLowerCase()
              .includes(inpvalue.toLowerCase())
          )
          .map(function (a, b) {
            return (
              <p key={b}>
                {a.name},{a.department}
              </p>
            );
          })}
      </div>
    );
  }
}

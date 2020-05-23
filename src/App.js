import React from "react";
import SityApp from "./components/SityApp";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { setSities } from "./reducers/actions";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    axios.get("russia.json").then(({ data }) => {
      this.props.setSities(data);
    });
  }

  render() {
    console.log(this.props);
    return (
      <Container maxWidth="lg">
        <div className="App">
          <SityApp loadedSities={this.props.loadedSities} />
        </div>
      </Container>
    );
  }
}
const mapDispachToProps = {
  setSities,
};
const mapStateToProps = (state) => ({
  loadedSities: state.app.loadedSities,
});
export default connect(mapStateToProps, mapDispachToProps)(App);

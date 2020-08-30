import React from "react";
import { connect } from "react-redux";
import { addPerson } from "../redux/actions/add-action";

interface IProps {
  add: any;
}

interface IState {
  input: string;
}

class AddPerson extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  async readURL() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const person = await response.json();
    this.setState({ input: person });
  }

  handleAddPerson = (input) => {
    this.props.add(this.state.input);
    this.setState({ input });
  };

  render() {
    return (
      <div>
        <button className="add-person" onClick={this.handleAddPerson}>
          Add Person
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPerson: (content) => dispatch(addPerson(content)),
  };
};

export default connect(null, mapDispatchToProps)(AddPerson);

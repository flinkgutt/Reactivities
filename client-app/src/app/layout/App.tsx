import React, { Component } from "react";
import { Header, List } from "semantic-ui-react";
import axios from "axios";
import { IActivity } from "../models/activity";

interface IState {
  activities: IActivity[]
}

class App extends Component<{}, IState> {
  readonly state: IState = {
    activities: []
  };

  componentDidMount() {
    axios.get<IActivity[]>("http://localhost:5000/api/activities").then(response => {
      this.setState({
        activities: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <Header as="h2" icon="users" content="Reactivities" />
        <List>
          {this.state.activities.map((activitity) => (
            <List.Item key={activitity.id}>{activitity.title}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;

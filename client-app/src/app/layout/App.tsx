import React, { useState, useEffect } from "react";
import { Header, List } from "semantic-ui-react";
import axios from "axios";
import { IActivity } from "../models/activity";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then(response => {
        setActivities(response.data);
      });
  }, []);

  return (
    <div>
      <Header as="h2" icon="users" content="Reactivities" />
      <List>
        {activities.map(activitity => (
          <List.Item key={activitity.id}>{activitity.title}</List.Item>
        ))}
      </List>
    </div>
  );
};

export default App;

import React, { useContext, SyntheticEvent } from "react";
import { Item, Button, Label, Segment } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import ActivityStore from '../../../app/stores/activityStore';

interface IProps {
  deleteActivity: (id: string) => void;
  submitting: boolean
  target: string
}

export const ActivityList: React.FC<IProps> = ({
  deleteActivity,
  submitting,
  target
}) => {
  const activityStore = useContext(ActivityStore);
  const {activities, selectActivity} = activityStore
  return (
    <Segment clearing>
      <Item.Group divided>
        {activities.map(activity => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => {
                    selectActivity(activity.id);
                    console.log("ActivityList->selectActivity " + activity.id);
                  }}
                  floated="right"
                  content="View"
                  color="blue"
                ></Button>
                <Button
                name={activity.id}
                loading={target === activity.id && submitting}
                  onClick={(e) => deleteActivity( activity.id)}
                  floated="right"
                  content="Delete"
                  color="red"
                ></Button>
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default observer(ActivityList);
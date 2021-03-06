import { RECEIVE_ALL_TASKS, RECEIVE_ONE_TASK, REMOVE_TASK, RECEIVE_TASK_DETAIL, REMOVE_TASKS} from "../actions/task_actions";
import { merge } from 'lodash';

const TaskReducer = (state = {}, action) => {
  switch (action.type) {
    case REMOVE_TASKS:
      return {};
    case RECEIVE_ALL_TASKS:
      return action.tasks;
    case RECEIVE_TASK_DETAIL:
    case RECEIVE_ONE_TASK:
      let newTask = {};
      if (action.task) {
        newTask = {[action.task.id]: action.task};
      }
      return merge({}, state, newTask);
    case REMOVE_TASK:
      const taskId = action.id;
      const newState = merge({}, state);
      delete newState[taskId];
      return newState;
    default:
      return state;
  }
};

export default TaskReducer;

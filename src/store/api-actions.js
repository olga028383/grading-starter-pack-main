import {ApiRoute} from "../constants/constants";
import {loadQuests} from "./action";

export const fetchQuests = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.Quests)
    .then(({data}) => dispatch(loadQuests(data)))
);

export const fetchQuest = (id, api) => (
  api.get(`${ApiRoute.Quests}/${id}`)
    .then(({data}) => data)
);

export const sendForm = ({name, peopleCount, phone, isLegal}, api) => (
  api.post(`${ApiRoute.Orders}`, {name, peopleCount, phone, isLegal})
    .then(({data}) => data)
);

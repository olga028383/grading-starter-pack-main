import {NameSpace} from '../reducer';

export const getQuests = (state) => state[NameSpace.DATA].quests;
export const getIsLoadData = (state) => state[NameSpace.DATA].isDataLoaded;

import {NameSpace} from '../reducer';

export const getTab = (state) => state[NameSpace.APPLICATION].tab;
export const getApi = (state) => state[NameSpace.APPLICATION].api;

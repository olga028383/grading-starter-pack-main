import {StrictMode} from 'react';
import {render} from 'react-dom';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import App from 'components/app/app';
import {createApi} from "./api";
import reducer from "./store/reducer";
import Provider from "react-redux/es/components/Provider";
import {composeWithDevTools} from "redux-devtools-extension";
import {fetchQuests} from "./store/api-actions";
import {setApi} from "./store/action";

const api = createApi();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
);

store.dispatch(setApi(api));
store.dispatch(fetchQuests());

render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

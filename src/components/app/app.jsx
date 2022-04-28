import {ThemeProvider} from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import PropTypes from 'prop-types';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import {appTheme} from './common';
import * as S from './app.styled';
import NotFound from "../not-found/not-found";
import {getIsLoadData} from "../../store/data/selectors";
import Loading from '../loading/loading';
import connect from "react-redux/es/connect/connect";
import {AppRoute} from "../../constants/constants";

const App = ({isDataLoaded}) => {
  if (!isDataLoaded) {
    return (
      <Loading/>
    );
  }

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle/>
      <Router>
        <Switch>
          <Route exact path={AppRoute.Root}>
            <Home/>
          </Route>
          <Route exact path={AppRoute.Detail}>
            <DetailedQuest/>
          </Route>
          <Route exact path={AppRoute.Contacts}>
            <Contacts/>
          </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
};

App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: getIsLoadData(state),
});

export {App};
export default connect(mapStateToProps, null)(App);

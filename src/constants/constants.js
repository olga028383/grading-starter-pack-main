const AppRoute = {
  Root: '/',
  Detail: '/detailed-quest/:id',
  Contacts: '/contacts'
};

const ApiRoute = {
  Quests: '/quests',
  Orders: '/orders',
};

const ALL_QUESTS = 'all';

const Status = {
  Success: 201,
  Bad: 400
};

export {
  AppRoute,
  ApiRoute,
  ALL_QUESTS,
  Status
};

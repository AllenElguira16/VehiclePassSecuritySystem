export default (state: combinedReducerInterface) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

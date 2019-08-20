export const signIn = () => {
  return {
    type: "setAsLoggedIn",
    data: true
  };
};

export const setAsLoggedIn = () => {
  return {
    type: "setAsLoggedIn",
    data: true
  };
};

export const toggleConfirmBox = (data: string) => {
  return {
    type: "toggleConfirmBox",
    data
  };
};

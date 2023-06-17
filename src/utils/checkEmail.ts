export const checkEmail = (email: string): boolean => {
  const regExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return email.match(regExp) ? true : false;
};

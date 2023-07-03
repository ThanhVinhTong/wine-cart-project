// eslint-disable-next-line no-useless-escape
const REGEX_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?\/_])[A-Za-z\d~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?\/_]{6,15}$/;

// const REGEX_PASSWORD = /^(?=.*[A-z])(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?\/_])[A-Za-z\d~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?\/_]{6,15}$/
export { REGEX_PASSWORD };

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

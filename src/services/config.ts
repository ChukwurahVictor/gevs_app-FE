export const configOptions = () => {
  if (typeof window === "undefined") return true;

  if (!window.sessionStorage.getItem("userData")) return false;

  const accessToken = JSON.parse(
    window.sessionStorage.getItem("userData") as string
  ).token;

  if (!!accessToken) {
    return accessToken;
  }
};

export const epochDateConverter = (seconds: number) =>
  new Date(new Date(0).setUTCSeconds(seconds)).toDateString().split(' ')[0];

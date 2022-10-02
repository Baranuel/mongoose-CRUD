export const createError = (err) => {
  const errors = [];
  Object.keys(err.errors).forEach((key) => {
    errors.push({
      [key]: err.errors[key].message,
    });
  });
  return errors;
};

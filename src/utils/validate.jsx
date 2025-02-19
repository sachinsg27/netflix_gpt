// export const checkValidData = (email, password, fullName = null) => {
//   const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
//     email
//   );
//   const isPasswordValid =
//     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

//   const isNamevalid =
//     /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
//       fullName
//     );

//   if (!isEmailValid) return "Email Id is not Valid";
//   if (!isPasswordValid) return "Password is not Valid";
//   if (!isNamevalid) return "Full Name is not Valid";

//   return null;
// };

export const checkValidData = (email, password, fullName = null) => {
  if (
    fullName &&
    !/^[A-Za-z]{3,16}(?: [A-Za-z]{3,16}){0,2}$/.test(fullName.trim())
  ) {
    return "Full Name is not Valid";
  }

  if (!/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return "Email is not Valid";
  }

  if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)) {
    return "Password is not Valid";
  }

  return null;
};

export function capitalize(s: any) {
  return s[0].toUpperCase() + s.slice(1);
}
export function isValidPassword(password: string) {
  if (password) {
    if (password.length < 8) return "Password should be 8 characters or longer";
    else
      return (
        (/\W|_/g.test(password) &&
          /[a-z]/.test(password) &&
          /[A-Z]/.test(password) &&
          /[0-9]/.test(password)) ||
        "At least 1 numeric, uppercase, lowercase and special character required"
      );
  } else return "Password is required";
}

export function isValidEmail(email: string) {
  if (email) {
    const emailPattern =
      /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
    return emailPattern.test(email) || "Invalid Email Address";
  } else return "Email address is required";
}

export function isValidPhoneNumber(phone: string) {
  if (phone) {
    return (
      (/(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/.test(
        phone
      ) &&
        /^[\d ()+-]+$/.test(phone)) ||
      "Invalid Phone Number"
    );
  } else return "Phone Number is required";
}

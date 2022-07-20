export function validateSignupInfo(values) {
  let errors = {};
  const emailRegex = new RegExp(/\S+@\S+\.\S+/);
  const passwordRegex = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{12,})"
  );

  //Skill
  if (!values.skill.trim()) {
    errors.skill = "Skill is required";
  }

  //Proficiency level
  if (!values.level.trim()) {
    errors.level = "Level is required";
  }

  // Email
  if (!values.email) {
    errors.email = "Email required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Email is invalid";
  }

  // Password
  if (!passwordRegex.test(values.password))
    errors.password =
      "password must contain 12 characters or more A-Z,0-9,alphanumeric";

  return errors;
}

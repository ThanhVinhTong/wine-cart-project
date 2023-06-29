import * as Yup from 'yup';

const REGEX_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?\/_])[A-Za-z\d~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?\/_]{6,15}$/;
  
const reGexPassword = REGEX_PASSWORD;

export const validationReview = Yup.object({
  username: Yup.string().required('Required!').min(2, 'Mininum 2 characters').max(15, 'Maximum 15 characters'),
  email: Yup.string().email('Invalid email format').required('Required!'),
  comment: Yup.string().required('Required'),
  password: Yup.string()
    .min(6, 'Minimum 6 characters')
    .required('Required!')
    .matches(reGexPassword, 'UpperCase, Lowercase, Characters, Number'),
});

import * as Yup from 'yup';

import React from 'react';

function functions() {
  return <div></div>;
}

export default functions;

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is a required field'),
  password: Yup.string()
    .min(4, 'Password must be at least 4 characters')
    .max(50, 'Password must not exceed 50 characters')
    .required('Password is a required field'),
});

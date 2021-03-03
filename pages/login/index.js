import React from 'react';
import Head from 'next/head';
import { Formik, Form, Field } from 'formik';
<<<<<<< HEAD
import { FormControl, Input, Button, FormErrorMessage } from '@chakra-ui/react';

import { Container, Img, FormContainer, FormHeaderText } from './LoginElements';
import { loginSchema } from './functions';
=======
import * as Yup from 'yup';
import Link from 'next/link';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';

import { Container, Img, FormContainer, FormHeaderText } from './LoginElements';

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is a required field'),
  password: Yup.string()
    .min(4, 'Password must be at least 4 characters')
    .max(50, 'Password must not exceed 50 characters')
    .required('Password is a required field'),
});
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8

const Login = () => {
  return (
    <Container>
      <Head>
        <title>Goloan - Login</title>
        <link rel="icon" href="/goloanFavicon.svg" />
      </Head>
<<<<<<< HEAD
      <Img src={require('../../src/images/goloanLogoWhite.svg')} />
=======
      <Img src={require('../../src/images/goloanLogo.svg')} />
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8
      <FormContainer>
        <FormHeaderText>Login</FormHeaderText>
        <Formik
          validationSchema={loginSchema}
          initialValues={{ email: '' }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
<<<<<<< HEAD
                    <Input {...field} id="email" placeholder="Email Address" />
=======
                    <Input {...field} id="email" placeholder="Email" />
>>>>>>> 3b1a8a8949a242ff9d83ccbeb2914f15288935b8
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <Input
                      marginTop={5}
                      {...field}
                      id="password"
                      placeholder="Password"
                    />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                w={300}
                colorScheme="green"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Login to your account
              </Button>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default Login;

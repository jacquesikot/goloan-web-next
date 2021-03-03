import React from 'react';
import Head from 'next/head';
import { Formik, Form, Field } from 'formik';
import { FormControl, Input, Button, FormErrorMessage } from '@chakra-ui/react';

import { Container, Img, FormContainer, FormHeaderText } from './LoginElements';
import { loginSchema } from './functions';

const Login = () => {
  return (
    <Container>
      <Head>
        <title>Goloan - Login</title>
        <link rel="icon" href="/goloanFavicon.svg" />
      </Head>
      <Img src={require('../../src/images/goloanLogoWhite.svg')} />
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
                    <Input {...field} id="email" placeholder="Email Address" />
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

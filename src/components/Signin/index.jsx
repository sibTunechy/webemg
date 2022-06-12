import React from 'react'
import { FormLabel, Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput, FormButton, Text  } from './SigninElements';

const Signin = () => {
    const isSignup = false;

  return (
    <>
        <Container>
            <FormWrap>
                <Icon to='/'>EMG</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>{isSignup ? 'Sign Up' : 'Sign In'}</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forget password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default Signin;
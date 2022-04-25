import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import moment from 'moment';

const SignUp = () => {
  const days = []
  const years = []
  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" }
  ]

  // Day 1 -> 31
  for (let i = 1; i <= 31; i++) {
    days.push({
      value: i,
      label: i
    })
  }

  // Current year -> 99 years ago
  for (let i = new Date().getFullYear(); i >= new Date().getFullYear() - 99; i--) {
    years.push({
      value: i,
      label: i
    })
  }

  return (
    <div className="min-h-full">
      <div className="container mx-auto py-3 px-3 mt-3 rounded-md bg-gray-200">
        <div>
          <h1 className="text-center text-3xl font-extrabold">Sign Up</h1>
        </div>
        <Formik
          initialValues={{
            username: '',
            password: '',
            passwordConfirm: '',
            birthdayMonth: '',
            birthdayDay: '',
            birthdayYear: ''
          }}
          validate={values => {
            const errors = {};

            if (!values.username) {
              errors.username = 'Required';
            } else if (values.username.length < 3 || values.username.length > 16) {
              errors.username = 'Username must be between 3 and 16 characters.'
            }

            if (!values.password) {
              errors.password = 'Required';
            } else if (values.password.length < 6) {
              errors.password = 'Password must be at least 6 characters.'
            }

            if (!values.passwordConfirm) {
              errors.passwordConfirm = 'Required';
            } else if (values.password !== values.passwordConfirm) {
              errors.passwordConfirm = 'Passwords must match.'
            }

            if (!moment(`${values.birthdayYear}${values.birthdayMonth}${values.birthdayDay}`, "YYYYMMDD").isValid()) {
              errors.birthdayYear = 'Invalid birthday.';
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }}
        >
          <Form>
            <div className="py-1">
              <div className="mb-2">Username</div>
              <Field className="block w-full rounded" type="text" name="username" placeholder="Don't include personal information" />
              <ErrorMessage name="username" component="div" className="block w-full text-red-500 py-2" />
            </div>
            <div className="py-1">
              <div className="mb-2">Password</div>
              <Field className="block w-full rounded" type="password" name="password" placeholder="Minimum of 8 characters" />
              <ErrorMessage name="password" component="div" className="block w-full text-red-500 py-2" />
            </div>
            <div className="py-1">
              <div className="mb-2">Confirm Password</div>
              <Field className="block w-full rounded" type="password" name="passwordConfirm" />
              <ErrorMessage name="passwordConfirm" component="div" className="block w-full text-red-500 py-2" />
            </div>
            <div className="py-1">
              <div className="mb-2">Birthday</div>
              <Field className="inline" as="select" name="birthdayMonth">
                <option disabled="disabled" value="">Month</option>
                {months.map((month) => <option key={month.value} value={month.value}>{month.label}</option>)}
              </Field>
              <Field className="inline" as="select" name="birthdayDay">
                <option disabled="disabled" value="">Day</option>
                {days.map((day) => <option key={day.value} value={day.value}>{day.label}</option>)}
              </Field>
              <Field className="inline" as="select" name="birthdayYear">
                <option disabled="disabled" value="">Year</option>
                {years.map((year) => <option key={year.value} value={year.value}>{year.label}</option>)}
              </Field>
              <ErrorMessage name="birthdayYear" component="div" className="block w-full text-red-500 py-2" />
            </div>
            <div className="py-1">
              <button className="block w-full bg-blue-500 text-white py-3 font-bold rounded-md" type="submit">Submit</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default SignUp
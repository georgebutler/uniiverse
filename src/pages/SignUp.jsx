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

  /** 
  const [validBirthday, setValidBirthday] = useState(true);

  const validateBirthday = () => {
    if (birthdayDay.length > 0 && birthdayMonth.length > 0 && birthdayYear.length > 0) {
      setValidBirthday(moment(`${birthdayYear}${birthdayMonth}${birthdayDay}`, "YYYYMMDD").isValid());
    }
  }

  useEffect(() => {
    validateBirthday();
  });
  */

  return (
    <div className="pt-3 pb-3">
      <div className="text-center text-3xl font-extrabold">Sign Up</div>
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
          console.log("Hello world!");
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
          <Form>
            <div>
              <div>Username</div>
                <Field className="block w-full" type="text" name="username" />
                <ErrorMessage name="username" component="div" className="block w-full bg-red-500 text-white py-2"/>
              </div>
            <div>
              <div>Password</div>
                <Field className="block w-full" type="password" name="password" />
                <ErrorMessage name="password" component="div" className="block w-full bg-red-500 text-white py-2"/>
              </div>
            <div>
              <div>Confirm Password</div>
                <Field className="block w-full" type="password" name="passwordConfirm" />
                <ErrorMessage name="passwordConfirm" component="div" className="block w-full bg-red-500 text-white py-2"/>
              </div>
            <div>
              <div>Birthday</div>
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
              <ErrorMessage name="birthdayYear" component="div" className="block w-full bg-red-500 text-white py-2"/>
            </div>
            <button className="block w-full bg-blue-500 text-white py-3 font-bold" type="submit">Submit</button>
          </Form>
      </Formik>
    </div>
  )
}

export default SignUp
import React, { useState, useEffect } from 'react';
import moment from 'moment'

const SignUp = () => {
    const days = []
    const years = []
    const months = [
      { index: "01", label: "January"},
      { index: "02", label: "February"},
      { index: "03", label: "March"},
      { index: "04", label: "April"},
      { index: "05", label: "May"},
      { index: "06", label: "June"},
      { index: "07", label: "July"},
      { index: "08", label: "August"},
      { index: "09", label: "September"},
      { index: "10", label: "October"},
      { index: "11", label: "November"},
      { index: "12", label: "December"}
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

    const [birthdayDay, setBirthdayDay] = useState("");
    const [birthdayMonth, setBirthdayMonth] = useState("");
    const [birthdayYear, setBirthdayYear] = useState("");

    const handleBirthdayDay = (e) => {
      setBirthdayDay(e.target.value);
    }

    const handleBirthdayMonth = (e) => {
      setBirthdayMonth(e.target.value);
    }

    const handleBirthdayYear = (e) => {
      setBirthdayYear(e.target.value);
    }

    function validateBirthday() {
      if (birthdayDay.length > 0 && birthdayMonth.length > 0 && birthdayYear.length > 0) {
        console.log(moment(`${birthdayYear}${birthdayMonth}${birthdayDay}`, "YYYYMMDD").isValid())
      }
    }

    useEffect(() => {
      validateBirthday();
    })

    return (
        <div>
          <div className="text-center text-3xl font-extrabold">Sign Up</div>
          <form>
            <div>
              <label>Username</label>
              <input className="block w-full" type="text"></input>
            </div>
            <div>
              <label>Password</label>
              <input className="block w-full" type="password"></input>
            </div>
            <div>
              <label>Confirm Password</label>
              <input className="block w-full" type="password"></input>
            </div>
            <div>
              <label className="block">Birthday</label>
              <select className="inline" value={birthdayMonth} onChange={(e) => handleBirthdayMonth(e)}>
                <option disabled="disabled" value="">Month</option>
                {months.map((month) => <option key={month.index} value={month.index}>{month.label}</option>)}
              </select>
              <select className="inline" value={birthdayDay} onChange={(e) => handleBirthdayDay(e)}>
                <option disabled="disabled" value="">Day</option>
                {days.map((day) => <option key={day.value} value={day.value}>{day.label}</option>)}
              </select>
              <select className="inline" value={birthdayYear} onChange={(e) => handleBirthdayYear(e)}>
                <option disabled="disabled" value="">Year</option>
                {years.map((year) => <option key={year.value} value={year.value}>{year.label}</option>)}
              </select>
            </div>
          </form>
        </div>
      )
}

export default SignUp
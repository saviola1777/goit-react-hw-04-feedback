// import React from 'react';
import { useState } from "react"
import Statistics from 'components/Statisticks/Statistics';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Cointeiner from 'components/Cointeiner/Cointeiner';

const App = () => {                                   // useState створює стан і метод, який змінюватиме його значення
  const [state, setStateValue] = useState({              //в state зберігається текущий стан , setStateValue метод для зміни стейту
    good: 0,                                          //якшо потрібно змінити стан state непотрібно this тільки state.good наприклад
    neutral: 0,
    bad: 0,
  });

  const total = () => state.good + state.neutral + state.bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good * 100) / total());
  }

  const onLeaveFeedback = name => {             // функція яка при кліку буде показувати на яке імя ми клікнули і передавати в state наприклд bad воно до поперенього значення +1
    setStateValue(prevState => {                //prevState => завжди потрібно викликати коли потірбно попередній стан , в цьому випадку ми по кліку до попереднього значення +1
      const value = prevState[name]; console.log([name])//[name] - назва імені по якому ми клікнули а імпутах ми їх назвали як good , bad, nutural якшо ми клікнули по інпуті з name=bad
      return { ...prevState, [name]: value + 1 }   //обовязково розпилюємо попередні значення  томущо прападуть , і додаєм+1 до попереднього значення через імя
    })
  };
  
  return (
    <Cointeiner>

      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistick">

        {total() ? (
          <Statistics good={state.good} neutral={state.neutral} bad={state.bad} total={total()} positivePercentage={countPositiveFeedbackPercentage()} />
          ) : (
          <Notification message="There is no feedback" />)}
      </Section>
    </Cointeiner>
  )

}
export default App

// import React from 'react';
import { useState } from "react"
import Statistics from 'components/Statisticks/Statistics';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Cointeiner from 'components/Cointeiner/Cointeiner';

const App = () => {                                   // useState створює стан і метод, який змінюватиме його значення
  const [state, setStateValue] = useState({              //в state зберігається текущий стан , setStateValue метод для зміни стейту
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const total=state.good + state.neutral + state.bad ;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good * 100) / this.countTotalFeedback());
  }

  const onLeaveFeedback = name => {
     setStateValue(prevState=>{
        const value = prevState[name] ;
        return  {...prevState , [name]:value+1}   // 
     })};


    
    return (
      <div className={css.cointeiner}>
      <section> 
  <h2 className={css.titels}></h2></section>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={onLeaveFeedback} />
        </Section>

        <Section title="Statistick">

          {this.countTotalFeedback() ? (
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage()}
            />) : (
            <Notification message="There is no feedback" />)}
        </Section>
        </div>
      
    )
  
}
export default App

  // options={Object.keys(this.state)} ми передали назви нашого стейту це те саме що ['good', 'neutral', 'bad'] маасив  потім ми перебрали в li і розрендерили
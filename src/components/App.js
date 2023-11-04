import { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return (good+neutral+bad)
  };

  const total = countTotalFeedback()

  const countPositiveFeedbackPercentage = () => {
    return Math.round(good/total*100)
  }
  
  const onLeaveFeedback = (option) => {
    switch (option) {
      case "good":
        setGood(prevState => prevState + 1)
        break;
      case "neutral":
        setNeutral(prevState => prevState + 1)
        break;
      case "bad":
        setBad(prevState => prevState + 1)
      default:
    }
    
  }
    
    const positivePercentage = countPositiveFeedbackPercentage()
  
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={['good','neutral','bad']}/>
        </Section>
        <Section title="Statistics">
          { total > 0 ?
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}></Statistics>
            :<Notification message ="There is no feedback"/>
          }
        </Section>
    </div >
      )
  
}
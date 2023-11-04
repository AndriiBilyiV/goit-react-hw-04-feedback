import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    return Object.values(this.state).reduce((prevValue, elm) => prevValue + elm)
  };
  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    return Math.round(this.state.good/total*100)
  }
  onLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option] : prevState[option] + 1
    }))
  }

  render() {
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} options={Object.keys(this.state)}/>
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
}
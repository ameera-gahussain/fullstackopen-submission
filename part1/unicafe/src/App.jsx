import { useState } from 'react'

const Statistics = (props) => {
  return (
    <>
      {props.good + props.neutral + props.bad > 0 ? (
        <>
          <StatisticsLine text='good' value={props.good} />
          <StatisticsLine text='neutral' value={props.neutral} />
          <StatisticsLine text='bad' value={props.bad} />
          <StatisticsLine text='all' value={props.total} />
          <StatisticsLine text='average' value={props.average} />
          <StatisticsLine text='positive' value={props.positive + '%'} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  )
}

const StatisticsLine  = ({ text, value }) => 
  <table><tbody>
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
  </tbody></table>


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => {
        setGood(good + 1)
        setTotal(total + 1)
        setAverage((good + 1 - bad) / (total + 1))
        setPositive(((good + 1) / (total + 1)) * 100)
      }} text='good' />
      <Button handleClick={() => {
        setNeutral(neutral + 1)
        setTotal(total + 1)
        setAverage((good - bad) / (total + 1))
        setPositive((good / (total + 1)) * 100)
      }} text='neutral' />
      <Button handleClick={() => {
        setBad(bad + 1)
        setTotal(total + 1)
        setAverage((good - (bad + 1)) / (total + 1))
        setPositive((good / (total + 1)) * 100)
      }} text='bad' /> 
      <h1>statistics</h1>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />

      </div>
       
  )
}

export default App
import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { TEXT, TRAININGS } from '../../constants'
import { findIndex, propEq } from 'ramda'
import Icon from '../Icon'

import './Welcome.css'

const completedPercent = training => Math.floor(training.lessonsCompleted.length / training.lessons.length * 100)

const Welcome = (props) => {
  const classes = classNames(
    'Welcome'
  )
  const fetchTraining = (id) => {
    const notFetched = findIndex(propEq('id', id), props.trainings) === -1
    if (notFetched) {
      props.fetchTraining(id)
    }
  }
  return (
    <div className={classes}>
      <div className='inner'>
        <svg className={'logo'} height='200' viewBox='0 0 64 64' width='200' xmlns='http://www.w3.org/2000/svg'><path d='M58 50H38v1H26v-1H6c-.553 0-1 .447-1 1s.438 1.097.977 1.217l6.07 1.35c1.078.239 2.848.433 3.953.433h32c1.104 0 2.873-.194 3.951-.434l6.072-1.35c.54-.119.977-.663.977-1.216s-.447-1-1-1zm-.193 1.24l-6.072 1.35c-1.001.223-2.712.41-3.735.41H16c-1.023 0-2.734-.188-3.736-.41l-6.07-1.35C6.111 51.223 6 51.083 6 51h19v1h14v-1h19c0 .083-.113.223-.193.24zM53 16H11a1 1 0 0 0-1 1v30h44V17a1 1 0 0 0-1-1zm0 30H11V17h42v29z' fill='#000' /><path d='M56 17c0-1.65-1.35-3-3-3H11c-1.65 0-3 1.35-3 3v32h48V17zm-1 31H9V17a2 2 0 0 1 2-2h42a2 2 0 0 1 2 2v31z' fill='#000' /><path fill='#000' d='M14 43h2v1h-2zM14 40h2v1h-2zM14 37h2v1h-2zM14 34h2v1h-2zM14 31h2v1h-2zM14 28h2v1h-2zM14 25h2v1h-2zM14 22h2v1h-2zM14 19h2v1h-2zM18 37h8v1h-8zM27 37h2v1h-2zM28 43h10v1H28zM25 43h2v1h-2zM18 43h6v1h-6zM22 40h8v1h-8zM39 37h8v1h-8zM30 37h8v1h-8zM36 31h8v1h-8zM33 31h2v1h-2zM18 28h2v1h-2zM24 31h4v1h-4zM18 25h4v1h-4zM23 25h4v1h-4zM28 25h13v1H28zM32 22h4v1h-4zM27 22h4v1h-4zM37 22h2v1h-2zM37 34h5v1h-5zM32 34h4v1h-4zM18 34h11v1H18zM18 22h8v1h-8zM18 19h2v1h-2z' /></svg>
        <h1>{TEXT.Welcome.title}</h1>
        <h2>{TEXT.Welcome.subtitle}</h2>
        <div className='github'>
          <a href='https://github.com/kulakowka/programmers-typing-tutor' target='_blank'>
            <Icon name='github' /> kulakowka/programmers-typing-tutor
          </a>
        </div>
        <div className='trainings-list'>
          {TRAININGS.map(({ id, name, logo, lessons }) => {
            const training = props.trainings[id]
            return (
              <Link key={id} to={`/${id}`} title={name} onClick={() => !training && fetchTraining(id)}>
                {name}
                {training && <span className='completed'>{completedPercent(training)}%</span>}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Welcome

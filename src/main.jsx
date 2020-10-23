import React from 'react'
import { render } from 'react-dom'
import DemoApp from './DemoApp'
import './main.css'

document.addEventListener('DOMContentLoaded', function() {
  document.title = 'Calendar App',
  render(
    <DemoApp />,
    document.body.appendChild(document.createElement('div')),
  )
})

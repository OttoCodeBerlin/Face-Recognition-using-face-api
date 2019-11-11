import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Face Recognition by OCB</h2>
        <li>
          <Link to='/photo'>Upload a Picture</Link>
        </li>
        <li>
          <Link to='/camera'>Use Camera</Link>
        </li>
      </div>
    )
  }
}

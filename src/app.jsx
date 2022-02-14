import React, {Component, Fragment} from 'react';
import './app.css';

class app extends Component {
  render() {
    return (
      <>
      <Button danger />
      <Button />
      </>
    );
  }
}

const Button = ({ danger }) => (
  <button className={danger? "button button--danger" :"button button--success"}>Hello</button>
);



export default app;

import Header from "./Header";
import { Component } from 'react';
import UserClass from './UserClass';

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="">
        <Header />
        <UserClass />
      </div>
    );
  }
}



export default AboutUs;

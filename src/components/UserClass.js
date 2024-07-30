import { Component } from 'react';

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      avatar_url: ''
    };
  }

  async componentDidMount() {
      const response = await fetch("https://api.github.com/users/VISHAL8114");
      const data = await response.json();
      this.setState({
        name: data.name,
        location: data.location,
        avatar_url: data.avatar_url
      });
  }

  render() {
    const { name, location, avatar_url } = this.state;
    return (
      <div className="flex flex-col items-center">
        {<img className='rounded-full' src={"https://avatars.githubusercontent.com/u/132534327?s=400&u=b93330820e732732db05e3c832651aa5ad444d0b&v=4"} alt={name} />}
        <div className='font-bold text-5xl   text-center mt-2'>{name}</div>
        <div className='font-bold text-2xl   text-center mt-2'>{location}</div>
      </div>
    );
  }
}

export default UserClass;

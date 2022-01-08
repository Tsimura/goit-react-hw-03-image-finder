import { Component } from 'react';
import { toast } from 'react-toastify';
import { BiSearchAlt } from 'react-icons/bi';
class Searchbar extends Component {
  state = { imageValue: '' };
  handleNameChange = event => {
    this.setState({ imageValue: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imageValue.trim() === '') {
      toast.error('Where are you imageValue?!');
      return;
    }
    this.props.onSubmit(this.state.imageValue);
    this.setState({ imageValue: '' });
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <BiSearchAlt style={{ marginRight: 10 }} />
            Search
          </button>
          <br />

          <input
            className="input"
            type="text"
            name="imageValue"
            value={this.state.imageValue}
            onChange={this.handleNameChange}
            // autoComplete="off"
            // autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

// Убрать <br />? завйві консолі,змінні, що не використовуються!!!;

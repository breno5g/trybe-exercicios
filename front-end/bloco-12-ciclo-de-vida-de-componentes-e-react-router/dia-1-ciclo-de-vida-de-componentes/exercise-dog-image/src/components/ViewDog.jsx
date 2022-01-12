import React, { Component } from 'react';

class ViewDog extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      image: '',
      storedImages: [],
    };

    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  shouldComponentUpdate(props, { image }) {
    if (image.includes('terrier')) {
      return false;
    }

    return true;
  }

  componentDidUpdate(props, state) {
    localStorage.setItem('teste', JSON.stringify(state.storedImages));
    const dogName = state.image.split('/');
    alert(`Doguinho: ${dogName[4]}`);
  }

  async fetchApi() {
    const { image, storedImages } = this.state;
    const URL = 'https://dog.ceo/api/breeds/image/random';
    this.setState(
      {
        image: await fetch(URL)
          .then((res) => res.json())
          .then((res) => res.message),
        loading: false,
      },
      this.setState({
        storedImages: [...storedImages, image],
      }),
    );
  }

  render() {
    const { image, loading } = this.state;

    const LOADER = <p>loading...</p>;

    return (
      <div>
        {loading ? LOADER : <img src={image} alt="" />}
        <button
          type="button"
          onClick={() => {
            this.setState(
              {
                loading: true,
              },
              this.fetchApi,
            );
          }}
        >
          New dog
        </button>
      </div>
    );
  }
}

export default ViewDog;

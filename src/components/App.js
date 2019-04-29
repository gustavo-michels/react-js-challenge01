import React, { Component, Fragment } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Gustavo H. Michels',
        avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        time: 'há 3 min',
        body:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui voluptas neque autem similique voluptatem corporis eveniet ipsum aliquid delectus natus perspiciatis fugiat expedita voluptates eos eius commodi, deleniti molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui voluptas neque autem similique voluptatem corporis eveniet ipsum aliquid delectus natus perspiciatis fugiat expedita voluptates eos eius commodi, deleniti molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui voluptas neque autem similique voluptatem corporis eveniet ipsum aliquid delectus natus perspiciatis fugiat expedita voluptates eos eius commodi, deleniti molestiae.',
      },
      {
        id: 2,
        name: 'Andressa Mombach',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlDPRr1xSW0lukY2EmVpAx5Ye1S8H5luUVOK2IqFdcsjCDQxK',
        time: 'há 30 min',
        body:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et recusandae quibusdam nihil reiciendis deleniti in? Culpa deleniti, cumque, nulla atque vel eaque porro a odit non ea voluptatem sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui voluptas neque autem similique voluptatem corporis eveniet ipsum aliquid delectus natus perspiciatis fugiat expedita voluptates eos eius commodi, deleniti molestiae.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </Fragment>
    );
  }
}

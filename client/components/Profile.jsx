import React from 'react';
import HeaderBar from './HeaderBar.jsx';
import SocialFeed from './social/SocialFeed.jsx';

const Profile = class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: 'Name',
      userPosts: [
        {name: 'Mufasa',
        date: 'April 20th, 2020',
        location: 'The Mighty Jungle',
        post: 'My son is a little turd, he will never be king because I will live forever LOL',
        propic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e78b0ee-7d21-4e35-badd-d148b5a2a5de/d4bv1o8-3fb388f6-4dcf-44b3-9fd9-be7ae75bba69.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvM2U3OGIwZWUtN2QyMS00ZTM1LWJhZGQtZDE0OGI1YTJhNWRlXC9kNGJ2MW84LTNmYjM4OGY2LTRkY2YtNDRiMy05ZmQ5LWJlN2FlNzViYmE2OS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.vz3uHuj93dfqpwiETOYw8OUH5Bm3TtUIdflolxx8WfA'
        },
        {name: 'Mufasa',
        date: 'April 20th, 2020',
        location: 'The Mighty Jungle',
        post: 'My son is a little turd, he will never be king because I will live forever LOL',
        propic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e78b0ee-7d21-4e35-badd-d148b5a2a5de/d4bv1o8-3fb388f6-4dcf-44b3-9fd9-be7ae75bba69.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvM2U3OGIwZWUtN2QyMS00ZTM1LWJhZGQtZDE0OGI1YTJhNWRlXC9kNGJ2MW84LTNmYjM4OGY2LTRkY2YtNDRiMy05ZmQ5LWJlN2FlNzViYmE2OS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.vz3uHuj93dfqpwiETOYw8OUH5Bm3TtUIdflolxx8WfA'
        }
      ]
    };
  }

  render() {
    const { userProfile } = this.state;
    return (
      <div>
        <HeaderBar></HeaderBar>
        <div className="allHeader">
          <div className="headerImage"></div>
          <div className="profileCard">
            <div className="profileImage"></div>
            <div className="userName">{userProfile}</div>
            <button className="profileButton">Follow {userProfile}</button>
          </div>
        </div>
        <div className="profileBody">
          <div className="thirdsColumn">
            <div className="contentBox">
              <div className="boxTitle">{userProfile}'s Stats</div>
              <div className="statistics"></div>
            </div>
            <div className="contentBox">
              <div className="boxTitle">{userProfile}'s Events</div>
              <div className="eventsFeed"></div>
            </div>
            <div className="contentBox">
              <div className="boxTitle">{userProfile}'s Recent Activities</div>
              <div className="recentActivityFeed"></div>
            </div>
          </div>
          <div className="thirdsColumn">
            <button className="profileButton">+ New Post</button>
            <button className="profileButton">+ Create Daily Run</button>
            <div className="contentBox">
              <SocialFeed posts={this.state.userPosts}></SocialFeed>
            </div>
          </div>
          <div className="thirdsColumn">
            <div className="contentBox">
              <div className="boxTitle">{userProfile}'s Bio</div>
              <div className="userBio"></div>
            </div>
            <div className="contentBox">
              <div className="boxTitle">{userProfile}'s Friends</div>
              <div className="friendsList"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;

import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Profile from './Profile';
import ErrorPage from './404';

export default class ProfilePage extends React.Component {
  state = {
    userData: {},
    //    trendsData: [],  // trends (not a json object)
  };

  componentDidMount() {
    this.getUserInfo();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (prevProps.match.params.id !== match.params.id) {
      this.getUserInfo();
    }
  }

  getUserInfo = () => {
    const { match } = this.props;
    const hostname = 'https://twitter-demo.erodionov.ru';
    const secretCode = process.env.REACT_APP_SECRET_CODE;
    fetch(`${hostname}/api/v1/accounts/${match.params.id}?access_token=${secretCode}`)
      .then(response => response.json())
      .then((data) => {
        this.setState({ userData: data });
      });
  };

  render() {
    const { userData } = this.state;
    return (
      <React.Fragment>
        {userData.error && (
          <React.Fragment>
            <Helmet>
              <title>
                {`${userData.error} | Twitter`}
              </title>
            </Helmet>

            <Header />
            <ErrorPage />
          </React.Fragment>
        )}
        {userData.id && <Profile userData={userData} />}
        {!Object.keys(userData).length && (
        <div>
Loading
        </div>
        )}
      </React.Fragment>
    );
  }
}

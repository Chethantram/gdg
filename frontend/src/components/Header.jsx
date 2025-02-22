import React from 'react'
import Hero from './Hero'
import KeyFeature from './KeyFeature';
import UserReview from './UserReview';

const Header = () => {
  return (
    <div className="px-10">
        <Hero/>
        <KeyFeature/>
        <UserReview/>
    </div>
  );
}

export default Header
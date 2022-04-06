import React from 'react';

function bannerContent(title, content) {
  return (
    <div className="dashboard-banner">
      <div className="banner-content">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="welcome-content">
          <h2>{content}</h2>
        </div>
      </div>
    </div>
  );
}

function Banner() {
  const path = window.location.pathname;
  if (path === '/parent' || path === '/instructor') {
    return bannerContent('Dashboard', 'welcome back!');
  } else if (path === '/parent-booking') {
    return bannerContent(
      'bookings list',
      "view your children's reserved courses"
    );
  } else if (path === '/instructor-booking') {
    return bannerContent('Apply to Course', 'Select Courses');
  } else if (path === '/instructor-add-course') {
    return bannerContent('Create', 'your own course');
  } else if (path === '/family') {
    return bannerContent('Family', '');
  } else if (path === '/instuctor-news-feed' || path === '/parent-news-feed') {
    return bannerContent('News Feed');
  } else if (path === '/classroom') {
    return bannerContent('Classroom');
  } else {
    return bannerContent('Dashboard', 'Welcome back!');
  }
}
export default Banner;

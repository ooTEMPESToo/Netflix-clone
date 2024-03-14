import React from 'react'
import Main from '../components/Main';
import Rows from '../components/Rows';
import request from '../Request';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Main/>
      <Rows rowID='1' title='Popular' fetchURL={request.requestPopular} />
      <Rows rowID='2' title='Upcoming' fetchURL={request.requestUpcoming} />
      <Rows rowID='3' title='TopRated' fetchURL={request.requestTopRated} />
      <Rows rowId='4' title='Series' fetchURL={request.requestSeries}/>
      <Footer/>
    </div>
  )
}

export default Home;
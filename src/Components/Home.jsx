import React, { useEffect } from 'react'
import Banner from './Banner'
import PopularCourses from './PopularCourses'
import { useLoaderData, useNavigation } from 'react-router'
import StatsSection from './StatsSection'
import Slider from './Slider'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Loading from '../Pages/Loading'

const Home = () => {
  const data = useLoaderData()

  useEffect(() => {
    AOS.init({ duration: 1000, once: false })
  }, [])

  const navigation = useNavigation()

  if (navigation.state === 'loading') {
    return <Loading></Loading>
  }

  return (
    <div>
      <Banner></Banner>
      <PopularCourses data={data}></PopularCourses>
      <StatsSection></StatsSection>
      <Slider></Slider>
    </div>
  )
}

export default Home

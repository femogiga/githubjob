
import './App.css'
import Card from './components/homepage/Card'
import MainForm from './components/homepage/MainForm'
import Paginator from './components/homepage/Paginator'
import Search from './components/homepage/Search'
import Description from './components/profile/Description'
import Details from './components/profile/Details'
import JobProfile from './components/profile/JobProfile'
import SiteHeader from './components/profile/SiteHeader'



function App() {


  return (
    <div className='app'>
      {/* <Search/>
      <MainForm/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Paginator/> */}
      <Details>
      <SiteHeader/>
        <JobProfile/>
       <Description/>
      </Details>

    </div>
  )
}

export default App

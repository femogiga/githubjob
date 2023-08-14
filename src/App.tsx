
import './App.css'
import Card from './components/homepage/Card'
import MainForm from './components/homepage/MainForm'
import Paginator from './components/homepage/Paginator'
import Search from './components/homepage/Search'
import JobProfile from './components/profile/JobProfile'



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
      <JobProfile/>
    </div>
  )
}

export default App

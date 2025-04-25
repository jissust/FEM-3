import './App.css'
import Header from './components/Header/Header'
import Grid from './components/Grid/Grid'

function App() {

  return (
    <main className='py-[19px] md:py-[42px] bg-[#eef8fa] dark:bg-gradient-to-br from-[#050A1D] to-[#0A1640] px-[17px] xl:px-0'>
      <Header />
      <Grid />
    </main>
  )
}

export default App

import './App.css'
import Header from './components/Header/Header'
import ExtensionList from './components/ExtensionList/ExtensionList'
import Grid from './components/Grid/Grid'

function App() {

  return (
    <main className='py-[20px]'>
      <Header />
      <ExtensionList />
      <Grid />
    </main>
  )
}

export default App

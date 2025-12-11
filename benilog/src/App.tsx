import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>
        <h1>Hello World</h1>
      </div>} />
    </Routes>
  )
}

export default App

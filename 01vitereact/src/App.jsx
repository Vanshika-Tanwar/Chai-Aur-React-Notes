import Chai from "./Chai"

function App() {
  const username = "Vanshika Tanwar"
  
  return (
    <> {/* called fragment */}
    <Chai/> {/* components must always be capitalize as convention same is a good practice with file names. */}
    <h1>Chai Aur React | {username}</h1>
    <p>Testing, 1, 2, 3, ...</p>
    </>
  )
}

/* some libraries like vite might force you to use .jsx while react works fine with .js */

export default App

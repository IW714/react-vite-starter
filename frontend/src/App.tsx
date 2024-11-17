import CanvasComponent from './components/CanvasComponent'
import { ComputerModel } from './components/ComputerModel'


function App() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Adding absolute positioning to ensure Canvas takes full container height */}
      <div className="absolute inset-0">
        <CanvasComponent backgroundColor="#e0e0e0">
          <ComputerModel />
        </CanvasComponent>
      </div>
    </div>
  )
}

export default App

import { Canvas } from "@react-three/fiber"
import  Model  from "./components/Model"
import { OrbitControls } from "@react-three/drei"

function App() {

  return (
    <>
    <Canvas>
      <directionalLight intensity={0.7} />
      <ambientLight position={[5,5,5]} />
      <OrbitControls />
      <Model />
    </Canvas>
    </>
  )
}

export default App

import React from 'react'
    import { Canvas } from '@react-three/fiber'
    import { OrbitControls, Stars } from '@react-three/drei'
    import Earth from './Earth'

    const App: React.FC = () => {
      return (
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Earth />
          <Stars />
          <OrbitControls />
        </Canvas>
      )
    }

    export default App

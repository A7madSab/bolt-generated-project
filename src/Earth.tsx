import React from 'react'
    import { useLoader } from '@react-three/fiber'
    import { TextureLoader } from 'three'
    import earthTexture from './textures/earth.jpg'

    const Earth: React.FC = () => {
      const colorMap = useLoader(TextureLoader, earthTexture)

      return (
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial map={colorMap} />
        </mesh>
      )
    }

    export default Earth

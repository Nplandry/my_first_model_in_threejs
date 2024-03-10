import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/model.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} >
        <mesh geometry={nodes.Object_2.geometry} material={materials.main} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.main} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.main} />
      </group>
    </group>
  )
}

useGLTF.preload('/model.gltf')

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Ozor (https://sketchfab.com/Ozor)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/cartoon-hammer-026d752a132d48369a4e854af2a5e86b
title: Cartoon hammer
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/cartoon_hammer.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, -0.13, 1.08]} rotation={[-Math.PI, 0, -0.05]}>
          <mesh geometry={nodes.Marteau_0.geometry} material={materials.Gris} />
          <mesh geometry={nodes.Marteau_1.geometry} material={materials.Marron_clair} />
          <mesh geometry={nodes.Marteau_1_1.geometry} material={materials.Marron_clair} />
          <mesh geometry={nodes.Marteau_2.geometry} material={materials.Jaune} />
        </group>
        <group position={[0, 0, 8.14]} />
      </group>
    </group>
  )
}

useGLTF.preload('/cartoon_hammer.glb')

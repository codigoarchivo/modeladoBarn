export const Window = () => {
  return (
    <mesh castShadow receiveShadow position={[0, 270, 372]}>
      <boxGeometry args={[40, 20, 3]} />
      <meshStandardMaterial color={'#5a0b1b'} />
    </mesh>
  );
};



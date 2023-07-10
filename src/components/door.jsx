export const Door = (props) => {
  return (
    <>
      <mesh castShadow receiveShadow position={[0, 100, 372]}>
        <boxGeometry args={[200, 160, 1]} />
        <meshStandardMaterial color={'#5a0b1b'} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 100, 372]}>
        <boxGeometry args={[15, 160, 3]} />
        <meshStandardMaterial color={props.materials.Metal_Exterior.color} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 100, 372]}>
        <boxGeometry args={[200, 10, 3]} />
        <meshStandardMaterial color={props.materials.Metal_Exterior.color} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 20, 372]}>
        <boxGeometry args={[214, 10, 3]} />
        <meshStandardMaterial color={props.materials.Metal_Exterior.color} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 180, 372]}>
        <boxGeometry args={[214, 10, 3]} />
        <meshStandardMaterial color={props.materials.Metal_Exterior.color} />
      </mesh>
      <mesh castShadow receiveShadow position={[100, 100, 372]}>
        <boxGeometry args={[14, 160, 3]} />
        <meshStandardMaterial color={props.materials.Metal_Exterior.color} />
      </mesh>
      <mesh castShadow receiveShadow position={[-100, 100, 372]}>
        <boxGeometry args={[14, 160, 3]} />
        <meshStandardMaterial color={props.materials.Metal_Exterior.color} />
      </mesh>
    </>
  );
};

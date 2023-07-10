import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PresentationControls, Stage, useGLTF } from '@react-three/drei';
import Model from './components/model';
import './App.css';

const select = [
  'LoftedBarn_6Wall_10x12_None_Wall1',
  'LoftedBarn_6Wall_10x12_None_Wall2',
  'LoftedBarn_6Wall_10x12_None_Wall3',
  'LoftedBarn_6Wall_10x12_None_Wall4',
];

function App() {
  const { nodes, materials, scene } = useGLTF('/models/Barn_Testing.glb');
  const [dropdown, setDropdown] = useState(false);
  const [selectData, setSelectData] = useState('');

  const handleActions = (select) => {
    setSelectData(select);
    setDropdown(false);
  };

  return (
    <>
      <div className='row'>
        {/* controls */}
        <div className={'dropdown'}>
          <button onClick={() => setDropdown(!dropdown)} className={'dropbtn'}>
            <span>actions</span>
            {dropdown ? (
              <span className='material-symbols-outlined'>expand_less</span>
            ) : (
              <span className='material-symbols-outlined'>expand_more</span>
            )}
          </button>
          <div className={`dropdownContent ${dropdown && 'show'}`}>
            <span onClick={() => handleActions(select)}>walls all</span>
            <span onClick={() => handleActions(select[0])}>wall one</span>
            <span onClick={() => handleActions(select[1])}>wall two</span>
            <span onClick={() => handleActions(select[2])}>wall three</span>
            <span onClick={() => handleActions(select[3])}>wall four</span>
          </div>
        </div>
        {/* Canvas */}
        <Canvas
          camera={{ position: [-15, 0, 15], fov: 45 }}
          dpr={[1, 2]}
          shadows
          style={{ width: '100%', height: '92vh' }}
        >
          <Suspense fallback={null}>
            <PresentationControls
              global
              polar={[-0.1, Math.PI / 4]}
              speed={1.5}
              zoom={1}
            >
              <Stage environment={'sunset'}>
                <Model
                  materials={materials}
                  nodes={nodes}
                  scene={scene}
                  selectData={selectData}
                />
              </Stage>
            </PresentationControls>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App;

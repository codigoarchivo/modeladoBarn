import { useRef } from 'react';
import { Window } from './window';
import { Door } from './door';
import { Barn } from './barn';

const Model = (props) => {
  // Instantiate a exporter
  const group = useRef();

  return (
    <group ref={group} {...props} dispose={null}>
      {/* window */}
      <Window />
      {/* door */}
      <Door materials={props.materials} />
      {/* barn */}
      <Barn
       materials={props.materials}
       nodes={props.nodes}
       selectData={props.selectData}
      />
    </group>
  );
};

export default Model;

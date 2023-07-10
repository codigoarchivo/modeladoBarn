import React from 'react';

export const Barn = (props) => {
  return (
    <>
      {Object.entries(props.nodes).map((item) => {
        if (item[1].type === 'Group') return;
        if (item[0] === 'Mesh') return;

        let colorb = '';
        switch (item[0]) {
          case 'Mesh_2':
            colorb = props.materials.Wood_Trim.color;
            break;
          case 'Mesh_3':
            colorb = '#c0a26a';
            break;
          case 'Mesh_5':
            colorb = props.materials.Roofing_Shingles_DesertTan.color;
            break;
          case 'Mesh_7':
            colorb = props.materials.Wood_Trim.color;
            break;
          case 'Mesh001_2':
            colorb = props.materials.Roofing_Shingles_DesertTan.color;
            break;
          default:
            colorb = props.materials.Siding_LPSmartPanelSiding.color;
            break;
        }

        /* The code snippet is assigning a value to the variable `active`. */
        let active =
          props.selectData.length === 4
            ? props.selectData.includes(`${item[0]}`)
            : item[0] === props.selectData;

        return (
          <mesh
            castShadow
            geometry={item[1].geometry}
            key={item[0]}
            receiveShadow
          >
            <meshStandardMaterial color={active ? '#c0a26a' : colorb} />
          </mesh>
        );
      })}
    </>
  );
};

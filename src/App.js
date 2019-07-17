import React from 'react';
import RCTree from './RCTree';

function App() {
  let data = [
    {
      name: 'Mia/Folder1/Note1',
      description: 'You are inside Mia/Folder1/Note1',
      id: 'id-Mia/Folder1/Note1'
    },
    {
      name: 'Mia/Folder1/Note2',
      description: 'You are inside Mia/Folder1/Note2',
      id: 'id-Mia/Folder1/Note2'
    },
    {
      name: 'Mia',
      description: 'You are inside Mia',
      id: 'id-Mia'
    },
    {
      name: 'Mia/Another_Folder1',
      description: 'You are inside Mia/Another_Folder1',
      id: 'id-Mia/Another_Folder1'
    },
    {
      name: 'Mia/ProjectWork/Note1',
      description: 'You are inside Mia/ProjectWork/Note1',
      id: 'id-Mia/ProjectWork/Note1'
    },
    {
      name: 'Mia/ProjectWork/Note2',
      description: 'You are inside Mia/ProjectWork/Note2',
      id: 'id-Mia/ProjectWork/Note2'
    },
    {
      name: 'Mia/ProjectWork/Note3',
      description: 'You are inside Mia/ProjectWork/Note3',
      id: 'id-Mia/ProjectWork/Note3'
    },
    {
      name: 'Public/General/Note1',
      description: 'You are inside Public/General/Note1',
      id: 'id-Public/General/Note1'
    },
    {
      name: 'Public/General/Note2',
      description: 'You are inside Public/General/Note2',
      id: 'id-Public/General/Note2'
    },
    {
      name: 'Public/General',
      description: 'You are inside Public/General',
      id: 'id-Public/General'
    },
    {
      name: 'Note',
      description: 'You are inside Note',
      id: 'id-Note'
    }
  ];

  return (
    <div>
      <RCTree data={data} />
    </div>
  );
}

export default App;

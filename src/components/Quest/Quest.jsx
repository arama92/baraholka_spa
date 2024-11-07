import React from 'react';
import Radioinput from '../UI/Radioinput';
import styles from './Quest.module.scss';

import { modalContext } from '../../App';

const Quest = ({ id, name, done, callAxiosOk }) => {
  const [checked, setChecked] = React.useState(done);

  const clickQuest = (e) => {
    e.preventDefault();
    setChecked(!checked);
    callAxiosOk(id, !checked);
  };

  const { setVisableModal, coorXY, questId } = React.useContext(modalContext);

  const contextMenu = (e) => {
    e.preventDefault();
    setVisableModal(true);

    coorXY.current = {
      x: e.clientX,
      y: e.clientY,
    };

    questId.current = id;
  };

  return (
    <label
      className={styles.root + ' ' + (checked ? styles['quest-done'] : '')}
      onClick={clickQuest}
      onContextMenu={contextMenu}
    >
      <Radioinput checked={checked} />
      <span>{name}</span>
    </label>
  );
};

export default Quest;

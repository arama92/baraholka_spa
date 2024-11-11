import React from 'react';
import Radioinput from '../UI/Radioinput';
import styles from './Quest.module.scss';

import { modalContext } from '../../pages/Main';
import { CoorXY, quest } from '../../@types/questTypes';

type questProps = quest & { callAxiosOk: (id: number, done: boolean) => void };

type context = {
  setVisableModal: (value: boolean) => void;
  coorXY: React.MutableRefObject<CoorXY>;
  questId: React.MutableRefObject<number>;
};

const Quest: React.FC<questProps> = ({ id, name, done, callAxiosOk }) => {
  const [checked, setChecked] = React.useState(done);

  const { setVisableModal, coorXY, questId } = React.useContext<context>(modalContext);

  const clickQuest = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setChecked(!checked);
    callAxiosOk(id, !checked);
  };

  const contextMenu = (e: React.MouseEvent<HTMLLabelElement>) => {
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

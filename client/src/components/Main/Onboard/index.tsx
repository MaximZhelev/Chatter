import React from 'react';
import { useSelector } from 'react-redux';

// Local Imports
import styles from './styles.module.scss';

type Props = {
  onClick: () => void;
};
interface IRootState {
  auth: {
    username: string;
    image: string;
  };
}

const Onboard: React.FC<Props> = props => {
  const { username } = useSelector((state: IRootState) => state.auth);
  return (
    <div className={styles.container} onClick={props.onClick}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Hello, {username}!</h1>
        <p className={styles.description}>
          I really appreciate that you take time to have a look to my work. This app is an instant messaging project
          that offer the possibility to create and join channels and start a conversation.
        </p>
        <ul className={styles.list}>
          <li>⭐️ Use the "menu" icon on top (Mobile).</li>
          <li>⭐️ Click on any channel you want to join.</li>
          <li>⭐️ Create a channel with the "+" icon.</li>
          <li>⭐️ Send messages with the text input.</li>
          <li>⭐️ Browse channels with the search input.</li>
          <li>⭐️ Click on your profile to edit.</li>
          <li>⭐️ Use the "exit" icon to logout.</li>
        </ul>
      </div>
    </div>
  );
};

export default Onboard;

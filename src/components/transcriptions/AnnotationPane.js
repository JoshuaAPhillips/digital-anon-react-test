import Container from 'react-bootstrap/Container';
import styles from './AnnotationPane.module.css';

const AnnotationPane = ({ showAnnotations }) => {
  const showPane = () => {
    return showAnnotations ? styles.open : styles.closed;
  }

  return (
    <Container className={`${styles.AnnotationPane} ${showPane()}`}>
      <h2>Annotations</h2>
      <ul className={styles.text}>
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, dolor.</li>
        <li>Cupiditate eos enim ab reiciendis eligendi. Aut error eos accusantium.</li>
        <li>Magni ab est quisquam. Ea cupiditate dignissimos autem architecto ipsum.</li>
        <li>A commodi quisquam quia, nostrum quos perspiciatis ipsam distinctio cum.</li>
        <li>Ex, excepturi saepe. Exercitationem debitis doloribus quia nisi animi culpa.</li>
        <li>Asperiores iure fuga eum tempora sit placeat, voluptatibus minus reprehenderit!</li>
        <li>Doloribus exercitationem laudantium distinctio fugit voluptate, sit sed iusto molestias.</li>
        <li>Culpa nemo dolorum doloremque, veniam iusto error! Rem, laboriosam commodi?</li>
        <li>Laborum sapiente ea earum fuga aspernatur necessitatibus tempore, minima et!</li>
        <li>Saepe quo repudiandae perspiciatis commodi placeat temporibus et non quidem?</li>
      </ul>
    </Container>
  );
}

export default AnnotationPane;
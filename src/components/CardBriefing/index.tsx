import './styles.css';
import testImg from '../../assets/Githubimg.png';

export default function CardBriefing() {
  return (
    <div>
      <div>
        <img src={testImg} alt="Imagem" />
        <div>
            <h3>Informações</h3>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
        </div>
      </div>
    </div>
  );
}

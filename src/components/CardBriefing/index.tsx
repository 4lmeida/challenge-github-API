import './styles.css';
import testImg from '../../assets/Githubimg.png';

export default function CardBriefing() {
  return (
    <div className='cgapi-cardbriefing-container'>
      <div className='cgapi-cardbriefing-content'>
        <img src={testImg} alt="Imagem" />
        <div className='cgapi-inputbriefing-container'>
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

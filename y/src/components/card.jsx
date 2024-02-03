import './card.css';
import cardImg1 from '../assets/cardimg1.png';
import cardImg2 from '../assets/cardimg2.png';
import cardImg3 from '../assets/cardimg3.png';


export default function Card() {
    return(
        <>
        <div className='card'>
            <img src={cardImg1} alt="cardimg1" className='cardimg1' />;
            <img src={cardImg2} alt="cardimg1" className='cardimg2' />;
            <img src={cardImg3} alt="cardimg1" className='cardimg3' />;
        </div>
        <div></div>
        </>
        
    )

};
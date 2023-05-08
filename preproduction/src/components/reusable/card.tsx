import './card.scss';

type CardProps = {
    title: string,
    classId: string ,
   
  }

function Card({title,classId}: CardProps){
    return(
        <div className={`card ${classId}`}>
            <div className='card-header'>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default Card;
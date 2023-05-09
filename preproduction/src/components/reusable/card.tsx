import './card.scss';

type CardProps = {
    title: string,
    classId: string ,
    children: React.ReactNode
  }

function Card({title,classId, children}: CardProps){
    return(
        <div className={`card ${classId}`}>
            <div className='card-header'>
                <p>{title}</p>
            </div>
            {children}

        </div>
    );
}

export default Card;
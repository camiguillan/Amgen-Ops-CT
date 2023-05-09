import './line.scss';

type LineProps = {
    classId: String;
  }

function Line({classId}: LineProps){
    return(
        <div className={`line ${classId}`}></div>
    )
}
export default Line;
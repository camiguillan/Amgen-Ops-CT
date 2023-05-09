import Card from '../../components/reusable/card';
import Line from '../../components/reusable/line';
import './container.scss';

function Container() {
    return(
        <div>
            <Card title={'Current Batch Information'} classId={'cbi'}>
                <Line classId={"cbi-line"}></Line>
            </Card>
            <Card title={'Changeover Status'} classId={'cs'}>
                <p className='cs-date'>As of 03/25 12:15pm</p>
                <Line classId={"cs-line"}></Line>
            </Card>
            <Card title={'Upcoming Lots'} classId={'upl'}>
                <Line classId={"ul-line"}></Line>
            </Card>
        </div>
    );
}

export default Container;
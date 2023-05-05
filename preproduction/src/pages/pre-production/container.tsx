import Card from '../../components/reusable/card';

function Container() {
    return(
        <div>
        
            <Card title={'Current Batch Information'} classId={'cbi'} ></Card>
            <Card title={'Changeover Status'} classId={'cs'}></Card>
            <Card title={'Upcoming Lots'} classId={'upl'}></Card>
        </div>
    );
}

export default Container;
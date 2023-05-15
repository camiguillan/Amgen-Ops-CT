import Layout from '../../components/reusable/layout';
import Container from './container';
import Header from '../../components/reusable/header';
import { Button } from '@gitlab-rtsensing/component-library';

function PreProduction(){
 return(
    <Layout >
        <Header title1={"AOH"} title2={"Digital Control Tower"}/>
        <Container/>
        <Button
            label="Primary Button"
            onClick={() => {}}
            type="primary"
            />
    </Layout>

    
 );
}

export default PreProduction;
import './container.scss';
import { MetricCard, MetricCardHeader } from '@gitlab-rtsensing/component-library';


function Container() {
    return(
        <div className='container'>
            <MetricCard className="mx-2 flex-grow-1 flex-shrink-1" >
                <MetricCardHeader>
                    <p className="ops-text-dark ops-fw-bold ops-fs-4">
                    Current Batch Information
                    </p>
                </MetricCardHeader>
            </MetricCard>
            <MetricCard className="mx-2 flex-grow-2 flex-shrink-2">
                {/* <p className='cs-date'>As of 03/25 12:15pm</p> */}
                <MetricCardHeader>
                    <p className="ops-text-dark ops-fw-bold ops-fs-4">
                    Changeover Status
                    </p>
                </MetricCardHeader>
            </MetricCard>
            <MetricCard className="mx-2 flex-grow-1 flex-shrink-1">
                <MetricCardHeader>
                    <p className="ops-text-dark ops-fw-bold ops-fs-4">
                    Upcoming Lots
                    </p>
                </MetricCardHeader>
            </MetricCard>
        </div>
    );
}

export default Container;
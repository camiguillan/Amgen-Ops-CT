import React from 'react';
import './container.scss';
import { MetricCardHeader, MetricCard, TextMetric } from '@gitlab-rtsensing/component-library';


function Container() {
    return(
        <div className='container'>
            <div className='flex-grow-1'>
                <MetricCard className="mx-2" >
                    <React.Fragment key=".0">
                        <MetricCardHeader>
                            <p className="head ops-text-dark">
                            Current Batch Information
                            </p>
                        </MetricCardHeader>
                        <TextMetric
                                fields={[
                                    {
                                    alert: 'Green',
                                    label: 'Cost',
                                    name: 'cost',
                                    value: '$495 - $715M'
                                    },
                                    {
                                    alert: 'Green',
                                    label: 'Timeline',
                                    name: 'timeline',
                                    value: 'Q3 2023'
                                    },
                                    {
                                    alert: 'Yellow',
                                    label: 'Risk',
                                    name: 'risk',
                                    value: 'Construction material constraints'
                                    },
                                    {
                                    alert: 'Green',
                                    label: 'Scope',
                                    name: 'scope',
                                    value: 'No Charge'
                                    }
                                ]}
                                />
                    </React.Fragment>
                </MetricCard>
            </div>
            <div className='flex-grow-2'>
                <MetricCard className="mx-2">
                    <MetricCardHeader className='d-flex justify-content-between align-items-center'>
                        <p className="head ops-text-dark">Changeover Status</p>
                        <p className='cs-date'>As of 03/25 12:15pm</p>
                    </MetricCardHeader>
                </MetricCard>
            </div>
            <div className='flex-grow-1'>
                <MetricCard className="mx-2 ">
                    <MetricCardHeader>
                        <p className="head ops-text-dark">Upcoming Lots</p>
                    </MetricCardHeader>
                </MetricCard>
            </div>
            
        </div>
    );
}

export default Container;
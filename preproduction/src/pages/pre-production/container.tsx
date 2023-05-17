import React from 'react';
import './container.scss';
import { MetricCardHeader, MetricCard, TextMetric } from '@gitlab-rtsensing/component-library';


function Page_Container() {
    return(
        <div className='container'>
            <div className='card-container flex-grow-1'>
                <MetricCard className="mx-2 full-flex ops-px-10" >
                    <React.Fragment key=".0">
                        <MetricCardHeader>
                            <p className="ops-text-dark ops-fw-bold">
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
            <div className='card-container flex-grow-2'>
                <MetricCard className="mx-2 full-flex ops-px-10">
                    <React.Fragment key=".0">
                        <MetricCardHeader className='d-flex justify-content-between align-items-center'>
                            <p className="ops-text-dark ops-fw-bold">Changeover Status</p>
                            <p className='ops-text-dark ops-fw-bold subtitle'>As of 03/25 12:15pm</p>
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
            <div className='card-container flex-grow-1'>
                <MetricCard className="mx-2 full-flex ops-px-10">
                    <React.Fragment key=".0">
                        <MetricCardHeader>
                            <p className="ops-text-dark ops-fw-bold">Upcoming Lots</p>
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
            
        </div>
    );
}

export default Page_Container;
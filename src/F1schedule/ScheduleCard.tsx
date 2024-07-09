import React from 'react';
import styled from 'styled-components';
import { ScheduleItem } from '../F1schedule/schedule';

interface Props {
    item: ScheduleItem;
}

const Card = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    margin: 8px;
`;

const TrackImage = styled.div`
    background-color: #f0f0f0;
    height: 150px;
    margin: 16px 0;
`;

const ScheduleCard: React.FC<Props> = ({ item }) => {
    return (
        <Card>
        <h2>Round {item.round}</h2>
        <p>{item.dateRange}</p>
        <h3>{item.country}</h3>
        <p>{item.eventName}</p>
        <TrackImage />
        </Card>
    );
    };

export default ScheduleCard;


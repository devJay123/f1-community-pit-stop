import React from 'react';
import styled from 'styled-components';
import ScheduleCard from './ScheduleCard';
import { schedules } from '../F1schedule/schedule';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
    padding: 16px;
`;

const ScheduleList: React.FC = () => {
    return (
        <Grid>
        {schedules.map((item) => (
            <ScheduleCard key={item.round} item={item} />
        ))}
        </Grid>
    );
};

export default ScheduleList;

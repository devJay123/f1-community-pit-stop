import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
    width: 90%;
    margin: auto;
    padding: 20px 0;
    border: 2px solid black;
    border-radius: 10px;
`;

const StyledSlider = styled(Slider)`
    .slick-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.3s ease-in-out;
    }

    .slick-center {
        transform: scale(1.2);
    }
`;

const Card = styled.div`
    width: 200px;
    height: 300px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 17px;
    text-align: center;
    margin: 1px;
    padding: 10px;
`;

interface ScheduleItem {
    round: number;
    date: string;
    country: string;
    title: string;
}

interface SliderComponentProps {
    schedule: ScheduleItem[];
}

const TrackImage = styled.div`
    background-color: #f0f0f0;
    height: 150px;
    margin: 16px 0;
`;

const SliderComponent: React.FC<SliderComponentProps> = ({ schedule }) => {
    const settings = {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        speed: 500,
        arrows: true,
        dots: true,
    };

    return (
        <Container>
            <div className='header'>경기일정</div>
        <StyledSlider {...settings}>
            {schedule.map((item, index) => (
            <Card key={index}>
                <div className='mt-5'>
                <h3>Round {item.round}</h3>
                <p>{item.date}</p>
                <p>{item.country}</p>
                <p>{item.title}</p>
                <TrackImage/>
                </div>
            </Card>
            ))}
        </StyledSlider>
        </Container>
    );
};

export default SliderComponent;

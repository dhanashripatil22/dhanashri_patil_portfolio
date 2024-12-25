import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: #171721;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
  flex-grow: 1; /* Allows Details to take available space */
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #b1b2b3;
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: #b1b2b3;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 300;
  color: #b1b2b3;
  overflow: hidden;
  margin-top: 6px;
  font-size: 14px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  flex-grow: 1; /* Allows Members to take available space */
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: #FFFFFF;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid #171721;
`;

const Button = styled.a`
  color: #854CE6;
  text-decoration: none;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  margin-top: auto; /* Pushes the button to the bottom */
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} />
      <Tags></Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.member?.map((member) => (
          <Avatar src={member.img} />
        ))}
      </Members>
      <Button href={project.github} target="_blank">
        View Code
      </Button>
    </Card>
  );
};

export default ProjectCard;

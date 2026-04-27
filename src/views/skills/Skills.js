import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// skills
import { skills } from "./db-skills";

import "./skills.css";

const glassStyle = {
    borderRadius: '20px',
    background: 'rgba(200, 200, 200, 0.15)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.2)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    color: '#fff'
};

const Skills = () => {
    return (
        <div className="pt-3 pb-3" id="skills">
            <h1 className="text-center font-details-b pb-4 text-white">TECH SKILLS</h1>
            <CardDeck>
                <div>
                    <Card className="focus mb-2" style={glassStyle}>
                        <Card.Body>
                            <Card.Title className="text-center  card-title text-white" >Version Control</Card.Title>
                            <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {skills.versionControl.map((skill, index) => (
                                    <span key={index}>
                                        <a className="text-white text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                            <i className={`${skill.iconClass} project-icon-font m-1`}></i> {skill.skillName}
                                        </a>
                                    </span>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="focus mb-2" style={glassStyle}>
                        <Card.Body>
                            <Card.Title className="text-center  card-title text-white">Database</Card.Title>
                            <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {skills.databases.map((skill, index) => (
                                    <span key={index}>
                                        <a className="text-white text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                            <i className={`${skill.iconClass} project-icon-font m-1`}></i> {skill.skillName}
                                        </a>
                                    </span>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <Card className="focus mb-2" style={glassStyle}>
                        <Card.Body>
                            <Card.Title className="text-center  card-title text-white">Backend</Card.Title>
                            <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {skills.backend.map((skill, index) => (
                                    <span key={index}>
                                        <a className="text-white text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                            <i className={`${skill.iconClass} project-icon-font m-1`}></i> {skill.skillName}
                                        </a>
                                    </span>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className="focus mb-2" style={glassStyle}>
                        <Card.Body>
                            <Card.Title className="text-center  card-title text-white">Cloud & DevOps</Card.Title>
                            <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {skills.hostingPlatforms.map((skill, index) => (
                                    <span key={index}>
                                        <a className="text-white text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                            <i className={`${skill.iconClass} project-icon-font m-1`}></i> {skill.skillName}
                                        </a>
                                    </span>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <Card className="focus mb-2" style={glassStyle}>
                        <Card.Body>
                            <Card.Title className="text-center  card-title text-white">Frontend & UI</Card.Title>
                            <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {skills.frontend.map((skill, index) => (
                                    <span key={index}>
                                        <a className="text-white text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                            <i className={`${skill.iconClass} project-icon-font m-1`}></i> {skill.skillName}
                                        </a>
                                    </span>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </CardDeck>
        </div>
    );
};

export default Skills;
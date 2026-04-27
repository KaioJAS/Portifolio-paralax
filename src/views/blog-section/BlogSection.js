import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Tilt from 'react-parallax-tilt';
import "./BlogSection.css";

const glassStyle = {
  borderRadius: '20px',
  background: 'rgba(200, 200, 200, 0.15)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.2)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  color: '#fff'
};

const BlogSection = () => {
    return (
        <div id="blogs">
            <Container>
                <h1 className="text-center font-details-b pb-4 text-white">Medium Blogs</h1>
                <CardDeck>
                    {/* Blog 1 */}
                    <Tilt>
                        <Card className="focus mb-2" style={glassStyle}>
                            <Card.Body>
                                <Card.Title className="text-center card-title text-white">What are the differences between State and Props in React?</Card.Title>
                                <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                                <Card.Text className="card-text d-flex justify-content-start flex-column text-center">
                                    <a className="text-white text-decoration-none" href="https://medium.com/javascript-in-plain-english/what-are-the-differences-between-state-and-props-in-react-74f21e39b172" target="_blank" rel="noopener noreferrer">
                                        How you use props and state, and what each of them is?
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Tilt>

                    {/* Blog 2 */}
                    <Tilt>
                        <Card className="focus mb-2" style={glassStyle}>
                            <Card.Body>
                                <Card.Title className="text-center card-title text-white">Why I JavaScript’s Destructuring So Useful</Card.Title>
                                <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                                <Card.Text className="card-text d-flex justify-content-start flex-column text-center">
                                    <a className="text-white text-decoration-none" href="https://medium.com/better-programming/why-i-find-javascripts-destructuring-so-useful-7be41d9ba609" target="_blank" rel="noopener noreferrer">
                                        Array and object destructuring
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Tilt>

                    {/* Blog 3 */}
                    <Tilt>
                        <Card className="focus mb-2" style={glassStyle}>
                            <Card.Body>
                                <Card.Title className="text-center card-title text-white">Why I Love The Spread Operator</Card.Title>
                                <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                                <Card.Text className="card-text d-flex justify-content-start flex-column text-center">
                                    <a className="text-white text-decoration-none" href="https://medium.com/javascript-in-plain-english/why-i-love-the-spread-operator-58f396dbbb78" target="_blank" rel="noopener noreferrer">
                                        The Most Useful JavaScript Feature of ES6
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Tilt>

                    {/* Blog 4 */}
                    <Tilt>
                        <Card className="focus mb-2" style={glassStyle}>
                            <Card.Body>
                                <Card.Title className="text-center card-title text-white">Make Eye-Catching JavaScript Popups with ‘Sweet Alert’</Card.Title>
                                <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                                <Card.Text className="card-text d-flex justify-content-start flex-column text-center">
                                    <a className="text-white text-decoration-none" href="https://medium.com/javascript-in-plain-english/make-eye-catching-javascript-popups-with-sweet-alert-470e05ed026d" target="_blank" rel="noopener noreferrer">
                                        An Attractive UI You can better alerts with
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Tilt>

                </CardDeck>
            </Container>
        </div>
    )
}

export default BlogSection;
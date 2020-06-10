import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
var Latex = require('react-latex');


export default () => {

    return (
    <div id="how-to">
        <h2>Python tutorial</h2>
        <div>
            To run this program, you will need to have Python installed (I use <a href="https://www.anaconda.com/download/">Anaconda</a>).
            This tutorial was written for Python version 3.
        </div>
        <div>
            Prerequisites: trigonometry, introductory mechanics. Prior coding experience helpful but not required.
        </div>
        <div>
            <u>How to make a planetary orbit simulator</u>
        </div>
        <div>
            Before we begin coding, let's revisit some of our fundamental Newtonian mechanics equations (those are all we will need in order to create our simulation).
            <Container fluid>
                <Row>
                    <Col><Latex>{'$$d=(p_x^2+p_y^2)^\\text{\\char"00BD}$$'}</Latex></Col>
                    <Col><Latex>{'$$d$$= distance between radii'}</Latex></Col>
                </Row>
                <Row>
                    <Col><Latex>{'$$\\Delta p = \\frac{1}{2}at^2+v_0t$$'}</Latex></Col>
                    <Col><Latex>{'$$p$$= position (on arbitrary axis)'}</Latex></Col>
                </Row>
                <Row>
                    <Col><Latex>{'$$\\Delta v = at$$'}</Latex></Col>
                    <Col><Latex>{'$$a$$= acceleration'}</Latex></Col>
                    <Col><Latex>{'$$t$$= time'}</Latex></Col>
                    <Col><Latex>{'$$m$$= mass'}</Latex></Col>
                </Row>
                <Row>
                    <Col><Latex>{'$$\\Delta v^2 = 2a\\Delta p$$'}</Latex></Col>
                    <Col><Latex>{'$$v$$= velocity'}</Latex></Col>
                    <Col><Latex>{'$$F$$= force'}</Latex></Col>
                </Row>
                <Row>
                    <Col><Latex>{'$$F=ma$$'}</Latex></Col>
                </Row>
                <Row>
                    <Col><Latex>{'$$F_{grav}=-GMm/d^2$$; negative because it\'s an attractive force'}</Latex></Col>
                </Row>
                <Row>
                    <Col><Latex>{'Note: $$G=6.67\\cdot 10^{-11} \\frac{Nm^2}{kg^2}$$'}</Latex></Col>
                </Row>
            </Container>
        </div>

        {/* <Latex displayMode={true}>$$(3\times 4) \div (5-3)$$</Latex> */}

    </div>
    );
};
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/profile.svg";
import Image from "react-bootstrap/Image";

const glassStyle = {
  borderRadius: '20px',
  background: 'rgba(200, 200, 200, 0.15)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.2)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  color: '#fff'
};

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details-b pb-2">SOBRE MIM</h1>
        <Container>
          <Row className="pb-5 align-items-center">
            <Col xs={12} md={5}>
              <Row className="justify-content-center mb-4 mr-2">
                <Image className="profile justify-content-end" alt="profile" src={Profile} />
              </Row>
            </Col>
            
            {/* Added an offset-md-1 to create pure whitespace between the art and the glass card */}
            <Col xs={12} md={{ span: 6, offset: 1 }}>
              <div 
                className="p-4 rounded text-white" 
                style={{
                  ...glassStyle,
                  textAlign: 'justify',
                  lineHeight: '1.6'
                }}
              >
                Desenvolvedor Full Stack com aproximadamente 4 anos de experiência no desenvolvimento de aplicações web e plataformas SaaS, atuando na construção, evolução e otimização de sistemas escaláveis. Experiência sólida com PHP, Laravel, Vue.js, JavaScript e bancos de dados relacionais, participando de todo o ciclo de desenvolvimento de software. Forte atuação na implementação de novas funcionalidades, melhoria de performance e refatoração de código, sempre focado em escalabilidade e manutenção do sistema.
                <br /><br />
                Possuo facilidade em compreender requisitos de produto e traduzi-los em soluções técnicas eficientes, colaborando com times multidisciplinares para evolução contínua das aplicações. Experiência com arquitetura MVC, APIs, integrações e boas práticas de versionamento com Git.
                <br /><br />
                Perfil analítico, orientado a resultados e melhoria contínua. Busco constantemente evoluir tecnicamente e contribuir com soluções inovadoras que gerem impacto real no negócio.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
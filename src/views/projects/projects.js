import React from "react";
import { Timeline, Events, ImageEvent, createTheme, themes } from "@merc/react-timeline";

//Css file
import './project.css'


// Custom timline theme
const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    padding: '0',
  },
  date: {
    backgroundColor: '#ec4b4f',
  },
  marker: {
    borderColor: '#070d59',
  },
  timelineTrack: {
    backgroundColor: '#ec4b4f',
  },
});

const glassStyle = {
  borderRadius: '20px',
  background: 'rgba(200, 200, 200, 0.15)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.2)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  color: '#fff'
};

const ProjectTimeline = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3" style={{ color: '#fff' }}>EXPERIÊNCIA PROFISSIONAL</h1>
      <Timeline theme={customTheme}>
        <Events>
          {/* Runyme */}
          <ImageEvent
            date="02/2023 – 09/2025"
            className="text-center"
          >
            <div
              style={{
                ...glassStyle,
                padding: '20px',
                borderRadius: '20px',
                textAlign: 'left'
              }}
            >
              <h5 className="text-white text-center mb-3">Desenvolvedor Full Stack - Runyme</h5>
              
              <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />

              <div className="text-white">
                <ul className="list-styles pt-1">
                  <li>Desenvolvimento e evolução de plataforma SaaS voltada ao setor contábil, utilizando Laravel e Vue.js;</li>
                  <li>Implementação de funcionalidades complexas de análise tributária, com processamento de dados históricos;</li>
                  <li>Desenvolvimento de simulador de regimes tributários, permitindo projeções fiscais e tomada de decisão estratégica;</li>
                  <li>Otimização de performance da aplicação e melhoria da arquitetura do sistema;</li>
                  <li>Colaboração com equipes de produto e tecnologia na modelagem de soluções escaláveis e orientadas a negócio.</li>
                </ul>
              </div>

              <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />

              <div className="text-center">
                <strong className="text-white d-block mb-2">Tech stack:</strong>
                <div className="d-flex justify-content-center flex-wrap align-items-center">
                  <i className="devicon-php-plain colored project-icon-font" title="PHP"></i>
                  <i className="devicon-laravel-plain colored project-icon-font" title="Laravel"></i>
                  <i className="devicon-vuejs-plain colored project-icon-font" title="Vue.js"></i>
                  <i className="devicon-mysql-plain colored project-icon-font" title="MySQL"></i>
                </div>
              </div>
            </div>
          </ImageEvent>

          {/* Certik Web */}
          <ImageEvent
            date="09/2022 – 05/2023"
            className="text-center"
          >
            <div
              style={{
                ...glassStyle,
                padding: '20px',
                borderRadius: '20px',
                textAlign: 'left'
              }}
            >
              <h5 className="text-white text-center mb-3">Desenvolvedor Full Stack - Certik Web</h5>

              <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />

              <div className="text-white">
                <ul className="list-styles pt-1">
                  <li>Desenvolvimento de aplicações web utilizando Laravel e Vue.js;</li>
                  <li>Implementação de novas funcionalidades e melhorias estruturais no sistema;</li>
                  <li>Refatoração de código visando melhor desempenho, organização e escalabilidade da aplicação;</li>
                  <li>Integração entre frontend e backend garantindo comunicação eficiente via APIs;</li>
                  <li>Participação no ciclo completo de desenvolvimento de software, desde análise até entrega de funcionalidades.</li>
                </ul>
              </div>

              <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />

              <div className="text-center">
                <strong className="text-white d-block mb-2">Tech stack:</strong>
                <div className="d-flex justify-content-center flex-wrap align-items-center">
                  <i className="devicon-php-plain colored project-icon-font" title="PHP"></i>
                  <i className="devicon-laravel-plain colored project-icon-font" title="Laravel"></i>
                  <i className="devicon-vuejs-plain colored project-icon-font" title="Vue.js"></i>
                </div>
              </div>
            </div>
          </ImageEvent>

          {/* H3X */}
          <ImageEvent
            date="03/2022 – 08/2022"
            className="text-center"
          >
            <div
              style={{
                ...glassStyle,
                padding: '20px',
                borderRadius: '20px',
                textAlign: 'left'
              }}
            >
              <h5 className="text-white text-center mb-3">Desenvolvedor Web - H3X</h5>

              <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />

              <div className="text-white">
                <ul className="list-styles pt-1">
                  <li>Desenvolvimento de sites institucionais, e-commerces e sistemas web personalizados;</li>
                  <li>Implementação de soluções utilizando PHP, CodeIgniter, HTML, CSS e JavaScript;</li>
                  <li>Criação e manutenção de funcionalidades para diferentes segmentos de clientes;</li>
                  <li>Estruturação de aplicações seguindo padrões MVC e boas práticas de desenvolvimento web;</li>
                  <li>Suporte técnico e evolução de projetos digitais existentes.</li>
                </ul>
              </div>

              <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />

              <div className="text-center">
                <strong className="text-white d-block mb-2">Tech stack:</strong>
                <div className="d-flex justify-content-center flex-wrap align-items-center">
                  <i className="devicon-php-plain colored project-icon-font" title="PHP"></i>
                  <i className="devicon-codeigniter-plain colored project-icon-font" title="CodeIgniter"></i>
                  <i className="devicon-html5-plain colored project-icon-font" title="HTML5"></i>
                  <i className="devicon-css3-plain colored project-icon-font" title="CSS3"></i>
                  <i className="devicon-javascript-plain colored project-icon-font" title="JavaScript"></i>
                </div>
              </div>
            </div>
          </ImageEvent>

        </Events>
      </Timeline>
    </div >
  )
}

export default ProjectTimeline
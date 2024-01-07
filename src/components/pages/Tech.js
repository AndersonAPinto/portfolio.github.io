import React, { useState } from "react";
import './pages.css'

const PageTech = () => {
   
    return (
        <div className="containerPages">
            <div className="text">
                <h1>Tecnologias</h1>
                <p>As tecnologias utilizadas para desenvolvimento desse Portfólio foram:
                    HTML, CSS, JavaScript e React.
                </p>
            </div>
            <div className="iconstech">
                <div className="aligntextbtns">
                    <button><i class="fa-brands fa-html5" style={{ fontSize: '100px', color: '#003049' }}></i></button>
                    <div className="textbtn">&nbsp;HTML, usado para criar e estruturar páginas na web, definindo o conteúdo e a estrutura de documentos web.</div>
                    <button><i class="fa-brands fa-css3-alt" style={{ fontSize: '100px', color: '#003049' }}></i></button>
                    <div className="textbtn">&nbsp;CSS, usado para descrever a apresentação visual, incluindo layout, cores e fontes.</div>

                </div>
            </div>
            <div className="iconstech_">
                <div  className="aligntextbtns">
                    <button><i class="fa-brands fa-square-js" style={{ fontSize: '100px', color: '#003049' }}></i></button>
                    <div className="textbtn">&nbsp;JavaScript, linguagem de programação versátil e poderosa usada para adicionar lógicas e funcionalidades.</div>

                    <button><i class="fa-brands fa-react" style={{ fontSize: '100px', color: '#003049' }}></i></button>
                    <div className="textbtn">&nbsp;React, biblioteca JavaScript usado para construir interfaces de usuário, como Single Page Applications (SPA).</div>

                </div>
            </div>
        </div>



    );
};

export default PageTech;
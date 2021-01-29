import React from 'react';
import styled from 'styled-components';
import IconDev from '../../icon/iconDev';
import IconLogro from '../../icon/iconLogro';
import IconDesign from '../../icon/iconDesign';
import IconAnimate from '../../icon/iconAnimate';

const DivInfo = styled.div`
    text-align: left;
`;

const DivSection = styled.div`
    margin: 40px 0;

    & p{
        font-size: 14px;
    }
`;

const DivTitle = styled.div`
    display: flex;
    justify-content: left;
    text-align: center;
    margin-bottom: 10px;

    & h4{
        margin: auto 0;
    }
`;

const Information = ({checked}) => {
    return ( 
        <DivInfo>
            <DivSection>
                <DivTitle>
                    <IconLogro /> <h4 className={checked ? 'color-light' : 'color-dark'}>Estudios Universitarios</h4>
                </DivTitle>
                <p className={checked ? 'color-light' : 'color-dark'}>Estudiante de la carrera de Informática Empresarial de la Universidad de Costa Rica.</p>
            </DivSection>
            
            
            <DivSection>
                <DivTitle>
                    <IconDesign /> <h4 className={checked ? 'color-light' : 'color-dark'}>Diseño UX & UI</h4>
                </DivTitle>
                <p className={checked ? 'color-light' : 'color-dark'}>El análisis para desarrollo web para una excelente usabilidad, creación de ideas y la satisfacción del usuario.</p>
            </DivSection>
            
            <DivSection>
                <DivTitle>
                    <IconAnimate /> <h4 className={checked ? 'color-light' : 'color-dark'}>Animación</h4>
                </DivTitle>
                <p className={checked ? 'color-light' : 'color-dark'}>Animaciones y movimientos de componentes para el desarrollo web.</p>
            </DivSection>
            
            <DivSection>
                <DivTitle>
                    <IconDev /> <h4 className={checked ? 'color-light' : 'color-dark'}>Desarrollo</h4>
                </DivTitle>
                <p className={checked ? 'color-light' : 'color-dark'}>Conocimientos de diferentes framework en el desarrollo en backend y frontend.</p>
            </DivSection>
        </DivInfo>
     );
}
 
export default Information;
import React, {Fragment, useContext} from 'react'
import themeContext from "../../context/themes/themeContext";
import Container from '@material-ui/core/Container';
import Title from '../title';
import '../../../src/style/letter.css';
import DetailSkill from './detail';


const Skill = () => {
    
    const themesContext = useContext(themeContext);
    const { checked } = themesContext;

    const skills = [ 
        {id: 1, title: 'Frontend Dev', image: 'Frontend', subtitles: [
            {id: 1, name: 'Básico', list: ['HTML', 'CSS', 'JavaScript'] },
            {id: 2, name: 'Framework/Librery', list: ['React', 'Angular', 'JQuery']},
            {id: 3, name: 'Styles', list: ['Bootstrap', 'Materialize', 'Angular Material', 'Material UI', 'Styled Components']},
        ]},
        {id: 2, title: 'Backend Dev', image: 'Backend', subtitles: [
            {id: 1, name: 'Tecnología', list: ['PHP','Laravel', 'Entity Framework', 'ASP .net core', 'WinForms']},
        ]},
        {id: 3, title: 'Base de Datos', image: 'DataBase', subtitles: [
            {id: 1, name: 'Básico', list: ['Oracle', 'MySQL', 'SQL Server']}
        ]},
        {id: 4, title: 'Móvil Dev', image: 'App_Mobile', subtitles: [
            {id: 1, name: 'Android/IOS', list: ['Ionic ', 'Mobile First']}
        ]},
        {id: 5, title: 'Otros', image: 'Other', subtitles: [
            {id: 1, name: 'Lenguaje', list: ['Java', 'C#']},
            {id: 2, name: 'Repositorio', list: ['GitHub']},
            {id: 3, name: 'Design', list: ['Figma','Adobe Xd', 'Adobe Illustrator']},
            {id: 4, name: 'CMS', list: ['Wordpress']}
        ]},
    ];

    return ( 
        <Fragment>
            <Title 
                mensage1='Habilidades'
                mensage2=''
            />
            <Container fixed>
                
                {skills.map(skill => (
                    <DetailSkill 
                        key={skill.id}
                        checked={checked}
                        skill={skill}
                    />
                ))}

            </Container>
        </Fragment>
     );
}
 
export default Skill;
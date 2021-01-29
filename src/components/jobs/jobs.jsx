import React, {Fragment} from 'react';
import Detail from './detail';
import Container from '@material-ui/core/Container';
import Title from '../title';
import '../../style/jobs.css';


const Jobs = () => {

    const projects = [ 
        {
            id: 1, title: 'ZenSoft', image: 'zensoft', 
            description: 'Trabajo universitario de un sistema de escritorio desarrollado para control de inventario del CEN-CINAI.', 
            groupNumber: 5, enlace: 'https://github.com/JRuiz28/zensoft',
            context: [ 'C#','.NET Framework', 'Entity Framework', 'SQL Server']
        },
        {
            id: 2, title: 'Registro Cuidame', image: 'registrocuidame', 
            description: 'Sistema WEB desarrollado para el control del COVID-19 en Barranquilla, Colombia.', 
            groupNumber: 2, enlace: 'https://github.com/JRuiz28/RegistroCuidame',
            context: [ 'Angular','Angular Material', 'PHP', 'Laravel']
        },
        {
            id: 3, title: 'Monso', image: 'Monso', 
            description: 'Sistema WEB desarrollado para la venta de producto de belleza personal, Monso Cosmetica Natural.', 
            groupNumber: 3, enlace: 'https://github.com/JRuiz28/MonsoProject',
            context: [ 'HTML','Bootstrap', 'SCSS', 'PHP', 'Laravel']
        },
    ];

    return ( 
        <Fragment>
            <Title 
                mensage1='Proyectos'
                mensage2=''
            />
            <Container fixed>
                <div className='container'>

                    {projects.map( project => (
                        <Detail 
                            key={project.id}
                            project={project}
                            image={project.image}
                        />
                    ))}
                    
                </div>
            </Container>
        </Fragment>
     );
}
 
export default Jobs;
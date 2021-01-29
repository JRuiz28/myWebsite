import React, { useContext } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import themeContext from "../../context/themes/themeContext";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import '../../../src/style/letter.css';

const DivImage = styled.div`
    margin: auto;
    text-align: center;
    
`;

const DivInfo = styled.div`
    padding: 60px 0;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-bottom: 3px solid rgba(128, 128, 128, 0.493);

    @media(min-width: 960px){
        margin-bottom: 0px;
        border-bottom: none;
        padding: 60px 0;
    }
`;

const DivTitle = styled.div`
    width: auto;
    @media(max-width: 960px){
        margin-bottom:15px;
    }
`;

const DivLeng = styled.div`
    display: flex;
    flex-wrap: wrap;
    width:100%;
    margin-bottom:8px;

    & h6{
        margin: 0px 5px;
    }
`;

const ButtonSalir = styled.button`
    padding: 12px 14px;
    font-size: 14px;
    border-radius: 4px;
    border: none;
    display: flex;
    justify-content:center;
    align-items: center;
    background: #ffcdd2;
    margin-bottom: 10px;
`;



  function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }


const Detail = ({project, image}) => {


    // Componentes de Model
    const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: (document.body.scrollWidth > 768) ? 800 : 300 ,
          height: (document.body.scrollWidth > 768) ? 460 : 200,
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
      }));
      
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {title, description, groupNumber, enlace, context} = project;
    
    const themesContext = useContext(themeContext);
    const { checked } = themesContext;

    const img = `..\\img\\${image}-mockup.png`;
    const img2 = `..\\img\\${image}.png`;

    
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <ButtonSalir onClick={() => handleClose()}> <ArrowBackIosIcon></ArrowBackIosIcon>  Volver</ButtonSalir>
            <img className='img-grande' src={img2} alt="img"/>
        </div>
    );

    return ( 
        <>
        <DivImage>
            <div>
            <img className='img' onClick={handleOpen} src={img} alt="img"/>
            <Modal
                open={open}
                onClose={handleClose}
            >
                {body}
            </Modal>
            </div>


        </DivImage>
        <DivInfo>
            <DivTitle>
             <h1 className={checked ? 'color-light' : 'color-dark'}>{title}</h1>
            </DivTitle>

            <DivLeng>

                {context.map(lenguage => (
                    <h6 
                        key={lenguage}
                        className='color-dark-title'
                    >
                        {lenguage}
                    </h6>
                ))}
            </DivLeng>

            <p className={checked ? 'color-light' : 'color-dark'}> 
            {description}
            </p>

            <br />

            <p className={checked ? 'color-light' : 'color-dark'}> 
            Grupo de trabajo: {groupNumber} desarrolladores.
            </p>


            <a 
                href={enlace}
                className='link-git'
                target='_blank'
                rel="noreferrer"
            >
                Enlace git
            </a>
        </DivInfo>
        </>
     );
}
 
export default Detail;
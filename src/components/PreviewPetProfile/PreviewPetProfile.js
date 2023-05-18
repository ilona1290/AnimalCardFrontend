import React from "react";
import {useNavigate } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import "./PreviewPetProfile.css";

const theme = createTheme({
    typography: {
      // Tell MUI what's the font-size on the html element is.
      htmlFontSize: 10,
    },
  });

function PreviewPetProfile({handleShowPreview, pet}){
    let navigate = useNavigate();
    const animateButton = (e) => {
        e.target.innerText = ""
        e.preventDefault();
        //reset animation
        e.target.classList.remove('animate');
        
        e.target.classList.add('animate');
        
        e.target.classList.add('animate');
        
        setTimeout(function(){
            navigate("/vetMenu")
          }, 3200);
        setTimeout(function(){
          e.target.classList.remove('animate');
        },4000);
        
      };
    console.log(pet)
    return(
        <div style={{width: "100%", paddingTop: "10em", display: "flex"}}>
            <button className="header__buttons__end__btn confirm__btn success" style={{position: "absolute", right: "20em", top: "3.5em", zIndex: "1000000"}} onClick={animateButton}>
                Zapisz
            </button>
            <button className="header__buttons__end__btn" id="backPreview" style={{position: "absolute", right: "2em", top: "3.5em"}} onClick={handleShowPreview}>
                <p>Chcę jeszcze coś zmienić</p>
            </button>
            <div className="pet__container">
            <div className="pet__img__container">
                <img className="pet__img img__preview" id="output" src={pet.photo} alt="PetProfilePicture"></img>
            </div>
            <div className="pet__form">
            <div className="pet__firstColumn">
                <ThemeProvider theme={theme}>
                    <Typography component={'span'} variant={'body2'}>
                        <div className="pet__info__header">Numer indentyfikacyjny</div>
                        <div className="pet__form__info">{pet.identityNumber}</div>
                        <div className="pet__info__header">Imię</div>
                        <div className="pet__form__info">{pet.name}</div>
                        <div className="pet__info__header">Płeć</div>
                        <div className="pet__form__info">{pet.sex}</div>
                        <div className="pet__info__header">Data urodzenia</div>
                        <div className="pet__form__info">{pet.dateBirth}</div>
                        <div className="pet__info__header">Rasa</div>
                        <div className="pet__form__info">{pet.breed}</div>
                        <div className="pet__info__header">Barwa</div>
                        <div className="pet__form__info">{pet.color}</div>
                        <div className="pet__info__header">Rodzaj sierści</div>
                        <div className="pet__form__info">{pet.hairType}</div>
                        </Typography>
                </ThemeProvider>
                        </div>
                        <div className="pet__secondColumn">
                            
                        <ThemeProvider theme={theme}>
                        <Typography component={'span'} variant={'body2'}>
                        <div className="pet__info__header">Znaki szczególne</div>
                        <div className="pet__form__info">{pet.trademarks}</div>
                        <div className="pet__info__header">Ewentualne uczulenia</div>
                        <div className="pet__form__info">{pet.allergies}</div>
                        <div className="pet__info__header">Informacje dodatkowe</div>
                        <div className="pet__form__info">{pet.extraInfo}</div>
                    </Typography>
                </ThemeProvider></div>
            </div>
            </div>
        </div>
    )
}

export default PreviewPetProfile;
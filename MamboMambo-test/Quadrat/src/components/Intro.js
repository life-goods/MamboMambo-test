import React from "react";
import '../sass/main.scss';



export const Intro = () => {

    return (
        <div>
            <div class="intro__title">
                <p className="title title__black">Notre approche</p>
                <p className="title title__blue">pragmatique et éprouvée</p>
            </div>
            <div className="intro__text">
                <p>Elle s’appuie sur les fondements de la recherche en leadership, mais est renforcée par les apprentissages et des observations ‘terrain’ effectuées par nos consultants depuis plus de 25 ans, auprès de gestionnaires, d’exécutifs et d’administrateurs de haut calibre. 
                    Elle vise à libérer le potentiel managérial du leader en alignant ses pratiques sur le style de leader authentique qu’il/elle souhaite devenir.
                </p>
            </div>
        </div>
    );
}
export default Intro

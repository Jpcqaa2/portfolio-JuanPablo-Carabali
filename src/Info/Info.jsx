//Componente de información que contiene mi nombre y mi biografia para mostrar junto a los modelos 3
import './Info.css';

const Info = ({name, bio}) => {
    
   

    return (
        <div className='info-container'>
            <div className='card-info'>
                <h1 className='name'>{name}</h1>
                <span className='bio'>{bio}</span>
            </div>
        </div>

            )
    }

        export default Info;
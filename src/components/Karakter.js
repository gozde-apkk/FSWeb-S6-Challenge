

// Karakter bileşeniniz buraya gelecek
// Karakter bileşeniniz buraya gelecek
import DropDown from "./DropDown";
import Film from "./Film";

const Karakter = ({chars,films}) => {

  return(
      <div>
        <h1>Characters</h1>
        {chars.map((char,i) => 
           <DropDown key={i} title={char.name}>
                <p>Name: {char.name}</p>
                <p>Height:{char.height}</p>
                <p>Mass:{char.mass}</p>
                <p>Hair Color:{char.hair_color}</p>
                <p>Skin Color:{char.skin_color}</p>
                <p>Eye Color: {char.eye_color}</p>
                <p>Birth Year:{char.birth_year}</p>
                <p>Gender: {char.gender},</p>
                <p>Films: </p>
                <Film char={char} films={films} />
            </DropDown>
         )
        }
      </div>
    );
  
  }
export default Karakter;
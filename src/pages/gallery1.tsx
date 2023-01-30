import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css'
import data from 'src/info.json';

const Card = ({variation}) => {

  const styleOn = {
    color: 'white',
    borderColor: 'white',
    backgroundColor: 'pink',
    text: "Adopt"
  }
  const styleOff = {
    color: 'pink',
    borderColor: 'pink',
    backgroundColor: 'white',
    text: "Unadopt"
 }
  const id = variation.name
  const horseName = variation.name
  const horsePicture = variation.photo

 useEffect(() => {
  setStyle
  }, [])
 const [style, setStyle] = useState(styleOn)


  return (
    <div className={styles.cardBox}>
            <div key = {id}>
              <div className = {styles.cardNameContainer}>
                <p className = {styles.cardName}> {horseName} </p>
              </div>
              <button 
              onClick= {() => {
                if (style.color == 'white') {
                  setStyle(styleOff)
                } else if (style.color == 'pink') {
                  setStyle(styleOn)
                }
              
              }}
             
              className={styles.cardButton} style={{backgroundColor: style.backgroundColor, borderColor: style.borderColor}} 
              > 
          
                <p className={styles.cardButtonText}  style={{color: style.color}} > {style.text}</p>
              </button>
              <img className={styles.cardImage} src = {horsePicture}></img>
          </div>
      </div>
  )
}

const Home = () => {
  const [keyword, setKeyword] = useState([""]);
  const [allHorses, setHorses] = useState(data);
  const [buttonColor, setbuttonColor] = useState("pink");
  const [filterHorses, setFilteredHorses] = useState([""].concat(data))
  ;

  useEffect(() => {
     console.log('Keyword:', keyword);
     console.log('Filtered', filterHorses);
   }, [keyword, filterHorses])

  const handleChange = (event) => {
    console.log(event)
    var holder = [event]
    for (let i = 0; i < allHorses.length; i++) {
      if (allHorses[i].name.toLowerCase().includes(event.toLowerCase()))
      holder.push(allHorses[i]);
    };
    setFilteredHorses(holder)    
  }

  const changeColor = (self) => {
  }

  

  
  return (
    
    <div className={styles.galleryBackground}>
      <div className = {styles.searchBarContainer}>
        <textarea
        className = {styles.searchBar}
        placeholder="Search..."
        onChange={(e) => {handleChange(e.target.value)}}
        />
      </div>
      <div className = {styles.cardsContainer}>

        {filterHorses.slice(1).map((horse) => (
            <Card variation={horse}/>
        ))}

      </div>

    </div>
)
}

export default Home;
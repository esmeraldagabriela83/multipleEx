import React , {useState , useEffect} from "react";
import '../App.css';

//https://rapidapi.com/wavesong/api/doppelme-avatars/

function DoppelAvatars(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


  //-------------------------

const [glasses , setGlasses]=useState([]);
  //-------------------------

useEffect(() =>{
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '08b5381c26msh054d91de7c0c3e5p12d313jsn5f7569645072',
    //         'X-RapidAPI-Host': 'doppelme-avatars.p.rapidapi.com'
    //     }
    // };
    
    // fetch('https://doppelme-avatars.p.rapidapi.com/assets/1101/eye', options)
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log("doppelAvatars response : " , response);
    //         console.log("doppelAvatars response.asset_ids : " , response.asset_ids);
    //         console.log("doppelAvatars response.asset_ids.length : " , response.asset_ids.length);

    //         setGlasses(response.asset_ids);
    //     })
    //     .catch(err => console.error(err));
} , []);

  //-------------------------

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

    <article className="container">

        <table class="table table-striped">

            <thead className="thead-dark">
                                <tr className="text-primary" style={{fontWeight:"bold"}}>
                                    <td>ID</td>
                                    <td>Type</td>
                                    <td>Description</td>
                                    <td>Colorable</td>
                                    <td>ThumbnailSrc</td>
                                </tr>
            </thead>

            <tbody>
                {
                   glasses.map((glass , index) =>{
                    //mmap are intotdeauna return
                    return(<>
                    <tr key={index}>
                       <td>{glass.id}</td>
                       <td>{glass.type}</td>
                       <td>{glass.description}</td>
                       <td>{glass.colorable}</td>
                       <td>
                        <img src={glass.thumbnailSrc} alt="glass-img" className="img-fluid"/>
                       </td>
                    </tr>
                    </>);
                   }) 
                }
            </tbody>

        </table>

    </article>

  </>);

}

export default DoppelAvatars;

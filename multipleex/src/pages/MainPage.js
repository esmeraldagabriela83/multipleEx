import React, {useState} from "react";
import '../App.css';
import '../styles/MainPage.scss';

function MainPage(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

<article id="main_page_article">
<h3>The standard Lorem Ipsum passage, used since the 1500s</h3>

<p>
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</p>

<button>Click here 1</button>

<h3>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>

<p>
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
 quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, 
 id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
 cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, 
 omnis dolor repellendus. 
 Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
  molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
 ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
</p>

<button>Click here 2</button>

<h3>1914 translation by H. Rackham</h3>

<p>
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized 
by the charms of pleasure of the moment, 
so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; 
and equal blame belongs to those who fail in their duty through weakness of will, 
which is the same as saying through shrinking from toil and pain. 
These cases are perfectly simple and easy to distinguish. 
In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, 
every pleasure is to be welcomed and every pain avoided. 
But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur 
that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection:
 he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
</p>

<button>Click here 3</button>

</article>

  </>);

}

export default MainPage;

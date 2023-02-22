import { DynamicSideContent } from '@ui5/webcomponents-react';
import { Button } from '@ui5/webcomponents-react';
import { Card } from '@ui5/webcomponents-react';
import { CardHeader } from '@ui5/webcomponents-react';
import { Icon } from '@ui5/webcomponents-react';

const Movie = () => {
    return (
        <DynamicSideContent
  onLayoutChange={function noRefCheck(){}}
  sideContent={<Card
    className="text-center moviePoster"
  >
    <span className="moviePosterSampleText">Poster</span>
  </Card>}
  sideContentVisibility="AlwaysShow"
>
  <div>
    <h1>
      Movie Title
    </h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.
    </p>

    <div id="actorRow">
      <h3>Actor</h3>
      <span>randomname</span>
    </div>
    
    <div id="reviewRow">
      <h3>Review</h3>
      <div id="reviewStars">
        <Icon name="unfavorite" />
        <Icon name="unfavorite" />
        <Icon name="unfavorite" />
        <Icon name="unfavorite" />
        <Icon name="unfavorite" />
      </div>
    </div>
  
<Button
  design="Attention"
  icon="heart-2"
  iconEnd
  onClick={function noRefCheck(){}}
>
  Favorite
</Button>
  </div>
</DynamicSideContent>
    )
  }
  
  export default Movie
  
import { DynamicSideContent } from '@ui5/webcomponents-react';
import { Button } from '@ui5/webcomponents-react';
import { Card } from '@ui5/webcomponents-react';
import { Grid } from '@ui5/webcomponents-react';
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


    <Grid position="Center" className="gridActor">
        <div data-layout-span="XL1 L1 M1 S1">
          <h3>Actor</h3>
        </div>
        <div data-layout-span="XL11 L11 M11 S11">
          <h5 class="f-w-normal">randomname</h5>
        </div>
    </Grid>

    <Grid position="Center" className="gridReview">
        <div data-layout-span="XL1 L1 M1 S1">
          <h3>Review</h3>
        </div>
        <div data-layout-span="XL11 L11 M11 S11" className="starsReview">
          <Icon name="unfavorite" className="starReview" />
          <Icon name="unfavorite" className="starReview" />
          <Icon name="unfavorite" className="starReview" />
          <Icon name="unfavorite" className="starReview" />
          <Icon name="unfavorite" className="starReview" />
        </div>
    </Grid>
    

  
    <Button
      design="Emphasized"
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
  
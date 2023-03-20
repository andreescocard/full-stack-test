import { DynamicSideContent } from '@ui5/webcomponents-react';
import { Button } from '@ui5/webcomponents-react';
import { Card } from '@ui5/webcomponents-react';
import { Grid } from '@ui5/webcomponents-react';
import { Icon } from '@ui5/webcomponents-react';
import { useDispatch, useSelector } from 'react-redux';
import { favOrUnfavMovie } from '../redux/slice/movie';

const Movie = ({movie}) => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let iconFavUnfav = "";

  if(state.movie.isLoading && (state.movie.isError == false)){
    return <h1>Loading...</h1>
   }

   if(state.movie.dataFavs?.includes(movie.imdbID)){
    iconFavUnfav = "heart";
   }else{
    iconFavUnfav = "heart-2";
   }


    return (
        <DynamicSideContent
  onLayoutChange={function noRefCheck(){}}
  sideContent={<Card
    className="text-center moviePoster"
  >
    <span className="moviePosterSampleText"><img src={movie.Poster} /></span>
  </Card>}
  sideContentVisibility="AlwaysShow"
>
  <div>
    <h1>
      {movie.Title}
    </h1>
    <Grid position="Center" className="gridActor">
        <div data-layout-span="XL1 L1 M1 S1">
          <h3>Year</h3>
        </div>
        <div data-layout-span="XL11 L11 M11 S11">
          <h5 class="f-w-normal">   {movie.Year}</h5>
        </div>
    </Grid>


    <Grid position="Center" className="gridActor">
        <div data-layout-span="XL1 L1 M1 S1">
          <h3>Type</h3>
        </div>
        <div data-layout-span="XL11 L11 M11 S11">
          <h5 class="f-w-normal">   {movie.Type}</h5>
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
      id={"favunfav-"+movie.imdbID}
      design="Emphasized"
      icon={iconFavUnfav}
      //icon = "{() => checkIsFavOrUnfav(movie.imdbID)}"
      iconEnd
      onClick={() => dispatch(favOrUnfavMovie(movie.imdbID))}
    >
      Favorite
    </Button>
  </div>
</DynamicSideContent>
    )
  }
  
  export default Movie
  
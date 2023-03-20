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

  let rating1 = "unfavorite";
  let rating2 = "unfavorite";
  let rating3 = "unfavorite";
  let rating4 = "unfavorite";
  let rating5 = "unfavorite";

  if(state.movie.isLoading && (state.movie.isError == false)){
    return <h1>Loading...</h1>
   }

   if(state.movie.dataFavs?.includes(movie.imdbID)){
    iconFavUnfav = "heart";
   }else{
    iconFavUnfav = "heart-2";
   }



   //state.movie.dataRatings.filter(e => console.log(JSON.parse(e.imdbID)))
   /*
   if (state.movie.dataRatings.filter(e => JSON.parse(e.imdbID) === movie.imdbID).length > 0) {
    console.log("tem")
  }else{
    console.log("n tem")
  }*/
  let i =0;
  for(i=0;i<state.movie.dataRatings.length;i++)
  {
    let rating = JSON.parse(state.movie.dataRatings[i]);
    if(rating.imdbID == movie.imdbID){
      if(rating.rating == "1"){
         rating1 = "favorite";
         rating2 = "unfavorite";
         rating3 = "unfavorite";
         rating4 = "unfavorite";
         rating5 = "unfavorite";
      }
      if(rating.rating == "2"){
        rating1 = "favorite";
        rating2 = "favorite";
        rating3 = "unfavorite";
        rating4 = "unfavorite";
        rating5 = "unfavorite";
      }
      if(rating.rating == "3"){
        rating1 = "favorite";
        rating2 = "favorite";
        rating3 = "favorite";
        rating4 = "unfavorite";
        rating5 = "unfavorite";
      }
      if(rating.rating == "4"){
        rating1 = "favorite";
        rating2 = "favorite";
        rating3 = "favorite";
        rating4 = "favorite";
        rating5 = "unfavorite";
      }
      if(rating.rating == "5"){
        rating1 = "favorite";
        rating2 = "favorite";
        rating3 = "favorite";
        rating4 = "favorite";
        rating5 = "favorite";
      }
    }
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

    <Grid position="Center" className="gridActor">
        <div data-layout-span="XL1 L1 M1 S1">
          <h3>imdbID</h3>
        </div>
        <div data-layout-span="XL11 L11 M11 S11">
          <h5 class="f-w-normal">   {movie.imdbID}</h5>
        </div>
    </Grid>

    <Grid position="Center" className="gridReview">
        <div data-layout-span="XL1 L1 M1 S1">
          <h3>Review</h3>
        </div>
        <div data-layout-span="XL11 L11 M11 S11" className="starsReview">
          <Icon name={rating1} className="starReview"  />
          <Icon name={rating2} className="starReview" />
          <Icon name={rating3} className="starReview" />
          <Icon name={rating4} className="starReview" />
          <Icon name={rating5} className="starReview" />
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
  
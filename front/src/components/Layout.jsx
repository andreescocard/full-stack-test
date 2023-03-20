import { DynamicPage } from '@ui5/webcomponents-react';
import { Label } from '@ui5/webcomponents-react';
import { DynamicPageTitle } from '@ui5/webcomponents-react';
import { Title } from '@ui5/webcomponents-react';
import { Badge } from '@ui5/webcomponents-react';
import Movie from './Movie'
import Search from './Search'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux';

const Layout = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("State", state);

  return (
    <DynamicPage
      headerTitle={
      <DynamicPageTitle actions={
        <><Label>Techs:</Label>
        <Badge colorScheme="2" style={{color: "red"}}>NodeJS + Nest + TypeScript</Badge>
        <Badge colorScheme="6" style={{color: "blue"}}>React + Redux</Badge>
        <Badge colorScheme="8" style={{color: "green"}}>UI5 Web Components for React</Badge>
        <Badge colorScheme="10" style={{color: "purple"}}>SCSS</Badge></>
        } 
        header={<Title>Full Stack Test</Title>} 
        subHeader={<></>}>
      </DynamicPageTitle>}
      onPinnedStateChange={function noRefCheck(){}}
      onToggleHeaderContent={function noRefCheck(){}}
      showHideHeaderButton={false}
      style={{
        maxHeight: '700px'
      }}>
        <Search />
      {
         state.movie && state.movie.data && state.movie.data.Search?.map(e => 
          <Movie movie={e} />
          )
      }
      
        <Footer />
    </DynamicPage>
  )
}

export default Layout

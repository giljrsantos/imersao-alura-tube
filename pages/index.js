import Menu from "../src/components/Menu";
import React from "react"
import { StyledTimeline } from "../src/components/Timeline";
import config from "../config.json";
import styled from "styled-components";

function HomePasge() {
  const estilosDaHomePage = { 
    // background: "red"
   };

  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
        <>

        <div style={{
            display:"flex", 
            flexDirection:"column", 
            flex:1,
          }}>
            {/* Prop Drilling */}
            <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
            <Header />
            <TimeLine searchValue={valorDoFiltro} playlists={config.playlists}>
              Conteúdo
            </TimeLine>
            </div>
        </>
  );
}

export default HomePasge;

// function Menu() {
//   return <div>Menu</div>;
// }

const StyledHeader = styled.div`

  background-color: ${({ theme}) => theme.backgroundLevel1};

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner = styled.div`
  background-color: blue;
  background-image: url(${({bg}) => bg });
  height: 230px;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg} />
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function TimeLine({searchValue, ...props}) {
  const playListNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playListNames.map(function (playListName) {
        const videos = props.playlists[playListName];
        return (
          <section key={playListName}>
            <h2>{playListName}</h2>
            <div>
              {videos.filter((video) => {
                const titleNormalized = video.title.toLowerCase()
                const searchValueNormalized = searchValue.toLowerCase()
                return titleNormalized.includes(searchValueNormalized)
              }).map((video) => {
                return (
                  <a key={video.url} href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

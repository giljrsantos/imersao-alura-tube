import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import config from "../config.json";
import styled from "styled-components";

function HomePasge() {
  const estilosDaHomePage = { 
    // background: "red"
   };

  console.log(config.playlists);

  return (
        <>
        <CSSReset />
        <div style={estilosDaHomePage}>
            <Menu />
            <Header />
            <TimeLine playlists={config.playlists} />
            </div>
        </>
  );
}

export default HomePasge;

// function Menu() {
//   return <div>Menu</div>;
// }

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" /> */}
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

function TimeLine(props) {
  const playListNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playListNames.map(function (playListName) {
        const videos = props.playlists[playListName];
        return (
          <section>
            <h2>{playListNames}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
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

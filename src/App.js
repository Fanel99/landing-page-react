/** @jsxImportSource @emotion/react */
import './App.css';
import browserMockup from './images/browser-mockup.svg';
import clock from './images/clock.png';
import featureOne from './images/feature1.png';
import companyLogo from './images/featured.svg';
import fullmoon from './images/fullmoon.png';
import spantium from './images/spantiumL.png';
import { ReactComponent as Logo } from './images/spatium-logo.svg';
import spiner from './images/spiner.gif';
import sunset from './images/sunset.png';
import {
  button,
  container,
  heroBrowsing,
  movieYoutube,
  navigation,
  navigationHeader,
  navUl,
  sectionFeatures,
  sectionHero,
  split,
  spliter,
  spliterReverse,
  splitImg,
  splitText,
} from './styles.js';
import YoutubeEmbed from './YoutubeEmbed';

function App() {
  return (
    <div className="App">
      <div css={navigationHeader}>
        <div css={[container, navigation]}>
          <div>
            <Logo />
          </div>
          <nav>
            <ul css={navUl}>
              <li>
                <a href="#features"> Features </a>
              </li>
              <li>
                <img src={companyLogo} alt="company logo" />
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Section Hero  */}
      <section css={sectionHero}>
        <div css={container}>
          <h1>
            A space odyssey <br /> awaits you.
          </h1>
          <p>
            Beautiful space images and information of your current sky map
            location on every <strong> new tab</strong>.
          </p>
          <button css={button}>Add To Chrome - It`s Free</button>
        </div>
        <div css={[heroBrowsing, container]}>
          <img src={browserMockup} alt="browser mockup" />

          <img src={spiner} alt="second jpg" />
        </div>
      </section>

      {/* Section Features  */}
      <section css={sectionFeatures}>
        <div css={container}>
          <div css={split}>
            <div css={splitImg}>
              <img src={featureOne} alt="pictures" />
            </div>
            <div css={splitText}>
              <h2>Space Images</h2>
              <p>
                Every day get a fascinating image of our universe. Enjoy
                pictures of stars, planets, moons, galaxies, nebulae, comets and
                more right on your browser tab.
              </p>
              <p> + Add To Chrome</p>
            </div>
          </div>
          <div css={spliter}></div>
        </div>
        <div css={container}>
          <div css={split}>
            <div css={splitText}>
              <h2>Sun Widget.</h2>
              <p>
                Find out when the sunrise, sunset, first and last light times
                will be precisely at your location. It also shows a countdown in
                an easy-to-read display, so you can stay tuned in your favorite
                sun event - light up your world!.
              </p>
              <p> + Add To Chrome</p>
            </div>
            <div css={splitImg}>
              <img src={sunset} alt="sunset" />
            </div>
          </div>
          <div css={spliterReverse}></div>
        </div>
        <div css={container}>
          <div css={split}>
            <div css={splitImg}>
              <img src={fullmoon} alt="fullmoon" />
            </div>
            <div css={splitText}>
              <h2>Moon Widget.</h2>
              <p>
                See the current moon phase in real-time, countdowns to moon
                events (New Moon, First Quarter, Full Moon and Last Quarter),
                along with exact illumination percentages. Never miss an
                opportunity for moon gazing anymore.
              </p>
              <p> + Add To Chrome</p>
            </div>
          </div>
          <div css={spliter}></div>
        </div>
        <div css={container}>
          <div css={split}>
            <div css={splitText}>
              <h2>Inspire Yourself Daily.</h2>
              <p>
                Receive a daily dose of inspiration, insight and positive action
                with our curated list of quotes from the most intelligent people
                in history.
              </p>
              <p> + Add To Chrome</p>
            </div>
            <div css={splitImg}>
              <img src={clock} alt="clock" />
            </div>
          </div>
          <div css={spliterReverse}></div>
        </div>
        <div css={container}>
          <div css={split}>
            <div css={splitImg}>
              <img src={spantium} alt="spantium" />
            </div>
            <div css={splitText}>
              <h2>Customizable Interface.</h2>
              <p>
                You can customize your experience with Spatium by showing and
                hiding widgets as per your needs. You decide what's on your New
                Tab page - it's up to you!.
              </p>
              <p> + Add To Chrome</p>
            </div>
          </div>
          <div css={spliterReverse}></div>
          <div css={movieYoutube}>
            <YoutubeEmbed embedId="lS9XcEEek48" />
          </div>
          <div css={spliter}></div>
        </div>
      </section>
    </div>
  );
}

export default App;

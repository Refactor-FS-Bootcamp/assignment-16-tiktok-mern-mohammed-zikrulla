import "./App.css";
import Video from "./components/Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
          channel="nabendu82"
          description="Macbook air to new windows PC"
          song="I am a windows PC"
          likes={239}
          shares={345}
          messages={890}
        />
        <Video />
        <Video
          url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4"
          channel="thewebdev"
          description="Tuesday morning editing on kdenlive in windows"
          song="kdenlive is great"
          likes={239}
          shares={345}
          messages={890}
        />
        <Video />
      </div>
    </div>
  );
}

export default App;

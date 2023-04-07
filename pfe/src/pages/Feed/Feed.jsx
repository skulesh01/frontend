import Sidebar from "../../components/Elements/Sidebar/Sidebar";
import Like from "../../components/Elements/Sidebar/Like/Like";
import Follow from "../../components/Elements/Sidebar/Follow/Follow";
import BottomBar from "../../components/Elements/BottomBar/BottomBar";
import VideoFooter from "../../components/Elements/VideoFooter/VideoFooter";

function Feed() {
  return (
    <main style={{ height: "100vh", width: "100vw", userSelect: "none" }}>
      <Sidebar>
        <Like></Like>
        <Follow></Follow>
      </Sidebar>
      <VideoFooter></VideoFooter>
      <BottomBar></BottomBar>
    </main>
  );
}

export default Feed;

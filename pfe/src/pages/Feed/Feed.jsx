import Sidebar from "../../components/Elements/Sidebar/Sidebar";
import Like from "D:/GitHub/frontend/pfe/src/components/Elements/Like/Like";
import Follow from "../../components/Elements/Sidebar/Follow/Follow";
import BottomBar from "../../components/Elements/BottomBar/BottomBar";

function Feed() {
  return (
    <main style={{ height: "100vh", width: "100vw", userSelect: "none" }}>
      <Sidebar>
        <Like></Like>
        <Follow></Follow>
      </Sidebar>
      <BottomBar></BottomBar>
    </main>
  );
}

export default Feed;

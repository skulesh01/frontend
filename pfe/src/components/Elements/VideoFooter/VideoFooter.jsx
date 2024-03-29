import Avatar from "./Avatar/Avatar";

function VideoFooter({ children }) {
  return (
    <div className="VideoFooter">
      <Avatar></Avatar>

      <div className="VideoFooterText">
        <div>
          <h5 style={{ margin: "0" }}>Account</h5>
          <button className="button" id="follow">
            Follow
          </button>
          <div className="tag">
            <p>#teg1 #teg2 #teg3 #teg4</p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
export default VideoFooter;

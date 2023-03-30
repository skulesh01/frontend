function Feed() {
  return (
    <main
      style={{
        // display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="sitebar" style={{}}>
        <div class="likesave__button">
          <span class="material-symbols-outlined" id="like">
            favorite
          </span>
          <p>1</p>
        </div>
        <div class="likesave__button">
          <span class="material-symbols-outlined" id="share">
            share
          </span>
          <p>1</p>
        </div>
      </div>
    </main>
  );
}

export default Feed;

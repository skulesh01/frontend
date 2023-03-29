function Feed({ style, setCurrentLice }) {
  return (
    <div onClick={() => setCurrentLice && setCurrentLice((like) => like + 1)}>
      Feed
    </div>
  );
}

export default Feed;

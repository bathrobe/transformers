import YouTube from "react-youtube";

export default function YouTubeVid({ id }) {
  const opts = { height: "390", width: "640" };
  return (
    <>
      <YouTube videoId={id} opts={opts} />
    </>
  );
}

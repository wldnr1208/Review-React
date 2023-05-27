import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import FakeYoutube from "../api/fakeYoutube";
import Youtube from "../api/youtube";

export default function Videos() {
  const { keyword } = useParams();
  //첫 번째는 캐쉬 키를 가져오고, 두 번째는 어떻게 사용할 것 인가?
  //"videos", keyword 전체적인 videos 키 안에 keyword별로 캐시가 되도록 만들어준다.
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => {
    const youtube = new Youtube();
    return youtube.search(keyword);
  });

  return (
    <>
      <div>Videos {keyword ? `${keyword}` : `hot`}</div>;
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is Wrong ㅜㅜ</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}

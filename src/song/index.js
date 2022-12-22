import React, { useEffect, useMemo } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import cls from "classnames";
import { useAudio } from "react-use";
import create from "zustand";
import LRC from "../module/lrc";

const useTime = create((set) => ({
  time: 0,
  setTime: (time) => set(() => ({ time })),
}));

function fancyTimeFormat(duration) {
  var hrs = ~~(duration / 3600);
  var mins = ~~((duration % 3600) / 60);
  var secs = ~~duration % 60;

  var ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}

const SONG = (props) => {
  const setTime = useTime((state) => state.setTime);
  const [audio, state, controls] = useAudio({
    src: props.src,
    autoPlay: true,
  });

  useEffect(() => {
    setTime(state.time);
  }, [state]);

  return (
    <div>
      {audio}
      <div className="flex">
        {fancyTimeFormat(state.time)}
        <input
          type="range"
          min={0}
          max={state.duration}
          value={state.time}
          onChange={(e) => {
            controls.seek(e.target.value);
          }}
        />
        {fancyTimeFormat(state.duration)}
      </div>
      <button
        onClick={state.paused ? controls.play : controls.pause}
        className="text-[30px] w-full"
      >
        {state.paused ? "▶️" : "⏯️"}
      </button>
    </div>
  );
};

const Index = () => {
  const { id } = useParams();
  const time = useTime((state) => state.time);

  const { isLoading, data } = useQuery(
    `song-${id}`,
    () =>
      axios(`http://192.168.31.252:4000/song/detail?ids=${id}`).then(
        (data) => data.data
      ),
    { cacheTime: Infinity }
  );

  const song = useQuery(`song-url-${id}`, () =>
    axios(`http://192.168.31.252:4000/song/url?id=${id}`).then(
      (data) => data.data.data
    )
  );

  const lyric = useQuery(`lyric-${id}`, () =>
    axios(`http://192.168.31.252:4000/lyric?id=${id}`).then((data) => data.data)
  );

  const lyricParsed = useMemo(() => {
    if (lyric?.data?.lrc?.lyric) {
      const parsed = LRC.parse(lyric?.data?.lrc?.lyric);
      return parsed;
    }
  }, [lyric]);

  const activeLine = useMemo(() => {
    let activated = 0;
    if (lyricParsed) {
      lyricParsed.lines.forEach((it, index) => {
        const active =
          time < lyricParsed.lines[index + 1]?.time && time > it.time;
        if (active) {
          activated = index;
        }
      });
    }
    return activated;
  }, [lyricParsed, time]);

  useEffect(() => {
    if (data?.songs?.[0]?.name) {
      document.title = data?.songs?.[0]?.name;
    }
  }, [data]);

  return (
    <div className="flex justify-center items-center flex-col">
      <div>{isLoading && "Loading..."}</div>
      <h1 className="text-t7">{data?.songs?.[0]?.name}</h1>
      <img className="w-[200px]" src={data?.songs?.[0].al.picUrl} alt="al" />
      <div>{data?.songs?.[0].al.name}</div>
      <div>{data?.songs?.[0].ar.map((it) => it.name).join(" / ")}</div>
      <SONG src={song.data?.[0]?.url} />
      {lyricParsed?.lines.map((it, index) => (
        <div
          key={it.time + index}
          className={cls(
            activeLine === index ? "text-[red]" : "black",
            activeLine === index - 3 ||
              activeLine === index - 2 ||
              activeLine === index - 1 ||
              activeLine === index ||
              activeLine === index + 1 ||
              activeLine === index + 2 ||
              activeLine === index + 3
              ? "block"
              : "hidden"
          )}
        >
          {it.text}
        </div>
      ))}
    </div>
  );
};

export default Index;

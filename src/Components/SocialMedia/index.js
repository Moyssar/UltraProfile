import React, { useEffect, useState } from "react";
import axios from "axios";
import { SMedia, Social, Icon, SocialDesc, Span, SpanInfo } from "./work.js";
const SocialMedia = () => {
  const [Media, setMedia] = useState([]);

  useEffect(() => {
    axios.get("Data/data.json").then((res) => {
      setMedia(res.data.social);
    });
  }, []);

  const MediaList = Media.map((MediaItem) => {
    return (
      <Social item={MediaItem.id} key={MediaItem.id}>
        <Icon className={MediaItem.icon}></Icon>
        <SocialDesc>
          <Span>{MediaItem.title}</Span>
          <SpanInfo>{MediaItem.body}</SpanInfo>
        </SocialDesc>
      </Social>
    );
  });
  return <SMedia>{MediaList}</SMedia>;
};

export default SocialMedia;

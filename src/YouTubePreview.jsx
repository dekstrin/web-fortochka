import React, { useEffect, useState } from "react";

export default function YouTubePreview({ url }) {
    const [title, setTitle] = useState("Загрузка...");

    const videoId = url.split("v=")[1]?.split("&")[0];
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

    useEffect(() => {
        fetch(`https://www.youtube.com/oembed?url=${url}&format=json`)
            .then((res) => res.json())
            .then((data) => setTitle(data.title))
            .catch(() => setTitle("Не удалось загрузить название"));
    }, [url]);

    return (
        <div className="video-card">
            <img src={thumbnailUrl} alt={title} />
            <div className="video-title">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            </div>
        </div>
    );
}


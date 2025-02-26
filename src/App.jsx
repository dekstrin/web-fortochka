import React, { useEffect, useState } from "react";
import YouTubePreview from "./YouTubePreview";

export default function App() {
    const [isTelegram, setIsTelegram] = useState(false);

    useEffect(() => {
        const checkTelegram = () => {
            if (window.Telegram?.WebApp) {
                window.Telegram.WebApp.expand();
                setIsTelegram(true);
            }
        };

        checkTelegram();

        window.addEventListener("tg-init", checkTelegram);

        return () => window.removeEventListener("tg-init", checkTelegram);
    }, []);

    const videos = [
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
        "https://www.youtube.com/watch?v=9bZkp7q19f0"
    ];

    return (
        <div className="container">
            <h1>{isTelegram ? "Видео в Telegram WebApp" : "Список видео"}</h1>
            <div className="video-list">
                {videos.map((url, index) => (
                    <YouTubePreview key={index} url={url} />
                ))}
            </div>
            {isTelegram && (
                <button className="tg-button" onClick={() => window.Telegram.WebApp.close()}>
                    Закрыть WebApp
                </button>
            )}
        </div>
    );
}



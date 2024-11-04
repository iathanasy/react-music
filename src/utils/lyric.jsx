import { useState } from "react";

export const parseLrc =(lrcContent) =>{
    const lines = lrcContent.split('\n');
    const timeRegex = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
    const lyrics = [];
  
    lines.forEach(line => {
    const match = timeRegex.exec(line);
    if (match) {
        const minutes = parseInt(match[1]);
        const seconds = parseInt(match[2]);
        const milliseconds = parseInt(match[3]);
        const time = minutes * 60 + seconds + milliseconds / 1000;
        const text = line.replace(timeRegex, '').trim();
        if (text) {
        lyrics.push({ time, text });
        }
    }
    });
    return lyrics.sort((a, b) => a.time - b.time);
}
import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    startProcess();
  }, []);

  const startProcess = async () => {
    try {
      const session = await getSession();
      const url = await getUrl(session);
      await saveM3u(url);
    } catch (error) {
      console.error("Process failed:", error);
    }
  };

  const getSession = async () => {
    const response = await fetch(
      "https://webapi.uflixtv.com/api/user/login/?user_email=BE0134&user_password=1111&kauth="
    );
    const text = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");
    const session = xmlDoc.querySelector("user_loggedsession")?.textContent;
    return session;
  };

  const getUrl = async (session) => {
    const response = await fetch(
      `https://cloud.ufxtv.com/api/tv/channels/play/?c=uflix-epl1&kauth=&user_loggedsession=${session}`
    );
    const text = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");
    let clearUrl = xmlDoc.querySelector("clear_url")?.textContent;
    if (!clearUrl) throw new Error("No clear_url found");
    return clearUrl.replace("playlist.m3u8", "chunks.m3u8");
  };

  const saveM3u = async (url) => {
    const oldBody = `
#EXTM3U

#EXTINF:-1 group-title="พรีเมียร์ลีก" tvg-logo="https://rentapi.blackboxsys.net/images/png/epl-1.png",ช่อง EPL 1
#EXTVLCOPT:http-referrer=https://cloud.ufxtv.com/
#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Linux; Android 14; K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/127.0.6533.103 Mobile Safari/537.36
#EXTVLCOPT:http-origin=https://cloud.ufxtv.com
#EXTVLCOPT:http-accept=*/*
#EXTVLCOPT:http-accept-encoding=gzip, deflate, br, zstd
#EXTVLCOPT:http-accept-language=en-US,en;q=0.9,th;q=0.8
${url}
    `.trim();

    const encodedContent = btoa(unescape(encodeURIComponent(oldBody))); // base64 encode

    const raw = JSON.stringify({
      content: encodedContent,
    });

    const response = await fetch("http://localhost:8080/save-m3u", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: raw,
    });

    const result = await response.text();
    console.log("saveM3u result:", result);
  };

  return <></>;
}

export default App;

import { useEffect } from "react";
import "./App.css";

function App() {
 useEffect(() => {
   startProcess();
 }, []);

  const categories = [
    {
      name: "พรีเมียร์ลีก",
      channels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // index จาก channelNames/playBaseUrls
    },
    {
      name: "Bein Sport",
      channels: [
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
      ],
    },
    {
      name: "Digital Tv",
      channels: [
        28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 38, 40, 41, 42, 43, 44, 45,
        46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
      ],
    },
  ];

  const channelNames = [
    "ช่อง EPL 1",
    "ช่อง EPL 1 Backup",
    "ช่อง EPL 2",
    "ช่อง EPL 2 Backup",
    "ช่อง EPL 3",
    "ช่อง EPL 3 Backup",
    "ช่อง EPL 4",
    "ช่อง EPL 4 Backup",
    "ช่อง EPL 5",
    "ช่อง EPL 5 Backup",
    "ช่อง Bein 1",
    "ช่อง Bein 1 Backup",
    "ช่อง Bein 2",
    "ช่อง Bein 2 Backup",
    "ช่อง Bein 3",
    "ช่อง Bein 3 Backup",
    "ช่อง Bein HD 1",
    "ช่อง Bein HD 2",
    "ช่อง Bein HD 3",
    "ช่อง Bein HD 4",
    "ช่อง Bein HD 5",
    "ช่อง Bein HD 6",
    "ช่อง Bein HD 7",
    "ช่อง Bein HD 8",
    "ช่อง Bein HD 9",
    "ช่อง Bein HD 10",
    "ช่อง Bein HD 11",
    "ช่อง Bein HD 12",
    "ช่อง CH3 HD",
    "ช่อง CH3 HD Backup",
    "ช่อง CH5 HD",
    "ช่อง CH5 HD Backup",
    "ช่อง CH7 HD",
    "ช่อง CH7 HD Backup",
    "ช่อง CH9 HD",
    "ช่อง CH9 HD Backup",
    "ช่อง WorkPoint HD",
    "ช่อง WorkPoint HD Backup",
    "ช่อง GMM HD",
    "ช่อง GMM HD Backup",
    "ช่อง MONO HD",
    "ช่อง MOMO HD Backup",
    "ช่อง CH8 HD",
    "ช่อง CH8 HD Backup",
    "ช่อง ONE HD",
    "ช่อง ONE HD Backup",
    "ช่อง Amarin TV HD",
    "ช่อง Amarin TV HD Backup",
    "ช่อง Thairath TV HD",
    "ช่อง Thairath TV HD Backup",
    "ช่อง PPTV HD",
    "ช่อง PPTV HD Backup",
    "ช่อง TRUE 4 U HD",
    "ช่อง TRUE 4 U HD Backup",
    "ช่อง Nation TV HD",
    "ช่อง Nation TV HD Backup",
    "ช่อง JKN TV HD",
    "ช่อง JKN TV HD Backup",
    "ช่อง TNN TV HD",
    "ช่อง TNN TV HD Backup",
    "ช่อง Thai PBS TV HD",
    "ช่อง Thai PBS TV HD Backup",
    "ช่อง NBT TV HD",
    "ช่อง NBT TV HD Backup",
  ];

  const channelLogos = [
    "https://rentapi.blackboxsys.net/images/png/epl-1.png",
    "https://rentapi.blackboxsys.net/images/png/epl-1bkp.png",
    "https://rentapi.blackboxsys.net/images/png/epl-2.png",
    "https://rentapi.blackboxsys.net/images/png/epl-2bkp.png",
    "https://rentapi.blackboxsys.net/images/png/epl-3.png",
    "https://rentapi.blackboxsys.net/images/png/epl-3bkp.png",
    "https://rentapi.blackboxsys.net/images/png/epl-4.png",
    "https://rentapi.blackboxsys.net/images/png/epl-4bkp.png",
    "https://rentapi.blackboxsys.net/images/png/epl-5.png",
    "https://rentapi.blackboxsys.net/images/png/epl-5bkp.png",
    "https://static.uflixtv.com/images/tv/png/epl-bein1.png",
    "https://static.uflixtv.com/images/tv/png/epl-bein1bkp.png",
    "https://static.uflixtv.com/images/tv/png/epl-bein2.png",
    "https://static.uflixtv.com/images/tv/png/epl-bein2bkp.png",
    "https://static.uflixtv.com/images/tv/png/epl-bein3.png",
    "https://static.uflixtv.com/images/tv/png/epl-bein3bkp.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-bein1.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-bein2.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-bein3.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-bein4.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-bein5.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-bein6.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-bein7.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-bein8.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-bein9.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-bein10.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-bein11.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-bein12.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-ch3.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-ch3bkp.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-ch5.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-ch5bkp.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-ch7.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-ch7bkp.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-mcot.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-mcotbkp.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-workpoint.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-workpointbkp.png",
    "https://static.uflixtv.com/images/tv/channels_icons/sd-gmmchannel.png",
    "https://static.uflixtv.com/images/tv/channels_icons/sd-gmmchannelbkp.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-mono.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-monobkp.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-ch8.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-ch8bkp.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-gmmone.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-gmmonebkp.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-amarin.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-amarinbkp.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-thairath.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-thairathbkp.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-pptv.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-pptvbkp.png",
    "https://static.uflixtv.com/images/tv/channels_icons/sd-24u.png",
    "https://static.uflixtv.com/images/tv/channels_icons/th-24u.png",
    "https://static.uflixtv.com/images/tv/channels_icons/sd-nation.png",
    "https://static.uflixtv.com/images/tv/channels_icons/sd-nationbkp.png",
    "https://static.uflixtv.com/images/tv/channels_icons/sd-new.png",
    "https://static.uflixtv.com/images/tv/channels_icons/sd-newbkp.png",
    "https://static.uflixtv.com/images/tv/channels_icons/sd-tnn24.png",
    "https://static.uflixtv.com/images/tv/channels_icons/sd-tnn24bkp.png",
    "https://static.uflixtv.com/images/tv/channels_icons/hd-tpbs.png",
    "https://static.uflixtv.com/images/tv/channels_icons/th-tpbs.png",
    "https://static.uflixtv.com/images/tv/channels_icons/sd-nbt.png",
    "https://static.uflixtv.com/images/tv/channels_icons/sd-nbtbkp.png",
  ];

  // กำหนด playBaseUrls เอง
  const playBaseUrls = [
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=uflix-epl1&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=uflix-epl1bkp&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=uflix-epl2&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=uflix-epl2bkp&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=uflix-epl3&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=uflix-epl3bkp&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=uflix-epl4&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=uflix-epl4bkp&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=uflix-epl5&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=uflix-epl5bkp&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=uflix-bein1&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=epl-bein1&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=uflix-bein2&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=epl-bein2&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=uflix-bein3&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=epl-bein3&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-bein1&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-bein2&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-bein3&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-bein4&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-bein5&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-bein6&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-bein7&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-bein8&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-bein9&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-bein10&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-bein11&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-bein12&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-ch3&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-ch3bkp&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-ch5&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-ch5bkp&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-ch7&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-ch7bkp&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-mcot&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-mcotbkp&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-workpoint&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-workpointbkp&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=sd-gmmchannel&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=sd-gmmchannelbkp&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-mono&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-monobkp&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-ch8&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-ch8bkp&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-gmmone&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-gmmonebkp&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-amarin&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-amarinbkp&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-thairath&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-thairathbkp&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-pptv&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-pptvbkp&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=sd-24u&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=th-24u&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=sd-nation&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=sd-nationbkp&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=sd-new&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=sd-newbkp&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=sd-tnn24&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=sd-tnn24bkp&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-tpbs&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=th-tpbs&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=sd-nbt&kauth=",
    "https://cloud.ufxtv.com/api/tv/channels/play/?c=sd-nbtbkp&kauth=",
  ];

 const startProcess = async () => {
   try {
     const session = await getSession();
     const allChannels = await Promise.all(
       playBaseUrls.map((baseUrl, index) => getUrl(session, baseUrl, index))
     );
     await saveM3u(allChannels);
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

 const getUrl = async (session, baseUrl, index) => {
   const response = await fetch(`${baseUrl}&user_loggedsession=${session}`);
   const text = await response.text();
   const parser = new DOMParser();
   const xmlDoc = parser.parseFromString(text, "text/xml");
   let clearUrl = xmlDoc.querySelector("clear_url")?.textContent;
   if (!clearUrl)
     throw new Error(`No clear_url found for channel index ${index}`);
   return {
     name: channelNames[index],
     logo: channelLogos[index],
     url: clearUrl.replace("playlist.m3u8", "chunks.m3u8"),
   };
 };

 const saveM3u = async (channelData) => {
   const lines = ["#EXTM3U"];

   // สร้าง Map index -> group-title
   const indexToGroup = {};
   categories.forEach((cat) => {
     cat.channels.forEach((index) => {
       indexToGroup[index] = cat.name;
     });
   });

   channelData.forEach((ch, i) => {
     const groupTitle = indexToGroup[i] || "ทั่วไป";
     lines.push(
       `#EXTINF:-1 group-title="${groupTitle}" tvg-logo="${ch.logo}",${ch.name}`,
       "#EXTVLCOPT:http-referrer=https://cloud.ufxtv.com/",
       "#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Linux; Android 14; K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/127.0.6533.103 Mobile Safari/537.36",
       "#EXTVLCOPT:http-origin=https://cloud.ufxtv.com",
       "#EXTVLCOPT:http-accept=*/*",
       "#EXTVLCOPT:http-accept-encoding=gzip, deflate, br, zstd",
       "#EXTVLCOPT:http-accept-language=en-US,en;q=0.9,th;q=0.8",
       ch.url
     );
   });

   const fullM3u = lines.join("\n");
   const encodedContent = btoa(unescape(encodeURIComponent(fullM3u)));

   const raw = JSON.stringify({
     url: "https://api.github.com/repos/devjob4475/devjob4475.github.io/contents/test5456.m3u",
     content: encodedContent,
   });

   const response = await fetch("https://testb-alpha.vercel.app/save-m3u", {
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

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_07_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODQsXG4gICAgICAgIDM4LFxuICAgICAgICAzLFxuICAgICAgICAyOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE3LFxuICAgICAgICA3OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4LFxuICAgICAgICAyNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDYzLFxuICAgICAgICA2NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDMxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxODksXG4gICAgICAgIDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxODksXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMixcbiAgICAgICAgOTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDg1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMzLFxuICAgICAgICAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxODAsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDU4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDczLFxuICAgICAgICA1MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDUzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MixcbiAgICAgICAgMTA4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9STUc5OXVXUUZwOWtRdkRsRWp5Ym1UdmtVbzRiWGFraWp2Q091NFFPbnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlHNHNtQ0V0UnkyRy1BQXlnQWo4VEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGM4NDljNTgtMTk5Ny00N2NkLTgyYzItNGFjMzI3YTA5ZmY2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNCxcbiAgICAgIDI0OCxcbiAgICAgIDYsXG4gICAgICAxNDcsXG4gICAgICAxMjgsXG4gICAgICAyMDUsXG4gICAgICAzMyxcbiAgICAgIDE5LFxuICAgICAgMjIsXG4gICAgICAyMTEsXG4gICAgICA5NixcbiAgICAgIDQ3LFxuICAgICAgMTk4LFxuICAgICAgODEsXG4gICAgICA3OSxcbiAgICAgIDE3NCxcbiAgICAgIDEyOSxcbiAgICAgIDExOCxcbiAgICAgIDIyMSxcbiAgICAgIDIxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjgsXG4gICAgICA0OCxcbiAgICAgIDIsXG4gICAgICAxNDIsXG4gICAgICA3NyxcbiAgICAgIDExOSxcbiAgICAgIDg1LFxuICAgICAgMTUzLFxuICAgICAgMTk5LFxuICAgICAgMTgzLFxuICAgICAgMTM0LFxuICAgICAgODUsXG4gICAgICA3OSxcbiAgICAgIDE3MSxcbiAgICAgIDE5NixcbiAgICAgIDEwOSxcbiAgICAgIDEwLFxuICAgICAgMjEsXG4gICAgICAxMzYsXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTENHRUZUMTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5MzA1Mzg3MToxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE2NjQzMTU4MDgxNzE2OjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01PcjM5SUdFTjZ3dHJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaVFURGJlYXpRMit5NzVLLzRRM2FDdFJrZG54elpNVUt6dW5tMDYrUDAwST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmRTdjODZZZStXSG1MdFRnRWs5R0ZWV2x3ZHR2ME9NQjEvVHFmK0lBWWNxdkVIRTRqeHBIempzLzQrSE12QW1zR1lUU1daa1JGU2hIWlJCL0lRejNCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtYURMRHdzejJtaUJQVkx4dWk3MGtKckNNVmFGUTlDV25oRGx5VlZxUVMyNEZ0ZUVkb1liRitHbjJDLzYvbk84NTVmSFNaeHBkOTd3TTF2RTBtK1lDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3OTMwNTM4NzE6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU1NTYxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZlSVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmVJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaU1EVlIrY0h5bXU2dVpmMTE3V2ljakw0ZDRlM3BkQTRiNnNYQXRHOW0xdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzg0MTQxMjUxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA1MzE1NjY1MDlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

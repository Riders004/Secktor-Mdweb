
const pino = require("pino");
let qrcode = require("qrcode-terminal");
const PastebinAPI = require("pastebin-js");
const path = require('path');
const express = require("express");
const app = express();
let port = 5000
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
const fs = require("fs-extra");

// Serve static files from the "public" directory
app.use(express.static('public'));


/*if (fs.existsSync('./auth_info_baileys')) {
  fs.emptyDirSync(__dirname + '/auth_info_baileys');
  require('child_process').exec('rm -rf auth_info_baileys')
  console.log('Run The Script Again');
  setTimeout(() => {
    console.log(' ')
  }, 100);
  setTimeout(() => {
    console.log('𝑺')
  }, 300);
  setTimeout(() => {
    console.log('𝒆')
  }, 500);
  setTimeout(() => {
    console.log('𝒄')
  }, 700);
  setTimeout(() => {
    console.log('𝒌')
  }, 900);
  setTimeout(() => {
    console.log('𝒕')
  }, 1100);
  setTimeout(() => {
    console.log('𝒐')
  }, 1300);
  setTimeout(() => {
    console.log('𝒓')
  }, 1500);
  setTimeout(() => {
    console.log(' ')
  }, 1700);
  setTimeout(() => {
    console.log('𝑩')
  }, 1900);
  setTimeout(() => {
    console.log('𝒐')
  }, 2100);
  setTimeout(() => {
    console.log('𝒕')
  }, 2300);
  setTimeout(() => {
    process.exit()
  }, 2400)
};

setTimeout(() => {
  const { default: makeWASocket, useMultiFileAuthState, Browsers, delay, makeInMemoryStore, } = require("@adiwajshing/baileys");
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
  async function Secktor() {
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys')
    try {
      let session = makeWASocket({
        printQRInTerminal: true,
        logger: pino({ level: "silent" }),
        browser: Browsers.macOS("Desktop"),
        auth: state
      });
      session.ev.on("connection.update", async (s) => {
        const { connection, lastDisconnect, qr } = s;
        if (connection == "open") {
          await delay(500);
          let unique = fs.readFileSync(__dirname + '/auth_info_baileys/creds.json')
          var c = Buffer.from(unique).toString('base64')
          console.log('SESSION-ID=> ' + c)
          console.log('\nDon\'t provide your SESSION_ID to anyone otherwise that user can access your account.\nThanks')
          let cc = `Thanks for choosing Suhail Tech Secktor-Md.\n\n_You completed first step of making Secktor-bot_.\nVisit For Help \n*1.Repo:* github.com/SuhailTechInfo\n*2.Youtube:* Youtube.com/SuhailTechInfo\n*3.Owner:* wa.me/923184474176\nThanks`;
          //let user = session.user.id;
          await session.sendMessage("923184474176@s.whatsapp.net", { text: c });
          await session.sendMessage("923184474176@s.whatsapp.net", { text: cc });
          await require('child_process').exec('rm -rf auth_info_baileys')
          process.exit(1)
        }
        session.ev.on('creds.update', saveCreds)
        if (
          connection === "close" &&
          lastDisconnect &&
          lastDisconnect.error &&
          lastDisconnect.error.output.statusCode != 401
        ) {
          Secktor();
        }
      });
    } catch (err) {
       console.log(err);
      await require('child_process').exec('rm -rf auth_info_baileys')
      process.exit(1)
    }
  }
  Secktor();

*/





app.get("/", (req, res) => { 
  const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Secktor-Md</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from "Suhail Tech Info"!
    </section>
  </body>
</html>
`;
  res.type('html').send(html)         
});
//----------------------------------------------------------------------
app.get('/deploy', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Fork : Suhail-Md</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>
    </head>
    <body>
        <div class="section1">
            <div class="box">
                <div class="square" style="--i: 0"></div>
                <div class="square" style="--i: 1"></div>
                <div class="square" style="--i: 2"></div>
                <div class="square" style="--i: 3"></div>
                <div class="square" style="--i: 4"></div>
                <div class="container">
                    <div class="form">
                        <h2>Github Username</h2>
                        <form class="form" id="username" method="POST" action="/deploy">
                            <div class="input__box">
                                <input type="text" id="name" name="username" required="" placeholder="Git Username" />
                            </div>
                            <div class="input__box">
                                <input onclick="verify();" type="button" id="submit" value="Submit">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <script>
            async function verify() {
                if (document.getElementById('name').value.length > 0) {
                    try {
                        const { data } = await axios(\`https://api.github.com/users/\${document.getElementById('name').value}\`);
                        try {
                            const repo = await axios(\`https://api.github.com/repos/\${document.getElementById('name').value}/Secktor-bot\`);
                        } catch (e) {
                            alert("Fork The Repository First.\\nClick The 'OK' Button To Fork");
                            return location.replace('https://github.com/SuhailTechInfo/Secktor-bot/fork');
                        }
                        location.replace('https://dashboard.heroku.com/new?template=https://github.com/SuhailTechInfo/Secktor-bot');
                    } catch (error) {
                        alert('Invalid Username');
                    }
                }
            }
        </script>
    </body>
    </html>
  `;
  
  res.type('html').send(html);
});

app.listen(port, () => console.log(`Secktor Server listening on port http://localhost:${port}!`));

app.get('/heroku', (req, res) => {
  res.sendFile('deploy.html', { root: 'public' });
});





  
//app.listen(port, () => console.log(`Secktor Server listening on port http://localhost:${port}!`));
  



const nodemon = require('nodemon');
const dbd = require("dbd.js");

const bot = new dbd.Bot({
  token: "ODQ3Nzk4NDQxMDUyMjA5MjIz.YLDT0w.Iun-1GJb9LLjfCdABMQdbC0J17Q",
  prefix: ","
});

bot.status({
  text: ",psc ,nitro ,steam ,gp ,all",
  type: "PLAYING",
  time: 12
});

bot.onMessage();

bot.command({
  name: "psc",
  code: `$onlyIf[$channelID!=808993058845884416;]
$dm
$color[1e298c]
$thumbnail[https://cdn.discordapp.com/attachments/847798848319520798/847800929885356072/matlbot.png]
$author[M a t l B o t;https://cdn.discordapp.com/attachments/847798848319520798/847800929885356072/matlbot.png]
$description[Dołącz na nasz serwer dev!
[Kliknij, aby dołączyć\\](https://discord.gg/86XgKj3Cu2)


**Oto lista kodów. Przypominamy, że nie wszystkie mogą działać!**

PSC:
**<:psc:847804787294339085> Kod**
0$random[100000000000000;999999999999999]
**<:psc:847804787294339085> Kod**
0$random[100000000000000;999999999999998]
**<:psc:847804787294339085> Kod**
0$random[100000000000000;999999999999997]
**<:psc:847804787294339085> Kod**
0$random[100000000000000;999999999999996]
**<:psc:847804787294339085> Kod**
0$random[100000000000000;999999999999995]
**<:psc:847804787294339085> Kod**
0$random[100000000000000;999999999999994]
**<:psc:847804787294339085> Kod**
0$random[100000000000000;999999999999993]
**<:psc:847804787294339085> Kod**
0$random[100000000000000;999999999999992]
**<:psc:847804787294339085> Kod**
0$random[100000000000000;999999999999991]
**<:psc:847804787294339085> Kod**
0$random[100000000000000;999999999999990]]`
});

bot.command({
  name: "psc",
  code: `$onlyIf[$channelID!=808993058845884416;]
<@$authorID>, sprawdź swoje DM!`
});

bot.command({
  name: "nitro",
  code: `$onlyIf[$channelID!=808993058845884416;]
$dm
$color[1e298c]
$thumbnail[https://cdn.discordapp.com/attachments/847798848319520798/847800929885356072/matlbot.png]
$author[M a t l B o t;https://cdn.discordapp.com/attachments/847798848319520798/847800929885356072/matlbot.png]
$description[Dołącz na nasz serwer dev!
[Kliknij, aby dołączyć\\](https://discord.gg/86XgKj3Cu2)


**Oto lista kodów. Przypominamy, że nie wszystkie mogą działać!**

Nitro:
**<:discord_nitro:847801452515950612> Kod**
https://discord.gift/$randomString[10]$randomString[6]
**<:discord_nitro:847801452515950612> Kod**
https://discord.gift/$randomString[10]$randomString[6]
**<:discord_nitro:847801452515950612> Kod**
https://discord.gift/$randomString[10]$randomString[6]
**<:discord_nitro:847801452515950612> Kod**
https://discord.gift/$randomString[10]$randomString[6]
**<:discord_nitro:847801452515950612> Kod**
https://discord.gift/$randomString[10]$randomString[6]
**<:discord_nitro:847801452515950612> Kod**
https://discord.gift/$randomString[10]$randomString[6]
**<:discord_nitro:847801452515950612> Kod**
https://discord.gift/$randomString[10]$randomString[6]
**<:discord_nitro:847801452515950612> Kod**
https://discord.gift/$randomString[10]$randomString[6]
**<:discord_nitro:847801452515950612> Kod**
https://discord.gift/$randomString[10]$randomString[6]
**<:discord_nitro:847801452515950612> Kod**
https://discord.gift/$randomString[10]$randomString[6]]`
});

bot.command({
  name: "nitro",
  code: `$onlyIf[$channelID!=808993058845884416;]
<@$authorID>, sprawdź swoje DM!`
});

bot.command({
  name: "steam",
  code: `$dm
$onlyIf[$channelID!=808993058845884416;]
$color[1e298c]
$thumbnail[https://cdn.discordapp.com/attachments/847798848319520798/847800929885356072/matlbot.png]
$author[M a t l B o t;https://cdn.discordapp.com/attachments/847798848319520798/847800929885356072/matlbot.png]
$description[Dołącz na nasz serwer dev!
[Kliknij, aby dołączyć\\](https://discord.gg/86XgKj3Cu2)


**Oto lista kodów. Przypominamy, że nie wszystkie mogą działać!**

Steam:
**<:steam:847805431287513128> Kod**
$randomString[5]-$randomString[5]-$randomString[5]
**<:steam:847805431287513128> Kod**
$randomString[5]-$randomString[5]-$randomString[5]
**<:steam:847805431287513128> Kod**
$randomString[5]-$randomString[5]-$randomString[5]
**<:steam:847805431287513128> Kod**
$randomString[5]-$randomString[5]-$randomString[5]
**<:steam:847805431287513128> Kod**
$randomString[5]-$randomString[5]-$randomString[5]
**<:steam:847805431287513128> Kod**
$randomString[5]-$randomString[5]-$randomString[5]
**<:steam:847805431287513128> Kod**
$randomString[5]-$randomString[5]-$randomString[5]
**<:steam:847805431287513128> Kod**
$randomString[5]-$randomString[5]-$randomString[5]
**<:steam:847805431287513128> Kod**
$randomString[5]-$randomString[5]-$randomString[5]
**<:steam:847805431287513128> Kod**
$randomString[5]-$randomString[5]-$randomString[5]]`
});

bot.command({
  name: "steam",
  code: `$onlyIf[$channelID!=808993058845884416;]
<@$authorID>, sprawdź swoje DM!`
});

bot.command({
  name: "gp",
  code: `$onlyIf[$channelID!=808993058845884416;]
$dm
$color[1e298c]
$thumbnail[https://cdn.discordapp.com/attachments/847798848319520798/847800929885356072/matlbot.png]
$author[M a t l B o t;https://cdn.discordapp.com/attachments/847798848319520798/847800929885356072/matlbot.png]
$description[Dołącz na nasz serwer dev!
[Kliknij, aby dołączyć\\](https://discord.gg/86XgKj3Cu2)


**Oto lista kodów. Przypominamy, że nie wszystkie mogą działać!**

Google Play:
**<:google:847808369971953684>  Kod**
$randomString[4] $randomString[4] $randomString[4]
**<:google:847808369971953684>  Kod**
$randomString[4] $randomString[4] $randomString[4]
**<:google:847808369971953684>  Kod**
$randomString[4] $randomString[4] $randomString[4]
**<:google:847808369971953684>  Kod**
$randomString[4] $randomString[4] $randomString[4]
**<:google:847808369971953684>  Kod**
$randomString[4] $randomString[4] $randomString[4]
**<:google:847808369971953684>  Kod**
$randomString[4] $randomString[4] $randomString[4]
**<:google:847808369971953684>  Kod**
$randomString[4] $randomString[4] $randomString[4]
**<:google:847808369971953684>  Kod**
$randomString[4] $randomString[4] $randomString[4]
**<:google:847808369971953684>  Kod**
$randomString[4] $randomString[4] $randomString[4]
**<:google:847808369971953684>  Kod**
$randomString[4] $randomString[4] $randomString[4]]`
});

bot.command({
  name: "gp",
  code: `$onlyIf[$channelID!=808993058845884416;]
<@$authorID>, sprawdź swoje DM!`
});

bot.command({
  name: "all",
  code: `$onlyIf[$channelID!=808993058845884416;]
$dm
$color[1e298c]
$thumbnail[https://cdn.discordapp.com/attachments/847798848319520798/847800929885356072/matlbot.png]
$author[M a t l B o t;https://cdn.discordapp.com/attachments/847798848319520798/847800929885356072/matlbot.png]
$description[Dołącz na nasz serwer dev!
[Kliknij, aby dołączyć\\](https://discord.gg/86XgKj3Cu2)


**Oto lista kodów. Przypominamy, że nie wszystkie mogą działać!**

All:
**<:psc:847804787294339085> Kod PSC**
0$random[100000000000000;999999999999999]
**<:psc:847804787294339085> Kod PSC**
0$random[100000000000000;999999999999998]
**<:discord_nitro:847801452515950612>  Kod Nitro**
https://discord.gift/$randomString[10]$randomString[6]
**<:discord_nitro:847801452515950612>  Kod Nitro**
https://discord.gift/$randomString[10]$randomString[6]
**<:steam:847805431287513128>  Kod Steam**
$randomString[5]-$randomString[5]-$randomString[5]
**<:steam:847805431287513128>  Kod Steam**
$randomString[5]-$randomString[5]-$randomString[5]
**<:google:847808369971953684>  Kod Google Play**
$randomString[4] $randomString[4] $randomString[4]
**<:google:847808369971953684>  Kod Google Play**
$randomString[4] $randomString[4] $randomString[4]]`
});

bot.command({
  name: "all",
  code: `$onlyIf[$channelID!=808993058845884416;]
<@$authorID>, sprawdź swoje DM!`
});

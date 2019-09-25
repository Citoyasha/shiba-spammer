var Discord = require("discord.js");
var axios = require("axios");
const fs = require("fs");
const path = require("path");
var bot = new Discord.Client();
const token = require(__dirname+'\\TOKEN.json');

bot.on('message', message => {

  var mes = message.content.split(' ');
  var i = 0;
  const URL = 'http://shibe.online/api/shibes?count=1';
  function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};
  function emsg(x){
    const embed = {
      "image": {
        "url": x
      }
   }
   message.channel.startTyping(1);
   message.channel.send({embed});
 };
  function Loop (x) {
   setTimeout(function () {
     axios.get(URL)
     .then((data)=>{emsg(data.data[0])})
     .catch((err)=>{console.log(err)});

     i++;
      if (i < x) {
         Loop(x);
      }
   }, 5000+getRandomInt(1000))
}
  if (message.content.startsWith("shiba")) {
    message.delete();
    Loop(mes[1])
  };

});

bot.on('ready', () => {

    console.log(`Ready to spam `);

});
bot.login(token.TOKEN)
.then(console.log(":^)"))
.catch(console.error);

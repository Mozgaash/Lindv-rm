const Discord = require('discord.js');

const prefix = '!'



const client = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
  });

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("El bot está despierto, cuidado !")
})

client.on('message', async (message)  => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    /* if(command === 'clear') {
      await message.channel.messages.fetch({limit: 100}).then(messages => {
        // Discord por defecto ha desactivado en la api el poder borrar mensajes que hayan sido enviados hace 14 dias o mas
        // Para evitar que nos salte el throw y pete la aplicación, añadimos el segundo parámetro en true, y asi no nos devuelve el error y el bot sigue funcionando
        message.channel.bulkDelete(messages, true);
    });
    } */

    if(command === 'roles1') {
      let embed1 = new Discord.MessageEmbed()
        .setColor("#e42643")
        .setTitle("Reglas del servidor")
        .setDescription(
          "Reglas que deben de respetarse tanto en el discord como dentro del juego !\n\n"
        )
        .addFields(
          {name: "Norma 1:", value: "Respetar a este bot por encima de todos vosotros"},
          {name: "Norma 2:", value: "Utilizar correctamente los canales de texto y voz, según su función"},
          {name: "Norma 3:", value: "No subir contenido NSFW de ningún tipo"},
          {name: "Norma 4:", value: "Reportar cualquier problema o fallo en el servidor y del servidor a los moderadores"},
          {name: "Norma 5:", value: "No enviar comentarios racistas ni homófobos"},
          {name: "Norma 6:", value: "JAMÁS hacerle daño a una mujer"},
          {name: "Norma 7:", value: "Divertirse !"}
        );
/*
      

      let embed3 = new Discord.MessageEmbed()
        .setColor("#e42643")
        .setTitle("Escribe/selecciona el rol de tu personaje!")
        .setDescription("Escribe a qué rol perteneces o reacciona en su emote para futuras raids/mazmorras/arenas !\n\n")
        .addFields(
          {name: "DPS :crossed_swords:", value: ""},
          {name: "Tank :shield:", value: ""},
          {name: "Healer :syringe:", value: ""},
        ); */
        let messageEmbed1 = await message.channel.send(embed1);
        messageEmbed1.react('👍');
      //message.channel.send(embed2);
      //message.channel.send(embed3);
    } else if(command === 'roles2') {
      let embed2 = new Discord.MessageEmbed()
      .setColor("#e42643")
      .setTitle("Escribe/selecciona tu clase del wow!")
      .setDescription("Reacciona al emote de tu clase en el wow y asi podrás ver los canales respectivos a ella !\n\n" +
      "Guerrero :muscle: \n\n" +
      "Paladín :rainbow: \n\n" +
      "Pícaro :dagger: \n\n" +
      "Cazador :bow_and_arrow: \n\n" +
      "Sacerdote :ambulance: \n\n" +
      "Druida :lion_face: \n\n" +
      "Chamán :zap: \n\n" +
      "Mago :man_mage: \n\n" +
      "Brujo :woman_mage: \n\n"
      );
      let messageEmbed2 = await message.channel.send(embed2);
      messageEmbed2.react('💪');
      messageEmbed2.react('🌈');
      messageEmbed2.react('🗡️');
      messageEmbed2.react('🏹');
      messageEmbed2.react('🚑');
      messageEmbed2.react('🦁');
      messageEmbed2.react('⚡');
      messageEmbed2.react('🧙‍♂️');
      messageEmbed2.react('🧙‍♀️');
    } else if(command === 'roles3') {
      let embed3 = new Discord.MessageEmbed()
      .setColor("#e42643")
      .setTitle("Selecciona el rol de tu personaje!")
      .setDescription("Elige el rol que desempeña tu personaje para futuras raids/mazmorras/arenas !\n\n" +
      "Dps :crossed_swords: \n" +
      "Tank :shield: \n" + 
      "Healer :syringe: \n"
      );
      let messageEmbed3 = await message.channel.send(embed3);
      messageEmbed3.react('⚔️');
      messageEmbed3.react('🛡️');
      messageEmbed3.react('💉');
    }
    
});

client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.message.fetch();
  if (user.bot) return;
  if (!reaction.message.guild) return;

  if (reaction.message.channel.name === "elige-tu-clase") {
    if(reaction.emoji.name === "💪") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("863816777943220254");
    } else if(reaction.emoji.name === "🌈") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("863846631602389002");
    } else if(reaction.emoji.name === "🗡️") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("863847185866424370");
    } else if(reaction.emoji.name === "🏹") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("863846386037686272");
    } else if(reaction.emoji.name === "🚑") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("863846537678815232");
    } else if(reaction.emoji.name === "🦁") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("863846990017200198");
    } else if(reaction.emoji.name === "⚡") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("863847070292377611");
    } else if(reaction.emoji.name === "🧙‍♂️") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("863846876733636628");
    } else if(reaction.emoji.name === "🧙‍♀️") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("863844144677650432");
    } else if(reaction.emoji.name === "⚔️") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("863847663106916354");
    } else if(reaction.emoji.name === "🛡️") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("863847767512186892");
    } else if(reaction.emoji.name === "💉") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("863847814940590080");
    } 
  }
  else {
      return;
  }
});
client.on('messageReactionRemove', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.message.fetch();
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.channel.name === "elige-tu-clase") {
    if(reaction.emoji.name === "💪") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("863816777943220254");
    } else if(reaction.emoji.name === "🌈") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("863846631602389002");
    } else if(reaction.emoji.name === "🗡️") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("863847185866424370");
    } else if(reaction.emoji.name === "🏹") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("863846386037686272");
    } else if(reaction.emoji.name === "🚑") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("863846537678815232");
    } else if(reaction.emoji.name === "🦁") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("863846990017200198");
    } else if(reaction.emoji.name === "⚡") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("863847070292377611");
    } else if(reaction.emoji.name === "🧙‍♂️") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("863846876733636628");
    } else if(reaction.emoji.name === "🧙‍♀️") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("863844144677650432");
    } else if(reaction.emoji.name === "⚔️") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("863847663106916354");
    } else if(reaction.emoji.name === "🛡️") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("863847767512186892");
    } else if(reaction.emoji.name === "💉") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("863847814940590080");
    } 
  }
  else {
      return;
  }
});
/*
client.on('message', message => {
    //let rolGuerrero = message.guild.roles.cache.find(r => r.name === "guerrero");
    // Checkeamos si se ha escrito en el canal de texto de seleccionar los roles
    const class_channel = 863745153226768384;
    let user_channel = message.channel.id;
    let messageUser = message.guild.members.cache.get(message.author.id);
    if(user_channel != class_channel) return
    else { 
      if(message.content.toLowerCase() == "guerrero") {
        if (!message.member.roles.cache.some(role => role.name === 'Guerrero')) {
          messageUser.roles.add(message.guild.roles.cache.find(r => r.name === "Guerrero"));
          message.delete();
        }
        else {
          messageUser.roles.remove(message.guild.roles.cache.find(r => r.name === "Guerrero"));
          message.delete();
        }
      } 
      else if(message.content.toLowerCase() == "paladin" || message.content.toLowerCase() == "paladín") {
        if (!message.member.roles.cache.some(role => role.name === 'Paladín')) {
          messageUser.roles.add(message.guild.roles.cache.find(r => r.name === "Paladín"));
          message.delete();
        } 
        else {
          messageUser.roles.remove(message.guild.roles.cache.find(r => r.name === "Paladín"));
          message.delete();
        }
      }
      else if(message.content.toLowerCase() == "picaro" || message.content.toLowerCase() == "pícaro") {
        if (!message.member.roles.cache.some(role => role.name === 'Pícaro')) {
          messageUser.roles.add(message.guild.roles.cache.find(r => r.name === "Pícaro"));
          message.delete();
        }
        else {
          messageUser.roles.remove(message.guild.roles.cache.find(r => r.name === "Pícaro"));
          message.delete();
        }
      }
      else if(message.content.toLowerCase() == "sacerdote") {
        if (!message.member.roles.cache.some(role => role.name === 'Sacerdote')) {
          messageUser.roles.add(message.guild.roles.cache.find(r => r.name === "Sacerdote"));
          message.delete();
        }
        else {
          messageUser.roles.remove(message.guild.roles.cache.find(r => r.name === "Sacerdote"));
          message.delete();
        }
      }
      else if(message.content.toLowerCase() == "mago") {
        if (!message.member.roles.cache.some(role => role.name === 'Mago')) {
          messageUser.roles.add(message.guild.roles.cache.find(r => r.name === "Mago"));
          message.delete();
        }
        else {
          messageUser.roles.remove(message.guild.roles.cache.find(r => r.name === "Mago"));
          message.delete();
        }
      }
      else if(message.content.toLowerCase() == "brujo") {
        if (!message.member.roles.cache.some(role => role.name === 'Brujo')) {
          messageUser.roles.add(message.guild.roles.cache.find(r => r.name === "Brujo"));
          message.delete();
        }
        else {
          messageUser.roles.remove(message.guild.roles.cache.find(r => r.name === "Brujo"));
          message.delete();
        }
      }
      else if(message.content.toLowerCase() == "chaman" || message.content.toLowerCase() == "chamán") {
        if (!message.member.roles.cache.some(role => role.name === 'Chamán')) {
          messageUser.roles.add(message.guild.roles.cache.find(r => r.name === "Chamán"));
          message.delete();
        }
        else {
          messageUser.roles.remove(message.guild.roles.cache.find(r => r.name === "Chamán"));
          message.delete();
        }
      }
      else if(message.content.toLowerCase() == "druida") {
        if (!message.member.roles.cache.some(role => role.name === 'Druida')) {
          messageUser.roles.add(message.guild.roles.cache.find(r => r.name === "Druida"));
          message.delete();
        }
        else {
          messageUser.roles.remove(message.guild.roles.cache.find(r => r.name === "Druida"));
          message.delete();
        }
      }
      else if(message.content.toLowerCase() == "cazador") {
        if (!message.member.roles.cache.some(role => role.name === 'Cazador')) {
          messageUser.roles.add(message.guild.roles.cache.find(r => r.name === "Cazador"));
          message.delete();
        }
        else {
          messageUser.roles.remove(message.guild.roles.cache.find(r => r.name === "Cazador"));
          message.delete();
        }
      }
      else if(message.content.toLowerCase() == "dps") {
        if (!message.member.roles.cache.some(role => role.name === 'DPS')) {
          messageUser.roles.add(message.guild.roles.cache.find(r => r.name === "DPS"));
          message.delete();
        }
        else {
          messageUser.roles.remove(message.guild.roles.cache.find(r => r.name === "DPS"));
          message.delete();
        }
      }
      else if(message.content.toLowerCase() == "tank") {
        if (!message.member.roles.cache.some(role => role.name === 'TANK')) {
          messageUser.roles.add(message.guild.roles.cache.find(r => r.name === "TANK"));
          message.delete();
        }
        else {
          messageUser.roles.remove(message.guild.roles.cache.find(r => r.name === "TANK"));
          message.delete();
        }
      }
      else if(message.content.toLowerCase() == "healer") {
        if (!message.member.roles.cache.some(role => role.name === 'HEALER')) {
          messageUser.roles.add(message.guild.roles.cache.find(r => r.name === "HEALER"));
          message.delete();
        }
        else {
          messageUser.roles.remove(message.guild.roles.cache.find(r => r.name === "HEALER"));
          message.delete();
        }
      }
    }
})*/


client.login('ODYzMzc5NjY0OTgyNjM4NjAy.YOmC-A.latY7HTW3pFYnq6Z99Hn27bAJOI');
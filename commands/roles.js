module.exports = {
    name: "roles",
    description: "Otorgar rol según tu clase del wow",
    execute(message, args, client, Discord) {

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
        )

      let embed2 = new Discord.MessageEmbed()
        .setColor("#e42643")
        .setTitle("Escribe/selecciona tu clase del wow!")
        .setDescription("Escribe la clase del wow de tu personaje o personajes, o reacciona en su emote y asi podrás ver los canales respectivos a ella !\n\n")
        .addFields(
          {name: "Guerrero :muscle:", value: ""},
          {name: "Paladín :rainbow:", value: ""},
          {name: "Pícaro :dagger:", value: ""},
          {name: "Cazador :bow_and_arrow:", value: ""},
          {name: "Sacerdote :ambulance:", value: ""},
          {name: "Druida :lion_face:", value: ""},
          {name: "Chamán :zap:", value: ""},
          {name: "Mago :man_mage:", value: ""},
          {name: "Brujo :woman_mage:", value: ""},
        )

      let embed3 = new Discord.MessageEmbed()
        .setColor("#e42643")
        .setTitle("Escribe/selecciona el rol de tu personaje!")
        .setDescription("Escribe a qué rol perteneces o reacciona en su emote para futuras raids/mazmorras/arenas !\n\n")
        .addFields(
          {name: "DPS :crossed_swords:", value: ""},
          {name: "Tank :shield:", value: ""},
          {name: "Healer :syringe:", value: ""},
        )
      message.channel.send(embed1, embed2, embed3);
    },
  };
  
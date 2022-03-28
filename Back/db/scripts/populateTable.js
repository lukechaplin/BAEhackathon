import query from "../connection.js";

const plantsData = [
{name:"Snake Plant",
image:"https://ik.imagekit.io/wletmmv9huf/plants/snake_J3AX9v_xN.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648473082870",
watering:"Fornightly",
sunlight:"Low light to bright direct sun",
description:"If a prize were available for the most tolerant plant, snake plant (Sansevieria) would certainly be one of the frontrunners. Snake plant care is very straightforward. These plants can be neglected for weeks at a time; yet, with their strappy leaves and architectural shape, they still look fresh. Additionally, they can survive low light levels, drought and have few insect problems. NASA research has even shown that snake plants are able to help keep the air inside your home clean, removing toxins such as formaldehyde and benzene. In short, they are the perfect houseplants"},
{name:"Spider Plant",
image:"https://ik.imagekit.io/wletmmv9huf/plants/spider_RC7ALi9NY.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648473083042",
watering:"Weekly",
sunlight:"Bright indirect light",
description:"The spider plant (Chlorophytum comosum) is considered one of the most adaptable of houseplants and the easiest to grow. This plant can grow in a wide range of conditions and suffers from few problems, other than brown tips. The spider plant is so named because of its spider-like plants, or spiderettes, which dangle down from the mother plant like spiders on a web. Available in green or variegated varieties, these spiderettes often start out as small white flowers."},
{name:"Tradescantia Zebrina",
image:"https://ik.imagekit.io/wletmmv9huf/plants/tradescantia_WzpvJYjM9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648473083286",
watering:"Weekly",
sunlight:"Bright indirect light",
description:"One of the most striking indoor foliage plants, the fast-growing Tradescantia zebrina (also known as Inch Plant) is a delight to grow and propagate. The iridescent purple and silvery leaves are stunning and grow in abundance if you can keep the plant happy! Tradescantia zebrina prefers a fairly evenly moist potting mix. These plants are particularly sensitive to extremes when it comes to soil moisture. Avoid allowing the plant to dry out at all cost. if you do this, your plant will very rapidly decline with many of the lower leaves yellowing and then turning brown and crispy."},
{name:"Pothos",
image:"https://ik.imagekit.io/wletmmv9huf/plants/pothos_05PWzGJE5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648473082902",
watering:"Every 1-2 Weeks",
sunlight:"Low light, indirect",
description:"The pothos plant is considered by many to be a great way to get started caring for houseplants. Since pothos care is easy and undemanding, this lovely plant is an easy way to add some green in your home. If the leaves are wilting or turning brown, you should water the plant more often. If the leaves are yellow, you may be watering it too much. Excessive watering may cause root rot."},
{name:"Monstera",
image:"https://ik.imagekit.io/wletmmv9huf/plants/monstera_9KnyKV8pf.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648473082930",
watering:"Every 1-2 Weeks",
sunlight:"Low light or bright, indirect light",
description:"Monsteras are unique, easygoing houseplants whose dramatic leaves are adorned with dramatic hole formations. Monsteras are vining plants and love to trail over the pot or climb along a stake or trellis. This plant will thrive in almost any environment, but if you want to give it a special treat, gently mist it once a week using a Mister. It’s best to mist your Monstera in the morning so the water has plenty of time to evaporate before evening."},
]

async function populatePlantsTable() {
    for (let i = 0; i < plantsData.length; i++) {
      const name = plantsData[i].name;
      const image = plantsData[i].image;
      const watering = plantsData[i].watering;
      const sunlight = plantsData[i].sunlight;
      const description = plantsData[i].description;
      const res = await query(
        `INSERT INTO plants (name, image, watering, sunlight, description) VALUES($1,$2,$3,$4,$5)`,[name, image, watering, sunlight, description]);
     }
  }
  
  populatePlantsTable();
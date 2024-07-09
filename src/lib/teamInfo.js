import redbull from "../assets/red-bull-racing.avif";
import ferrari from "../assets/ferrari.avif";
import mclaren from "../assets/mclaren.avif";
import mercedes from "../assets/mercedes.avif";
import astonmartin from "../assets/aston-martin.avif";
import rb from "../assets/rb.avif";
import haas from "../assets/haas.avif";
import alpine from "../assets/alpine.avif";
import williams from "../assets/williams.avif";
import sauber from "../assets/kick-sauber.avif";

import redbullLogo from "../assets/team_logo/red-bull-racing-logo.png";
import ferrariLogo from "../assets/team_logo/ferrari-logo.png";
import mclarenLogo from "../assets/team_logo/mclaren-logo.png";
import mercedesLogo from "../assets/team_logo/mercedes-logo.png";
import astonmartinLogo from "../assets/team_logo/aston-martin-logo.png";
import rbLogo from "../assets/team_logo/rb-logo.png";
import haasLogo from "../assets/team_logo/haas-logo.png";
import alpineLogo from "../assets/team_logo/alpine-logo.png";
import williamsLogo from "../assets/team_logo/williams-logo.png";
import sauberLogo from "../assets/team_logo/kick-sauber-logo.png";

const teams = [
  {
    id: 1,
    name: "RedBull",
    rank: 1,
    logo: redbullLogo,
    driverName1: "Max VERSTAPPEN",
    driverProfile1: "./src/assets/player/maxver01.png",
    driverName2: "Sergio PEREZ",
    driverProfile2: "./src/assets/player/serper01.png",
    imageUrl: redbull,
    teamColor: "rgb(54 113 198 / 1)",
  },
  {
    id: 2,
    name: "Ferrari",
    rank: 2,
    logo: ferrariLogo,
    driverName1: "Charles LECLERC",
    driverProfile1: "./src/assets/player/chalec01.png",
    driverName2: "Carlos SAINZ",
    driverProfile2: "./src/assets/player/carsai01.png",
    imageUrl: ferrari,
    teamColor: "rgb(232 0 32 /1)",
  },
  {
    id: 3,
    name: "Mclaren",
    rank: 3,
    logo: mclarenLogo,
    driverName1: "Lando NORRIS",
    driverProfile1: "./src/assets/player/lannor01.png",
    driverName2: "Oscar PIASTRI",
    driverProfile2: "./src/assets/player/oscpia01.png",
    imageUrl: mclaren,
    teamColor: "rgb(255 128 0 /1)",
  },
  {
    id: 4,
    name: "Mercedes",
    rank: 4,
    logo: mercedesLogo,
    driverName1: "Lewis HAMILTON",
    driverProfile1: "./src/assets/player/lewham01.png",
    driverName2: "George RUSSELL",
    driverProfile2: "./src/assets/player/georus01.png",
    imageUrl: mercedes,
    teamColor: "rgb(39 244 210/1)",
  },
  {
    id: 5,
    name: "Aston Martin",
    rank: 5,
    logo: astonmartinLogo,
    driverName1: "Fernando ALONSO",
    driverProfile1: "./src/assets/player/feralo01.png",
    driverName2: "Lance STROLL",
    driverProfile2: "./src/assets/player/lanstr01.png",
    imageUrl: astonmartin,
    teamColor: "rgb(34 153 113/1)",
  },
  {
    id: 6,
    name: "RB",
    rank: 6,
    logo: rbLogo,
    driverName1: "Yuki TSUNODA",
    driverProfile1: "./src/assets/player/yuktsu01.png",
    driverName2: "Daniel RICCIARDO",
    driverProfile2: "./src/assets/player/danric01.png",
    imageUrl: rb,
    teamColor: "rgb(102 146 255/1)",
  },
  {
    id: 7,
    name: "Haas",
    rank: 7,
    logo: haasLogo,
    driverName1: "Nico HULKENBERG",
    driverProfile1: "./src/assets/player/nichul01.png",
    driverName2: "Kevin MAGNUSSEN",
    driverProfile2: "./src/assets/player/kevmag01.png",
    imageUrl: haas,
    teamColor: "rgb(182 186 189 /1)",
  },
  {
    id: 8,
    name: "Alpine",
    rank: 8,
    logo: alpineLogo,
    driverName1: "Pierre GASLY",
    driverProfile1: "./src/assets/player/piegas01.png",
    driverName2: "Esteban OCON",
    driverProfile2: "./src/assets/player/estoco01.png",
    imageUrl: alpine,
    teamColor: "rgb(0 147 204 / 1)",
  },
  {
    id: 9,
    name: "Williams",
    rank: 9,
    logo: williamsLogo,
    driverName1: "Alexander ALBON",
    driverProfile1: "./src/assets/player/alealb01.png",
    driverName2: "Logan SARGEANT",
    driverProfile2: "./src/assets/player/logsar01.png",
    imageUrl: williams,
    teamColor: "rgb(100 196 255  / 1)",
  },
  {
    id: 10,
    name: "Kick Sauber",
    rank: 10,
    logo: sauberLogo,
    driverName1: "Valtteri BOTTAS",
    driverProfile1: "./src/assets/player/valbot01.png",
    driverName2: "ZHOU Guanyu",
    driverProfile2: "./src/assets/player/guazho01.png",
    imageUrl: sauber,
    teamColor: "rgb(82 226 82 /1)",
  },
];

export default teams;

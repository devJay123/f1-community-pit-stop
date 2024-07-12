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

import maxver01 from "../assets/player/maxver01.png";
import alealb01 from "../assets/player/alealb01.png";
import carsai01 from "../assets/player/carsai01.png";
import chalec01 from "../assets/player/chalec01.png";
import estoco01 from "../assets/player/estoco01.png";
import feralo01 from "../assets/player/feralo01.png";
import georus01 from "../assets/player/georus01.png";
import guazho01 from "../assets/player/guazho01.png";
import kevmag01 from "../assets/player/kevmag01.png";
import lannor01 from "../assets/player/lannor01.png";
import lanstr01 from "../assets/player/lanstr01.png";
import lewham01 from "../assets/player/lewham01.png";
import logsar01 from "../assets/player/logsar01.png";
import nichul01 from "../assets/player/nichul01.png";
//import olibea01 from "../assets/player/olibea01.png";
import oscpia01 from "../assets/player/oscpia01.png";
import valbot01 from "../assets/player/valbot01.png";
import yuktsu01 from "../assets/player/yuktsu01.png";
import danric01 from "../assets/player/danric01.png";
import serper01 from "../assets/player/serper01.png";
import piegas01 from "../assets/player/piegas01.png";

const teams = [
  {
    id: 1,
    name: "RedBull",
    rank: 1,
    logo: redbullLogo,
    driverName1: "Max VERSTAPPEN",
    driverProfile1: maxver01,
    driverName2: "Sergio PEREZ",
    driverProfile2: serper01,
    imageUrl: redbull,
    teamColor: "rgb(54 113 198 / 1)",
  },
  {
    id: 2,
    name: "Ferrari",
    rank: 2,
    logo: ferrariLogo,
    driverName1: "Charles LECLERC",
    driverProfile1: chalec01,
    driverName2: "Carlos SAINZ",
    driverProfile2: carsai01,
    imageUrl: ferrari,
    teamColor: "rgb(232 0 32 /1)",
  },
  {
    id: 3,
    name: "Mclaren",
    rank: 3,
    logo: mclarenLogo,
    driverName1: "Lando NORRIS",
    driverProfile1: lannor01,
    driverName2: "Oscar PIASTRI",
    driverProfile2: oscpia01,
    imageUrl: mclaren,
    teamColor: "rgb(255 128 0 /1)",
  },
  {
    id: 4,
    name: "Mercedes",
    rank: 4,
    logo: mercedesLogo,
    driverName1: "Lewis HAMILTON",
    driverProfile1: lewham01,
    driverName2: "George RUSSELL",
    driverProfile2: georus01,
    imageUrl: mercedes,
    teamColor: "rgb(39 244 210/1)",
  },
  {
    id: 5,
    name: "Aston Martin",
    rank: 5,
    logo: astonmartinLogo,
    driverName1: "Fernando ALONSO",
    driverProfile1: feralo01,
    driverName2: "Lance STROLL",
    driverProfile2: lanstr01,
    imageUrl: astonmartin,
    teamColor: "rgb(34 153 113/1)",
  },
  {
    id: 6,
    name: "RB",
    rank: 6,
    logo: rbLogo,
    driverName1: "Yuki TSUNODA",
    driverProfile1: yuktsu01,
    driverName2: "Daniel RICCIARDO",
    driverProfile2: danric01,
    imageUrl: rb,
    teamColor: "rgb(102 146 255/1)",
  },
  {
    id: 7,
    name: "Haas",
    rank: 7,
    logo: haasLogo,
    driverName1: "Nico HULKENBERG",
    driverProfile1: nichul01,
    driverName2: "Kevin MAGNUSSEN",
    driverProfile2: kevmag01,
    imageUrl: haas,
    teamColor: "rgb(182 186 189 /1)",
  },
  {
    id: 8,
    name: "Alpine",
    rank: 8,
    logo: alpineLogo,
    driverName1: "Pierre GASLY",
    driverProfile1: piegas01,
    driverName2: "Esteban OCON",
    driverProfile2: estoco01,
    imageUrl: alpine,
    teamColor: "rgb(0 147 204 / 1)",
  },
  {
    id: 9,
    name: "Williams",
    rank: 9,
    logo: williamsLogo,
    driverName1: "Alexander ALBON",
    driverProfile1: alealb01,
    driverName2: "Logan SARGEANT",
    driverProfile2: logsar01,
    imageUrl: williams,
    teamColor: "rgb(100 196 255  / 1)",
  },
  {
    id: 10,
    name: "Kick Sauber",
    rank: 10,
    logo: sauberLogo,
    driverName1: "Valtteri BOTTAS",
    driverProfile1: valbot01,
    driverName2: "ZHOU Guanyu",
    driverProfile2: guazho01,
    imageUrl: sauber,
    teamColor: "rgb(82 226 82 /1)",
  },
];

export default teams;

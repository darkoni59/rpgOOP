import * as readline from 'readline';
import Gentil from './classes/Personnages/Gentil'
import Mechant from './classes/Personnages/Mechant'

export default class Jeux {
    private _gentils: Array<Gentil>;
    private _mechants: Array<Mechant>;
  
    constructor(gentils = [], mechants = []) {
      this._gentils = gentils;
      this._mechants = mechants;
    }
  
    generateMonsters = () => {
      // TODO: generateMonsters function
    }
  }
  
  export const jeu = () => {
    console.log('Bienvenue jeune pirate');
  
    let rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.question('Créer un pirate ?  [o/n] ', (answer) => {
      switch (answer.toLowerCase()) {
        case 'o':
          characterCreation();
          break;
        case 'n':
          console.log('GO');
          break;
        default:
          console.log('Commande invalide !');
      }
      rl.close();
    });
  }
  
  const characterCreation = () => {
    let rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.question('Nom du personnage: ', (nom) => {
      console.log(nom);
      rl.close();
    });
  }
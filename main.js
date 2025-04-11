function sugerirMonstros(dificuldadeFinal, ambiente, lvlJogador, ideiaSelecionada) {
    var opcoes = [];

    opcoes.push({
      nome: "Aarakocra",
      tipo: "Humanoides",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 1,
      ambiente: ["Montanha", "Plano Elemental do Ar"],
      faixaDificuldade: { min: 80, max: 180 }
    });
    
    opcoes.push({
      nome: "Abocanhador Matraqueante",
      tipo: "Aberrações",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 2,
      ambiente: ["Masmo­rdas", "Dungeon", "Água"],
      faixaDificuldade: { min: 160, max: 260 }
    });
    
    opcoes.push({
      nome: "Abolete",
      tipo: "Aberrações",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 10,
      ambiente: ["Submerso", "Caverna", "Ruínas Antigas"],
      faixaDificuldade: { min: 800, max: 900 }
    });
    
    opcoes.push({
      nome: "Anjos",
      tipo: "Celestiais",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 10,
      ambiente: ["Céu", "Templos", "Cidades Celestiais"],
      faixaDificuldade: { min: 800, max: 900 }
    });
    
    opcoes.push({
      nome: "Ankheg",
      tipo: "Bestas Selvagens",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 3,
      ambiente: ["Subterrâneo", "Campo"],
      faixaDificuldade: { min: 240, max: 340 }
    });
    
    opcoes.push({
      nome: "Anomalia da Água",
      tipo: "Elementais",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 4,
      ambiente: ["Submerso", "Rios", "Oceanos"],
      faixaDificuldade: { min: 320, max: 420 }
    });
    
    opcoes.push({
      nome: "Aparição",
      tipo: "Mortos-Vivos",
      min: 1,
      max: 4,
      nivelMinimoRecomendado: 1,
      ambiente: ["Cemitério", "Cripta", "Ruínas Abandonadas"],
      faixaDificuldade: { min: 80, max: 180 }
    });
    
    opcoes.push({
      nome: "Arbusto Errante",
      tipo: "Plantas",
      min: 2,
      max: 5,
      nivelMinimoRecomendado: 1,
      ambiente: ["Floresta", "Pântano", "Jardim Mágico"],
      faixaDificuldade: { min: 80, max: 180 }
    });
    
    opcoes.push({
      nome: "Azer",
      tipo: "Elementais",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 3,
      ambiente: ["Fornalhas", "Volcões", "Templos do Fogo"],
      faixaDificuldade: { min: 240, max: 340 }
    });
    
    opcoes.push({
      nome: "Banshee",
      tipo: "Mortos-Vivos",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 5,
      ambiente: ["Cemitério", "Ruínas", "Castelos Assombrados"],
      faixaDificuldade: { min: 400, max: 500 }
    });
    
    opcoes.push({
      nome: "Basilisco",
      tipo: "Bestas Selvagens",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 3,
      ambiente: ["Caverna", "Deserto", "Ruínas"],
      faixaDificuldade: { min: 240, max: 340 }
    });
    
    opcoes.push({
      nome: "Behir",
      tipo: "Monstruosidades",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 10,
      ambiente: ["Montanha", "Caverna", "Templos Perdidos"],
      faixaDificuldade: { min: 800, max: 900 }
    });
    
    opcoes.push({
      nome: "Bruxas",
      tipo: "Humanoides",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 4,
      ambiente: ["Cidade", "Floresta", "Casas Abandonadas"],
      faixaDificuldade: { min: 320, max: 420 }
    });
    
    opcoes.push({
      nome: "Bugbears",
      tipo: "Humanoides",
      min: 1,
      max: 4,
      nivelMinimoRecomendado: 3,
      ambiente: ["Floresta", "Masmo­rdas", "Ruínas"],
      faixaDificuldade: { min: 240, max: 340 }
    });
    
    opcoes.push({
      nome: "Bulette",
      tipo: "Monstruosidades",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 6,
      ambiente: ["Deserto", "Campo Aberto", "Masmo­rdas"],
      faixaDificuldade: { min: 480, max: 580 }
    });
    
    opcoes.push({
      nome: "Bullywug",
      tipo: "Humanoides",
      min: 2,
      max: 6,
      nivelMinimoRecomendado: 2,
      ambiente: ["Pântano", "Lagos", "Rios"],
      faixaDificuldade: { min: 160, max: 260 }
    });
    
    opcoes.push({
      nome: "Caçador Invisível",
      tipo: "Monstruosidades",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 4,
      ambiente: ["Floresta", "Ruínas", "Dungeon"],
      faixaDificuldade: { min: 320, max: 420 }
    });
    
    opcoes.push({
      nome: "Cambion",
      tipo: "Humanoides",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 5,
      ambiente: ["Cidade", "Ruínas", "Ambientes Infernales"],
      faixaDificuldade: { min: 400, max: 500 }
    });
    
    opcoes.push({
      nome: "Cão Infernal",
      tipo: "Celestiais",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 4,
      ambiente: ["Inferno", "Ruínas", "Ambientes Sombrio"],
      faixaDificuldade: { min: 320, max: 420 }
    });
    
    opcoes.push({
      nome: "Carniçais",
      tipo: "Mortos-Vivos",
      min: 3,
      max: 8,
      nivelMinimoRecomendado: 1,
      ambiente: ["Cemitério", "Cripta", "Ruínas"],
      faixaDificuldade: { min: 80, max: 180 }
    });
    
    opcoes.push({
      nome: "Cavaleiro da Morte",
      tipo: "Mortos-Vivos",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 8,
      ambiente: ["Cemitério", "Castelos Abandonados"],
      faixaDificuldade: { min: 640, max: 740 }
    });
    
    opcoes.push({
      nome: "Caveira Flamejante",
      tipo: "Mortos-Vivos",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 2,
      ambiente: ["Cripta", "Ruínas", "Cemitério"],
      faixaDificuldade: { min: 160, max: 260 }
    });
    
    opcoes.push({
      nome: "Centauro",
      tipo: "Humanoides",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 3,
      ambiente: ["Floresta", "Campo Aberto"],
      faixaDificuldade: { min: 240, max: 340 }
    });
    
    opcoes.push({
      nome: "Chuul",
      tipo: "Aberrações",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 5,
      ambiente: ["Subterrâneo", "Pantano"],
      faixaDificuldade: { min: 400, max: 500 }
    });
    
    opcoes.push({
      nome: "Ciclope",
      tipo: "Gigantes",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 6,
      ambiente: ["Caverna", "Campo Aberto"],
      faixaDificuldade: { min: 480, max: 580 }
    });
    
    opcoes.push({
      nome: "Cocatriz",
      tipo: "Bestas Selvagens",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 2,
      ambiente: ["Dungeon", "Ruínas"],
      faixaDificuldade: { min: 160, max: 260 }
    });
    
    opcoes.push({
      nome: "Couatl",
      tipo: "Celestiais",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 8,
      ambiente: ["Floresta", "Templos", "Ambientes Místicos"],
      faixaDificuldade: { min: 640, max: 740 }
    });
    
    opcoes.push({
      nome: "Demilich",
      tipo: "Mortos-Vivos",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 12,
      ambiente: ["Dungeon", "Masmo­rdas"],
      faixaDificuldade: { min: 960, max: 1060 }
    });
    
    opcoes.push({
      nome: "Demônios",
      tipo: "Corruptores",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 7,
      ambiente: ["Inferno", "Ruínas", "Ambientes Infernales"],
      faixaDificuldade: { min: 560, max: 660 }
    });
    
    opcoes.push({
      nome: "Devorador de Intelecto",
      tipo: "Aberrações",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 10,
      ambiente: ["Dungeon", "Ruínas"],
      faixaDificuldade: { min: 800, max: 900 }
    });
    
    opcoes.push({
      nome: "Devorador de Mentes",
      tipo: "Aberrações",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 10,
      ambiente: ["Dungeon", "Ruínas"],
      faixaDificuldade: { min: 800, max: 900 }
    });
    
    opcoes.push({
      nome: "Diabos",
      tipo: "Corruptores",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 7,
      ambiente: ["Inferno", "Ruínas"],
      faixaDificuldade: { min: 560, max: 660 }
    });
    
    opcoes.push({
      nome: "Dinossauros",
      tipo: "Bestas Selvagens",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 5,
      ambiente: ["Selva", "Deserto"],
      faixaDificuldade: { min: 400, max: 500 }
    });
    
    opcoes.push({
      nome: "Dracolich",
      tipo: "Mortos-Vivos",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 15,
      ambiente: ["Dungeon", "Ruínas"],
      faixaDificuldade: { min: 1200, max: 1300 }
    });
    
    opcoes.push({
      nome: "Dragão das Sombras",
      tipo: "Dragões",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 12,
      ambiente: ["Montanha", "Ruínas"],
      faixaDificuldade: { min: 960, max: 1060 }
    });
    
    opcoes.push({
      nome: "Dragões",
      tipo: "Dragões",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 8,
      ambiente: ["Montanha", "Caverna", "Ruínas"],
      faixaDificuldade: { min: 640, max: 740 }
    });
    
    opcoes.push({
      nome: "Dragão-Fada",
      tipo: "Dragões",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 10,
      ambiente: ["Floresta", "Ambientes Místicos"],
      faixaDificuldade: { min: 800, max: 900 }
    });
    
    opcoes.push({
      nome: "Dríade",
      tipo: "Fadas",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 4,
      ambiente: ["Floresta", "Bosque Encantado"],
      faixaDificuldade: { min: 320, max: 420 }
    });
    
    opcoes.push({
      nome: "Drider",
      tipo: "Humanoides",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 7,
      ambiente: ["Caverna", "Dungeon"],
      faixaDificuldade: { min: 560, max: 660 }
    });
    
    opcoes.push({
      nome: "Duergar",
      tipo: "Humanoides",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 5,
      ambiente: ["Subterrâneo", "Cidade"],
      faixaDificuldade: { min: 400, max: 500 }
    });
    
    opcoes.push({
      nome: "Duplo",
      tipo: "Monstruosidades",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 6,
      ambiente: ["Dungeon", "Ruínas"],
      faixaDificuldade: { min: 480, max: 580 }
    });
    
    opcoes.push({
      nome: "Elementais",
      tipo: "Elementais",
      min: 1,
      max: 4,
      nivelMinimoRecomendado: 4,
      ambiente: ["Plano Elemental", "Caverna", "Rios"],
      faixaDificuldade: { min: 320, max: 420 }
    });
    
    opcoes.push({
      nome: "Elfos: Drow",
      tipo: "Humanoides",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 5,
      ambiente: ["Cidade", "Subterrâneo"],
      faixaDificuldade: { min: 400, max: 500 }
    });
    
    opcoes.push({
      nome: "Empírico",
      tipo: "Aberrações",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 10,
      ambiente: ["Dungeon", "Ruínas"],
      faixaDificuldade: { min: 800, max: 900 }
    });
    
    opcoes.push({
      nome: "Ente",
      tipo: "Plantas",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 6,
      ambiente: ["Floresta", "Bosque Encantado"],
      faixaDificuldade: { min: 480, max: 580 }
    });
    
    opcoes.push({
      nome: "Esfinges",
      tipo: "Monstruosidades",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 10,
      ambiente: ["Deserto", "Ruínas", "Cidades Antigas"],
      faixaDificuldade: { min: 800, max: 900 }
    });
    
    opcoes.push({
      nome: "Espantalho",
      tipo: "Mortos-Vivos",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 1,
      ambiente: ["Cemitério", "Ruínas"],
      faixaDificuldade: { min: 80, max: 180 }
    });
    
    opcoes.push({
      nome: "Espectro",
      tipo: "Mortos-Vivos",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 5,
      ambiente: ["Cemitério", "Ruínas", "Castelos Abandonados"],
      faixaDificuldade: { min: 400, max: 500 }
    });
    
    opcoes.push({
      nome: "Esqueletos",
      tipo: "Mortos-Vivos",
      min: 2,
      max: 8,
      nivelMinimoRecomendado: 1,
      ambiente: ["Cemitério", "Dungeon"],
      faixaDificuldade: { min: 80, max: 180 }
    });
    
    opcoes.push({
      nome: "Estrangulador",
      tipo: "Monstruosidades",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 4,
      ambiente: ["Dungeon", "Ruínas"],
      faixaDificuldade: { min: 320, max: 420 }
    });
    
    opcoes.push({
      nome: "Ettercap",
      tipo: "Aberrações",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 3,
      ambiente: ["Floresta", "Caverna"],
      faixaDificuldade: { min: 240, max: 340 }
    });
    
    opcoes.push({
      nome: "Ettin",
      tipo: "Gigantes",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 8,
      ambiente: ["Montanha", "Campo Aberto"],
      faixaDificuldade: { min: 640, max: 740 }
    });
    
    opcoes.push({
      nome: "Fantasma",
      tipo: "Mortos-Vivos",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 5,
      ambiente: ["Cemitério", "Castelos Abandonados"],
      faixaDificuldade: { min: 400, max: 500 }
    });
    
    opcoes.push({
      nome: "Flumph",
      tipo: "Aberrações",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 1,
      ambiente: ["Subterrâneo", "Dungeon"],
      faixaDificuldade: { min: 80, max: 180 }
    });
    
    opcoes.push({
      nome: "Fogo-Fátuo",
      tipo: "Elementais",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 2,
      ambiente: ["Templos", "Ruínas", "Volcões"],
      faixaDificuldade: { min: 160, max: 260 }
    });
    
    opcoes.push({
      nome: "Fomori",
      tipo: "Gigantes",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 7,
      ambiente: ["Campo Aberto", "Montanha"],
      faixaDificuldade: { min: 560, max: 660 }
    });
    
    opcoes.push({
      nome: "Fungos",
      tipo: "Plantas",
      min: 2,
      max: 5,
      nivelMinimoRecomendado: 1,
      ambiente: ["Caverna", "Floresta", "Dungeon"],
      faixaDificuldade: { min: 80, max: 180 }
    });
    
    opcoes.push({
      nome: "Galeb Duhr",
      tipo: "Elementais",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 5,
      ambiente: ["Caverna", "Subterrâneo"],
      faixaDificuldade: { min: 400, max: 500 }
    });
    
    opcoes.push({
      nome: "Gárgula",
      tipo: "Monstruosidades",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 4,
      ambiente: ["Catedrais", "Ruínas"],
      faixaDificuldade: { min: 320, max: 420 }
    });
    
    opcoes.push({
      nome: "Garra Rastejante",
      tipo: "Bestas Selvagens",
      min: 2,
      max: 4,
      nivelMinimoRecomendado: 3,
      ambiente: ["Campo", "Floresta"],
      faixaDificuldade: { min: 240, max: 340 }
    });
    
    opcoes.push({
      nome: "Génios",
      tipo: "Elementais",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 8,
      ambiente: ["Templos", "Ambientes Místicos"],
      faixaDificuldade: { min: 640, max: 740 }
    });
    
    opcoes.push({
      nome: "Gigantes",
      tipo: "Gigantes",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 10,
      ambiente: ["Montanha", "Campo Aberto"],
      faixaDificuldade: { min: 800, max: 900 }
    });
    
    opcoes.push({
      nome: "Gith",
      tipo: "Humanoides",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 7,
      ambiente: ["Subterrâneo", "Ruínas"],
      faixaDificuldade: { min: 560, max: 660 }
    });
    
    opcoes.push({
      nome: "Gnolls",
      tipo: "Humanoides",
      min: 2,
      max: 6,
      nivelMinimoRecomendado: 3,
      ambiente: ["Campo", "Floresta"],
      faixaDificuldade: { min: 240, max: 340 }
    });
    
    opcoes.push({
      nome: "Gnomo das Profundezas (Svirfneblin)",
      tipo: "Humanoides",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 4,
      ambiente: ["Subterrâneo", "Caverna"],
      faixaDificuldade: { min: 320, max: 420 }
    });
    
    opcoes.push({
      nome: "Goblins",
      tipo: "Humanoides",
      min: 3,
      max: 8,
      nivelMinimoRecomendado: 2,
      ambiente: ["Cidade", "Floresta"],
      faixaDificuldade: { min: 160, max: 260 }
    });
    
    opcoes.push({
      nome: "Golens",
      tipo: "Constructos",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 10,
      ambiente: ["Dungeon", "Ruínas"],
      faixaDificuldade: { min: 800, max: 900 }
    });
    
    opcoes.push({
      nome: "Gorgon",
      tipo: "Monstruosidades",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 9,
      ambiente: ["Dungeon", "Campo Aberto"],
      faixaDificuldade: { min: 720, max: 820 }
    });
    
    opcoes.push({
      nome: "Grell",
      tipo: "Aberrações",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 5,
      ambiente: ["Subterrâneo", "Dungeon"],
      faixaDificuldade: { min: 400, max: 500 }
    });
    
    opcoes.push({
      nome: "Grick",
      tipo: "Monstruosidades",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 7,
      ambiente: ["Caverna", "Dungeon"],
      faixaDificuldade: { min: 560, max: 660 }
    });
    
    opcoes.push({
      nome: "Grifo",
      tipo: "Bestas Selvagens",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 6,
      ambiente: ["Campo", "Montanha"],
      faixaDificuldade: { min: 480, max: 580 }
    });
    
    opcoes.push({
      nome: "Grimlock",
      tipo: "Humanoides",
      min: 1,
      max: 4,
      nivelMinimoRecomendado: 3,
      ambiente: ["Subterrâneo", "Caverna"],
      faixaDificuldade: { min: 240, max: 340 }
    });
    
    opcoes.push({
      nome: "Guardião do Escudo",
      tipo: "Monstruosidades",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 8,
      ambiente: ["Dungeon", "Ruínas"],
      faixaDificuldade: { min: 640, max: 740 }
    });
    
    opcoes.push({
      nome: "Harpia",
      tipo: "Monstruosidades",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 3,
      ambiente: ["Campo", "Floresta"],
      faixaDificuldade: { min: 240, max: 340 }
    });
    
    opcoes.push({
      nome: "Hidra",
      tipo: "Monstruosidades",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 10,
      ambiente: ["Pântano", "Campo Aberto"],
      faixaDificuldade: { min: 800, max: 900 }
    });
    
    opcoes.push({
      nome: "Hipogrifo",
      tipo: "Bestas Selvagens",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 4,
      ambiente: ["Campo", "Montanha"],
      faixaDificuldade: { min: 320, max: 420 }
    });
    
    opcoes.push({
      nome: "Hobgoblins",
      tipo: "Humanoides",
      min: 3,
      max: 8,
      nivelMinimoRecomendado: 3,
      ambiente: ["Cidade", "Campo"],
      faixaDificuldade: { min: 240, max: 340 }
    });
    
    opcoes.push({
      nome: "Homem Chacal",
      tipo: "Humanoides",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 3,
      ambiente: ["Floresta", "Ruínas"],
      faixaDificuldade: { min: 240, max: 340 }
    });
    
    opcoes.push({
      nome: "Homúnculo",
      tipo: "Constructos",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 2,
      ambiente: ["Laboratório", "Dungeon"],
      faixaDificuldade: { min: 160, max: 260 }
    });
    
    opcoes.push({
      nome: "Horror de Elmo",
      tipo: "Monstruosidades",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 6,
      ambiente: ["Dungeon", "Ruínas"],
      faixaDificuldade: { min: 480, max: 580 }
    });
    
    opcoes.push({
      nome: "Horror de Gancho",
      tipo: "Monstruosidades",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 6,
      ambiente: ["Dungeon", "Ruínas"],
      faixaDificuldade: { min: 480, max: 580 }
    });
    
    opcoes.push({
      nome: "Infectados",
      tipo: "Mortos-Vivos",
      min: 1,
      max: 4,
      nivelMinimoRecomendado: 1,
      ambiente: ["Cemitério", "Cripta"],
      faixaDificuldade: { min: 80, max: 180 }
    });
    
    opcoes.push({
      nome: "Inumano",
      tipo: "Humanoides",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 4,
      ambiente: ["Cidade", "Campo"],
      faixaDificuldade: { min: 320, max: 420 }
    });
    
    opcoes.push({
      nome: "Kenku",
      tipo: "Humanoides",
      min: 2,
      max: 6,
      nivelMinimoRecomendado: 2,
      ambiente: ["Cidade", "Ruínas"],
      faixaDificuldade: { min: 160, max: 260 }
    });
    
    opcoes.push({
      nome: "Kobolds",
      tipo: "Humanoides",
      min: 3,
      max: 8,
      nivelMinimoRecomendado: 1,
      ambiente: ["Dungeon", "Floresta"],
      faixaDificuldade: { min: 80, max: 180 }
    });
    
    opcoes.push({
      nome: "Kraken",
      tipo: "Monstruosidades",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 15,
      ambiente: ["Oceano", "Mar Aberto"],
      faixaDificuldade: { min: 1200, max: 1300 }
    });
    
    opcoes.push({
      nome: "Kuo-toa",
      tipo: "Humanoides",
      min: 2,
      max: 6,
      nivelMinimoRecomendado: 3,
      ambiente: ["Submerso", "Caverna"],
      faixaDificuldade: { min: 240, max: 340 }
    });
    
    opcoes.push({
      nome: "Lâmia",
      tipo: "Monstruosidades",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 5,
      ambiente: ["Deserto", "Ruínas"],
      faixaDificuldade: { min: 400, max: 500 }
    });
    
    opcoes.push({
      nome: "Licantropos",
      tipo: "Humanoides",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 4,
      ambiente: ["Floresta", "Cidade"],
      faixaDificuldade: { min: 320, max: 420 }
    });
    
    opcoes.push({
      nome: "Lich",
      tipo: "Mortos-Vivos",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 15,
      ambiente: ["Dungeon", "Ruínas"],
      faixaDificuldade: { min: 1200, max: 1300 }
    });
    
    opcoes.push({
      nome: "Limos",
      tipo: "Monstruosidades",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 1,
      ambiente: ["Caverna", "Dungeon"],
      faixaDificuldade: { min: 80, max: 180 }
    });
    
    opcoes.push({
      nome: "Magmin",
      tipo: "Elementais",
      min: 2,
      max: 5,
      nivelMinimoRecomendado: 2,
      ambiente: ["Volcão", "Templos do Fogo"],
      faixaDificuldade: { min: 160, max: 260 }
    });
    
    opcoes.push({
      nome: "Manticora",
      tipo: "Monstruosidades",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 6,
      ambiente: ["Deserto", "Ruínas"],
      faixaDificuldade: { min: 480, max: 580 }
    });
    
    opcoes.push({
      nome: "Manto Negro",
      tipo: "Mortos-Vivos",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 8,
      ambiente: ["Cemitério", "Dungeon"],
      faixaDificuldade: { min: 640, max: 740 }
    });
    
    opcoes.push({
      nome: "Mantor",
      tipo: "Humanoides",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 6,
      ambiente: ["Cidade", "Campo"],
      faixaDificuldade: { min: 480, max: 580 }
    });
    
    opcoes.push({
      nome: "Medusa",
      tipo: "Monstruosidades",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 8,
      ambiente: ["Ruínas", "Cidade Abandonada"],
      faixaDificuldade: { min: 640, max: 740 }
    });
    
    opcoes.push({
      nome: "Meio-Dragão",
      tipo: "Dragões",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 7,
      ambiente: ["Montanha", "Caverna"],
      faixaDificuldade: { min: 560, max: 660 }
    });
    
    opcoes.push({
      nome: "Mephits",
      tipo: "Elementais",
      min: 2,
      max: 4,
      nivelMinimoRecomendado: 2,
      ambiente: ["Volcão", "Templos"],
      faixaDificuldade: { min: 160, max: 260 }
    });
    
    opcoes.push({
      nome: "Miconides",
      tipo: "Monstruosidades",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 7,
      ambiente: ["Dungeon", "Ruínas"],
      faixaDificuldade: { min: 560, max: 660 }
    });
    
    opcoes.push({
      nome: "Mímico",
      tipo: "Monstruosidades",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 3,
      ambiente: ["Dungeon", "Ruínas"],
      faixaDificuldade: { min: 240, max: 340 }
    });
    
    opcoes.push({
      nome: "Minotauro",
      tipo: "Humanoides",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 5,
      ambiente: ["Dungeon", "Ruínas"],
      faixaDificuldade: { min: 400, max: 500 }
    });
    
    opcoes.push({
      nome: "Modrons",
      tipo: "Constructos",
      min: 2,
      max: 4,
      nivelMinimoRecomendado: 6,
      ambiente: ["Plano Elemental", "Caverna"],
      faixaDificuldade: { min: 480, max: 580 }
    });
    
    opcoes.push({
      nome: "Monstro da Ferrugem",
      tipo: "Monstruosidades",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 7,
      ambiente: ["Ruínas", "Dungeon"],
      faixaDificuldade: { min: 560, max: 660 }
    });
    
    opcoes.push({
      nome: "Múmias",
      tipo: "Mortos-Vivos",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 2,
      ambiente: ["Cemitério", "Cripta"],
      faixaDificuldade: { min: 160, max: 260 }
    });
    
    opcoes.push({
      nome: "Nagas",
      tipo: "Monstruosidades",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 7,
      ambiente: ["Deserto", "Ruínas"],
      faixaDificuldade: { min: 560, max: 660 }
    });
    
    opcoes.push({
      nome: "Nótico",
      tipo: "Mortos-Vivos",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 2,
      ambiente: ["Cemitério", "Cripta"],
      faixaDificuldade: { min: 160, max: 260 }
    });
    
    opcoes.push({
      nome: "Objetos Animados",
      tipo: "Constructos",
      min: 2,
      max: 5,
      nivelMinimoRecomendado: 1,
      ambiente: ["Dungeon", "Cidade"],
      faixaDificuldade: { min: 80, max: 180 }
    });
    
    opcoes.push({
      nome: "Observadores",
      tipo: "Aberrações",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 6,
      ambiente: ["Subterrâneo", "Céu"],
      faixaDificuldade: { min: 480, max: 580 }
    });
    
    opcoes.push({
      nome: "Ogros",
      tipo: "Humanoides",
      min: 2,
      max: 4,
      nivelMinimoRecomendado: 4,
      ambiente: ["Campo Aberto", "Floresta"],
      faixaDificuldade: { min: 320, max: 420 }
    });
    
    opcoes.push({
      nome: "Oni",
      tipo: "Humanoides",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 7,
      ambiente: ["Cidade", "Ruínas"],
      faixaDificuldade: { min: 560, max: 660 }
    });
    
    opcoes.push({
      nome: "Orcs",
      tipo: "Humanoides",
      min: 3,
      max: 6,
      nivelMinimoRecomendado: 2,
      ambiente: ["Campo", "Floresta"],
      faixaDificuldade: { min: 160, max: 260 }
    });
    
    opcoes.push({
      nome: "Otyugh",
      tipo: "Monstruosidades",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 5,
      ambiente: ["Caverna", "Dungeon"],
      faixaDificuldade: { min: 400, max: 500 }
    });
    
    opcoes.push({
      nome: "Pantera Deslocadora",
      tipo: "Bestas Selvagens",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 3,
      ambiente: ["Floresta", "Selva"],
      faixaDificuldade: { min: 240, max: 340 }
    });
    
    opcoes.push({
      nome: "Pégaso",
      tipo: "Celestiais",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 6,
      ambiente: ["Céu", "Campo Aberto"],
      faixaDificuldade: { min: 480, max: 580 }
    });
    
    opcoes.push({
      nome: "Perfurador",
      tipo: "Monstruosidades",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 7,
      ambiente: ["Dungeon", "Ruínas"],
      faixaDificuldade: { min: 560, max: 660 }
    });
    
    opcoes.push({
      nome: "Peryton",
      tipo: "Monstruosidades",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 5,
      ambiente: ["Campo Aberto", "Ruínas"],
      faixaDificuldade: { min: 400, max: 500 }
    });
    
    opcoes.push({
      nome: "Pesadelo",
      tipo: "Monstruosidades",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 6,
      ambiente: ["Dungeon", "Ruínas"],
      faixaDificuldade: { min: 480, max: 580 }
    });
    
    opcoes.push({
      nome: "Pixie",
      tipo: "Fadas",
      min: 2,
      max: 5,
      nivelMinimoRecomendado: 1,
      ambiente: ["Bosque Encantado", "Floresta"],
      faixaDificuldade: { min: 80, max: 180 }
    });
    
    opcoes.push({
      nome: "Povo do Mar",
      tipo: "Humanoides",
      min: 2,
      max: 4,
      nivelMinimoRecomendado: 3,
      ambiente: ["Oceano", "Costas"],
      faixaDificuldade: { min: 240, max: 340 }
    });
    
    opcoes.push({
      nome: "Povo Lagarto",
      tipo: "Humanoides",
      min: 2,
      max: 4,
      nivelMinimoRecomendado: 3,
      ambiente: ["Pântano", "Floresta"],
      faixaDificuldade: { min: 240, max: 340 }
    });
    
    opcoes.push({
      nome: "Pseudodragão",
      tipo: "Dragões",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 3,
      ambiente: ["Caverna", "Ruínas"],
      faixaDificuldade: { min: 240, max: 340 }
    });
    
    opcoes.push({
      nome: "Quaggoth",
      tipo: "Humanoides",
      min: 2,
      max: 5,
      nivelMinimoRecomendado: 4,
      ambiente: ["Caverna", "Ruínas"],
      faixaDificuldade: { min: 320, max: 420 }
    });
    
    opcoes.push({
      nome: "Quimera",
      tipo: "Monstruosidades",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 8,
      ambiente: ["Campo Aberto", "Ruínas"],
      faixaDificuldade: { min: 640, max: 740 }
    });
    
    opcoes.push({
      nome: "Rakshasa",
      tipo: "Corruptores",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 10,
      ambiente: ["Cidade", "Palácio"],
      faixaDificuldade: { min: 800, max: 900 }
    });
    
    opcoes.push({
      nome: "Remorhazes",
      tipo: "Monstruosidades",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 7,
      ambiente: ["Deserto", "Campo Aberto"],
      faixaDificuldade: { min: 560, max: 660 }
    });
    
    opcoes.push({
      nome: "Ressurgido",
      tipo: "Mortos-Vivos",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 9,
      ambiente: ["Cemitério", "Ruínas"],
      faixaDificuldade: { min: 720, max: 820 }
    });
    
    opcoes.push({
      nome: "Roca",
      tipo: "Monstruosidades",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 6,
      ambiente: ["Campo Aberto", "Montanha"],
      faixaDificuldade: { min: 480, max: 580 }
    });
    
    opcoes.push({
      nome: "Sahuagin",
      tipo: "Humanoides",
      min: 3,
      max: 6,
      nivelMinimoRecomendado: 4,
      ambiente: ["Oceano", "Costas"],
      faixaDificuldade: { min: 320, max: 420 }
    });
    
    opcoes.push({
      nome: "Salamandras",
      tipo: "Elementais",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 4,
      ambiente: ["Volcão", "Templos do Fogo"],
      faixaDificuldade: { min: 320, max: 420 }
    });
    
    opcoes.push({
      nome: "Sátiro",
      tipo: "Fadas",
      min: 2,
      max: 4,
      nivelMinimoRecomendado: 2,
      ambiente: ["Bosque Encantado", "Floresta"],
      faixaDificuldade: { min: 160, max: 260 }
    });
    
    opcoes.push({
      nome: "Sirenídeo",
      tipo: "Elementais",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 5,
      ambiente: ["Oceano", "Costas"],
      faixaDificuldade: { min: 400, max: 500 }
    });
    
    opcoes.push({
      nome: "Slaadi",
      tipo: "Aberrações",
      min: 2,
      max: 4,
      nivelMinimoRecomendado: 5,
      ambiente: ["Plano Elemental", "Dungeon"],
      faixaDificuldade: { min: 400, max: 500 }
    });
    
    opcoes.push({
      nome: "Sombra",
      tipo: "Mortos-Vivos",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 1,
      ambiente: ["Cemitério", "Dungeon"],
      faixaDificuldade: { min: 80, max: 180 }
    });
    
    opcoes.push({
      nome: "Sprite",
      tipo: "Fadas",
      min: 2,
      max: 5,
      nivelMinimoRecomendado: 1,
      ambiente: ["Bosque Encantado", "Floresta"],
      faixaDificuldade: { min: 80, max: 180 }
    });
    
    opcoes.push({
      nome: "Stirge",
      tipo: "Bestas Selvagens",
      min: 1,
      max: 4,
      nivelMinimoRecomendado: 1,
      ambiente: ["Campo", "Floresta"],
      faixaDificuldade: { min: 80, max: 180 }
    });
    
    opcoes.push({
      nome: "Súcubo/Íncubo",
      tipo: "Corruptores",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 7,
      ambiente: ["Cidade", "Masmo­rdas"],
      faixaDificuldade: { min: 560, max: 660 }
    });
    
    opcoes.push({
      nome: "Tarrasque",
      tipo: "Monstruosidades",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 20,
      ambiente: ["Masmo­rdas", "Campo Aberto"],
      faixaDificuldade: { min: 1600, max: 1700 }
    });
    
    opcoes.push({
      nome: "Tartaruga Dragão",
      tipo: "Dragões",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 10,
      ambiente: ["Oceano", "Mar Aberto"],
      faixaDificuldade: { min: 800, max: 900 }
    });
    
    opcoes.push({
      nome: "Thri-kreen",
      tipo: "Humanoides",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 3,
      ambiente: ["Deserto", "Campo"],
      faixaDificuldade: { min: 240, max: 340 }
    });
    
    opcoes.push({
      nome: "Tribulo Brutal",
      tipo: "Monstruosidades",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 6,
      ambiente: ["Dungeon", "Ruínas"],
      faixaDificuldade: { min: 480, max: 580 }
    });
    
    opcoes.push({
      nome: "Troglodita",
      tipo: "Humanoides",
      min: 3,
      max: 8,
      nivelMinimoRecomendado: 2,
      ambiente: ["Caverna", "Dungeon"],
      faixaDificuldade: { min: 160, max: 260 }
    });
    
    opcoes.push({
      nome: "Troll",
      tipo: "Monstruosidades",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 4,
      ambiente: ["Floresta", "Campo Aberto"],
      faixaDificuldade: { min: 320, max: 420 }
    });
    
    opcoes.push({
      nome: "Unicórnio",
      tipo: "Celestiais",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 7,
      ambiente: ["Floresta", "Campo"],
      faixaDificuldade: { min: 560, max: 660 }
    });
    
    opcoes.push({
      nome: "Urso-Coruja",
      tipo: "Fadas",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 3,
      ambiente: ["Bosque", "Floresta"],
      faixaDificuldade: { min: 240, max: 340 }
    });
    
    opcoes.push({
      nome: "Vampiros",
      tipo: "Mortos-Vivos",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 10,
      ambiente: ["Cemitério", "Castelos Abandonados"],
      faixaDificuldade: { min: 800, max: 900 }
    });
    
    opcoes.push({
      nome: "Verme da Carniça",
      tipo: "Monstruosidades",
      min: 2,
      max: 5,
      nivelMinimoRecomendado: 2,
      ambiente: ["Cemitério", "Ruínas"],
      faixaDificuldade: { min: 160, max: 260 }
    });
    
    opcoes.push({
      nome: "Verme Púrpura",
      tipo: "Monstruosidades",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 2,
      ambiente: ["Caverna", "Dungeon"],
      faixaDificuldade: { min: 160, max: 260 }
    });
    
    opcoes.push({
      nome: "Wyvern",
      tipo: "Dragões",
      min: 1,
      max: 2,
      nivelMinimoRecomendado: 8,
      ambiente: ["Montanha", "Campo Aberto"],
      faixaDificuldade: { min: 640, max: 740 }
    });
    
    opcoes.push({
      nome: "Xorn",
      tipo: "Monstruosidades",
      min: 1,
      max: 1,
      nivelMinimoRecomendado: 10,
      ambiente: ["Subterrâneo", "Caverna"],
      faixaDificuldade: { min: 800, max: 900 }
    });
    
    opcoes.push({
      nome: "Yetis",
      tipo: "Gigantes",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 4,
      ambiente: ["Tundra", "Montanha"],
      faixaDificuldade: { min: 320, max: 420 }
    });
    
    opcoes.push({
      nome: "Yuan-ti",
      tipo: "Humanoides",
      min: 3,
      max: 7,
      nivelMinimoRecomendado: 5,
      ambiente: ["Cidade", "Ruínas", "Floresta"],
      faixaDificuldade: { min: 400, max: 500 }
    });
    
    opcoes.push({
      nome: "Yugoloths",
      tipo: "Corruptores",
      min: 1,
      max: 3,
      nivelMinimoRecomendado: 10,
      ambiente: ["Inferno", "Dungeon"],
      faixaDificuldade: { min: 800, max: 900 }
    });
    
    opcoes.push({
      nome: "Zumbis",
      tipo: "Mortos-Vivos",
      min: 3,
      max: 10,
      nivelMinimoRecomendado: 1,
      ambiente: ["Cemitério", "Cripta"],
      faixaDificuldade: { min: 80, max: 180 }
    });

  
    if (ideiaSelecionada !== "Nenhuma") {
      opcoes = opcoes.filter(monstro => monstro.tipo === ideiaSelecionada);
    }
  
    const elegiveis = opcoes.filter(monstro => lvlJogador >= monstro.nivelMinimoRecomendado);
  
    if (elegiveis.length === 0) return [];
  
    const resultados = [];
    const usados = new Set();
  
    while (resultados.length < 3 && elegiveis.length > 0) {
      const ponderado = [];
  
      elegiveis.forEach(monstro => {
        const peso = Math.max(1, lvlJogador - monstro.nivelMinimoRecomendado + 1);
        for (let i = 0; i < peso; i++) {
          if (!usados.has(monstro.nome)) {
            ponderado.push(monstro);
          }
        }
      });
  
      if (ponderado.length === 0) break;
  
      const sorteado = ponderado[Math.floor(Math.random() * ponderado.length)];
      resultados.push(sorteado);
      usados.add(sorteado.nome);
    }
  
    return resultados;
  }
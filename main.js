function sugerirMonstros(dificuldadeFinal, ambiente, lvlJogador, ideiaSelecionada) {
    var opcoes = [];

// Aarakocra – Humanoides
opcoes.push({
  nome: "Aarakocra",
  tipo: "Humanoides",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 1,
  ambiente: ["Montanha", "Plano Elemental do Ar"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Abocanhador Matraqueante – Aberrações
opcoes.push({
  nome: "Abocanhador Matraqueante",
  tipo: "Aberrações",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 2,
  ambiente: ["Masmo­rdas", "Dungeon", "Água"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Abolete – Aberrações
opcoes.push({
  nome: "Abolete",
  tipo: "Aberrações",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 10,
  ambiente: ["Submerso", "Caverna", "Ruínas Antigas"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Anjos – Celestiais
opcoes.push({
  nome: "Anjos",
  tipo: "Celestiais",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 10,
  ambiente: ["Céu", "Templos", "Cidades Celestiais"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Ankheg – Bestas Selvagens
opcoes.push({
  nome: "Ankheg",
  tipo: "Bestas Selvagens",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 3,
  ambiente: ["Subterrâneo", "Campo"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Anomalia da Água – Elementais
opcoes.push({
  nome: "Anomalia da Água",
  tipo: "Elementais",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 4,
  ambiente: ["Submerso", "Rios", "Oceanos"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Aparição – Mortos-Vivos
opcoes.push({
  nome: "Aparição",
  tipo: "Mortos-Vivos",
  min: 1,
  max: 4,
  nivelMinimoRecomendado: 1,
  ambiente: ["Cemitério", "Cripta", "Ruínas Abandonadas"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Arbusto Errante – Plantas
opcoes.push({
  nome: "Arbusto Errante",
  tipo: "Plantas",
  min: 2,
  max: 5,
  nivelMinimoRecomendado: 1,
  ambiente: ["Floresta", "Pântano", "Jardim Mágico"],
  faixaDificuldade: { min: 0.5, max: 1.0 }
});

// Azer – Elementais
opcoes.push({
  nome: "Azer",
  tipo: "Elementais",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 3,
  ambiente: ["Fornalhas", "Volcões", "Templos do Fogo"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Banshee – Mortos-Vivos
opcoes.push({
  nome: "Banshee",
  tipo: "Mortos-Vivos",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 5,
  ambiente: ["Cemitério", "Ruínas", "Castelos Assombrados"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Basilisco – Bestas Selvagens
opcoes.push({
  nome: "Basilisco",
  tipo: "Bestas Selvagens",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 3,
  ambiente: ["Caverna", "Deserto", "Ruínas"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Behir – Monstruosidades
opcoes.push({
  nome: "Behir",
  tipo: "Monstruosidades",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 10,
  ambiente: ["Montanha", "Caverna", "Templos Perdidos"],
  faixaDificuldade: { min: 2.5, max: 3.5 }
});

// Bruxas – Humanoides
opcoes.push({
  nome: "Bruxas",
  tipo: "Humanoides",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 4,
  ambiente: ["Cidade", "Floresta", "Casas Abandonadas"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Bugbears – Humanoides
opcoes.push({
  nome: "Bugbears",
  tipo: "Humanoides",
  min: 1,
  max: 4,
  nivelMinimoRecomendado: 3,
  ambiente: ["Floresta", "Masmo­rdas", "Ruínas"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Bulette – Monstruosidades
opcoes.push({
  nome: "Bulette",
  tipo: "Monstruosidades",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 6,
  ambiente: ["Deserto", "Campo Aberto", "Masmo­rdas"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Bullywug – Humanoides
opcoes.push({
  nome: "Bullywug",
  tipo: "Humanoides",
  min: 2,
  max: 6,
  nivelMinimoRecomendado: 2,
  ambiente: ["Pântano", "Lagos", "Rios"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Caçador Invisível – Monstruosidades
opcoes.push({
  nome: "Caçador Invisível",
  tipo: "Monstruosidades",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 4,
  ambiente: ["Floresta", "Ruínas", "Dungeon"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Cambion – Humanoides
opcoes.push({
  nome: "Cambion",
  tipo: "Humanoides",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 5,
  ambiente: ["Cidade", "Ruínas", "Ambientes Infernales"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Cão Infernal – Corruptores/Celestiais
opcoes.push({
  nome: "Cão Infernal",
  tipo: "Celestiais",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 4,
  ambiente: ["Inferno", "Ruínas", "Ambientes Sombrio"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Carniçais – Mortos-Vivos
opcoes.push({
  nome: "Carniçais",
  tipo: "Mortos-Vivos",
  min: 3,
  max: 8,
  nivelMinimoRecomendado: 1,
  ambiente: ["Cemitério", "Cripta", "Ruínas"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Cavaleiro da Morte – Mortos-Vivos
opcoes.push({
  nome: "Cavaleiro da Morte",
  tipo: "Mortos-Vivos",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 8,
  ambiente: ["Cemitério", "Castelos Abandonados"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Caveira Flamejante – Mortos-Vivos
opcoes.push({
  nome: "Caveira Flamejante",
  tipo: "Mortos-Vivos",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 2,
  ambiente: ["Cripta", "Ruínas", "Cemitério"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Centauro – Humanoides
opcoes.push({
  nome: "Centauro",
  tipo: "Humanoides",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 3,
  ambiente: ["Floresta", "Campo Aberto"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Chuul – Aberrações
opcoes.push({
  nome: "Chuul",
  tipo: "Aberrações",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 5,
  ambiente: ["Subterrâneo", "Pantano"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Ciclope – Gigantes
opcoes.push({
  nome: "Ciclope",
  tipo: "Gigantes",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 6,
  ambiente: ["Caverna", "Campo Aberto"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Cocatriz – Bestas Selvagens
opcoes.push({
  nome: "Cocatriz",
  tipo: "Bestas Selvagens",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 2,
  ambiente: ["Dungeon", "Ruínas"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Couatl – Celestiais
opcoes.push({
  nome: "Couatl",
  tipo: "Celestiais",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 8,
  ambiente: ["Floresta", "Templos", "Ambientes Místicos"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Demilich – Mortos-Vivos
opcoes.push({
  nome: "Demilich",
  tipo: "Mortos-Vivos",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 12,
  ambiente: ["Dungeon", "Masmo­rdas"],
  faixaDificuldade: { min: 2.5, max: 3.5 }
});

// Demônios – Corruptores
opcoes.push({
  nome: "Demônios",
  tipo: "Corruptores",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 7,
  ambiente: ["Inferno", "Ruínas", "Ambientes Infernales"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Devorador de Intelecto – Aberrações
opcoes.push({
  nome: "Devorador de Intelecto",
  tipo: "Aberrações",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 10,
  ambiente: ["Dungeon", "Ruínas"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Devorador de Mentes – Aberrações
opcoes.push({
  nome: "Devorador de Mentes",
  tipo: "Aberrações",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 10,
  ambiente: ["Dungeon", "Ruínas"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Diabos – Corruptores
opcoes.push({
  nome: "Diabos",
  tipo: "Corruptores",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 7,
  ambiente: ["Inferno", "Ruínas"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Dinossauros – Bestas Selvagens
opcoes.push({
  nome: "Dinossauros",
  tipo: "Bestas Selvagens",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 5,
  ambiente: ["Selva", "Deserto"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Dracolich – Mortos-Vivos
opcoes.push({
  nome: "Dracolich",
  tipo: "Mortos-Vivos",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 15,
  ambiente: ["Dungeon", "Ruínas"],
  faixaDificuldade: { min: 3.0, max: 4.0 }
});

// Dragão das Sombras – Dragões
opcoes.push({
  nome: "Dragão das Sombras",
  tipo: "Dragões",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 12,
  ambiente: ["Montanha", "Ruínas"],
  faixaDificuldade: { min: 2.5, max: 3.5 }
});

// Dragões – Dragões
opcoes.push({
  nome: "Dragões",
  tipo: "Dragões",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 8,
  ambiente: ["Montanha", "Caverna", "Ruínas"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Dragão-Fada – Dragões
opcoes.push({
  nome: "Dragão-Fada",
  tipo: "Dragões",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 10,
  ambiente: ["Floresta", "Ambientes Místicos"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Dríade – Fadas
opcoes.push({
  nome: "Dríade",
  tipo: "Fadas",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 4,
  ambiente: ["Floresta", "Bosque Encantado"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Drider – Humanoides
opcoes.push({
  nome: "Drider",
  tipo: "Humanoides",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 7,
  ambiente: ["Caverna", "Dungeon"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Duergar – Humanoides
opcoes.push({
  nome: "Duergar",
  tipo: "Humanoides",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 5,
  ambiente: ["Subterrâneo", "Cidade"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Duplo – Monstruosidades
opcoes.push({
  nome: "Duplo",
  tipo: "Monstruosidades",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 6,
  ambiente: ["Dungeon", "Ruínas"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Elementais – Elementais
opcoes.push({
  nome: "Elementais",
  tipo: "Elementais",
  min: 1,
  max: 4,
  nivelMinimoRecomendado: 4,
  ambiente: ["Plano Elemental", "Caverna", "Rios"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Elfos: Drow – Humanoides
opcoes.push({
  nome: "Elfos: Drow",
  tipo: "Humanoides",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 5,
  ambiente: ["Cidade", "Subterrâneo"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Empírico – Aberrações
opcoes.push({
  nome: "Empírico",
  tipo: "Aberrações",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 10,
  ambiente: ["Dungeon", "Ruínas"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Ente – Plantas
opcoes.push({
  nome: "Ente",
  tipo: "Plantas",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 6,
  ambiente: ["Floresta", "Bosque Encantado"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Esfinges – Monstruosidades
opcoes.push({
  nome: "Esfinges",
  tipo: "Monstruosidades",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 10,
  ambiente: ["Deserto", "Ruínas", "Cidades Antigas"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Espantalho – Mortos-Vivos
opcoes.push({
  nome: "Espantalho",
  tipo: "Mortos-Vivos",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 1,
  ambiente: ["Cemitério", "Ruínas"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Espectro – Mortos-Vivos
opcoes.push({
  nome: "Espectro",
  tipo: "Mortos-Vivos",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 5,
  ambiente: ["Cemitério", "Ruínas", "Castelos Abandonados"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Esqueletos – Mortos-Vivos
opcoes.push({
  nome: "Esqueletos",
  tipo: "Mortos-Vivos",
  min: 2,
  max: 8,
  nivelMinimoRecomendado: 1,
  ambiente: ["Cemitério", "Dungeon"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Estrangulador – Monstruosidades
opcoes.push({
  nome: "Estrangulador",
  tipo: "Monstruosidades",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 4,
  ambiente: ["Dungeon", "Ruínas"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Ettercap – Aberrações
opcoes.push({
  nome: "Ettercap",
  tipo: "Aberrações",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 3,
  ambiente: ["Floresta", "Caverna"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Ettin – Gigantes
opcoes.push({
  nome: "Ettin",
  tipo: "Gigantes",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 8,
  ambiente: ["Montanha", "Campo Aberto"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Fantasma – Mortos-Vivos
opcoes.push({
  nome: "Fantasma",
  tipo: "Mortos-Vivos",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 5,
  ambiente: ["Cemitério", "Castelos Abandonados"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Flumph – Aberrações
opcoes.push({
  nome: "Flumph",
  tipo: "Aberrações",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 1,
  ambiente: ["Subterrâneo", "Dungeon"],
  faixaDificuldade: { min: 0.5, max: 1.0 }
});

// Fogo-Fátuo – Elementais
opcoes.push({
  nome: "Fogo-Fátuo",
  tipo: "Elementais",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 2,
  ambiente: ["Templos", "Ruínas", "Volcões"],
  faixaDificuldade: { min: 1.0, max: 1.5 }
});

// Fomori – Gigantes
opcoes.push({
  nome: "Fomori",
  tipo: "Gigantes",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 7,
  ambiente: ["Campo Aberto", "Montanha"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Fungos – Plantas
opcoes.push({
  nome: "Fungos",
  tipo: "Plantas",
  min: 2,
  max: 5,
  nivelMinimoRecomendado: 1,
  ambiente: ["Caverna", "Floresta", "Dungeon"],
  faixaDificuldade: { min: 0.5, max: 1.0 }
});

// Galeb Duhr – Elementais
opcoes.push({
  nome: "Galeb Duhr",
  tipo: "Elementais",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 5,
  ambiente: ["Caverna", "Subterrâneo"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Gárgula – Monstruosidades
opcoes.push({
  nome: "Gárgula",
  tipo: "Monstruosidades",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 4,
  ambiente: ["Catedrais", "Ruínas"],
  faixaDificuldade: { min: 1.0, max: 1.5 }
});

// Garra Rastejante – Bestas Selvagens
opcoes.push({
  nome: "Garra Rastejante",
  tipo: "Bestas Selvagens",
  min: 2,
  max: 4,
  nivelMinimoRecomendado: 3,
  ambiente: ["Campo", "Floresta"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Génios – Elementais
opcoes.push({
  nome: "Génios",
  tipo: "Elementais",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 8,
  ambiente: ["Templos", "Ambientes Místicos"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Gigantes – Gigantes
opcoes.push({
  nome: "Gigantes",
  tipo: "Gigantes",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 10,
  ambiente: ["Montanha", "Campo Aberto"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Gith – Humanoides
opcoes.push({
  nome: "Gith",
  tipo: "Humanoides",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 7,
  ambiente: ["Subterrâneo", "Ruínas"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Gnolls – Humanoides
opcoes.push({
  nome: "Gnolls",
  tipo: "Humanoides",
  min: 2,
  max: 6,
  nivelMinimoRecomendado: 3,
  ambiente: ["Campo", "Floresta"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Gnomo das Profundezas (Svirfneblin) – Humanoides
opcoes.push({
  nome: "Gnomo das Profundezas (Svirfneblin)",
  tipo: "Humanoides",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 4,
  ambiente: ["Subterrâneo", "Caverna"],
  faixaDificuldade: { min: 1.0, max: 1.5 }
});

// Goblins – Humanoides
opcoes.push({
  nome: "Goblins",
  tipo: "Humanoides",
  min: 3,
  max: 8,
  nivelMinimoRecomendado: 2,
  ambiente: ["Cidade", "Floresta"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Golens – Constructos
opcoes.push({
  nome: "Golens",
  tipo: "Constructos",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 10,
  ambiente: ["Dungeon", "Ruínas"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Gorgon – Monstruosidades
opcoes.push({
  nome: "Gorgon",
  tipo: "Monstruosidades",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 9,
  ambiente: ["Dungeon", "Campo Aberto"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Grell – Aberrações
opcoes.push({
  nome: "Grell",
  tipo: "Aberrações",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 5,
  ambiente: ["Subterrâneo", "Dungeon"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Grick – Monstruosidades
opcoes.push({
  nome: "Grick",
  tipo: "Monstruosidades",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 7,
  ambiente: ["Caverna", "Dungeon"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Grifo – Bestas Selvagens
opcoes.push({
  nome: "Grifo",
  tipo: "Bestas Selvagens",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 6,
  ambiente: ["Campo", "Montanha"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Grimlock – Humanoides
opcoes.push({
  nome: "Grimlock",
  tipo: "Humanoides",
  min: 1,
  max: 4,
  nivelMinimoRecomendado: 3,
  ambiente: ["Subterrâneo", "Caverna"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Guardião do Escudo – Monstruosidades
opcoes.push({
  nome: "Guardião do Escudo",
  tipo: "Monstruosidades",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 8,
  ambiente: ["Dungeon", "Ruínas"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Harpia – Monstruosidades
opcoes.push({
  nome: "Harpia",
  tipo: "Monstruosidades",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 3,
  ambiente: ["Campo", "Floresta"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Hidra – Monstruosidades
opcoes.push({
  nome: "Hidra",
  tipo: "Monstruosidades",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 10,
  ambiente: ["Pântano", "Campo Aberto"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Hipogrifo – Bestas Selvagens
opcoes.push({
  nome: "Hipogrifo",
  tipo: "Bestas Selvagens",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 4,
  ambiente: ["Campo", "Montanha"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Hobgoblins – Humanoides
opcoes.push({
  nome: "Hobgoblins",
  tipo: "Humanoides",
  min: 3,
  max: 8,
  nivelMinimoRecomendado: 3,
  ambiente: ["Cidade", "Campo"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Homem Chacal – Humanoides
opcoes.push({
  nome: "Homem Chacal",
  tipo: "Humanoides",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 3,
  ambiente: ["Floresta", "Ruínas"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Homúnculo – Constructos
opcoes.push({
  nome: "Homúnculo",
  tipo: "Constructos",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 2,
  ambiente: ["Laboratório", "Dungeon"],
  faixaDificuldade: { min: 0.5, max: 1.0 }
});

// Horror de Elmo – Monstruosidades
opcoes.push({
  nome: "Horror de Elmo",
  tipo: "Monstruosidades",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 6,
  ambiente: ["Dungeon", "Ruínas"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Horror de Gancho – Monstruosidades
opcoes.push({
  nome: "Horror de Gancho",
  tipo: "Monstruosidades",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 6,
  ambiente: ["Dungeon", "Ruínas"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Infectados – Mortos-Vivos
opcoes.push({
  nome: "Infectados",
  tipo: "Mortos-Vivos",
  min: 1,
  max: 4,
  nivelMinimoRecomendado: 1,
  ambiente: ["Cemitério", "Cripta"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Inumano – Humanoides
opcoes.push({
  nome: "Inumano",
  tipo: "Humanoides",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 4,
  ambiente: ["Cidade", "Campo"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Kenku – Humanoides
opcoes.push({
  nome: "Kenku",
  tipo: "Humanoides",
  min: 2,
  max: 6,
  nivelMinimoRecomendado: 2,
  ambiente: ["Cidade", "Ruínas"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Kobolds – Humanoides
opcoes.push({
  nome: "Kobolds",
  tipo: "Humanoides",
  min: 3,
  max: 8,
  nivelMinimoRecomendado: 1,
  ambiente: ["Dungeon", "Floresta"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Kraken – Monstruosidades
opcoes.push({
  nome: "Kraken",
  tipo: "Monstruosidades",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 15,
  ambiente: ["Oceano", "Mar Aberto"],
  faixaDificuldade: { min: 3.0, max: 4.0 }
});

// Kuo-toa – Humanoides
opcoes.push({
  nome: "Kuo-toa",
  tipo: "Humanoides",
  min: 2,
  max: 6,
  nivelMinimoRecomendado: 3,
  ambiente: ["Submerso", "Caverna"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Lâmia – Monstruosidades
opcoes.push({
  nome: "Lâmia",
  tipo: "Monstruosidades",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 5,
  ambiente: ["Deserto", "Ruínas"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Licantropos – Humanoides
opcoes.push({
  nome: "Licantropos",
  tipo: "Humanoides",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 4,
  ambiente: ["Floresta", "Cidade"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Lich – Mortos-Vivos
opcoes.push({
  nome: "Lich",
  tipo: "Mortos-Vivos",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 15,
  ambiente: ["Dungeon", "Ruínas"],
  faixaDificuldade: { min: 3.0, max: 4.0 }
});

// Limos – Monstruosidades
opcoes.push({
  nome: "Limos",
  tipo: "Monstruosidades",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 1,
  ambiente: ["Caverna", "Dungeon"],
  faixaDificuldade: { min: 0.5, max: 1.0 }
});

// Magmin – Elementais
opcoes.push({
  nome: "Magmin",
  tipo: "Elementais",
  min: 2,
  max: 5,
  nivelMinimoRecomendado: 2,
  ambiente: ["Volcão", "Templos do Fogo"],
  faixaDificuldade: { min: 1.0, max: 1.5 }
});

// Manticora – Monstruosidades
opcoes.push({
  nome: "Manticora",
  tipo: "Monstruosidades",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 6,
  ambiente: ["Deserto", "Ruínas"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Manto Negro – Mortos-Vivos
opcoes.push({
  nome: "Manto Negro",
  tipo: "Mortos-Vivos",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 8,
  ambiente: ["Cemitério", "Dungeon"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Mantor – Humanoides
opcoes.push({
  nome: "Mantor",
  tipo: "Humanoides",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 6,
  ambiente: ["Cidade", "Campo"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Medusa – Monstruosidades
opcoes.push({
  nome: "Medusa",
  tipo: "Monstruosidades",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 8,
  ambiente: ["Ruínas", "Cidade Abandonada"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Meio-Dragão – Dragões
opcoes.push({
  nome: "Meio-Dragão",
  tipo: "Dragões",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 7,
  ambiente: ["Montanha", "Caverna"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Mephits – Elementais
opcoes.push({
  nome: "Mephits",
  tipo: "Elementais",
  min: 2,
  max: 4,
  nivelMinimoRecomendado: 2,
  ambiente: ["Volcão", "Templos"],
  faixaDificuldade: { min: 1.0, max: 1.5 }
});

// Miconides – Monstruosidades
opcoes.push({
  nome: "Miconides",
  tipo: "Monstruosidades",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 7,
  ambiente: ["Dungeon", "Ruínas"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Mímico – Monstruosidades
opcoes.push({
  nome: "Mímico",
  tipo: "Monstruosidades",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 3,
  ambiente: ["Dungeon", "Ruínas"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Minotauro – Humanoides
opcoes.push({
  nome: "Minotauro",
  tipo: "Humanoides",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 5,
  ambiente: ["Dungeon", "Ruínas"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Modrons – Constructos
opcoes.push({
  nome: "Modrons",
  tipo: "Constructos",
  min: 2,
  max: 4,
  nivelMinimoRecomendado: 6,
  ambiente: ["Plano Elemental", "Caverna"],
  faixaDificuldade: { min: 1.0, max: 1.5 }
});

// Monstro da Ferrugem – Monstruosidades
opcoes.push({
  nome: "Monstro da Ferrugem",
  tipo: "Monstruosidades",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 7,
  ambiente: ["Ruínas", "Dungeon"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Múmias – Mortos-Vivos
opcoes.push({
  nome: "Múmias",
  tipo: "Mortos-Vivos",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 2,
  ambiente: ["Cemitério", "Cripta"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Nagas – Monstruosidades
opcoes.push({
  nome: "Nagas",
  tipo: "Monstruosidades",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 7,
  ambiente: ["Deserto", "Ruínas"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Nótico – Mortos-Vivos
opcoes.push({
  nome: "Nótico",
  tipo: "Mortos-Vivos",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 2,
  ambiente: ["Cemitério", "Cripta"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Objetos Animados – Constructos
opcoes.push({
  nome: "Objetos Animados",
  tipo: "Constructos",
  min: 2,
  max: 5,
  nivelMinimoRecomendado: 1,
  ambiente: ["Dungeon", "Cidade"],
  faixaDificuldade: { min: 0.5, max: 1.0 }
});

// Observadores – Aberrações
opcoes.push({
  nome: "Observadores",
  tipo: "Aberrações",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 6,
  ambiente: ["Subterrâneo", "Céu"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Ogros – Humanoides
opcoes.push({
  nome: "Ogros",
  tipo: "Humanoides",
  min: 2,
  max: 4,
  nivelMinimoRecomendado: 4,
  ambiente: ["Campo Aberto", "Floresta"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Oni – Humanoides
opcoes.push({
  nome: "Oni",
  tipo: "Humanoides",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 7,
  ambiente: ["Cidade", "Ruínas"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Orcs – Humanoides
opcoes.push({
  nome: "Orcs",
  tipo: "Humanoides",
  min: 3,
  max: 6,
  nivelMinimoRecomendado: 2,
  ambiente: ["Campo", "Floresta"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Otyugh – Monstruosidades
opcoes.push({
  nome: "Otyugh",
  tipo: "Monstruosidades",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 5,
  ambiente: ["Caverna", "Dungeon"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Pantera Deslocadora – Bestas Selvagens
opcoes.push({
  nome: "Pantera Deslocadora",
  tipo: "Bestas Selvagens",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 3,
  ambiente: ["Floresta", "Selva"],
  faixaDificuldade: { min: 1.0, max: 1.5 }
});

// Pégaso – Celestiais
opcoes.push({
  nome: "Pégaso",
  tipo: "Celestiais",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 6,
  ambiente: ["Céu", "Campo Aberto"],
  faixaDificuldade: { min: 1.0, max: 1.5 }
});

// Perfurador – Monstruosidades
opcoes.push({
  nome: "Perfurador",
  tipo: "Monstruosidades",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 7,
  ambiente: ["Dungeon", "Ruínas"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Peryton – Monstruosidades
opcoes.push({
  nome: "Peryton",
  tipo: "Monstruosidades",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 5,
  ambiente: ["Campo Aberto", "Ruínas"],
  faixaDificuldade: { min: 1.0, max: 1.5 }
});

// Pesadelo – Monstruosidades
opcoes.push({
  nome: "Pesadelo",
  tipo: "Monstruosidades",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 6,
  ambiente: ["Dungeon", "Ruínas"],
  faixaDificuldade: { min: 1.5, max: 2.0 }
});

// Pixie – Fadas
opcoes.push({
  nome: "Pixie",
  tipo: "Fadas",
  min: 2,
  max: 5,
  nivelMinimoRecomendado: 1,
  ambiente: ["Bosque Encantado", "Floresta"],
  faixaDificuldade: { min: 0.5, max: 1.0 }
});

// Povo do Mar – Humanoides
opcoes.push({
  nome: "Povo do Mar",
  tipo: "Humanoides",
  min: 2,
  max: 4,
  nivelMinimoRecomendado: 3,
  ambiente: ["Oceano", "Costas"],
  faixaDificuldade: { min: 1.0, max: 1.5 }
});

// Povo Lagarto – Humanoides
opcoes.push({
  nome: "Povo Lagarto",
  tipo: "Humanoides",
  min: 2,
  max: 4,
  nivelMinimoRecomendado: 3,
  ambiente: ["Pântano", "Floresta"],
  faixaDificuldade: { min: 1.0, max: 1.5 }
});

// Pseudodragão – Dragões
opcoes.push({
  nome: "Pseudodragão",
  tipo: "Dragões",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 3,
  ambiente: ["Caverna", "Ruínas"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Quaggoth – Humanoides
opcoes.push({
  nome: "Quaggoth",
  tipo: "Humanoides",
  min: 2,
  max: 5,
  nivelMinimoRecomendado: 4,
  ambiente: ["Caverna", "Ruínas"],
  faixaDificuldade: { min: 1.0, max: 1.5 }
});

// Quimera – Monstruosidades
opcoes.push({
  nome: "Quimera",
  tipo: "Monstruosidades",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 8,
  ambiente: ["Campo Aberto", "Ruínas"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Rakshasa – Corruptores
opcoes.push({
  nome: "Rakshasa",
  tipo: "Corruptores",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 10,
  ambiente: ["Cidade", "Palácio"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Remorhazes – Monstruosidades
opcoes.push({
  nome: "Remorhazes",
  tipo: "Monstruosidades",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 7,
  ambiente: ["Deserto", "Campo Aberto"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Ressurgido – Mortos-Vivos
opcoes.push({
  nome: "Ressurgido",
  tipo: "Mortos-Vivos",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 9,
  ambiente: ["Cemitério", "Ruínas"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Roca – Monstruosidades
opcoes.push({
  nome: "Roca",
  tipo: "Monstruosidades",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 6,
  ambiente: ["Campo Aberto", "Montanha"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Sahuagin – Humanoides
opcoes.push({
  nome: "Sahuagin",
  tipo: "Humanoides",
  min: 3,
  max: 6,
  nivelMinimoRecomendado: 4,
  ambiente: ["Oceano", "Costas"],
  faixaDificuldade: { min: 1.0, max: 1.5 }
});

// Salamandras – Elementais
opcoes.push({
  nome: "Salamandras",
  tipo: "Elementais",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 4,
  ambiente: ["Volcão", "Templos do Fogo"],
  faixaDificuldade: { min: 1.0, max: 1.5 }
});

// Sátiro – Fadas
opcoes.push({
  nome: "Sátiro",
  tipo: "Fadas",
  min: 2,
  max: 4,
  nivelMinimoRecomendado: 2,
  ambiente: ["Bosque Encantado", "Floresta"],
  faixaDificuldade: { min: 0.5, max: 1.0 }
});

// Sirenídeo – Elementais
opcoes.push({
  nome: "Sirenídeo",
  tipo: "Elementais",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 5,
  ambiente: ["Oceano", "Costas"],
  faixaDificuldade: { min: 1.0, max: 1.5 }
});

// Slaadi – Aberrações
opcoes.push({
  nome: "Slaadi",
  tipo: "Aberrações",
  min: 2,
  max: 4,
  nivelMinimoRecomendado: 5,
  ambiente: ["Plano Elemental", "Dungeon"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Sombra – Mortos-Vivos
opcoes.push({
  nome: "Sombra",
  tipo: "Mortos-Vivos",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 1,
  ambiente: ["Cemitério", "Dungeon"],
  faixaDificuldade: { min: 0.5, max: 1.0 }
});

// Sprite – Fadas
opcoes.push({
  nome: "Sprite",
  tipo: "Fadas",
  min: 2,
  max: 5,
  nivelMinimoRecomendado: 1,
  ambiente: ["Bosque Encantado", "Floresta"],
  faixaDificuldade: { min: 0.5, max: 1.0 }
});

// Stirge – Bestas Selvagens
opcoes.push({
  nome: "Stirge",
  tipo: "Bestas Selvagens",
  min: 1,
  max: 4,
  nivelMinimoRecomendado: 1,
  ambiente: ["Campo", "Floresta"],
  faixaDificuldade: { min: 0.5, max: 1.0 }
});

// Súcubo/Íncubo – Corruptores
opcoes.push({
  nome: "Súcubo/Íncubo",
  tipo: "Corruptores",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 7,
  ambiente: ["Cidade", "Masmo­rdas"],
  faixaDificuldade: { min: 1.5, max: 2.0 }
});

// Tarrasque – Monstruosidades
opcoes.push({
  nome: "Tarrasque",
  tipo: "Monstruosidades",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 20,
  ambiente: ["Masmo­rdas", "Campo Aberto"],
  faixaDificuldade: { min: 4.0, max: 5.0 }
});

// Tartaruga Dragão – Dragões
opcoes.push({
  nome: "Tartaruga Dragão",
  tipo: "Dragões",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 10,
  ambiente: ["Oceano", "Mar Aberto"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Thri-kreen – Humanoides
opcoes.push({
  nome: "Thri-kreen",
  tipo: "Humanoides",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 3,
  ambiente: ["Deserto", "Campo"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Tribulo Brutal – Monstruosidades
opcoes.push({
  nome: "Tribulo Brutal",
  tipo: "Monstruosidades",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 6,
  ambiente: ["Dungeon", "Ruínas"],
  faixaDificuldade: { min: 1.5, max: 2.0 }
});

// Troglodita – Humanoides
opcoes.push({
  nome: "Troglodita",
  tipo: "Humanoides",
  min: 3,
  max: 8,
  nivelMinimoRecomendado: 2,
  ambiente: ["Caverna", "Dungeon"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Troll – Monstruosidades
opcoes.push({
  nome: "Troll",
  tipo: "Monstruosidades",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 4,
  ambiente: ["Floresta", "Campo Aberto"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Unicórnio – Celestiais
opcoes.push({
  nome: "Unicórnio",
  tipo: "Celestiais",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 7,
  ambiente: ["Floresta", "Campo"],
  faixaDificuldade: { min: 1.5, max: 2.0 }
});

// Urso-Coruja – Fadas
opcoes.push({
  nome: "Urso-Coruja",
  tipo: "Fadas",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 3,
  ambiente: ["Bosque", "Floresta"],
  faixaDificuldade: { min: 1.0, max: 1.5 }
});

// Vampiros – Mortos-Vivos
opcoes.push({
  nome: "Vampiros",
  tipo: "Mortos-Vivos",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 10,
  ambiente: ["Cemitério", "Castelos Abandonados"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Verme da Carniça – Monstruosidades
opcoes.push({
  nome: "Verme da Carniça",
  tipo: "Monstruosidades",
  min: 2,
  max: 5,
  nivelMinimoRecomendado: 2,
  ambiente: ["Cemitério", "Ruínas"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Verme Púrpura – Monstruosidades
opcoes.push({
  nome: "Verme Púrpura",
  tipo: "Monstruosidades",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 2,
  ambiente: ["Caverna", "Dungeon"],
  faixaDificuldade: { min: 0.5, max: 1.5 }
});

// Wyvern – Dragões
opcoes.push({
  nome: "Wyvern",
  tipo: "Dragões",
  min: 1,
  max: 2,
  nivelMinimoRecomendado: 8,
  ambiente: ["Montanha", "Campo Aberto"],
  faixaDificuldade: { min: 1.5, max: 2.5 }
});

// Xorn – Monstruosidades
opcoes.push({
  nome: "Xorn",
  tipo: "Monstruosidades",
  min: 1,
  max: 1,
  nivelMinimoRecomendado: 10,
  ambiente: ["Subterrâneo", "Caverna"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Yetis – Gigantes
opcoes.push({
  nome: "Yetis",
  tipo: "Gigantes",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 4,
  ambiente: ["Tundra", "Montanha"],
  faixaDificuldade: { min: 1.0, max: 1.5 }
});

// Yuan-ti – Humanoides
opcoes.push({
  nome: "Yuan-ti",
  tipo: "Humanoides",
  min: 3,
  max: 7,
  nivelMinimoRecomendado: 5,
  ambiente: ["Cidade", "Ruínas", "Floresta"],
  faixaDificuldade: { min: 1.0, max: 2.0 }
});

// Yugoloths – Corruptores
opcoes.push({
  nome: "Yugoloths",
  tipo: "Corruptores",
  min: 1,
  max: 3,
  nivelMinimoRecomendado: 10,
  ambiente: ["Inferno", "Dungeon"],
  faixaDificuldade: { min: 2.0, max: 3.0 }
});

// Zumbis – Mortos-Vivos
opcoes.push({
  nome: "Zumbis",
  tipo: "Mortos-Vivos",
  min: 3,
  max: 10,
  nivelMinimoRecomendado: 1,
  ambiente: ["Cemitério", "Cripta"],
  faixaDificuldade: { min: 0.5, max: 1.0 }
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
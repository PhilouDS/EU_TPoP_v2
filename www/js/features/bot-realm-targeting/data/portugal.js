export const PORTUGAL_TARGETING = {
  id: "portugal",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1, 2],
            next: "realmPortugal"
          },
          {
            values: [3, 4],
            next: "ownerTangiers"
          },
          {
            values: [5, 6],
            next: "ownerGoldCoast"
          }
        ]
      },
      realmPortugal: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPortugal"
        },
        branches: [
          {
            values: [1],
            next: "venice"
          },
          {
            values: [2],
            next: "castileSpain"
          },
          {
            values: [3],
            next: "ownerGibraltar"
          },
          {
            values: [4, 5, 6],
            next: "ownerTangiers"
          }
        ]
      },
      venice: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.venice"
        },
        next: "genoa"
      },
      genoa: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.genoa"
        },
        next: "realmEgypt"
      },
      castileSpain: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.castileSpain"
        },
        next: "realmAragon"
      },
      realmAragon: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAragon"
        },
        next: "realmEgypt"
      },
      realmEgypt: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEgypt"
        },
        next: "ottomans"
      },
      ottomans: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.ottomans"
        }
      },
      ownerGibraltar: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGibraltar"
        },
        next: "realmAlgiers"
      },
      ownerTangiers: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerTangiers"
        },
        branches: [
          {
            values: [1],
            next: "ownerGibraltar"
          },
          {
            values: [2],
            next: "realmAlgiers"
          },
          {
            values: [3],
            next: "ownerPernambuco"
          },
          {
            values: [4],
            next: "ownerGharb"
          },
          {
            values: [5, 6],
            next: "ownerGoldCoast"
          }
        ]
      },
      realmAlgiers: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAlgiers"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerRioDeJaneiro"
          },
          {
            values: [4, 5, 6],
            next: "tunis"
          }
        ]
      },
      tunis: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.tunis"
        },
        next: "ottomans"
      },
      ownerPernambuco: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerPernambuco"
        },
        next: "ownerBahia"
      },
      ownerBahia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBahia"
        },
        next: "ownerRioDeJaneiro"
      },
      ownerRioDeJaneiro: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerRioDeJaneiro"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerGuyana"
          },
          {
            values: [4, 5, 6],
            next: "ownerLaPlata"
          }
        ]
      },
      ownerGuyana: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGuyana"
        },
        next: "ownerAntilles"
      },
      ownerAntilles: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAntilles"
        }
      },
      ownerLaPlata: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerLaPlata"
        },
        next: "ownerPhilippines"
      },
      ownerPhilippines: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerPhilippines"
        },
        next: "ownerMoluccas"
      },
      ownerGharb: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGharb"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerPernambuco"
          },
          {
            values: [3, 4],
            next: "ownerAngola"
          },
          {
            values: [5, 6],
            next: "ownerMali"
          }
        ]
      },
      ownerMali: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMali"
        },
        next: "ownerAngola"
      },
      ownerAngola: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAngola"
        },
        branches: [
          {
            values: [1, 2],
            next: "kongo"
          },
          {
            values: [3, 4],
            next: "kilwa"
          },
          {
            values: [5, 6],
            next: "ownerCapeOfGoodHope"
          }
        ]
      },
      kongo: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.kongo"
        },
        next: "ownerBahia"
      },
      ownerGoldCoast: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGoldCoast"
        },
        branches: [
          {
            values: [1],
            next: "ownerPernambuco"
          },
          {
            values: [2],
            next: "ownerMali"
          },
          {
            values: [3, 4],
            next: "ownerCapeOfGoodHope"
          },
          {
            values: [5, 6],
            next: "benin"
          }
        ]
      },
      benin: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.benin"
        },
        next: "ownerCapeOfGoodHope"
      },
      ownerCapeOfGoodHope: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCapeOfGoodHope"
        },
        branches: [
          {
            values: [1, 2],
            next: "kilwa"
          },
          {
            values: [3, 4],
            next: "madagascar"
          },
          {
            values: [5, 6],
            next: "ownerGoa"
          }
        ]
      },
      kilwa: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.kilwa"
        },
        branches: [
          {
            values: [1],
            next: "ajuuraan"
          },
          {
            values: [2, 3],
            next: "hormuz"
          },
          {
            values: [4],
            next: "madagascar"
          },
          {
            values: [5, 6],
            next: "ownerGoa"
          }
        ]
      },
      ajuuraan: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.ajuuraan"
        },
        next: "ownerAdal"
      },
      ownerAdal: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAdal"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerUpperEgypt"
          },
          {
            values: [4, 5, 6],
            next: "ownerGujarat"
          }
        ]
      },
      ownerUpperEgypt: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerUpperEgypt"
        }
      },
      hormuz: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.hormuz"
        },
        next: "ownerGujarat"
      },
      ownerGujarat: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGujarat"
        },
        next: "ownerCoromandel"
      },
      madagascar: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.madagascar"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerCoromandel"
          },
          {
            values: [4, 5, 6],
            next: "ownerMalacca"
          }
        ]
      },
      ownerGoa: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGoa"
        },
        next: "ownerMalacca"
      },
      ownerCoromandel: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCoromandel"
        },
        next: "ownerMoluccas"
      },
      ownerMalacca: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMalacca"
        },
        next: "ownerMoluccas"
      },
      ownerMoluccas: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMoluccas"
        },
        next: "japan"
      },
      japan: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.japan"
        }
      }
    }
  },
  diplomatic: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1, 2],
            next: "realmAragon"
          },
          {
            values: [3],
            next: "realmAquitaine"
          },
          {
            values: [4, 5],
            next: "realmCentralItaly"
          },
          {
            values: [6],
            next: "realmNaples"
          }
        ]
      },
      realmAragon: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAragon"
        },
        next: "realmBrittanyNormandy"
      },
      realmBrittanyNormandy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBrittanyNormandy"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmScotland"
          },
          {
            values: [4, 5, 6],
            next: "realmFlandersWallonia"
          }
        ]
      },
      realmScotland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmScotland"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmIreland"
          },
          {
            values: [4, 5, 6],
            next: "realmNetherlands"
          }
        ]
      },
      realmIreland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmIreland"
        }
      },
      realmAquitaine: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAquitaine"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmBrittanyNormandy"
          },
          {
            values: [4, 5, 6],
            next: "realmLanguedoc"
          }
        ]
      },
      realmLanguedoc: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLanguedoc"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmFlandersWallonia"
          },
          {
            values: [4, 5, 6],
            next: "realmSeine"
          }
        ]
      },
      realmFlandersWallonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmFlandersWallonia"
        },
        next: "realmNetherlands"
      },
      realmSeine: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSeine"
        },
        next: "realmNetherlands"
      },
      realmNetherlands: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNetherlands"
        },
        next: "kongo"
      },
      kongo: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.kongo"
        }
      },
      realmCentralItaly: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCentralItaly"
        },
        branches: [
          {
            values: [1, 2],
            next: "genoa"
          },
          {
            values: [3, 4],
            next: "realmSicily"
          },
          {
            values: [5, 6],
            next: "realmNaples"
          }
        ]
      },
      genoa: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.genoa"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmLanguedoc"
          },
          {
            values: [4, 5, 6],
            next: "realmLombardy"
          }
        ]
      },
      realmSicily: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSicily"
        },
        next: "realmLombardy"
      },
      realmNaples: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNaples"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmLombardy"
          },
          {
            values: [4, 5, 6],
            next: "venice"
          }
        ]
      },
      venice: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.venice"
        },
        next: "realmLombardy"
      },
      realmLombardy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLombardy"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmAndalucia"
          },
          {
            values: [4, 5, 6],
            next: "realmTunisia"
          }
        ]
      },
      realmAndalucia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAndalucia"
        }
      },
      realmTunisia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmTunisia"
        }
      }
    }
  }
};

export const ARAGON_TARGETING = {
  id: "aragon",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1],
            next: "realmAragon"
          },
          {
            values: [2, 3],
            next: "realmNaples"
          },
          {
            values: [4, 5],
            next: "realmAlgiers"
          },
          {
            values: [6],
            next: "tunis"
          }
        ]
      },
      realmAragon: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAragon"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "realmAndalucia"
          },
          {
            values: [5, 6],
            next: "realmLanguedoc"
          }
        ]
      },
      realmAndalucia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAndalucia"
        },
        next: "portugal"
      },
      portugal: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.portugal"
        },
        next: "realmAquitaine"
      },
      realmAquitaine: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAquitaine"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "england"
          },
          {
            values: [4, 5, 6],
            next: "france"
          }
        ]
      },
      england: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.england"
        },
        next: "realmNetherlands"
      },
      france: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.france"
        },
        next: "realmFlandersWallonia"
      },
      realmNaples: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNaples"
        },
        branches: [
          {
            values: [1],
            next: "realmLanguedoc"
          },
          {
            values: [2, 3],
            next: "realmCentralItaly"
          },
          {
            values: [4, 5, 6],
            next: "realmAlgiers"
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
            values: [1, 2],
            next: "portugal"
          },
          {
            values: [3, 4],
            next: "realmAquitaine"
          },
          {
            values: [5, 6],
            next: "realmLombardy"
          }
        ]
      },
      realmLombardy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLombardy"
        },
        next: "realmBurgundy"
      },
      realmBurgundy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBurgundy"
        },
        branches: [
          {
            values: [1, 2],
            next: "france"
          },
          {
            values: [3, 4],
            next: "realmFlandersWallonia"
          },
          {
            values: [5, 6],
            next: "austria"
          }
        ]
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
        },
        next: "realmFlandersWallonia"
      },
      realmFlandersWallonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmFlandersWallonia"
        },
        next: "realmNetherlands"
      },
      realmNetherlands: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNetherlands"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerAntilles"
          },
          {
            values: [3],
            next: "ownerGuyana"
          },
          {
            values: [4],
            next: "ownerPernambuco"
          },
          {
            values: [5, 6],
            next: "ownerGoldCoast"
          }
        ]
      },
      ownerAntilles: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAntilles"
        }
      },
      ownerGuyana: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGuyana"
        }
      },
      ownerPernambuco: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerPernambuco"
        }
      },
      ownerGoldCoast: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGoldCoast"
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
            next: "realmLombardy"
          },
          {
            values: [3, 4],
            next: "venice"
          },
          {
            values: [5, 6],
            next: "ownerRagusa"
          }
        ]
      },
      venice: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.venice"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmDalmatia"
          },
          {
            values: [4, 5, 6],
            next: "ownerAlbania"
          }
        ]
      },
      realmDalmatia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmDalmatia"
        },
        branches: [
          {
            values: [1, 2],
            next: "austria"
          },
          {
            values: [3, 4, 5, 6],
            next: "realmGreece"
          }
        ]
      },
      ownerRagusa: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerRagusa"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmDalmatia"
          },
          {
            values: [4, 5, 6],
            next: "ownerAlbania"
          }
        ]
      },
      ownerAlbania: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAlbania",
          requiresEasternEuropeMap: true
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmGreece"
          },
          {
            values: [4, 5, 6],
            next: "realmAegeanArchipelago"
          }
        ]
      },
      realmGreece: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmGreece",
          requiresEasternEuropeMap: true
        },
        next: "ownerConstantinople"
      },
      realmAegeanArchipelago: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAegeanArchipelago",
          requiresEasternEuropeMap: true
        },
        next: "ownerConstantinople"
      },
      ownerConstantinople: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerConstantinople",
          requiresEasternEuropeMap: true
        }
      },
      realmAlgiers: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAlgiers"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "morocco"
          },
          {
            values: [4, 5, 6],
            next: "tunis"
          }
        ]
      },
      morocco: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.morocco"
        },
        next: "ownerTripoli"
      },
      tunis: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.tunis"
        },
        next: "ownerTripoli"
      },
      ownerTripoli: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerTripoli"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerRagusa"
          },
          {
            values: [4, 5, 6],
            next: "ownerBangazi"
          }
        ]
      },
      ownerBangazi: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBangazi",
          requiresEasternEuropeMap: true
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmAegeanArchipelago"
          },
          {
            values: [4, 5, 6],
            next: "realmEgypt"
          }
        ]
      },
      realmEgypt: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEgypt",
          requiresEasternEuropeMap: true
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerConstantinople"
          },
          {
            values: [4, 5, 6],
            next: "ownerCyprus"
          }
        ]
      },
      ownerCyprus: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCyprus",
          requiresEasternEuropeMap: true
        },
        next: "ownerAlQuds"
      },
      ownerAlQuds: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAlQuds",
          requiresEasternEuropeMap: true
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
            next: "genoa"
          },
          {
            values: [4, 5],
            next: "realmNaples"
          },
          {
            values: [6],
            next: "papalStates"
          }
        ]
      },
      realmAragon: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAragon"
        },
        branches: [
          {
            values: [1, 2],
            next: "portugal"
          },
          {
            values: [3, 4],
            next: "realmLanguedoc"
          },
          {
            values: [5, 6],
            next: "ownerMilano"
          }
        ]
      },
      portugal: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.portugal"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmAndalucia"
          },
          {
            values: [4, 5, 6],
            next: "realmAquitaine"
          }
        ]
      },
      realmAndalucia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAndalucia"
        },
        next: "morocco"
      },
      morocco: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.morocco"
        },
        next: "realmTunisia"
      },
      realmTunisia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmTunisia"
        },
        next: "realmEgypt"
      },
      realmEgypt: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEgypt",
          requiresEasternEuropeMap: true
        },
        next: "ownerConstantinople"
      },
      realmAquitaine: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAquitaine"
        },
        next: "realmBrittanyNormandy"
      },
      realmBrittanyNormandy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBrittanyNormandy"
        }
      },
      realmLanguedoc: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLanguedoc"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmAquitaine"
          },
          {
            values: [3, 4, 5, 6],
            next: "switzerland"
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
            values: [1, 2],
            next: "realmAragon"
          },
          {
            values: [3, 4],
            next: "ownerMilano"
          },
          {
            values: [5],
            next: "realmBurgundy"
          },
          {
            values: [6],
            next: "savoy"
          }
        ]
      },
      ownerMilano: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMilano"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmLanguedoc"
          },
          {
            values: [3, 4],
            next: "realmBurgundy"
          },
          {
            values: [5, 6],
            next: "savoy"
          }
        ]
      },
      savoy: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.savoy"
        },
        branches: [
          {
            values: [1],
            next: "realmLanguedoc"
          },
          {
            values: [2, 3, 4],
            next: "realmBurgundy"
          },
          {
            values: [5, 6],
            next: "mantua"
          }
        ]
      },
      realmBurgundy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBurgundy"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmFlandersWallonia"
          },
          {
            values: [4, 5, 6],
            next: "switzerland"
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
      realmNetherlands: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNetherlands"
        }
      },
      switzerland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.switzerland"
        },
        next: "venice"
      },
      mantua: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.mantua"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmDalmatia"
          },
          {
            values: [4, 5, 6],
            next: "venice"
          }
        ]
      },
      realmNaples: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNaples"
        },
        branches: [
          {
            values: [1, 2],
            next: "genoa"
          },
          {
            values: [3, 4],
            next: "knights"
          },
          {
            values: [5, 6],
            next: "papalStates"
          }
        ]
      },
      papalStates: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.papalStates"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "ownerFirenze"
          },
          {
            values: [5, 6],
            next: "knights"
          }
        ]
      },
      ownerFirenze: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerFirenze"
        },
        branches: [
          {
            values: [1, 2],
            next: "savoy"
          },
          {
            values: [3],
            next: "realmBurgundy"
          },
          {
            values: [4],
            next: "mantua"
          },
          {
            values: [5, 6],
            next: "ownerSiena"
          }
        ]
      },
      ownerSiena: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerSiena"
        },
        next: "venice"
      },
      knights: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.knights",
          requiresEasternEuropeMap: true
        },
        next: "venice"
      },
      venice: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.venice"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmDalmatia"
          },
          {
            values: [3, 4],
            next: "realmAegeanArchipelago"
          },
          {
            values: [5, 6],
            next: "ownerCyprus"
          }
        ]
      },
      realmDalmatia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmDalmatia"
        },
        next: "realmGreece"
      },
      realmAegeanArchipelago: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAegeanArchipelago",
          requiresEasternEuropeMap: true
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmGreece"
          },
          {
            values: [4, 5, 6],
            next: "ownerConstantinople"
          }
        ]
      },
      realmGreece: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmGreece",
          requiresEasternEuropeMap: true
        },
        next: "ownerConstantinople"
      },
      ownerCyprus: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCyprus",
          requiresEasternEuropeMap: true
        },
        next: "ownerConstantinople"
      },
      ownerConstantinople: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerConstantinople",
          requiresEasternEuropeMap: true
        }
      }
    }
  }
};

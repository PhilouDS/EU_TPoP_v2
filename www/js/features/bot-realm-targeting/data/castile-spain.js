export const CASTILE_SPAIN_TARGETING = {
  id: "castileSpain",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1, 2],
            next: "ownerNavarra"
          },
          {
            values: [3, 4, 5],
            next: "realmAndalucia"
          },
          {
            values: [6],
            next: "realmPortugal"
          }
        ]
      },
      ownerNavarra: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNavarra"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerAntilles"
          },
          {
            values: [3],
            next: "realmLanguedoc"
          },
          {
            values: [4],
            next: "ownerValencia"
          },
          {
            values: [5, 6],
            next: "realmAndalucia"
          }
        ]
      },
      ownerAntilles: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAntilles"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerMexico"
          },
          {
            values: [4, 5, 6],
            next: "ownerCentralAmerica"
          }
        ]
      },
      ownerMexico: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMexico"
        },
        next: "ownerPeru"
      },
      ownerPeru: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerPeru"
        },
        next: "ownerLaPlata"
      },
      ownerCentralAmerica: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCentralAmerica"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerMexico"
          },
          {
            values: [4, 5, 6],
            next: "ownerLaPlata"
          }
        ]
      },
      ownerLaPlata: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerLaPlata"
        },
        next: "ownerFlorida"
      },
      ownerFlorida: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerFlorida"
        },
        next: "ownerCalifornia"
      },
      ownerCalifornia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCalifornia"
        },
        next: "ownerPhilippines"
      },
      ownerPhilippines: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerPhilippines"
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
            next: "ownerAntilles"
          },
          {
            values: [3, 4],
            next: "france"
          },
          {
            values: [5, 6],
            next: "realmLombardy"
          }
        ]
      },
      france: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.france"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerFlorida"
          },
          {
            values: [3, 4],
            next: "realmBurgundy"
          },
          {
            values: [5, 6],
            next: "realmCorsicaSardinia"
          }
        ]
      },
      ownerValencia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerValencia"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerAntilles"
          },
          {
            values: [3],
            next: "realmLanguedoc"
          },
          {
            values: [4],
            next: "realmCentralItaly"
          },
          {
            values: [5, 6],
            next: "ownerNapoli"
          }
        ]
      },
      realmCentralItaly: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCentralItaly"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "france"
          },
          {
            values: [4, 5],
            next: "realmLombardy"
          },
          {
            values: [6],
            next: "ownerFirenze"
          }
        ]
      },
      realmLombardy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLombardy"
        },
        next: "realmCorsicaSardinia"
      },
      ownerFirenze: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerFirenze"
        },
        next: "realmCorsicaSardinia"
      },
      realmCorsicaSardinia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCorsicaSardinia"
        },
        next: "realmSicily"
      },
      realmAndalucia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAndalucia"
        },
        branches: [
          {
            values: [1],
            next: "ownerValencia"
          },
          {
            values: [2],
            next: "tunis"
          },
          {
            values: [3, 4],
            next: "realmAlgiers"
          },
          {
            values: [5],
            next: "morocco"
          },
          {
            values: [6],
            next: "realmPortugal"
          }
        ]
      },
      tunis: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.tunis"
        },
        branches: [
          {
            values: [1],
            next: "ownerNapoli"
          },
          {
            values: [2, 3],
            next: "ownerIskandariyya"
          },
          {
            values: [4, 5, 6],
            next: "ottomans"
          }
        ]
      },
      ownerIskandariyya: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerIskandariyya"
        },
        next: "ottomans"
      },
      realmAlgiers: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAlgiers"
        },
        next: "tunis"
      },
      morocco: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.morocco"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmAlgiers"
          },
          {
            values: [4, 5],
            next: "ottomans"
          },
          {
            values: [6],
            next: "realmFlandersWallonia"
          }
        ]
      },
      ownerNapoli: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNapoli"
        },
        branches: [
          {
            values: [1],
            next: "realmLombardy"
          },
          {
            values: [2, 3],
            next: "ownerFirenze"
          },
          {
            values: [4],
            next: "realmSicily"
          },
          {
            values: [5, 6],
            next: "venice"
          }
        ]
      },
      venice: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.venice"
        },
        next: "realmSicily"
      },
      ottomans: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.ottomans"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "venice"
          },
          {
            values: [4, 5, 6],
            next: "realmSicily"
          }
        ]
      },
      realmSicily: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSicily"
        },
        next: "ownerRhodes"
      },
      ownerRhodes: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerRhodes",
          requiresEasternEuropeMap: true
        },
        next: "ownerCyprus"
      },
      ownerCyprus: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCyprus",
          requiresEasternEuropeMap: true
        },
        next: "ownerLorraine"
      },
      realmPortugal: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPortugal"
        },
        branches: [
          {
            values: [1, 2],
            next: "morocco"
          },
          {
            values: [3, 4],
            next: "realmFlandersWallonia"
          },
          {
            values: [5, 6],
            next: "england"
          }
        ]
      },
      england: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.england"
        },
        branches: [
          {
            values: [1],
            next: "ottomans"
          },
          {
            values: [2, 3, 4],
            next: "realmFlandersWallonia"
          },
          {
            values: [5, 6],
            next: "realmNetherlands"
          }
        ]
      },
      realmFlandersWallonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmFlandersWallonia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmBurgundy"
          },
          {
            values: [4, 5, 6],
            next: "realmNetherlands"
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
            next: "ownerLorraine"
          },
          {
            values: [4, 5, 6],
            next: "realmNetherlands"
          }
        ]
      },
      realmNetherlands: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNetherlands"
        },
        next: "ownerLorraine"
      },
      ownerLorraine: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerLorraine"
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
            values: [1],
            next: "papalStates"
          },
          {
            values: [2, 3, 4, 5],
            next: "realmAragon"
          },
          {
            values: [6],
            next: "portugal"
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
            values: [1, 2, 3],
            next: "venice"
          },
          {
            values: [4, 5, 6],
            next: "realmLombardy"
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
            values: [1],
            next: "knights"
          },
          {
            values: [2, 3],
            next: "genoa"
          },
          {
            values: [4],
            next: "savoy"
          },
          {
            values: [5, 6],
            next: "ownerFirenze"
          }
        ]
      },
      knights: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.knights",
          requiresEasternEuropeMap: true
        },
        next: "ownerCyprus"
      },
      ownerCyprus: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCyprus",
          requiresEasternEuropeMap: true
        }
      },
      genoa: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.genoa"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "knights"
          },
          {
            values: [4, 5, 6],
            next: "ownerSiena"
          }
        ]
      },
      ownerSiena: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerSiena"
        },
        next: "realmDalmatia"
      },
      realmDalmatia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmDalmatia"
        }
      },
      savoy: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.savoy"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "switzerland"
          },
          {
            values: [5, 6],
            next: "realmCorsicaSardinia"
          }
        ]
      },
      switzerland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.switzerland"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmBavariaSwabia"
          },
          {
            values: [4, 5, 6],
            next: "realmRhineland"
          }
        ]
      },
      realmLombardy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLombardy"
        },
        branches: [
          {
            values: [1],
            next: "genoa"
          },
          {
            values: [2],
            next: "switzerland"
          },
          {
            values: [3, 4, 5],
            next: "ownerFirenze"
          },
          {
            values: [6],
            next: "realmSicily"
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
            values: [1],
            next: "savoy"
          },
          {
            values: [2, 3, 4],
            next: "realmCorsicaSardinia"
          },
          {
            values: [5, 6],
            next: "realmSicily"
          }
        ]
      },
      realmSicily: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSicily"
        },
        next: "realmCorsicaSardinia"
      },
      realmCorsicaSardinia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCorsicaSardinia"
        },
        next: "ownerSiena"
      },
      realmAragon: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAragon"
        },
        branches: [
          {
            values: [1],
            next: "realmLombardy"
          },
          {
            values: [2, 3, 4],
            next: "ownerNapoli"
          },
          {
            values: [5, 6],
            next: "realmBurgundy"
          }
        ]
      },
      ownerNapoli: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNapoli"
        },
        branches: [
          {
            values: [1, 2],
            next: "papalStates"
          },
          {
            values: [3],
            next: "ownerFirenze"
          },
          {
            values: [4],
            next: "realmSicily"
          },
          {
            values: [5, 6],
            next: "portugal"
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
            next: "lorraine"
          },
          {
            values: [4, 5],
            next: "realmFlandersWallonia"
          },
          {
            values: [6],
            next: "realmBrittanyNormandy"
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
            next: "realmBurgundy"
          },
          {
            values: [4, 5, 6],
            next: "realmIreland"
          }
        ]
      },
      realmIreland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmIreland"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmBurgundy"
          },
          {
            values: [4, 5, 6],
            next: "realmBrittanyNormandy"
          }
        ]
      },
      realmBrittanyNormandy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBrittanyNormandy"
        },
        next: "realmNetherlands"
      },
      realmFlandersWallonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmFlandersWallonia"
        },
        branches: [
          {
            values: [1, 2],
            next: "lorraine"
          },
          {
            values: [3, 4],
            next: "bavaria"
          },
          {
            values: [5, 6],
            next: "realmNetherlands"
          }
        ]
      },
      lorraine: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.lorraine"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmBavariaSwabia"
          },
          {
            values: [3, 4],
            next: "realmRhineland"
          },
          {
            values: [5, 6],
            next: "realmWestphalia"
          }
        ]
      },
      bavaria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bavaria"
        },
        next: "realmRhineland"
      },
      realmNetherlands: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNetherlands"
        },
        next: "realmWestphalia"
      },
      realmWestphalia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWestphalia"
        },
        next: "realmRhineland"
      },
      realmRhineland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRhineland"
        },
        next: "realmBavariaSwabia"
      },
      realmBavariaSwabia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBavariaSwabia"
        },
        next: "bohemia"
      },
      bohemia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bohemia"
        }
      }
    }
  }
};

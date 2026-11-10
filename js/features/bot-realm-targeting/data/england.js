export const ENGLAND_TARGETING = {
  id: "england",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1, 2],
            next: "allNprsIreland"
          },
          {
            values: [3, 4],
            next: "realmIreland"
          },
          {
            values: [5],
            next: "scotland"
          },
          {
            values: [6],
            next: "franceAdjacentLand"
          }
        ]
      },
      allNprsIreland: {
        target: {
          type: "special",
          labelKey: "botRealmTargeting.targets.allNprsIreland"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerVirginia"
          },
          {
            values: [3],
            next: "ownerGoldCoast"
          },
          {
            values: [4],
            next: "realmNetherlands"
          },
          {
            values: [5, 6],
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
            values: [1, 2],
            next: "realmNetherlands"
          },
          {
            values: [3, 4],
            next: "realmFlandersWallonia"
          },
          {
            values: [5, 6],
            next: "allNprsIreland"
          }
        ]
      },
      scotland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.scotland"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmFlandersWallonia"
          },
          {
            values: [3],
            next: "realmLowerSaxony"
          },
          {
            values: [4],
            next: "ownerPicardieAdjacentLand"
          },
          {
            values: [5],
            next: "realmBrittanyNormandy"
          },
          {
            values: [6],
            next: "franceAdjacentLand"
          }
        ]
      },
      franceAdjacentLand: {
        target: {
          type: "special",
          labelKey: "botRealmTargeting.targets.franceAdjacentLand"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerPicardieAdjacentLand"
          },
          {
            values: [4, 5, 6],
            next: "realmBrittanyNormandy"
          }
        ]
      },
      ownerVirginia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerVirginia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerNewEngland"
          },
          {
            values: [4, 5, 6],
            next: "ownerFlorida"
          }
        ]
      },
      ownerNewEngland: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNewEngland"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerHudsonBay"
          },
          {
            values: [4, 5, 6],
            next: "ownerCanada"
          }
        ]
      },
      ownerHudsonBay: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerHudsonBay"
        },
        next: "ownerCanada"
      },
      ownerCanada: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCanada"
        },
        next: "ownerAntilles"
      },
      ownerFlorida: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerFlorida"
        },
        next: "ownerAntilles"
      },
      ownerAntilles: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAntilles"
        }
      },
      realmNetherlands: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNetherlands"
        },
        branches: [
          {
            values: [3],
            next: "ownerGoldCoast"
          },
          {
            values: [4],
            next: "ownerBergenhus"
          },
          {
            values: [5],
            next: "denmark"
          },
          {
            values: [6],
            next: "realmLowerSaxony"
          },
          {
            values: [1, 2],
            next: "ownerVirginia"
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
            values: [1, 2],
            next: "realmNetherlands"
          },
          {
            values: [3, 4],
            next: "ownerGoldCoast"
          },
          {
            values: [5, 6],
            next: "realmLowerSaxony"
          }
        ]
      },
      ownerGoldCoast: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGoldCoast"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerVirginia"
          },
          {
            values: [3, 4],
            next: "ownerFlorida"
          },
          {
            values: [5, 6],
            next: "ownerCapeOfGoodHope"
          }
        ]
      },
      ownerCapeOfGoodHope: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCapeOfGoodHope"
        },
        next: "ownerGoa"
      },
      ownerGoa: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGoa"
        },
        next: "ownerCoromandel"
      },
      ownerCoromandel: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCoromandel"
        },
        next: "ownerBengal"
      },
      ownerBengal: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBengal"
        }
      },
      denmark: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.denmark"
        },
        branches: [
          {
            values: [1],
            next: "ownerGoldCoast"
          },
          {
            values: [2],
            next: "ownerAntilles"
          },
          {
            values: [3, 4],
            next: "ownerBergenhus"
          },
          {
            values: [5],
            next: "ownerCoromandel"
          },
          {
            values: [6],
            next: "sweden"
          }
        ]
      },
      ownerBergenhus: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBergenhus"
        },
        next: "sweden"
      },
      sweden: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.sweden"
        }
      },
      realmLowerSaxony: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLowerSaxony"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "denmark"
          },
          {
            values: [4, 5, 6],
            next: "realmPomerania"
          }
        ]
      },
      realmPomerania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPomerania"
        }
      },
      ownerPicardieAdjacentLand: {
        target: {
          type: "special",
          labelKey: "botRealmTargeting.targets.ownerPicardieAdjacentLand"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmFlandersWallonia"
          },
          {
            values: [3, 4],
            next: "portugal"
          },
          {
            values: [5, 6],
            next: "castileSpain"
          }
        ]
      },
      realmBrittanyNormandy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBrittanyNormandy"
        },
        branches: [
          {
            values: [1],
            next: "ownerPicardieAdjacentLand"
          },
          {
            values: [2, 3],
            next: "portugal"
          },
          {
            values: [4, 5],
            next: "castileSpain"
          },
          {
            values: [6],
            next: "realmLanguedocAdjacentLand"
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
            values: [1, 2],
            next: "ownerGoa"
          },
          {
            values: [3],
            next: "ownerCoromandel"
          },
          {
            values: [4, 5],
            next: "ownerGibraltar"
          },
          {
            values: [6],
            next: "castileSpain"
          }
        ]
      },
      castileSpain: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.castileSpain"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerTangiers"
          },
          {
            values: [3, 4],
            next: "ownerBaleares"
          },
          {
            values: [5, 6],
            next: "ownerMalta"
          }
        ]
      },
      ownerGibraltar: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGibraltar"
        },
        branches: [
          {
            values: [1],
            next: "ownerCoromandel"
          },
          {
            values: [2, 3],
            next: "ownerTangiers"
          },
          {
            values: [4],
            next: "ownerBaleares"
          },
          {
            values: [5],
            next: "ownerMalta"
          },
          {
            values: [6],
            next: "ownerCrete"
          }
        ]
      },
      ownerTangiers: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerTangiers"
        },
        next: "ownerBaleares"
      },
      ownerBaleares: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBaleares"
        },
        next: "ownerMalta"
      },
      ownerMalta: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMalta"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerCrete"
          },
          {
            values: [4, 5, 6],
            next: "ownerAlexandria"
          }
        ]
      },
      ownerCrete: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCrete",
          requiresEasternEuropeMap: true
        },
        next: "ownerAlexandria"
      },
      ownerAlexandria: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAlexandria",
          requiresEasternEuropeMap: true
        }
      },
      realmLanguedocAdjacentLand: {
        target: {
          type: "special",
          labelKey: "botRealmTargeting.targets.realmLanguedocAdjacentLand"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmAragonAdjacentLand"
          },
          {
            values: [4, 5, 6],
            next: "realmCorsicaSardinia"
          }
        ]
      },
      realmAragonAdjacentLand: {
        target: {
          type: "special",
          labelKey: "botRealmTargeting.targets.realmAragonAdjacentLand"
        },
        next: "ownerBaleares"
      },
      realmCorsicaSardinia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCorsicaSardinia"
        },
        next: "ownerMalta"
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
            next: "portugal"
          },
          {
            values: [3],
            next: "realmSeine"
          },
          {
            values: [4],
            next: "realmBrittanyNormandy"
          },
          {
            values: [5, 6],
            next: "scotland"
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
            values: [1, 2],
            next: "realmAragon"
          },
          {
            values: [3, 4],
            next: "ownerAntwerpen"
          },
          {
            values: [5, 6],
            next: "realmSeine"
          }
        ]
      },
      realmSeine: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSeine"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerAntwerpen"
          },
          {
            values: [3, 4, 5],
            next: "ownerBrugge"
          },
          {
            values: [6],
            next: "realmBrittanyNormandy"
          }
        ]
      },
      realmBrittanyNormandy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBrittanyNormandy"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerBrugge"
          },
          {
            values: [3, 4],
            next: "ownerAmsterdam"
          },
          {
            values: [5, 6],
            next: "scotland"
          }
        ]
      },
      scotland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.scotland"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerAmsterdam"
          },
          {
            values: [4],
            next: "denmark"
          },
          {
            values: [5, 6],
            next: "realmIreland"
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
            values: [1],
            next: "morocco"
          },
          {
            values: [2, 3],
            next: "papalStates"
          },
          {
            values: [4, 5, 6],
            next: "venice"
          }
        ]
      },
      morocco: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.morocco"
        },
        next: "realmAlgiers"
      },
      realmAlgiers: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAlgiers"
        },
        next: "realmEgypt"
      },
      realmEgypt: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEgypt"
        },
        next: "realmAegeanArchipelago"
      },
      papalStates: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.papalStates"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmNaples"
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
        next: "realmAegeanArchipelago"
      },
      venice: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.venice"
        },
        next: "realmLombardy"
      },
      realmAegeanArchipelago: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAegeanArchipelago"
        }
      },
      ownerAntwerpen: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAntwerpen"
        },
        branches: [
          {
            values: [1, 2],
            next: "palatinate"
          },
          {
            values: [3, 4],
            next: "lorraine"
          },
          {
            values: [5, 6],
            next: "ownerBrugge"
          }
        ]
      },
      palatinate: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.palatinate"
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
      lorraine: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.lorraine"
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
      ownerBrugge: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBrugge"
        },
        branches: [
          {
            values: [1],
            next: "realmNetherlands"
          },
          {
            values: [2, 3],
            next: "realmNetherlands"
          },
          {
            values: [4],
            next: "realmLowerSaxony"
          },
          {
            values: [5, 6],
            next: "ownerAmsterdam"
          }
        ]
      },
      ownerAmsterdam: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAmsterdam"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmNetherlands"
          },
          {
            values: [3, 4],
            next: "realmLowerSaxony"
          },
          {
            values: [5, 6],
            next: "denmark"
          }
        ]
      },
      realmNetherlands: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNetherlands"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmRhineland"
          },
          {
            values: [3, 4],
            next: "realmWestphalia"
          },
          {
            values: [5, 6],
            next: "realmLowerSaxony"
          }
        ]
      },
      realmLowerSaxony: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLowerSaxony"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmWestphalia"
          },
          {
            values: [3, 4],
            next: "brandenburgPrussia"
          },
          {
            values: [5, 6],
            next: "realmPomerania"
          }
        ]
      },
      realmWestphalia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWestphalia"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmRhineland"
          },
          {
            values: [3, 4],
            next: "saxony"
          },
          {
            values: [5, 6],
            next: "brandenburgPrussia"
          }
        ]
      },
      realmRhineland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRhineland"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmBavariaSwabia"
          },
          {
            values: [3, 4],
            next: "switzerland"
          },
          {
            values: [5, 6],
            next: "saxony"
          }
        ]
      },
      realmBavariaSwabia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBavariaSwabia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmLombardy"
          },
          {
            values: [4, 5, 6],
            next: "switzerland"
          }
        ]
      },
      realmLombardy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLombardy"
        }
      },
      switzerland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.switzerland"
        }
      },
      saxony: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.saxony"
        },
        next: "bohemia"
      },
      brandenburgPrussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brandenburgPrussia"
        },
        next: "bohemia"
      },
      bohemia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bohemia"
        },
        next: "realmWielkopolska"
      },
      realmWielkopolska: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWielkopolska"
        }
      },
      denmark: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.denmark"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmLowerSaxony"
          },
          {
            values: [3, 4],
            next: "realmPomerania"
          },
          {
            values: [5, 6],
            next: "ownerAkershus"
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
            values: [1, 2],
            next: "denmark"
          },
          {
            values: [3, 4],
            next: "realmPomerania"
          },
          {
            values: [5, 6],
            next: "ownerAkershus"
          }
        ]
      },
      ownerAkershus: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAkershus"
        },
        next: "sweden"
      },
      realmPomerania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPomerania"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "brandenburgPrussia"
          },
          {
            values: [4, 5, 6],
            next: "sweden"
          }
        ]
      },
      sweden: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.sweden",
          requiresEasternEuropeMap: true
        },
        next: "realmKarelia"
      },
      realmKarelia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmKarelia",
          requiresEasternEuropeMap: true
        }
      }
    }
  }
};

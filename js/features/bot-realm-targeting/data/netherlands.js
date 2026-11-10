export const NETHERLANDS_TARGETING = {
  id: "netherlands",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1],
            next: "bremen"
          },
          {
            values: [2],
            next: "hamburg"
          },
          {
            values: [3, 4, 5],
            next: "realmNetherlands"
          },
          {
            values: [6],
            next: "liege"
          }
        ]
      },
      bremen: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bremen"
        },
        next: "ownerPernambuco"
      },
      hamburg: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.hamburg"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerPernambuco"
          },
          {
            values: [3, 4, 5, 6],
            next: "realmLowerSaxony"
          }
        ]
      },
      ownerPernambuco: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerPernambuco"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerBahia"
          },
          {
            values: [4, 5, 6],
            next: "ownerGuyana"
          }
        ]
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
        next: "ownerCapeOfGoodHope"
      },
      ownerGuyana: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGuyana"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerAntilles"
          },
          {
            values: [4, 5],
            next: "ownerCapeOfGoodHope"
          },
          {
            values: [6],
            next: "ownerNewEngland"
          }
        ]
      },
      ownerAntilles: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAntilles"
        },
        next: "ownerMalacca"
      },
      ownerNewEngland: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNewEngland"
        },
        branches: [
          {
            values: [1],
            next: "ownerAntilles"
          },
          {
            values: [2, 3],
            next: "ownerCapeOfGoodHope"
          },
          {
            values: [4, 5, 6],
            next: "ownerMoluccas"
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
            next: "ownerGoldCoast"
          },
          {
            values: [3, 4],
            next: "realmWestphalia"
          },
          {
            values: [5, 6],
            next: "realmFlandersWallonia"
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
            values: [1],
            next: "ownerGuyana"
          },
          {
            values: [2, 3],
            next: "ownerNewEngland"
          },
          {
            values: [4, 5],
            next: "ownerGoldCoast"
          },
          {
            values: [6],
            next: "denmark"
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
            values: [1, 2, 3],
            next: "ownerCapeOfGoodHope"
          },
          {
            values: [4, 5, 6],
            next: "ownerMoluccas"
          }
        ]
      },
      ownerCapeOfGoodHope: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCapeOfGoodHope"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerGoa"
          },
          {
            values: [4, 5, 6],
            next: "ownerCoromandel"
          }
        ]
      },
      ownerGoa: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGoa"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerMalacca"
          },
          {
            values: [3, 4],
            next: "ownerSouthSumatra"
          },
          {
            values: [5, 6],
            next: "ownerJava"
          }
        ]
      },
      ownerMalacca: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMalacca"
        }
      },
      ownerSouthSumatra: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerSouthSumatra"
        },
        next: "ownerJava"
      },
      ownerJava: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerJava"
        },
        next: "ownerTimor"
      },
      ownerMoluccas: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMoluccas"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerCoromandel"
          },
          {
            values: [4, 5, 6],
            next: "ownerTimor"
          }
        ]
      },
      ownerCoromandel: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCoromandel"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerSouthSumatra"
          },
          {
            values: [3, 4],
            next: "ownerJava"
          },
          {
            values: [5, 6],
            next: "ownerTimor"
          }
        ]
      },
      ownerTimor: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerTimor"
        },
        next: "ownerBrunei"
      },
      ownerBrunei: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBrunei"
        },
        next: "ownerVogelkop"
      },
      ownerVogelkop: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerVogelkop"
        }
      },
      realmWestphalia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWestphalia"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmLowerSaxony"
          },
          {
            values: [3, 4],
            next: "realmSaxony"
          },
          {
            values: [5, 6],
            next: "realmFlandersWallonia"
          }
        ]
      },
      realmSaxony: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSaxony"
        },
        next: "realmBavariaSwabia"
      },
      realmBavariaSwabia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBavariaSwabia"
        },
        next: "austria"
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
        }
      },
      realmFlandersWallonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmFlandersWallonia"
        },
        next: "realmRhineland"
      },
      liege: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.liege"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "realmFlandersWallonia"
          },
          {
            values: [5, 6],
            next: "realmRhineland"
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
            values: [1, 2, 3],
            next: "realmBavariaSwabia"
          },
          {
            values: [4, 5, 6],
            next: "ownerArtois"
          }
        ]
      },
      ownerArtois: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerArtois"
        },
        next: "ownerPicardie"
      },
      ownerPicardie: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerPicardie"
        },
        branches: [
          {
            values: [1, 2],
            next: "england"
          },
          {
            values: [3, 4, 5, 6],
            next: "france"
          }
        ]
      },
      denmark: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.denmark"
        },
        next: "england"
      },
      england: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.england"
        },
        next: "ownerCoromandel"
      },
      france: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.france"
        },
        next: "ownerCoromandel"
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
            next: "realmSeine"
          },
          {
            values: [2, 3],
            next: "realmFlandersWallonia"
          },
          {
            values: [4, 5],
            next: "realmNetherlands"
          },
          {
            values: [6],
            next: "realmJutland"
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
            next: "realmBrittanyNormandy"
          },
          {
            values: [3],
            next: "realmRhineland"
          },
          {
            values: [4, 5, 6],
            next: "realmBurgundy"
          }
        ]
      },
      realmBrittanyNormandy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBrittanyNormandy"
        },
        next: "realmAquitaine"
      },
      realmAquitaine: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAquitaine"
        },
        next: "realmEastAnglia"
      },
      realmEastAnglia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEastAnglia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "portugal"
          },
          {
            values: [4, 5, 6],
            next: "scotland"
          }
        ]
      },
      portugal: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.portugal"
        }
      },
      scotland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.scotland"
        }
      },
      realmFlandersWallonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmFlandersWallonia"
        },
        branches: [
          {
            values: [1],
            next: "realmSeine"
          },
          {
            values: [2, 3, 4],
            next: "realmBurgundy"
          },
          {
            values: [5, 6],
            next: "realmWestphalia"
          }
        ]
      },
      realmBurgundy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBurgundy"
        },
        next: "realmRhineland"
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
            next: "realmSaxony"
          },
          {
            values: [5, 6],
            next: "realmLowerSaxony"
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
            values: [1, 2, 3],
            next: "realmSwitzerland"
          },
          {
            values: [4, 5, 6],
            next: "realmBavariaSwabia"
          }
        ]
      },
      realmSwitzerland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSwitzerland"
        }
      },
      realmSaxony: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSaxony"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmBavariaSwabia"
          },
          {
            values: [4, 5, 6],
            next: "bohemia"
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
            next: "realmSwitzerland"
          },
          {
            values: [4, 5, 6],
            next: "realmRoyalHungary"
          }
        ]
      },
      bohemia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bohemia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmRoyalHungary"
          },
          {
            values: [4, 5, 6],
            next: "realmWielkopolska"
          }
        ]
      },
      realmRoyalHungary: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRoyalHungary"
        }
      },
      realmNetherlands: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNetherlands"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmWestphalia"
          },
          {
            values: [3, 4],
            next: "realmLowerSaxony"
          },
          {
            values: [5],
            next: "realmOstlandet"
          },
          {
            values: [6],
            next: "realmJutland"
          }
        ]
      },
      realmJutland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmJutland"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmLowerSaxony"
          },
          {
            values: [3, 4, 5, 6],
            next: "realmOstlandet"
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
            values: [1, 2, 3],
            next: "brandenburgPrussia"
          },
          {
            values: [4, 5, 6],
            next: "realmPomerania"
          }
        ]
      },
      realmOstlandet: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmOstlandet"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmPomerania"
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
          labelKey: "botRealmTargeting.targets.sweden"
        },
        next: "realmPrussia"
      },
      realmPomerania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPomerania"
        },
        next: "realmPrussia"
      },
      brandenburgPrussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brandenburgPrussia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "bohemia"
          },
          {
            values: [4, 5, 6],
            next: "realmPrussia"
          }
        ]
      },
      realmPrussia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPrussia"
        },
        next: "realmWielkopolska"
      },
      realmWielkopolska: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWielkopolska"
        }
      }
    }
  }
};

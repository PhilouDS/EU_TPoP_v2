export const KALMAR_TARGETING = {
  id: "kalmar",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1],
            next: "ownerAkershus"
          },
          {
            values: [2, 3],
            next: "realmGotalandSkane"
          },
          {
            values: [4, 5],
            next: "realmPomerania"
          },
          {
            values: [6],
            next: "realmEstoniaLivonia"
          }
        ]
      },
      ownerAkershus: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAkershus"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "bremen"
          },
          {
            values: [4],
            next: "hamburg"
          },
          {
            values: [5, 6],
            next: "realmGotalandSkane"
          }
        ]
      },
      bremen: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bremen"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "realmNetherlands"
          },
          {
            values: [5, 6],
            next: "realmLowerSaxony"
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
            next: "scotland"
          },
          {
            values: [3, 4],
            next: "ownerNewEngland"
          },
          {
            values: [5, 6],
            next: "realmWestphalia"
          }
        ]
      },
      scotland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.scotland"
        },
        next: "england"
      },
      ownerNewEngland: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNewEngland"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "england"
          },
          {
            values: [4, 5, 6],
            next: "ownerGoldCoast"
          }
        ]
      },
      england: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.england"
        }
      },
      ownerGoldCoast: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGoldCoast"
        },
        next: "ownerCoromandel"
      },
      ownerCoromandel: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCoromandel"
        }
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
        }
      },
      realmGotalandSkane: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmGotalandSkane"
        },
        branches: [
          {
            values: [1, 2],
            next: "hamburg"
          },
          {
            values: [3, 4],
            next: "realmPrussia"
          },
          {
            values: [5, 6],
            next: "realmPomerania"
          }
        ]
      },
      hamburg: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.hamburg"
        },
        branches: [
          {
            values: [1, 2],
            next: "bremen"
          },
          {
            values: [3, 4],
            next: "realmLowerSaxony"
          },
          {
            values: [5, 6],
            next: "brandenburgPrussia"
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
            next: "realmNetherlands"
          },
          {
            values: [2],
            next: "realmWestphalia"
          },
          {
            values: [3, 4, 5, 6],
            next: "brandenburgPrussia"
          }
        ]
      },
      realmPomerania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPomerania"
        },
        branches: [
          {
            values: [1],
            next: "hamburg"
          },
          {
            values: [2],
            next: "realmPrussia"
          },
          {
            values: [3, 4],
            next: "realmJutland"
          },
          {
            values: [5, 6],
            next: "realmEstoniaLivonia"
          }
        ]
      },
      realmPrussia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPrussia"
        },
        branches: [
          {
            values: [1, 2],
            next: "hamburg"
          },
          {
            values: [3, 4],
            next: "polandCommonwealth"
          },
          {
            values: [5, 6],
            next: "realmJutland"
          }
        ]
      },
      realmJutland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmJutland"
        },
        next: "hamburg"
      },
      brandenburgPrussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brandenburgPrussia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "saxony"
          },
          {
            values: [4, 5],
            next: "bohemia"
          },
          {
            values: [6],
            next: "austria"
          }
        ]
      },
      saxony: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.saxony"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmWestphalia"
          },
          {
            values: [4, 5],
            next: "realmRhineland"
          },
          {
            values: [6],
            next: "realmBavariaSwabia"
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
            next: "realmBavariaSwabia"
          },
          {
            values: [4, 5, 6],
            next: "austria"
          }
        ]
      },
      polandCommonwealth: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.polandCommonwealth"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "bohemia"
          },
          {
            values: [4, 5, 6],
            next: "austria"
          }
        ]
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmBavariaSwabia"
          },
          {
            values: [4, 5, 6],
            next: "france"
          }
        ]
      },
      realmBavariaSwabia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBavariaSwabia"
        },
        next: "realmRhineland"
      },
      france: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.france"
        }
      },
      realmEstoniaLivonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEstoniaLivonia"
        },
        branches: [
          {
            values: [1],
            next: "ownerVilnius"
          },
          {
            values: [2, 3, 4],
            next: "realmFinland"
          },
          {
            values: [5, 6],
            next: "ownerNeva"
          }
        ]
      },
      ownerVilnius: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerVilnius"
        },
        branches: [
          {
            values: [1, 2],
            next: "polandCommonwealth"
          },
          {
            values: [3, 4],
            next: "realmRedRuthenia"
          },
          {
            values: [5, 6],
            next: "muscovyRussia"
          }
        ]
      },
      realmRedRuthenia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRedRuthenia"
        },
        next: "realmRoyalHungary"
      },
      realmRoyalHungary: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRoyalHungary"
        }
      },
      realmFinland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmFinland"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerVilnius"
          },
          {
            values: [3, 4],
            next: "realmNovgorod"
          },
          {
            values: [5, 6],
            next: "muscovyRussia"
          }
        ]
      },
      ownerNeva: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNeva"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmNovgorod"
          },
          {
            values: [4, 5, 6],
            next: "realmKarelia"
          }
        ]
      },
      realmNovgorod: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNovgorod"
        },
        next: "muscovyRussia"
      },
      realmKarelia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmKarelia"
        },
        next: "muscovyRussia"
      },
      muscovyRussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.muscovyRussia"
        },
        next: "realmMuscowRyazan"
      },
      realmMuscowRyazan: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMuscowRyazan"
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
            values: [1, 2, 3],
            next: "ownerAkershus"
          },
          {
            values: [4],
            next: "realmGotalandSkane"
          },
          {
            values: [5],
            next: "realmPrussia"
          },
          {
            values: [6],
            next: "realmEstoniaLivonia"
          }
        ]
      },
      ownerAkershus: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAkershus"
        },
        branches: [
          {
            values: [1],
            next: "scotland"
          },
          {
            values: [2],
            next: "realmNetherlands"
          },
          {
            values: [3],
            next: "realmLowerSaxony"
          },
          {
            values: [4, 5, 6],
            next: "realmGotalandSkane"
          }
        ]
      },
      scotland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.scotland"
        },
        next: "realmIreland"
      },
      realmIreland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmIreland"
        },
        next: "ownerVirginia"
      },
      ownerVirginia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerVirginia"
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
            next: "scotland"
          },
          {
            values: [3, 4],
            next: "realmFlandersWallonia"
          },
          {
            values: [5, 6],
            next: "realmWestphalia"
          }
        ]
      },
      realmFlandersWallonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmFlandersWallonia"
        },
        next: "ownerVirginia"
      },
      realmWestphalia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWestphalia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmRhineland"
          },
          {
            values: [4, 5, 6],
            next: "saxony"
          }
        ]
      },
      realmRhineland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRhineland"
        }
      },
      realmGotalandSkane: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmGotalandSkane"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmLowerSaxony"
          },
          {
            values: [3, 4],
            next: "realmJutland"
          },
          {
            values: [5],
            next: "realmPomerania"
          },
          {
            values: [6],
            next: "realmPrussia"
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
            next: "realmNetherlands"
          },
          {
            values: [3],
            next: "realmWestphalia"
          },
          {
            values: [4],
            next: "saxony"
          },
          {
            values: [5, 6],
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
            values: [1, 2, 3, 4],
            next: "brandenburgPrussia"
          },
          {
            values: [5, 6],
            next: "realmPomerania"
          }
        ]
      },
      saxony: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.saxony"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmRhineland"
          },
          {
            values: [3, 4],
            next: "bavaria"
          },
          {
            values: [5, 6],
            next: "bohemia"
          }
        ]
      },
      bavaria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bavaria"
        }
      },
      realmPrussia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPrussia"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmJutland"
          },
          {
            values: [3],
            next: "realmPomerania"
          },
          {
            values: [4],
            next: "ownerVilnius"
          },
          {
            values: [5, 6],
            next: "realmEstoniaLivonia"
          }
        ]
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
            next: "realmWielkopolska"
          }
        ]
      },
      brandenburgPrussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brandenburgPrussia"
        },
        branches: [
          {
            values: [1, 2],
            next: "saxony"
          },
          {
            values: [3, 4],
            next: "bohemia"
          },
          {
            values: [5, 6],
            next: "realmWielkopolska"
          }
        ]
      },
      bohemia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bohemia"
        },
        next: "realmRoyalHungary"
      },
      realmEstoniaLivonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEstoniaLivonia"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerVilnius"
          },
          {
            values: [3, 4],
            next: "realmNovgorod"
          },
          {
            values: [5, 6],
            next: "ownerNeva"
          }
        ]
      },
      ownerVilnius: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerVilnius"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmWielkopolska"
          },
          {
            values: [4, 5, 6],
            next: "realmMuscowRyazan"
          }
        ]
      },
      realmWielkopolska: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWielkopolska"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmRoyalHungary"
          },
          {
            values: [4, 5, 6],
            next: "realmMoldavia"
          }
        ]
      },
      realmRoyalHungary: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRoyalHungary"
        }
      },
      realmMoldavia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMoldavia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmRoyalHungary"
          },
          {
            values: [4, 5, 6],
            next: "realmCrimea"
          }
        ]
      },
      realmCrimea: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCrimea"
        }
      },
      realmNovgorod: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNovgorod"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmMuscowRyazan"
          },
          {
            values: [4, 5, 6],
            next: "realmKarelia"
          }
        ]
      },
      ownerNeva: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNeva"
        },
        next: "realmKarelia"
      },
      realmKarelia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmKarelia"
        },
        next: "realmMuscowRyazan"
      },
      realmMuscowRyazan: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMuscowRyazan"
        },
        next: "realmCrimea"
      }
    }
  }
};

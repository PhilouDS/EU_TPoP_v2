export const DENMARK_TARGETING = {
  id: "denmark",
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
            values: [2, 3, 4],
            next: "sweden"
          },
          {
            values: [5, 6],
            next: "realmPomerania"
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
            values: [1, 2, 3, 4],
            next: "bremen"
          },
          {
            values: [5, 6],
            next: "hamburg"
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
      sweden: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.sweden"
        },
        branches: [
          {
            values: [1],
            next: "hamburg"
          },
          {
            values: [2, 3, 4],
            next: "realmJutland"
          },
          {
            values: [5, 6],
            next: "realmPomerania"
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
      realmPomerania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPomerania"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmJutland"
          },
          {
            values: [4, 5, 6],
            next: "ownerDanzig"
          }
        ]
      },
      ownerDanzig: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerDanzig"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "brandenburgPrussia"
          },
          {
            values: [4, 5, 6],
            next: "polandCommonwealth"
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
            next: "realmLowerSaxony"
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
            values: [1, 2, 3, 4],
            next: "england"
          },
          {
            values: [5, 6],
            next: "ownerNewEngland"
          }
        ]
      },
      england: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.england"
        }
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
            next: "saxony"
          },
          {
            values: [5, 6],
            next: "brandenburgPrussia"
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
        next: "realmBavariaSwabia"
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
        },
        next: "realmBavariaSwabia"
      },
      realmWestphalia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWestphalia"
        },
        next: "france"
      },
      realmRhineland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRhineland"
        },
        next: "france"
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
            next: "realmJutland"
          },
          {
            values: [5],
            next: "sweden"
          },
          {
            values: [6],
            next: "realmPrussia"
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
            next: "realmJutland"
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
      realmNetherlands: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNetherlands"
        },
        branches: [
          {
            values: [1],
            next: "scotland"
          },
          {
            values: [2, 3],
            next: "realmFlandersWallonia"
          },
          {
            values: [4, 5, 6],
            next: "ownerVirginia"
          }
        ]
      },
      ownerVirginia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerVirginia"
        },
        next: "realmFlandersWallonia"
      },
      realmFlandersWallonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmFlandersWallonia"
        },
        next: "realmSeine"
      },
      realmSeine: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSeine"
        }
      },
      realmJutland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmJutland"
        },
        branches: [
          {
            values: [1],
            next: "realmLowerSaxony"
          },
          {
            values: [2, 3],
            next: "realmPomerania"
          },
          {
            values: [4, 5, 6],
            next: "sweden"
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
            values: [3, 4],
            next: "realmWestphalia"
          },
          {
            values: [5, 6],
            next: "saxony"
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
            next: "realmFlandersWallonia"
          },
          {
            values: [3, 4],
            next: "realmRhineland"
          },
          {
            values: [5, 6],
            next: "saxony"
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
            next: "realmSeine"
          },
          {
            values: [4, 5, 6],
            next: "realmBurgundy"
          }
        ]
      },
      realmBurgundy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBurgundy"
        }
      },
      sweden: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.sweden"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmPomerania"
          },
          {
            values: [3, 4],
            next: "brandenburgPrussia"
          },
          {
            values: [5, 6],
            next: "realmPrussia"
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
            values: [1, 2],
            next: "realmLowerSaxony"
          },
          {
            values: [3, 4],
            next: "saxony"
          },
          {
            values: [5, 6],
            next: "realmWielkopolska"
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
      bohemia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bohemia"
        }
      },
      realmPrussia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPrussia"
        },
        next: "brandenburgPrussia"
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
            values: [4, 5, 6],
            next: "realmWielkopolska"
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
            next: "bohemia"
          },
          {
            values: [4, 5, 6],
            next: "realmRoyalHungary"
          }
        ]
      },
      realmRoyalHungary: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRoyalHungary"
        }
      }
    }
  }
};

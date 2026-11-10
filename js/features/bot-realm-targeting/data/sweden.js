export const SWEDEN_TARGETING = {
  id: "sweden",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1, 2],
            next: "ownerTrondheim"
          },
          {
            values: [3, 4, 5],
            next: "realmGotalandSkane"
          },
          {
            values: [6],
            next: "ownerReval"
          }
        ]
      },
      ownerTrondheim: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerTrondheim"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerAkershus"
          },
          {
            values: [4, 5, 6],
            next: "denmark"
          }
        ]
      },
      realmGotalandSkane: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmGotalandSkane"
        },
        branches: [
          {
            values: [1],
            next: "ownerTrondheim"
          },
          {
            values: [2],
            next: "denmark"
          },
          {
            values: [3, 4],
            next: "realmEstoniaLivonia"
          },
          {
            values: [5, 6],
            next: "ownerReval"
          }
        ]
      },
      ownerReval: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerReval"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmEstoniaLivonia"
          },
          {
            values: [4, 5, 6],
            next: "ownerNeva"
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
            values: [1, 2],
            next: "bremen"
          },
          {
            values: [3, 4],
            next: "hamburg"
          },
          {
            values: [5, 6],
            next: "denmark"
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
            values: [1, 2],
            next: "realmNetherlands"
          },
          {
            values: [3, 4, 5, 6],
            next: "realmLowerSaxony"
          }
        ]
      },
      hamburg: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.hamburg"
        },
        next: "realmLowerSaxony"
      },
      denmark: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.denmark"
        },
        branches: [
          {
            values: [1, 2],
            next: "hamburg"
          },
          {
            values: [3, 4, 5, 6],
            next: "realmPomerania"
          }
        ]
      },
      realmEstoniaLivonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEstoniaLivonia"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmPomerania"
          },
          {
            values: [3, 4],
            next: "realmPrussia"
          },
          {
            values: [5, 6],
            next: "ownerZemaitija"
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
            values: [1, 2],
            next: "realmEstoniaLivonia"
          },
          {
            values: [3, 4],
            next: "ownerZemaitija"
          },
          {
            values: [5, 6],
            next: "realmNovgorod"
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
            next: "realmLowerSaxony"
          },
          {
            values: [4, 5, 6],
            next: "brandenburgPrussia"
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
            values: [1, 2, 3, 4],
            next: "brandenburgPrussia"
          },
          {
            values: [5, 6],
            next: "ownerZemaitija"
          }
        ]
      },
      ownerZemaitija: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerZemaitija"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "polandCommonwealth"
          },
          {
            values: [4, 5, 6],
            next: "ownerVilnius"
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
      muscovyRussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.muscovyRussia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerVilnius"
          },
          {
            values: [4, 5, 6],
            next: "realmSaratov"
          }
        ]
      },
      ownerVilnius: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerVilnius"
        },
        next: "polandCommonwealth"
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
            values: [3],
            next: "realmFlandersWallonia"
          },
          {
            values: [4, 5, 6],
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
      england: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.england"
        },
        next: "france"
      },
      france: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.france"
        },
        next: "realmFlandersWallonia"
      },
      realmLowerSaxony: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLowerSaxony"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmWestphalia"
          },
          {
            values: [4, 5, 6],
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
            values: [1, 2, 3],
            next: "realmFlandersWallonia"
          },
          {
            values: [4, 5, 6],
            next: "realmRhineland"
          }
        ]
      },
      realmFlandersWallonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmFlandersWallonia"
        }
      },
      saxony: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.saxony"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmRhineland"
          },
          {
            values: [4, 5, 6],
            next: "bohemia"
          }
        ]
      },
      realmRhineland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRhineland"
        },
        next: "realmBavariaSwabia"
      },
      brandenburgPrussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brandenburgPrussia"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmRhineland"
          },
          {
            values: [3, 4],
            next: "bohemia"
          },
          {
            values: [5, 6],
            next: "polandCommonwealth"
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
            values: [1, 2],
            next: "realmBavariaSwabia"
          },
          {
            values: [3, 4],
            next: "austria"
          },
          {
            values: [5, 6],
            next: "ownerPest"
          }
        ]
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
            values: [4, 5],
            next: "ownerPest"
          },
          {
            values: [6],
            next: "realmSaratov"
          }
        ]
      },
      ownerPest: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerPest"
        }
      },
      realmSaratov: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSaratov"
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
            next: "denmark"
          },
          {
            values: [5, 6],
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
            values: [2, 3],
            next: "realmLowerSaxony"
          },
          {
            values: [4, 5, 6],
            next: "realmPomerania"
          }
        ]
      },
      denmark: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.denmark"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerAkershus"
          },
          {
            values: [3, 4],
            next: "realmPomerania"
          },
          {
            values: [5, 6],
            next: "realmPrussia"
          }
        ]
      },
      realmEstoniaLivonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEstoniaLivonia"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmPrussia"
          },
          {
            values: [3, 4],
            next: "realmLithuania"
          },
          {
            values: [5, 6],
            next: "realmNovgorod"
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
            next: "realmIreland"
          },
          {
            values: [3, 4, 5, 6],
            next: "realmNetherlands"
          }
        ]
      },
      realmIreland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmIreland"
        },
        next: "realmFlandersWallonia"
      },
      realmFlandersWallonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmFlandersWallonia"
        },
        next: "realmBurgundy"
      },
      realmBurgundy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBurgundy"
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
            next: "realmNetherlands"
          },
          {
            values: [3, 4],
            next: "realmWestphalia"
          },
          {
            values: [5, 6],
            next: "realmSaxony"
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
            values: [1, 2, 3, 4],
            next: "realmFlandersWallonia"
          },
          {
            values: [5, 6],
            next: "realmWestphalia"
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
            next: "brandenburgPrussia"
          },
          {
            values: [5, 6],
            next: "realmPrussia"
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
            values: [1, 2, 3],
            next: "brandenburgPrussia"
          },
          {
            values: [4, 5, 6],
            next: "realmLithuania"
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
            next: "realmSaxony"
          },
          {
            values: [4, 5, 6],
            next: "realmWielkopolska"
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
      realmLithuania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLithuania"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmWielkopolska"
          },
          {
            values: [4, 5, 6],
            next: "realmCrimea"
          }
        ]
      },
      realmWielkopolska: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWielkopolska"
        },
        next: "realmTransylvania"
      },
      realmTransylvania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmTransylvania"
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
            next: "realmCrimea"
          }
        ]
      },
      realmMuscowRyazan: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMuscowRyazan"
        },
        next: "realmCrimea"
      },
      realmCrimea: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCrimea"
        }
      }
    }
  }
};

export const BRANDENBURG_TARGETING = {
  id: "brandenburg",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1, 2],
            next: "magdeburg"
          },
          {
            values: [3],
            next: "brunswick"
          },
          {
            values: [4, 5, 6],
            next: "realmPomerania"
          }
        ]
      },
      magdeburg: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.magdeburg"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmLowerSaxony"
          },
          {
            values: [3, 4],
            next: "realmWestphalia"
          },
          {
            values: [5, 6],
            next: "brunswick"
          }
        ]
      },
      brunswick: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brunswick"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmWestphalia"
          },
          {
            values: [4, 5, 6],
            next: "realmSaxony"
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
            next: "magdeburg"
          },
          {
            values: [3, 4],
            next: "ownerSilesia"
          },
          {
            values: [5, 6],
            next: "ownerDanzig"
          }
        ]
      },
      ownerSilesia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerSilesia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmBohemia"
          },
          {
            values: [4, 5, 6],
            next: "realmPrussia"
          }
        ]
      },
      ownerDanzig: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerDanzig"
        },
        next: "realmPrussia"
      },
      realmLowerSaxony: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLowerSaxony"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerHolstein"
          },
          {
            values: [3],
            next: "realmNetherlands"
          },
          {
            values: [4],
            next: "realmSaxony"
          },
          {
            values: [5, 6],
            next: "realmWestphalia"
          }
        ]
      },
      ownerHolstein: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerHolstein"
        },
        next: "realmJutland"
      },
      realmJutland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmJutland"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "sweden"
          },
          {
            values: [4, 5, 6],
            next: "denmark"
          }
        ]
      },
      denmark: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.denmark"
        },
        next: "sweden"
      },
      sweden: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.sweden"
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
            next: "realmNetherlands"
          },
          {
            values: [3, 4],
            next: "realmRhineland"
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
            values: [1, 2],
            next: "realmJutland"
          },
          {
            values: [3, 4],
            next: "denmark"
          },
          {
            values: [5, 6],
            next: "realmFlandersWallonia"
          }
        ]
      },
      realmFlandersWallonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmFlandersWallonia"
        },
        next: "france"
      },
      france: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.france"
        }
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
            next: "realmSwitzerland"
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
            next: "austria"
          },
          {
            values: [4, 5, 6],
            next: "realmSwitzerland"
          }
        ]
      },
      realmSwitzerland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSwitzerland"
        },
        next: "austria"
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
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
            next: "realmBohemia"
          },
          {
            values: [4, 5, 6],
            next: "realmPrussia"
          }
        ]
      },
      realmBohemia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBohemia"
        },
        next: "realmWielkopolska"
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
            next: "ownerWarszawa"
          }
        ]
      },
      realmRoyalHungary: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRoyalHungary"
        }
      },
      realmPrussia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPrussia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmWielkopolska"
          },
          {
            values: [4],
            next: "ownerVilnius"
          },
          {
            values: [5, 6],
            next: "ownerWarszawa"
          }
        ]
      },
      ownerWarszawa: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerWarszawa",
          requiresEasternEuropeMap: true
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerVilnius"
          },
          {
            values: [4, 5, 6],
            next: "realmEstoniaLivonia"
          }
        ]
      },
      ownerVilnius: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerVilnius",
          requiresEasternEuropeMap: true
        },
        next: "realmEstoniaLivonia"
      },
      realmEstoniaLivonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEstoniaLivonia",
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
            next: "ownerKleve"
          },
          {
            values: [3],
            next: "realmPomerania"
          },
          {
            values: [4, 5, 6],
            next: "realmPrussia"
          }
        ]
      },
      ownerKleve: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerKleve"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmWestphalia"
          },
          {
            values: [4, 5, 6],
            next: "magdeburg"
          }
        ]
      },
      magdeburg: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.magdeburg"
        },
        next: "realmLowerSaxony"
      },
      realmWestphalia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWestphalia"
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
            next: "realmRhineland"
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
            values: [1, 2, 3],
            next: "realmScotland"
          },
          {
            values: [4, 5, 6],
            next: "realmBurgundy"
          }
        ]
      },
      realmScotland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmScotland"
        }
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
        },
        next: "realmLombardy"
      },
      realmRhineland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRhineland"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmFlandersWallonia"
          },
          {
            values: [3, 4],
            next: "realmSwitzerland"
          },
          {
            values: [5, 6],
            next: "realmBavariaSwabia"
          }
        ]
      },
      realmSwitzerland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSwitzerland"
        },
        next: "realmLombardy"
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
      realmRoyalHungary: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRoyalHungary"
        },
        next: "realmVenetia"
      },
      realmLombardy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLombardy"
        },
        next: "realmVenetia"
      },
      realmVenetia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmVenetia"
        }
      },
      realmLowerSaxony: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLowerSaxony"
        },
        next: "realmWestphalia"
      },
      realmPomerania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPomerania"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "magdeburg"
          },
          {
            values: [4, 5, 6],
            next: "realmSaxony"
          }
        ]
      },
      realmSaxony: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSaxony"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmLowerSaxony"
          },
          {
            values: [3, 4],
            next: "realmBavariaSwabia"
          },
          {
            values: [5, 6],
            next: "bohemia"
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
      realmPrussia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPrussia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmPomerania"
          },
          {
            values: [4, 5],
            next: "realmJutland"
          },
          {
            values: [6],
            next: "realmWielkopolska"
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
            values: [3, 4],
            next: "realmOstlandet"
          },
          {
            values: [5, 6],
            next: "sweden"
          }
        ]
      },
      realmOstlandet: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmOstlandet"
        },
        next: "sweden"
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
            next: "realmEstoniaLivonia"
          }
        ]
      },
      realmEstoniaLivonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEstoniaLivonia",
          requiresEasternEuropeMap: true
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmKarelia"
          },
          {
            values: [4, 5, 6],
            next: "realmLithuania"
          }
        ]
      },
      realmLithuania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLithuania",
          requiresEasternEuropeMap: true
        },
        next: "realmKarelia"
      },
      sweden: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.sweden"
        },
        next: "realmKarelia"
      },
      realmKarelia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmKarelia",
          requiresEasternEuropeMap: true
        },
        next: "realmNovgorod"
      },
      realmNovgorod: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNovgorod",
          requiresEasternEuropeMap: true
        }
      }
    }
  }
};

export const BOHEMIA_TARGETING = {
  id: "bohemia",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1],
            next: "realmBavariaSwabia"
          },
          {
            values: [2, 3],
            next: "realmSaxony"
          },
          {
            values: [4, 5],
            next: "brandenburgPrussia"
          },
          {
            values: [6],
            next: "ownerSilesia"
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
            values: [1, 2, 3, 4],
            next: "realmRoyalHungary"
          },
          {
            values: [5],
            next: "austria"
          },
          {
            values: [6],
            next: "realmRhineland"
          }
        ]
      },
      realmRoyalHungary: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRoyalHungary"
        },
        next: "realmHungarianPlain"
      },
      realmHungarianPlain: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmHungarianPlain"
        },
        next: "realmCroatiaBosnia"
      },
      realmCroatiaBosnia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCroatiaBosnia"
        },
        next: "venice"
      },
      venice: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.venice"
        },
        next: "realmCentralItaly"
      },
      realmCentralItaly: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCentralItaly"
        }
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmHungarianPlain"
          },
          {
            values: [4, 5, 6],
            next: "switzerland"
          }
        ]
      },
      switzerland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.switzerland"
        },
        next: "realmBurgundy"
      },
      realmSaxony: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSaxony"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmBavariaSwabia"
          },
          {
            values: [3],
            next: "austria"
          },
          {
            values: [4, 5],
            next: "realmRhineland"
          },
          {
            values: [6],
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
            values: [1, 2],
            next: "realmBurgundy"
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
      realmBurgundy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBurgundy"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmLombardy"
          },
          {
            values: [4, 5, 6],
            next: "france"
          }
        ]
      },
      realmLombardy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLombardy"
        },
        next: "realmCentralItaly"
      },
      france: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.france"
        }
      },
      realmFlandersWallonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmFlandersWallonia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "france"
          },
          {
            values: [4, 5, 6],
            next: "realmNetherlands"
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
            next: "realmNetherlands"
          }
        ]
      },
      realmNetherlands: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNetherlands"
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
            next: "realmWestphalia"
          },
          {
            values: [4, 5, 6],
            next: "denmark"
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
            next: "realmLowerSaxony"
          },
          {
            values: [3, 4],
            next: "realmPomerania"
          },
          {
            values: [5, 6],
            next: "ownerSilesia"
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
            next: "realmPomerania"
          },
          {
            values: [4, 5, 6],
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
            values: [1, 2, 3],
            next: "denmark"
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
        branches: [
          {
            values: [1, 2, 3],
            next: "denmark"
          },
          {
            values: [4, 5, 6],
            next: "poland"
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
            values: [1, 2, 3],
            next: "realmNetherlands"
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
        next: "realmEstoniaLivonia"
      },
      poland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.poland"
        },
        next: "realmEstoniaLivonia"
      },
      realmEstoniaLivonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEstoniaLivonia"
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
            next: "realmBavariaSwabia"
          },
          {
            values: [2, 3],
            next: "realmLowerSaxony"
          },
          {
            values: [4],
            next: "brandenburgPrussia"
          },
          {
            values: [5, 6],
            next: "hungary"
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
            next: "realmRhineland"
          },
          {
            values: [4, 5, 6],
            next: "realmSaxony"
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
            next: "realmBavariaSwabia"
          },
          {
            values: [2, 3],
            next: "realmSaxony"
          },
          {
            values: [4, 5],
            next: "realmWestphalia"
          },
          {
            values: [6],
            next: "realmPomerania"
          }
        ]
      },
      realmSaxony: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSaxony"
        },
        next: "realmRhineland"
      },
      realmRhineland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRhineland"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmBurgundy"
          },
          {
            values: [4, 5, 6],
            next: "realmFlandersWallonia"
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
            values: [1, 2],
            next: "realmLombardy"
          },
          {
            values: [3, 4, 5, 6],
            next: "realmSeine"
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
            values: [1, 2, 3],
            next: "papalStates"
          },
          {
            values: [4, 5, 6],
            next: "venice"
          }
        ]
      },
      papalStates: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.papalStates"
        }
      },
      venice: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.venice"
        }
      },
      realmSeine: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSeine"
        }
      },
      realmFlandersWallonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmFlandersWallonia"
        },
        next: "realmSeine"
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
            next: "realmNetherlands"
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
            next: "realmFlandersWallonia"
          },
          {
            values: [4, 5, 6],
            next: "denmark"
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
            next: "denmark"
          },
          {
            values: [4, 5, 6],
            next: "realmPrussia"
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
            next: "realmPomerania"
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
            next: "realmPrussia"
          },
          {
            values: [4, 5, 6],
            next: "realmMazoviaMalopolska"
          }
        ]
      },
      realmPrussia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPrussia"
        },
        next: "denmark"
      },
      hungary: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.hungary"
        },
        branches: [
          {
            values: [1, 2],
            next: "brandenburgPrussia"
          },
          {
            values: [3, 4],
            next: "realmWielkopolska"
          },
          {
            values: [5, 6],
            next: "realmRoyalHungary"
          }
        ]
      },
      realmRoyalHungary: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRoyalHungary"
        },
        next: "realmMazoviaMalopolska"
      },
      realmMazoviaMalopolska: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMazoviaMalopolska"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "denmark"
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
          labelKey: "botRealmTargeting.targets.realmLithuania"
        },
        next: "realmEstoniaLivonia"
      },
      denmark: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.denmark"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "sweden"
          },
          {
            values: [4, 5, 6],
            next: "realmEstoniaLivonia"
          }
        ]
      },
      sweden: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.sweden"
        },
        next: "novgorod"
      },
      realmEstoniaLivonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEstoniaLivonia"
        },
        next: "novgorod"
      },
      novgorod: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.novgorod"
        }
      }
    }
  }
};

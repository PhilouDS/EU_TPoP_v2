export const GERMANY_TARGETING = {
  id: "germany",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1],
            next: "realmRhineland"
          },
          {
            values: [2, 3, 4],
            next: "realmBotCapitalArea"
          },
          {
            values: [5, 6],
            next: "realmWestphalia"
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
            values: [1, 2, 3, 4],
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
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerSavoie"
          },
          {
            values: [4, 5, 6],
            next: "realmLombardy"
          }
        ]
      },
      ownerSavoie: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerSavoie"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmSeine"
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
        next: "realmSeine"
      },
      realmLombardy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLombardy"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmLanguedoc"
          },
          {
            values: [4, 5, 6],
            next: "realmCentralItaly"
          }
        ]
      },
      realmCentralItaly: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCentralItaly"
        },
        next: "realmSeine"
      },
      realmSeine: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSeine"
        }
      },
      realmBotCapitalArea: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBotCapitalArea"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmRhineland"
          },
          {
            values: [3],
            next: "realmBavariaSwabia"
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
            next: "bohemia"
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
            next: "austria"
          },
          {
            values: [4, 5, 6],
            next: "brandenburgPrussia"
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
            next: "bohemia"
          },
          {
            values: [3, 4],
            next: "brandenburgPrussia"
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
            next: "realmSaxony"
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
            next: "teutonicOrder"
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
            next: "austria"
          },
          {
            values: [4, 5, 6],
            next: "teutonicOrder"
          }
        ]
      },
      teutonicOrder: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.teutonicOrder"
        },
        next: "polandCommonwealth"
      },
      polandCommonwealth: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.polandCommonwealth"
        }
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
        }
      },
      realmWestphalia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWestphalia"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "realmLowerSaxony"
          },
          {
            values: [5, 6],
            next: "liege"
          }
        ]
      },
      liege: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.liege"
        },
        next: "realmNetherlands"
      },
      realmNetherlands: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNetherlands"
        },
        next: "realmFlandersWallonia"
      },
      realmFlandersWallonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmFlandersWallonia"
        },
        next: "austria"
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
            next: "france"
          },
          {
            values: [2, 3, 4],
            next: "realmBotCapitalArea"
          },
          {
            values: [5, 6],
            next: "austria"
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
            values: [1, 2, 3],
            next: "realmBavariaSwabia"
          },
          {
            values: [4, 5, 6],
            next: "realmRhineland"
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
            values: [1, 2],
            next: "realmFlandersWallonia"
          },
          {
            values: [3, 4],
            next: "realmSwitzerland"
          },
          {
            values: [5, 6],
            next: "realmRhineland"
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
            next: "realmNetherlands"
          },
          {
            values: [4, 5, 6],
            next: "realmBurgundy"
          }
        ]
      },
      realmNetherlands: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNetherlands"
        },
        next: "england"
      },
      england: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.england"
        }
      },
      realmBurgundy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBurgundy"
        },
        next: "realmAragon"
      },
      realmAragon: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAragon"
        }
      },
      realmSwitzerland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSwitzerland"
        }
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
            next: "realmSwitzerland"
          },
          {
            values: [5, 6],
            next: "realmWestphalia"
          }
        ]
      },
      realmBotCapitalArea: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBotCapitalArea"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmRhineland"
          },
          {
            values: [4, 5, 6],
            next: "realmWestphalia"
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
            next: "realmFlandersWallonia"
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
        next: "denmark"
      },
      denmark: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.denmark"
        },
        next: "realmLombardy"
      },
      realmLombardy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLombardy"
        },
        next: "realmCentralItaly"
      },
      realmCentralItaly: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCentralItaly"
        },
        next: "realmAragon"
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "bohemia"
          },
          {
            values: [5, 6],
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
            next: "bohemia"
          },
          {
            values: [3, 4, 5, 6],
            next: "hungary"
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
            next: "realmPomerania"
          },
          {
            values: [3, 4],
            next: "brandenburgPrussia"
          },
          {
            values: [5, 6],
            next: "hungary"
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
            next: "denmark"
          },
          {
            values: [3],
            next: "realmPrussia"
          },
          {
            values: [4, 5, 6],
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
            next: "realmPrussia"
          },
          {
            values: [4, 5, 6],
            next: "realmWielkopolska"
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
      hungary: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.hungary"
        },
        next: "realmWielkopolska"
      },
      realmWielkopolska: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWielkopolska"
        },
        next: "sweden"
      },
      sweden: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.sweden"
        }
      }
    }
  }
};

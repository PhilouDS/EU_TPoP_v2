export const BURGUNDY_TARGETING = {
  id: "burgundy",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1, 2, 3],
            next: "liege"
          },
          {
            values: [4, 5],
            next: "lorraine"
          },
          {
            values: [6],
            next: "realmSwitzerland"
          }
        ]
      },
      liege: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.liege"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmFlandersWallonia"
          },
          {
            values: [3, 4],
            next: "realmNetherlands"
          },
          {
            values: [5, 6],
            next: "lorraine"
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
            next: "ownerArtois"
          },
          {
            values: [4, 5, 6],
            next: "realmLowerSaxony"
          }
        ]
      },
      ownerArtois: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerArtois"
        },
        next: "ownerCaux"
      },
      ownerCaux: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCaux"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerNantes"
          },
          {
            values: [4, 5, 6],
            next: "ownerAnjou"
          }
        ]
      },
      ownerNantes: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNantes"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "ownerBordeaux"
          },
          {
            values: [5, 6],
            next: "france"
          }
        ]
      },
      ownerBordeaux: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBordeaux"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "england"
          },
          {
            values: [4, 5, 6],
            next: "navarra"
          }
        ]
      },
      ownerAnjou: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAnjou"
        },
        next: "ownerProvence"
      },
      ownerProvence: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerProvence"
        },
        next: "ownerBarcelona"
      },
      england: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.england"
        }
      },
      france: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.france"
        }
      },
      navarra: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.navarra"
        },
        next: "ownerBarcelona"
      },
      ownerBarcelona: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBarcelona"
        },
        next: "realmCentralItaly"
      },
      realmNetherlands: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNetherlands"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmLowerSaxony"
          },
          {
            values: [4, 5, 6],
            next: "realmWestphalia"
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
            next: "ownerHolstein"
          },
          {
            values: [3, 4, 5, 6],
            next: "saxony"
          }
        ]
      },
      ownerHolstein: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerHolstein"
        },
        next: "ownerLubeck"
      },
      ownerLubeck: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerLubeck"
        },
        next: "milan"
      },
      realmWestphalia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWestphalia"
        },
        next: "saxony"
      },
      lorraine: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.lorraine"
        },
        branches: [
          {
            values: [1, 2],
            next: "frankfurt"
          },
          {
            values: [3, 4],
            next: "ownerPfalz"
          },
          {
            values: [5, 6],
            next: "realmSwitzerland"
          }
        ]
      },
      frankfurt: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.frankfurt"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmRhineland"
          },
          {
            values: [3, 4, 5],
            next: "realmBavariaSwabia"
          },
          {
            values: [6],
            next: "ownerPfalz"
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
      ownerPfalz: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerPfalz"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "realmBavariaSwabia"
          },
          {
            values: [5, 6],
            next: "realmBurgundy"
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
            values: [1, 2],
            next: "ownerPfalz"
          },
          {
            values: [3, 4, 5, 6],
            next: "realmBurgundy"
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
            next: "saxony"
          },
          {
            values: [3, 4],
            next: "bohemia"
          },
          {
            values: [5, 6],
            next: "austria"
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
            next: "milan"
          },
          {
            values: [4, 5, 6],
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
            next: "brandenburgPrussia"
          },
          {
            values: [4, 5, 6],
            next: "bohemia"
          }
        ]
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
        next: "hungary"
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
        },
        branches: [
          {
            values: [1, 2],
            next: "bohemia"
          },
          {
            values: [3, 4],
            next: "venice"
          },
          {
            values: [5, 6],
            next: "hungary"
          }
        ]
      },
      hungary: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.hungary"
        }
      },
      milan: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.milan"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerProvence"
          },
          {
            values: [3, 4],
            next: "genoa"
          },
          {
            values: [5, 6],
            next: "venice"
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
            values: [1, 2, 3],
            next: "ownerBarcelona"
          },
          {
            values: [4, 5, 6],
            next: "realmCentralItaly"
          }
        ]
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
            next: "realmNetherlands"
          },
          {
            values: [3, 4],
            next: "realmRhineland"
          },
          {
            values: [5, 6],
            next: "savoy"
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
            values: [4, 5],
            next: "realmLowerSaxony"
          },
          {
            values: [6],
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
            values: [1, 2, 3, 4],
            next: "realmBrittanyNormandy"
          },
          {
            values: [5, 6],
            next: "realmLowerSaxony"
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
        next: "realmAragon"
      },
      realmLowerSaxony: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLowerSaxony"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmPomerania"
          },
          {
            values: [3, 4, 5, 6],
            next: "saxony"
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
            values: [4],
            next: "sweden"
          },
          {
            values: [5, 6],
            next: "brandenburgPrussia"
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
      realmRhineland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRhineland"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "realmWestphalia"
          },
          {
            values: [5, 6],
            next: "switzerland"
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
            next: "saxony"
          },
          {
            values: [4, 5, 6],
            next: "bavaria"
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
            next: "brandenburgPrussia"
          },
          {
            values: [4, 5, 6],
            next: "bohemia"
          }
        ]
      },
      bavaria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bavaria"
        },
        next: "realmAragon"
      },
      switzerland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.switzerland"
        },
        next: "bavaria"
      },
      bohemia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bohemia"
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
      realmWielkopolska: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWielkopolska"
        }
      },
      savoy: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.savoy"
        },
        branches: [
          {
            values: [1],
            next: "realmRhineland"
          },
          {
            values: [2, 3, 4],
            next: "realmLombardy"
          },
          {
            values: [5, 6],
            next: "realmLanguedoc"
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
            next: "switzerland"
          },
          {
            values: [4, 5, 6],
            next: "realmCentralItaly"
          }
        ]
      },
      realmLanguedoc: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLanguedoc"
        },
        next: "realmCentralItaly"
      },
      realmCentralItaly: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCentralItaly"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmAragon"
          },
          {
            values: [3, 4],
            next: "realmNaples"
          },
          {
            values: [5, 6],
            next: "venice"
          }
        ]
      },
      realmNaples: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNaples"
        },
        next: "realmAragon"
      },
      realmAragon: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAragon"
        },
        next: "portugal"
      },
      portugal: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.portugal"
        }
      },
      venice: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.venice"
        }
      }
    }
  }
};

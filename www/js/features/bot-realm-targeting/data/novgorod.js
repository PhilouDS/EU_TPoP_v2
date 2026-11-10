export const NOVGOROD_TARGETING = {
  id: "novgorod",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1, 2],
            next: "tver"
          },
          {
            values: [3, 4, 5],
            next: "livonianOrder"
          },
          {
            values: [6],
            next: "riga"
          }
        ]
      },
      tver: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.tver"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ryazan"
          },
          {
            values: [4, 5, 6],
            next: "odoyev"
          }
        ]
      },
      ryazan: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.ryazan"
        },
        next: "odoyev"
      },
      odoyev: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.odoyev"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmVologda"
          },
          {
            values: [3, 4],
            next: "realmCentralRussia"
          },
          {
            values: [5, 6],
            next: "realmWhiteRuthenia"
          }
        ]
      },
      realmVologda: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmVologda"
        },
        next: "realmCentralRussia"
      },
      realmCentralRussia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCentralRussia"
        },
        next: "muscovy"
      },
      muscovy: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.muscovy"
        },
        next: "greatHorde"
      },
      greatHorde: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.greatHorde"
        },
        next: "kazan"
      },
      kazan: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.kazan"
        },
        next: "uzbek"
      },
      uzbek: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.uzbek"
        },
        next: "nogai"
      },
      nogai: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.nogai"
        },
        next: "oirat"
      },
      oirat: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.oirat"
        }
      },
      realmWhiteRuthenia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWhiteRuthenia"
        },
        next: "realmWesternUkraine"
      },
      realmWesternUkraine: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWesternUkraine"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "muscovy"
          },
          {
            values: [4, 5, 6],
            next: "crimea"
          }
        ]
      },
      crimea: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.crimea"
        },
        next: "realmMoldavia"
      },
      realmMoldavia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMoldavia"
        },
        next: "realmWallachiaBulgaria"
      },
      realmWallachiaBulgaria: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWallachiaBulgaria"
        }
      },
      livonianOrder: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.livonianOrder"
        },
        branches: [
          {
            values: [1],
            next: "tver"
          },
          {
            values: [2],
            next: "odoyev"
          },
          {
            values: [3],
            next: "pskov"
          },
          {
            values: [4],
            next: "ownerGotland"
          },
          {
            values: [5],
            next: "sweden"
          },
          {
            values: [6],
            next: "riga"
          }
        ]
      },
      pskov: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.pskov"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmVologda"
          },
          {
            values: [3, 4],
            next: "realmWhiteRuthenia"
          },
          {
            values: [5, 6],
            next: "lithuania"
          }
        ]
      },
      riga: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.riga"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "pskov"
          },
          {
            values: [4, 5, 6],
            next: "sweden"
          }
        ]
      },
      ownerGotland: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGotland"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "denmark"
          },
          {
            values: [4, 5, 6],
            next: "teutonicOrder"
          }
        ]
      },
      sweden: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.sweden"
        },
        next: "ownerGotland"
      },
      denmark: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.denmark"
        },
        next: "realmPomerania"
      },
      teutonicOrder: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.teutonicOrder"
        },
        next: "realmPomerania"
      },
      realmPomerania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPomerania"
        },
        next: "brandenburgPrussia"
      },
      lithuania: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.lithuania"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "crimea"
          },
          {
            values: [4, 5, 6],
            next: "poland"
          }
        ]
      },
      poland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.poland"
        },
        next: "brandenburgPrussia"
      },
      brandenburgPrussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brandenburgPrussia"
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
            next: "sweden"
          },
          {
            values: [3],
            next: "livonianOrder"
          },
          {
            values: [4],
            next: "riga"
          },
          {
            values: [5, 6],
            next: "realmMuscowRyazan"
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
            next: "norway"
          },
          {
            values: [2, 3, 4],
            next: "denmark"
          },
          {
            values: [5, 6],
            next: "livonianOrder"
          }
        ]
      },
      norway: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.norway"
        },
        next: "realmPomerania"
      },
      denmark: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.denmark"
        },
        next: "realmPomerania"
      },
      livonianOrder: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.livonianOrder"
        },
        branches: [
          {
            values: [1, 2],
            next: "teutonicOrder"
          },
          {
            values: [3, 4, 5],
            next: "teutonicOrder"
          },
          {
            values: [6],
            next: "lithuania"
          }
        ]
      },
      teutonicOrder: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.teutonicOrder"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmPomerania"
          },
          {
            values: [4, 5, 6],
            next: "brandenburgPrussia"
          }
        ]
      },
      realmPomerania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPomerania"
        },
        next: "bohemia"
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
            next: "saxony"
          },
          {
            values: [4, 5, 6],
            next: "hungary"
          }
        ]
      },
      saxony: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.saxony"
        }
      },
      realmRoyalHungary: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRoyalHungary"
        },
        next: "hungary"
      },
      hungary: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.hungary"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "serbia"
          },
          {
            values: [4, 5, 6],
            next: "wallachia"
          }
        ]
      },
      serbia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.serbia"
        }
      },
      riga: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.riga"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "lithuania"
          },
          {
            values: [4, 5, 6],
            next: "kazan"
          }
        ]
      },
      lithuania: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.lithuania"
        },
        next: "crimea"
      },
      crimea: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.crimea"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "moldavia"
          },
          {
            values: [4, 5, 6],
            next: "realmCircassia"
          }
        ]
      },
      moldavia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.moldavia"
        },
        next: "wallachia"
      },
      wallachia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.wallachia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "serbia"
          },
          {
            values: [4, 5, 6],
            next: "ownerConstantinople"
          }
        ]
      },
      realmCircassia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCircassia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerConstantinople"
          },
          {
            values: [4, 5, 6],
            next: "trebizond"
          }
        ]
      },
      trebizond: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.trebizond"
        },
        next: "ownerConstantinople"
      },
      ownerConstantinople: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerConstantinople"
        }
      },
      realmMuscowRyazan: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMuscowRyazan"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "kazan"
          },
          {
            values: [4, 5, 6],
            next: "greatHorde"
          }
        ]
      },
      kazan: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.kazan"
        },
        next: "greatHorde"
      },
      greatHorde: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.greatHorde"
        },
        next: "realmCircassia"
      }
    }
  }
};

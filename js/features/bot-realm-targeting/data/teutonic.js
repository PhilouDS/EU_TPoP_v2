export const TEUTONIC_TARGETING = {
  id: "teutonic",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1, 2, 3],
            next: "riga"
          },
          {
            values: [4, 5],
            next: "livonianOrder"
          },
          {
            values: [6],
            next: "cleanseHeresy"
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
            values: [1, 2],
            next: "ownerPoznan"
          },
          {
            values: [3, 4],
            next: "realmGotalandSkane"
          },
          {
            values: [5, 6],
            next: "livonianOrder"
          }
        ]
      },
      livonianOrder: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.livonianOrder"
        },
        branches: [
          {
            values: [1, 2],
            next: "riga"
          },
          {
            values: [3, 4],
            next: "realmFinland"
          },
          {
            values: [5, 6],
            next: "realmKarelia"
          }
        ]
      },
      cleanseHeresy: {
        target: {
          type: "special",
          labelKey: "botRealmTargeting.targets.cleanseHeresy"
        }
      },
      ownerPoznan: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerPoznan"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmMazoviaMalopolska"
          },
          {
            values: [4, 5, 6],
            next: "lithuania"
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
            values: [1, 2, 3],
            next: "sweden"
          },
          {
            values: [4, 5, 6],
            next: "lithuania"
          }
        ]
      },
      realmFinland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmFinland"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "sweden"
          },
          {
            values: [4, 5, 6],
            next: "novgorod"
          }
        ]
      },
      realmKarelia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmKarelia"
        },
        next: "novgorod"
      },
      realmMazoviaMalopolska: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMazoviaMalopolska"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "hungary"
          },
          {
            values: [4, 5, 6],
            next: "brandenburgPrussia"
          }
        ]
      },
      lithuania: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.lithuania"
        },
        next: "novgorod"
      },
      sweden: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.sweden"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmPomerania"
          },
          {
            values: [4, 5, 6],
            next: "denmark"
          }
        ]
      },
      novgorod: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.novgorod"
        },
        next: "realmMuscowRyazan"
      },
      realmMuscowRyazan: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMuscowRyazan"
        }
      },
      hungary: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.hungary"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "austria"
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
        branches: [
          {
            values: [1, 2],
            next: "austria"
          },
          {
            values: [3, 4],
            next: "bohemia"
          },
          {
            values: [5, 6],
            next: "realmPomerania"
          }
        ]
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
        }
      },
      bohemia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bohemia"
        },
        next: "austria"
      },
      realmPomerania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPomerania"
        },
        branches: [
          {
            values: [1, 2],
            next: "brandenburgPrussia"
          },
          {
            values: [3, 4],
            next: "norway"
          },
          {
            values: [5, 6],
            next: "denmark"
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
            next: "realmPomerania"
          },
          {
            values: [4, 5, 6],
            next: "norway"
          }
        ]
      },
      norway: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.norway"
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
            next: "brandenburg"
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
      brandenburg: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brandenburg"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "realmPomerania"
          },
          {
            values: [5, 6],
            next: "hungary"
          }
        ]
      },
      livonianOrder: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.livonianOrder"
        },
        branches: [
          {
            values: [1, 2],
            next: "hungary"
          },
          {
            values: [3, 4],
            next: "denmark"
          },
          {
            values: [5, 6],
            next: "sweden"
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
            values: [1, 2],
            next: "denmark"
          },
          {
            values: [3, 4],
            next: "sweden"
          },
          {
            values: [5, 6],
            next: "novgorod"
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
            next: "saxony"
          },
          {
            values: [4, 5, 6],
            next: "bohemia"
          }
        ]
      },
      hungary: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.hungary"
        },
        next: "bohemia"
      },
      denmark: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.denmark"
        },
        branches: [
          {
            values: [1, 2],
            next: "bohemia"
          },
          {
            values: [3, 4],
            next: "austria"
          },
          {
            values: [5, 6],
            next: "poland"
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
            values: [1, 2],
            next: "poland"
          },
          {
            values: [3, 4],
            next: "lithuania"
          },
          {
            values: [5, 6],
            next: "novgorod"
          }
        ]
      },
      novgorod: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.novgorod"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "sweden"
          },
          {
            values: [4, 5, 6],
            next: "lithuania"
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
            next: "realmLowerSaxony"
          },
          {
            values: [3, 4],
            next: "bavaria"
          },
          {
            values: [5, 6],
            next: "austria"
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
            next: "bavaria"
          },
          {
            values: [3, 4],
            next: "austria"
          },
          {
            values: [5, 6],
            next: "poland"
          }
        ]
      },
      bavaria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bavaria"
        },
        next: "austria"
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
        }
      },
      poland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.poland"
        }
      },
      lithuania: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.lithuania"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "poland"
          },
          {
            values: [4, 5, 6],
            next: "norway"
          }
        ]
      },
      norway: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.norway"
        }
      },
      realmLowerSaxony: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLowerSaxony"
        }
      }
    }
  }
};

export const HUNGARY_TARGETING = {
  id: "hungary",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1],
            next: "bohemia"
          },
          {
            values: [2, 3],
            next: "realmCroatiaBosnia"
          },
          {
            values: [4, 5],
            next: "serbia"
          },
          {
            values: [6],
            next: "wallachia"
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
            next: "ownerSilesia"
          },
          {
            values: [4, 5, 6],
            next: "ownerBeograd"
          }
        ]
      },
      ownerSilesia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerSilesia"
        },
        next: "poland"
      },
      poland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.poland"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "brandenburgPrussia"
          },
          {
            values: [4, 5, 6],
            next: "lithuania"
          }
        ]
      },
      brandenburgPrussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brandenburgPrussia"
        },
        next: "saxony"
      },
      saxony: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.saxony"
        }
      },
      ownerBeograd: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBeograd"
        },
        next: "austria"
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
        },
        branches: [
          {
            values: [1, 2],
            next: "brandenburgPrussia"
          },
          {
            values: [3, 4],
            next: "bavaria"
          },
          {
            values: [5, 6],
            next: "realmDalmatia"
          }
        ]
      },
      bavaria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bavaria"
        },
        next: "saxony"
      },
      realmCroatiaBosnia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCroatiaBosnia"
        },
        branches: [
          {
            values: [1, 2],
            next: "bohemia"
          },
          {
            values: [3],
            next: "ownerBeograd"
          },
          {
            values: [4, 5],
            next: "ragusa"
          },
          {
            values: [6],
            next: "albania"
          }
        ]
      },
      ragusa: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.ragusa"
        },
        branches: [
          {
            values: [1, 2],
            next: "austria"
          },
          {
            values: [3, 4],
            next: "realmDalmatia"
          },
          {
            values: [5, 6],
            next: "realmGreece"
          }
        ]
      },
      serbia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.serbia"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmCroatiaBosnia"
          },
          {
            values: [3, 4],
            next: "albania"
          },
          {
            values: [5, 6],
            next: "realmGreece"
          }
        ]
      },
      albania: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.albania"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmDalmatia"
          },
          {
            values: [3, 4],
            next: "realmGreece"
          },
          {
            values: [5, 6],
            next: "realmMacedoniaThrace"
          }
        ]
      },
      moldavia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.moldavia"
        },
        next: "lithuania"
      },
      lithuania: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.lithuania"
        },
        next: "muscovyRussia"
      },
      muscovyRussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.muscovyRussia"
        }
      },
      realmDalmatia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmDalmatia"
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
      realmGreece: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmGreece"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "venice"
          },
          {
            values: [4, 5, 6],
            next: "ottomans"
          }
        ]
      },
      ottomans: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.ottomans"
        },
        next: "realmCrimea"
      },
      wallachia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.wallachia"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "moldavia"
          },
          {
            values: [5, 6],
            next: "realmWallachiaBulgaria"
          }
        ]
      },
      realmWallachiaBulgaria: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWallachiaBulgaria"
        },
        next: "realmMacedoniaThrace"
      },
      realmMacedoniaThrace: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMacedoniaThrace"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "realmCrimea"
          },
          {
            values: [5, 6],
            next: "byzantium"
          }
        ]
      },
      byzantium: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.byzantium"
        },
        next: "realmCrimea"
      },
      realmCrimea: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCrimea"
        },
        next: "muscovyRussia"
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
            next: "bohemia"
          },
          {
            values: [3],
            next: "moldavia"
          },
          {
            values: [4],
            next: "wallachia"
          },
          {
            values: [5],
            next: "papalStates"
          },
          {
            values: [6],
            next: "ragusa"
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
            next: "realmPrussia"
          }
        ]
      },
      saxony: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.saxony"
        },
        next: "brandenburgPrussia"
      },
      brandenburgPrussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brandenburgPrussia"
        },
        next: "realmPomerania"
      },
      realmPomerania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPomerania"
        },
        next: "realmBavariaSwabia"
      },
      realmPrussia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPrussia"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "livonianOrder"
          },
          {
            values: [5, 6],
            next: "denmark"
          }
        ]
      },
      livonianOrder: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.livonianOrder"
        },
        next: "novgorod"
      },
      novgorod: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.novgorod"
        }
      },
      denmark: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.denmark"
        }
      },
      moldavia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.moldavia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmPrussia"
          },
          {
            values: [4, 5, 6],
            next: "lithuania"
          }
        ]
      },
      lithuania: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.lithuania"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "livonianOrder"
          },
          {
            values: [5, 6],
            next: "genoa"
          }
        ]
      },
      genoa: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.genoa"
        },
        next: "switzerland"
      },
      switzerland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.switzerland"
        },
        next: "realmBavariaSwabia"
      },
      realmBavariaSwabia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBavariaSwabia"
        }
      },
      wallachia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.wallachia"
        },
        branches: [
          {
            values: [1, 2],
            next: "moldavia"
          },
          {
            values: [3, 4],
            next: "lithuania"
          },
          {
            values: [5, 6],
            next: "ragusa"
          }
        ]
      },
      papalStates: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.papalStates"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "venice"
          },
          {
            values: [4, 5, 6],
            next: "realmNaples"
          }
        ]
      },
      venice: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.venice"
        },
        branches: [
          {
            values: [1, 2],
            next: "genoa"
          },
          {
            values: [3, 4],
            next: "milan"
          },
          {
            values: [5, 6],
            next: "florence"
          }
        ]
      },
      milan: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.milan"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "realmCentralItaly"
          },
          {
            values: [5, 6],
            next: "realmLombardy"
          }
        ]
      },
      realmCentralItaly: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCentralItaly"
        }
      },
      realmLombardy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLombardy"
        }
      },
      florence: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.florence"
        }
      },
      realmNaples: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNaples"
        },
        branches: [
          {
            values: [1, 2],
            next: "venice"
          },
          {
            values: [3, 4],
            next: "florence"
          },
          {
            values: [5, 6],
            next: "albania"
          }
        ]
      },
      ragusa: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.ragusa"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmNaples"
          },
          {
            values: [3],
            next: "albania"
          },
          {
            values: [4, 5, 6],
            next: "serbia"
          }
        ]
      },
      serbia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.serbia"
        },
        next: "albania"
      },
      albania: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.albania"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "florence"
          },
          {
            values: [5, 6],
            next: "byzantium"
          }
        ]
      },
      byzantium: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.byzantium"
        }
      }
    }
  }
};

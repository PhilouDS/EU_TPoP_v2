export const NORWAY_TARGETING = {
  id: "norway",
  military: {
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
            next: "denmark"
          },
          {
            values: [4, 5],
            next: "scotland"
          },
          {
            values: [6],
            next: "realmIreland"
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
            next: "realmEstoniaLivonia"
          },
          {
            values: [3, 4],
            next: "realmPrussia"
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
            values: [1, 2],
            next: "sweden"
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
      realmEstoniaLivonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEstoniaLivonia"
        },
        next: "realmKarelia"
      },
      realmKarelia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmKarelia"
        },
        next: "realmNovgorod"
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
        }
      },
      realmPrussia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPrussia"
        },
        next: "realmEstoniaLivonia"
      },
      realmPomerania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPomerania"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmPrussia"
          },
          {
            values: [3, 4, 5, 6],
            next: "realmLowerSaxony"
          }
        ]
      },
      realmLowerSaxony: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLowerSaxony"
        },
        next: "brandenburgPrussia"
      },
      brandenburgPrussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brandenburgPrussia"
        },
        next: "austria"
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
        }
      },
      scotland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.scotland"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmNetherlands"
          },
          {
            values: [3, 4],
            next: "realmNorthumbria"
          },
          {
            values: [5, 6],
            next: "realmIreland"
          }
        ]
      },
      realmIreland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmIreland"
        },
        branches: [
          {
            values: [1, 2],
            next: "scotland"
          },
          {
            values: [3, 4],
            next: "realmNorthumbria"
          },
          {
            values: [5, 6],
            next: "ownerCanada"
          }
        ]
      },
      realmNorthumbria: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNorthumbria"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "england"
          },
          {
            values: [4, 5, 6],
            next: "ownerCanada"
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
            next: "realmLowerSaxony"
          },
          {
            values: [4, 5, 6],
            next: "realmSeine"
          }
        ]
      },
      england: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.england"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmNetherlands"
          },
          {
            values: [4],
            next: "realmSeine"
          },
          {
            values: [5],
            next: "ownerCapeGoodHope"
          },
          {
            values: [6],
            next: "ownerAntilles"
          }
        ]
      },
      ownerCanada: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCanada"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "england"
          },
          {
            values: [4, 5, 6],
            next: "ownerAntilles"
          }
        ]
      },
      ownerAntilles: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAntilles"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerCapeGoodHope"
          },
          {
            values: [4, 5, 6],
            next: "ownerGoldCoast"
          }
        ]
      },
      realmSeine: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSeine"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerGalicia"
          },
          {
            values: [4, 5, 6],
            next: "portugal"
          }
        ]
      },
      ownerGalicia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGalicia"
        }
      },
      portugal: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.portugal"
        }
      },
      ownerCapeGoodHope: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCapeGoodHope"
        },
        next: "ownerGoa"
      },
      ownerGoldCoast: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGoldCoast"
        },
        next: "ownerGoa"
      },
      ownerGoa: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGoa"
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
            next: "scotland"
          },
          {
            values: [2, 3],
            next: "realmNetherlands"
          },
          {
            values: [4, 5],
            next: "denmark"
          },
          {
            values: [6],
            next: "sweden"
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
            values: [1, 2, 3],
            next: "england"
          },
          {
            values: [4, 5, 6],
            next: "realmLowerSaxony"
          }
        ]
      },
      england: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.england"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmBrittanyNormandy"
          },
          {
            values: [4, 5, 6],
            next: "burgundy"
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
            values: [1, 2, 3],
            next: "realmBrittanyNormandy"
          },
          {
            values: [4, 5, 6],
            next: "burgundy"
          }
        ]
      },
      realmBrittanyNormandy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBrittanyNormandy"
        },
        next: "france"
      },
      burgundy: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.burgundy"
        },
        next: "france"
      },
      france: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.france"
        }
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
            next: "realmPomerania"
          }
        ]
      },
      realmPomerania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPomerania"
        },
        next: "teutonicOrder"
      },
      teutonicOrder: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.teutonicOrder"
        },
        next: "polandPlc"
      },
      polandPlc: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.polandPlc"
        },
        next: "austria"
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
        }
      },
      denmark: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.denmark"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmPomerania"
          },
          {
            values: [3, 4],
            next: "realmEstoniaLivonia"
          },
          {
            values: [5, 6],
            next: "sweden"
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
            values: [1, 2, 3],
            next: "realmEstoniaLivonia"
          },
          {
            values: [4, 5, 6],
            next: "novgorod"
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
            values: [1, 2, 3],
            next: "lithuania"
          },
          {
            values: [4, 5, 6],
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
            next: "realmEstoniaLivonia"
          },
          {
            values: [4, 5, 6],
            next: "muscovy"
          }
        ]
      },
      lithuania: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.lithuania"
        },
        next: "teutonicOrder"
      },
      muscovy: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.muscovy"
        },
        next: "teutonicOrder"
      }
    }
  }
};

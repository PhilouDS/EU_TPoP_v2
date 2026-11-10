export const SCOTLAND_TARGETING = {
  id: "scotland",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1, 2, 3],
            next: "realmIreland"
          },
          {
            values: [4],
            next: "brittany"
          },
          {
            values: [5, 6],
            next: "ownerBergenhus"
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
            values: [1, 2, 3],
            next: "ownerVirginia"
          },
          {
            values: [4, 5, 6],
            next: "realmNorthumbria"
          }
        ]
      },
      ownerVirginia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerVirginia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerAntilles"
          },
          {
            values: [4, 5, 6],
            next: "ownerNewEngland"
          }
        ]
      },
      ownerAntilles: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAntilles"
        },
        next: "ownerGoldCoast"
      },
      ownerNewEngland: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNewEngland"
        },
        next: "ownerCanada"
      },
      ownerCanada: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCanada"
        },
        next: "ownerGoldCoast"
      },
      ownerGoldCoast: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGoldCoast"
        },
        next: "ownerCapeOfGoodHope"
      },
      ownerCapeOfGoodHope: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCapeOfGoodHope"
        },
        next: "ownerDeccan"
      },
      ownerDeccan: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerDeccan"
        }
      },
      realmNorthumbria: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNorthumbria"
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
      brittany: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brittany"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "ownerNewEngland"
          },
          {
            values: [5],
            next: "england"
          },
          {
            values: [6],
            next: "realmNetherlands"
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
            next: "france"
          },
          {
            values: [4],
            next: "realmFlandersWallonia"
          },
          {
            values: [5, 6],
            next: "realmNetherlands"
          }
        ]
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
        next: "realmNetherlands"
      },
      realmNetherlands: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNetherlands"
        },
        next: "ownerKobenhavn"
      },
      ownerBergenhus: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBergenhus"
        },
        branches: [
          {
            values: [1],
            next: "realmNorthumbria"
          },
          {
            values: [2, 3, 4],
            next: "realmJutland"
          },
          {
            values: [5, 6],
            next: "ownerAkershus"
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
            values: [1, 2, 3],
            next: "realmNetherlands"
          },
          {
            values: [4, 5, 6],
            next: "ownerKobenhavn"
          }
        ]
      },
      ownerAkershus: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAkershus"
        },
        next: "realmGotalandSkane"
      },
      realmGotalandSkane: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmGotalandSkane"
        },
        next: "ownerStockholm"
      },
      ownerStockholm: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerStockholm"
        },
        next: "ownerKobenhavn"
      },
      ownerKobenhavn: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerKobenhavn"
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
            next: "realmPomerania"
          },
          {
            values: [3],
            next: "brittany"
          },
          {
            values: [4],
            next: "nprIreland"
          },
          {
            values: [5, 6],
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
            next: "austria"
          },
          {
            values: [4, 5, 6],
            next: "brittany"
          }
        ]
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
        },
        next: "castileSpain"
      },
      brittany: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brittany"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "castileSpain"
          },
          {
            values: [4, 5, 6],
            next: "realmPomerania"
          }
        ]
      },
      castileSpain: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.castileSpain"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmAragon"
          },
          {
            values: [4, 5, 6],
            next: "portugal"
          }
        ]
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
        },
        next: "morocco"
      },
      morocco: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.morocco"
        }
      },
      nprIreland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.nprIreland"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "norway"
          },
          {
            values: [4, 5, 6],
            next: "denmark"
          }
        ]
      },
      norway: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.norway"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "sweden"
          },
          {
            values: [4, 5, 6],
            next: "realmNetherlands"
          }
        ]
      },
      sweden: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.sweden"
        }
      },
      denmark: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.denmark"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "norway"
          },
          {
            values: [4, 5, 6],
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
            values: [1, 2, 3],
            next: "realmNetherlands"
          },
          {
            values: [4, 5, 6],
            next: "realmSaxony"
          }
        ]
      },
      realmNetherlands: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNetherlands"
        }
      },
      realmSaxony: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSaxony"
        }
      }
    }
  }
};

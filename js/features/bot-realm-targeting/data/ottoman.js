export const OTTOMAN_TARGETING = {
  id: "ottoman",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerConstantinople"
          },
          {
            values: [4],
            next: "ownerTirgoviste"
          },
          {
            values: [5],
            next: "ownerKastamonu"
          },
          {
            values: [6],
            next: "ownerKaraman"
          }
        ]
      },
      ownerConstantinople: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerConstantinople"
        },
        branches: [
          {
            values: [1],
            next: "realmGreece"
          },
          {
            values: [2],
            next: "ownerRhodes"
          },
          {
            values: [3],
            next: "ownerKosovo"
          },
          {
            values: [4],
            next: "ownerAlbania"
          },
          {
            values: [5],
            next: "ownerBeograd"
          },
          {
            values: [6],
            next: "ownerTirgoviste"
          }
        ]
      },
      ownerTirgoviste: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerTirgoviste"
        },
        branches: [
          {
            values: [1],
            next: "ownerBosnia"
          },
          {
            values: [2],
            next: "ownerAlbania"
          },
          {
            values: [3],
            next: "ownerBasarabia"
          },
          {
            values: [4],
            next: "ownerTrebizond"
          },
          {
            values: [5, 6],
            next: "ownerKastamonu"
          }
        ]
      },
      ownerKastamonu: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerKastamonu"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerTrebizond"
          },
          {
            values: [3, 4],
            next: "realmKurdistan"
          },
          {
            values: [5, 6],
            next: "ownerKaraman"
          }
        ]
      },
      ownerKaraman: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerKaraman"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmKurdistan"
          },
          {
            values: [3, 4, 5],
            next: "ownerAdana"
          },
          {
            values: [6],
            next: "realmSyria"
          }
        ]
      },
      realmGreece: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmGreece"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerNaxos"
          },
          {
            values: [4],
            next: "ownerCreta"
          },
          {
            values: [5, 6],
            next: "ownerRhodes"
          }
        ]
      },
      ownerNaxos: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNaxos"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "ownerCyprus"
          },
          {
            values: [5, 6],
            next: "ownerCreta"
          }
        ]
      },
      ownerCyprus: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCyprus"
        },
        next: "ownerMalta"
      },
      ownerCreta: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCreta"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmNaples"
          },
          {
            values: [3, 4],
            next: "ownerMalta"
          },
          {
            values: [5, 6],
            next: "ownerBosnia"
          }
        ]
      },
      realmNaples: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNaples"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerMalta"
          },
          {
            values: [3, 4, 5],
            next: "papalStates"
          },
          {
            values: [6],
            next: "ownerZara"
          }
        ]
      },
      ownerMalta: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMalta"
        }
      },
      papalStates: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.papalStates"
        },
        next: "venice"
      },
      ownerRhodes: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerRhodes"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerCreta"
          },
          {
            values: [3, 4],
            next: "ragusa"
          },
          {
            values: [5],
            next: "ownerKosovo"
          },
          {
            values: [6],
            next: "ownerAlbania"
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
            next: "ownerBosnia"
          },
          {
            values: [3, 4],
            next: "ownerZagreb"
          },
          {
            values: [5, 6],
            next: "ownerZara"
          }
        ]
      },
      ownerBosnia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBosnia"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerZagreb"
          },
          {
            values: [3, 4],
            next: "venice"
          },
          {
            values: [5, 6],
            next: "ownerZara"
          }
        ]
      },
      ownerZagreb: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerZagreb"
        },
        branches: [
          {
            values: [1, 2],
            next: "venice"
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
      ownerZara: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerZara"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "austria"
          },
          {
            values: [4],
            next: "austria"
          },
          {
            values: [5, 6],
            next: "poland"
          }
        ]
      },
      venice: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.venice"
        },
        next: "austria"
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
        },
        next: "poland"
      },
      poland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.poland"
        }
      },
      ownerKosovo: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerKosovo"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerBosnia"
          },
          {
            values: [3, 4],
            next: "ownerBeograd"
          },
          {
            values: [5],
            next: "ownerPest"
          },
          {
            values: [6],
            next: "ownerAlbania"
          }
        ]
      },
      ownerAlbania: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAlbania"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerBeograd"
          },
          {
            values: [4, 5],
            next: "ownerBasarabia"
          },
          {
            values: [6],
            next: "ownerTorda"
          }
        ]
      },
      ownerBeograd: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBeograd"
        },
        branches: [
          {
            values: [1],
            next: "ownerPest"
          },
          {
            values: [2, 3, 4],
            next: "ownerPest"
          },
          {
            values: [5],
            next: "ownerTorda"
          },
          {
            values: [6],
            next: "ownerBasarabia"
          }
        ]
      },
      ownerPest: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerPest"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "austria"
          },
          {
            values: [4],
            next: "poland"
          },
          {
            values: [5, 6],
            next: "ownerTorda"
          }
        ]
      },
      ownerBasarabia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBasarabia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerTorda"
          },
          {
            values: [4, 5],
            next: "ownerEdisanas"
          },
          {
            values: [6],
            next: "ownerCaffa"
          }
        ]
      },
      ownerTorda: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerTorda"
        },
        branches: [
          {
            values: [1, 2],
            next: "austria"
          },
          {
            values: [3, 4, 5],
            next: "poland"
          },
          {
            values: [6],
            next: "ownerEdisanas"
          }
        ]
      },
      ownerEdisanas: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerEdisanas"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "poland"
          },
          {
            values: [4, 5, 6],
            next: "realmCrimea"
          }
        ]
      },
      ownerTrebizond: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerTrebizond"
        },
        branches: [
          {
            values: [1],
            next: "ownerCaffa"
          },
          {
            values: [2, 3],
            next: "ownerCaffa"
          },
          {
            values: [4],
            next: "realmCrimea"
          },
          {
            values: [5, 6],
            next: "realmKurdistan"
          }
        ]
      },
      ownerCaffa: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCaffa"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmCrimea"
          },
          {
            values: [4, 5],
            next: "realmCaucasus"
          },
          {
            values: [6],
            next: "realmCircassia"
          }
        ]
      },
      realmCrimea: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCrimea"
        },
        next: "realmCaucasus"
      },
      ownerKastamonu_dummy: {
        target: {
          type: "special",
          labelKey: "botRealmTargeting.targets.ownerKastamonu_dummy"
        }
      },
      realmKurdistan: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmKurdistan"
        },
        branches: [
          {
            values: [1],
            next: "realmCircassia"
          },
          {
            values: [2],
            next: "realmCircassia"
          },
          {
            values: [3, 4],
            next: "ownerBaghdad"
          },
          {
            values: [5, 6],
            next: "ownerTrebizond"
          }
        ]
      },
      ownerAdana: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAdana"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerBaghdad"
          },
          {
            values: [3],
            next: "ownerBaghdad"
          },
          {
            values: [4, 5, 6],
            next: "realmSyria"
          }
        ]
      },
      realmSyria: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSyria"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerBaghdad"
          },
          {
            values: [3, 4],
            next: "ownerQahirah"
          },
          {
            values: [5, 6],
            next: "ownerAlQuds"
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
            values: [1],
            next: "realmCrimea"
          },
          {
            values: [2, 3],
            next: "realmCaucasus"
          },
          {
            values: [4, 5],
            next: "realmTranscaucasia"
          },
          {
            values: [6],
            next: "ownerBaghdad"
          }
        ]
      },
      realmCaucasus: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCaucasus"
        },
        next: "realmTranscaucasia"
      },
      ownerBaghdad: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBaghdad"
        },
        branches: [
          {
            values: [1],
            next: "realmTranscaucasia"
          },
          {
            values: [2, 3, 4],
            next: "realmTranscaucasia"
          },
          {
            values: [5, 6],
            next: "realmCaucasus"
          }
        ]
      },
      realmTranscaucasia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmTranscaucasia"
        }
      },
      ownerQahirah: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerQahirah"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerTripoli"
          },
          {
            values: [3, 4],
            next: "ownerTripoli"
          },
          {
            values: [5, 6],
            next: "ownerHejaz"
          }
        ]
      },
      ownerAlQuds: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAlQuds"
        },
        next: "ownerHejaz"
      },
      ownerTripoli: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerTripoli"
        },
        next: "realmAlgiers"
      },
      ownerHejaz: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerHejaz"
        },
        next: "yemen"
      },
      yemen: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.yemen"
        },
        next: "hormuz"
      },
      hormuz: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.hormuz"
        }
      },
      realmAlgiers: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAlgiers"
        },
        branches: [
          {
            values: [1],
            next: "ownerTunis"
          },
          {
            values: [2, 3],
            next: "ownerTunis"
          },
          {
            values: [4, 5, 6],
            next: "ownerAstrakhan"
          }
        ]
      },
      ownerTunis: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerTunis"
        }
      },
      ownerAstrakhan: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAstrakhan"
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
            next: "wallachia"
          },
          {
            values: [2, 3],
            next: "realmKaraman"
          },
          {
            values: [4],
            next: "realmKurdistan"
          },
          {
            values: [5, 6],
            next: "crimea"
          }
        ]
      },
      wallachia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.wallachia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ragusa"
          },
          {
            values: [4, 5, 6],
            next: "realmTransylvania"
          }
        ]
      },
      realmKaraman: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmKaraman"
        },
        branches: [
          {
            values: [1],
            next: "wallachia"
          },
          {
            values: [2, 3],
            next: "realmCircassia"
          },
          {
            values: [4],
            next: "realmTunisia"
          },
          {
            values: [5],
            next: "realmEgypt"
          },
          {
            values: [6],
            next: "realmKurdistan"
          }
        ]
      },
      realmKurdistan: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmKurdistan"
        },
        branches: [
          {
            values: [1],
            next: "realmCircassia"
          },
          {
            values: [2],
            next: "realmEgypt"
          },
          {
            values: [3, 4],
            next: "realmTranscaucasia"
          },
          {
            values: [5, 6],
            next: "crimea"
          }
        ]
      },
      crimea: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.crimea"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmAstrakhan"
          },
          {
            values: [4, 5, 6],
            next: "realmNorthernAnatolia"
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
            next: "realmCroatiaBosnia"
          },
          {
            values: [3, 4],
            next: "realmAlgiers"
          },
          {
            values: [5, 6],
            next: "realmTunisia"
          }
        ]
      },
      realmTransylvania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmTransylvania"
        },
        branches: [
          {
            values: [1, 2],
            next: "ragusa"
          },
          {
            values: [3, 4],
            next: "realmAlgiers"
          },
          {
            values: [5],
            next: "realmTunisia"
          },
          {
            values: [6],
            next: "realmCircassia"
          }
        ]
      },
      realmCroatiaBosnia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCroatiaBosnia"
        },
        branches: [
          {
            values: [1, 2],
            next: "sweden"
          },
          {
            values: [3, 4, 5, 6],
            next: "realmAlgiers"
          }
        ]
      },
      sweden: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.sweden"
        }
      },
      realmAlgiers: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAlgiers"
        },
        branches: [
          {
            values: [1],
            next: "ownerGranadaMuslim"
          },
          {
            values: [2, 3, 4],
            next: "morocco"
          },
          {
            values: [5, 6],
            next: "realmNorthSahara"
          }
        ]
      },
      ownerGranadaMuslim: {
        target: {
          type: "special",
          labelKey: "botRealmTargeting.targets.ownerGranadaMuslim"
        },
        next: "morocco"
      },
      morocco: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.morocco"
        }
      },
      realmTunisia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmTunisia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmAlgiers"
          },
          {
            values: [4],
            next: "ownerGranadaMuslim"
          },
          {
            values: [5, 6],
            next: "realmNorthSahara"
          }
        ]
      },
      realmNorthSahara: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNorthSahara"
        }
      },
      realmCircassia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCircassia"
        },
        branches: [
          {
            values: [1, 2],
            next: "crimea"
          },
          {
            values: [3],
            next: "realmEgypt"
          },
          {
            values: [4, 5],
            next: "realmTranscaucasia"
          },
          {
            values: [6],
            next: "realmCaucasus"
          }
        ]
      },
      realmEgypt: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEgypt"
        },
        next: "realmTranscaucasia"
      },
      realmAstrakhan: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAstrakhan"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmTranscaucasia"
          },
          {
            values: [4, 5, 6],
            next: "realmCaucasus"
          }
        ]
      },
      realmNorthernAnatolia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNorthernAnatolia"
        },
        next: "realmCaucasus"
      },
      realmTranscaucasia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmTranscaucasia"
        }
      },
      realmCaucasus: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCaucasus"
        }
      }
    }
  }
};

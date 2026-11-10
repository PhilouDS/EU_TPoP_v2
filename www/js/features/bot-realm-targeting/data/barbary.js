export const BARBARY_TARGETING = {
  id: "barbary",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1],
            next: "ownerCeuta"
          },
          {
            values: [2, 3],
            next: "granada"
          },
          {
            values: [4, 5],
            next: "realmAlgiers"
          },
          {
            values: [6],
            next: "raid"
          }
        ]
      },
      ownerCeuta: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCeuta"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmMacaronesia"
          },
          {
            values: [4, 5, 6],
            next: "ownerTangiers"
          }
        ]
      },
      granada: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.granada"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmMacaronesia"
          },
          {
            values: [3],
            next: "ownerTangiers"
          },
          {
            values: [4, 5],
            next: "realmCorsicaSardinia"
          },
          {
            values: [6],
            next: "realmAlgiers"
          }
        ]
      },
      realmAlgiers: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAlgiers"
        },
        branches: [
          {
            values: [1],
            next: "granada"
          },
          {
            values: [2],
            next: "realmCorsicaSardinia"
          },
          {
            values: [3, 4, 5],
            next: "djerid"
          },
          {
            values: [6],
            next: "ownerBangazi"
          }
        ]
      },
      raid: {
        target: {
          type: "special",
          labelKey: "botRealmTargeting.targets.raid"
        }
      },
      realmMacaronesia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMacaronesia"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerLisboa"
          },
          {
            values: [3, 4],
            next: "ownerMadrid"
          },
          {
            values: [5, 6],
            next: "ownerTangiers"
          }
        ]
      },
      ownerTangiers: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerTangiers"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmMacaronesia"
          },
          {
            values: [3],
            next: "ownerLisboa"
          },
          {
            values: [4],
            next: "ownerMadrid"
          },
          {
            values: [5, 6],
            next: "ownerMesina"
          }
        ]
      },
      ownerLisboa: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerLisboa"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerValencia"
          },
          {
            values: [4, 5, 6],
            next: "ownerMadrid"
          }
        ]
      },
      ownerMadrid: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMadrid"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerLisboa"
          },
          {
            values: [4, 5, 6],
            next: "ownerValencia"
          }
        ]
      },
      ownerValencia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerValencia"
        },
        next: "realmCentralItaly"
      },
      realmCorsicaSardinia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCorsicaSardinia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerMesina"
          },
          {
            values: [4, 5, 6],
            next: "realmCentralItaly"
          }
        ]
      },
      ownerMesina: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMesina"
        },
        next: "realmCentralItaly"
      },
      realmCentralItaly: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCentralItaly"
        }
      },
      djerid: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.djerid"
        },
        next: "timbuktu"
      },
      timbuktu: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.timbuktu"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerSonghai"
          },
          {
            values: [4, 5, 6],
            next: "ownerMali"
          }
        ]
      },
      ownerSonghai: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerSonghai"
        },
        next: "ownerMali"
      },
      ownerMali: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMali"
        }
      },
      ownerBangazi: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBangazi"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerQahirah"
          },
          {
            values: [4, 5, 6],
            next: "realmAegeanArchipelago"
          }
        ]
      },
      ownerQahirah: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerQahirah"
        },
        next: "realmMacedoniaThrace"
      },
      realmAegeanArchipelago: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAegeanArchipelago"
        },
        next: "realmMacedoniaThrace"
      },
      realmMacedoniaThrace: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMacedoniaThrace"
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
            next: "realmNorthMorocco"
          },
          {
            values: [2, 3],
            next: "realmAlgiers"
          },
          {
            values: [4, 5],
            next: "granada"
          },
          {
            values: [6],
            next: "genoa"
          }
        ]
      },
      realmNorthMorocco: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNorthMorocco"
        },
        branches: [
          {
            values: [1, 2],
            next: "navarra"
          },
          {
            values: [3, 4],
            next: "nprAdjacentLandAlgiers"
          },
          {
            values: [5, 6],
            next: "realmAlgiers"
          }
        ]
      },
      realmAlgiers: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAlgiers"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmNorthMorocco"
          },
          {
            values: [3, 4],
            next: "nprAdjacentLandAlgiers"
          },
          {
            values: [5, 6],
            next: "granada"
          }
        ]
      },
      granada: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.granada"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmAlgiers"
          },
          {
            values: [3, 4],
            next: "provence"
          },
          {
            values: [5, 6],
            next: "mamluks"
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
            next: "realmLombardy"
          },
          {
            values: [4, 5, 6],
            next: "realmCentralItaly"
          }
        ]
      },
      navarra: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.navarra"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "nprAdjacentLeon"
          },
          {
            values: [4, 5, 6],
            next: "ownerMontpellier"
          }
        ]
      },
      nprAdjacentLandAlgiers: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.nprAdjacentLandAlgiers"
        },
        branches: [
          {
            values: [1, 2],
            next: "nprAdjacentLeon"
          },
          {
            values: [3, 4],
            next: "ownerMontpellier"
          },
          {
            values: [5, 6],
            next: "mamluks"
          }
        ]
      },
      nprAdjacentLeon: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.nprAdjacentLeon"
        },
        next: "france"
      },
      ownerMontpellier: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMontpellier"
        },
        next: "france"
      },
      france: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.france"
        },
        next: "nprAdjacentEnglishChannel"
      },
      nprAdjacentEnglishChannel: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.nprAdjacentEnglishChannel"
        }
      },
      provence: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.provence"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerMontpellier"
          },
          {
            values: [3, 4],
            next: "savoy"
          },
          {
            values: [5, 6],
            next: "realmLombardy"
          }
        ]
      },
      savoy: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.savoy"
        },
        next: "france"
      },
      realmLombardy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLombardy"
        },
        branches: [
          {
            values: [1, 2],
            next: "provence"
          },
          {
            values: [3, 4],
            next: "savoy"
          },
          {
            values: [5, 6],
            next: "realmCentralItaly"
          }
        ]
      },
      realmCentralItaly: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCentralItaly"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmLombardy"
          },
          {
            values: [3, 4, 5, 6],
            next: "ownerNapoli"
          }
        ]
      },
      ownerNapoli: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNapoli"
        },
        next: "ownerCreta"
      },
      ownerCreta: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCreta"
        },
        next: "mamluks"
      },
      mamluks: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.mamluks"
        },
        next: "ottomans"
      },
      ottomans: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.ottomans"
        }
      }
    }
  }
};

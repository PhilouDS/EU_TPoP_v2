export const ITALY_TARGETING = {
  id: "italy",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1, 2],
            next: "ownerMantova"
          },
          {
            values: [3, 4],
            next: "ownerSiena"
          },
          {
            values: [5, 6],
            next: "ownerFerrara"
          }
        ]
      },
      ownerMantova: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMantova"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmSwitzerland"
          },
          {
            values: [3, 4],
            next: "realmLombardy"
          },
          {
            values: [5, 6],
            next: "realmCentralItaly"
          }
        ]
      },
      ownerSiena: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerSiena"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmCorsicaSardinia"
          },
          {
            values: [3, 4],
            next: "realmCentralItaly"
          },
          {
            values: [5, 6],
            next: "naples"
          }
        ]
      },
      ownerFerrara: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerFerrara"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmCentralItaly"
          },
          {
            values: [3, 4],
            next: "naples"
          },
          {
            values: [5, 6],
            next: "ragusa"
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
            next: "realmCorsicaSardinia"
          },
          {
            values: [4, 5, 6],
            next: "realmSicily"
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
            next: "realmCorsicaSardinia"
          },
          {
            values: [4, 5, 6],
            next: "venice"
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
            next: "realmSicily"
          },
          {
            values: [3, 4],
            next: "venice"
          },
          {
            values: [5, 6],
            next: "naples"
          }
        ]
      },
      naples: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.naples"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "albania"
          },
          {
            values: [4, 5, 6],
            next: "ragusa"
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
            values: [1, 2, 3],
            next: "albania"
          },
          {
            values: [4, 5, 6],
            next: "bosnia"
          }
        ]
      },
      realmCorsicaSardinia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCorsicaSardinia"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerProvence"
          },
          {
            values: [3, 4],
            next: "realmAlgiers"
          },
          {
            values: [5, 6],
            next: "realmSicily"
          }
        ]
      },
      ownerProvence: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerProvence"
        },
        next: "france"
      },
      france: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.france"
        },
        next: "ownerValencia"
      },
      realmAlgiers: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAlgiers"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerValencia"
          },
          {
            values: [4, 5, 6],
            next: "ownerQahirah"
          }
        ]
      },
      realmSicily: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSicily"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerQahirah"
          },
          {
            values: [4, 5, 6],
            next: "ownerTunis"
          }
        ]
      },
      ownerValencia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerValencia"
        },
        next: "ownerQahirah"
      },
      ownerQahirah: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerQahirah"
        },
        next: "realmMacedoniaThrace"
      },
      ownerTunis: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerTunis"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmSerbiaAlbania"
          },
          {
            values: [4, 5, 6],
            next: "hungary"
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
            values: [1, 2, 3],
            next: "realmSerbiaAlbania"
          },
          {
            values: [4, 5, 6],
            next: "hungary"
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
            values: [1, 2, 3],
            next: "realmSerbiaAlbania"
          },
          {
            values: [4, 5, 6],
            next: "bosnia"
          }
        ]
      },
      bosnia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bosnia"
        },
        next: "hungary"
      },
      realmSerbiaAlbania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSerbiaAlbania"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmMacedoniaThrace"
          },
          {
            values: [4, 5, 6],
            next: "hungary"
          }
        ]
      },
      hungary: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.hungary"
        },
        next: "austria"
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
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
            values: [1, 2],
            next: "realmLombardy"
          },
          {
            values: [3, 4],
            next: "realmCentralItaly"
          },
          {
            values: [5, 6],
            next: "venice"
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
            values: [1, 2],
            next: "aragon"
          },
          {
            values: [3, 4],
            next: "provence"
          },
          {
            values: [5, 6],
            next: "switzerland"
          }
        ]
      },
      aragon: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.aragon"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "portugal"
          },
          {
            values: [4, 5, 6],
            next: "france"
          }
        ]
      },
      portugal: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.portugal"
        },
        next: "castile"
      },
      castile: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.castile"
        }
      },
      provence: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.provence"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "france"
          },
          {
            values: [4, 5, 6],
            next: "burgundy"
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
            next: "castile"
          },
          {
            values: [4, 5, 6],
            next: "realmNetherlands"
          }
        ]
      },
      burgundy: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.burgundy"
        },
        next: "realmNetherlands"
      },
      realmNetherlands: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNetherlands"
        }
      },
      switzerland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.switzerland"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "provence"
          },
          {
            values: [4, 5, 6],
            next: "burgundy"
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
            values: [1, 2, 3],
            next: "switzerland"
          },
          {
            values: [4, 5, 6],
            next: "ragusa"
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
            values: [1, 2, 3],
            next: "bosnia"
          },
          {
            values: [4, 5, 6],
            next: "hungary"
          }
        ]
      },
      bosnia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bosnia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ottomans"
          },
          {
            values: [4, 5, 6],
            next: "hungary"
          }
        ]
      },
      ottomans: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.ottomans"
        }
      },
      venice: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.venice"
        },
        branches: [
          {
            values: [1, 2],
            next: "ragusa"
          },
          {
            values: [3, 4],
            next: "hungary"
          },
          {
            values: [5, 6],
            next: "bavaria"
          }
        ]
      },
      bavaria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bavaria"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "hungary"
          },
          {
            values: [4, 5, 6],
            next: "austria"
          }
        ]
      },
      hungary: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.hungary"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ottomans"
          },
          {
            values: [4, 5, 6],
            next: "austria"
          }
        ]
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
        }
      }
    }
  }
};

export const VENICE_TARGETING = {
  id: "venice",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1, 2],
            next: "ragusa"
          },
          {
            values: [3],
            next: "ownerAlbania"
          },
          {
            values: [4],
            next: "ownerMilano"
          },
          {
            values: [5, 6],
            next: "ownerFerrara"
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
            next: "realmDalmatia"
          },
          {
            values: [3],
            next: "realmSerbiaAlbania"
          },
          {
            values: [4, 5, 6],
            next: "ownerCyprus"
          }
        ]
      },
      realmDalmatia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmDalmatia"
        },
        next: "ownerBosnia"
      },
      ownerBosnia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBosnia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmVenetia"
          },
          {
            values: [4, 5, 6],
            next: "realmAegeanArchipelago"
          }
        ]
      },
      realmVenetia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmVenetia"
        },
        next: "austria"
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
        },
        next: "ownerPest"
      },
      ownerPest: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerPest"
        }
      },
      realmSerbiaAlbania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSerbiaAlbania"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerBosnia"
          },
          {
            values: [4, 5, 6],
            next: "realmAegeanArchipelago"
          }
        ]
      },
      realmAegeanArchipelago: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAegeanArchipelago"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerRijeka"
          },
          {
            values: [4, 5, 6],
            next: "ownerConstantinople"
          }
        ]
      },
      ownerRijeka: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerRijeka"
        },
        next: "ownerZagreb"
      },
      ownerZagreb: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerZagreb"
        },
        next: "ownerPest"
      },
      ownerConstantinople: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerConstantinople"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerIskandariyya"
          },
          {
            values: [3, 4, 5, 6],
            next: "ownerCaffa"
          }
        ]
      },
      ownerCaffa: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCaffa"
        },
        next: "ownerIskandariyya"
      },
      ownerAlbania: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAlbania"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmSerbiaAlbania"
          },
          {
            values: [3, 4],
            next: "ownerCyprus"
          },
          {
            values: [5, 6],
            next: "ownerMorea"
          }
        ]
      },
      ownerCyprus: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCyprus"
        },
        next: "realmAegeanArchipelago"
      },
      ownerMorea: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMorea"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerCyprus"
          },
          {
            values: [3],
            next: "realmAegeanArchipelago"
          },
          {
            values: [4, 5, 6],
            next: "ownerAthina"
          }
        ]
      },
      ownerAthina: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAthina"
        },
        next: "ownerIskandariyya"
      },
      ownerMilano: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMilano"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerMorea"
          },
          {
            values: [3, 4],
            next: "ownerFirenze"
          },
          {
            values: [5, 6],
            next: "mantua"
          }
        ]
      },
      ownerFirenze: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerFirenze"
        },
        next: "ownerSiena"
      },
      ownerSiena: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerSiena"
        },
        next: "papalStates"
      },
      papalStates: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.papalStates"
        },
        next: "realmNaples"
      },
      realmNaples: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNaples"
        },
        next: "tunis"
      },
      tunis: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.tunis"
        },
        next: "ownerIskandariyya"
      },
      ownerFerrara: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerFerrara"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerMilano"
          },
          {
            values: [3],
            next: "ownerFirenze"
          },
          {
            values: [4, 5, 6],
            next: "mantua"
          }
        ]
      },
      mantua: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.mantua"
        },
        next: "genoa"
      },
      genoa: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.genoa"
        },
        branches: [
          {
            values: [1, 2],
            next: "papalStates"
          },
          {
            values: [3, 4],
            next: "ownerMalta"
          },
          {
            values: [5, 6],
            next: "realmCorsicaSardinia"
          }
        ]
      },
      ownerMalta: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMalta"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "tunis"
          },
          {
            values: [4, 5, 6],
            next: "ownerBaleares"
          }
        ]
      },
      realmCorsicaSardinia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCorsicaSardinia"
        },
        next: "ownerBaleares"
      },
      ownerBaleares: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBaleares"
        },
        next: "ownerIskandariyya"
      },
      ownerIskandariyya: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerIskandariyya"
        },
        next: "ownerUpperEgypt"
      },
      ownerUpperEgypt: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerUpperEgypt"
        },
        next: "ownerYemen"
      },
      ownerYemen: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerYemen"
        },
        next: "ownerHormuz"
      },
      ownerHormuz: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerHormuz"
        },
        next: "ownerMalacca"
      },
      ownerMalacca: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMalacca"
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
            next: "papalStates"
          },
          {
            values: [3],
            next: "ownerSopron"
          },
          {
            values: [4],
            next: "ownerAlbania"
          },
          {
            values: [5],
            next: "knights"
          },
          {
            values: [6],
            next: "ownerCyprus"
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
            next: "realmLombardy"
          },
          {
            values: [4, 5, 6],
            next: "realmNaples"
          }
        ]
      },
      ownerSopron: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerSopron"
        },
        branches: [
          {
            values: [1],
            next: "realmLombardy"
          },
          {
            values: [2, 3, 4],
            next: "realmNaples"
          },
          {
            values: [5, 6],
            next: "ownerAlbania"
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
            next: "ownerFirenze"
          }
        ]
      },
      switzerland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.switzerland"
        },
        next: "savoy"
      },
      savoy: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.savoy"
        },
        next: "bavaria"
      },
      bavaria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bavaria"
        }
      },
      ownerFirenze: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerFirenze"
        },
        next: "ownerFerrara"
      },
      ownerFerrara: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerFerrara"
        },
        next: "ownerSiena"
      },
      ownerSiena: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerSiena"
        }
      },
      realmNaples: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNaples"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerFirenze"
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
        next: "portugal"
      },
      portugal: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.portugal"
        }
      },
      ownerAlbania: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAlbania"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmNaples"
          },
          {
            values: [3, 4],
            next: "ownerConstantinople"
          },
          {
            values: [5, 6],
            next: "knights"
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
            values: [1, 2, 3],
            next: "realmCircassia"
          },
          {
            values: [4, 5, 6],
            next: "ownerTrebizond"
          }
        ]
      },
      realmCircassia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCircassia"
        },
        next: "realmTranscaucasia"
      },
      knights: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.knights"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerConstantinople"
          },
          {
            values: [3, 4],
            next: "ownerNaxos"
          },
          {
            values: [5, 6],
            next: "ownerCyprus"
          }
        ]
      },
      ownerNaxos: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNaxos"
        },
        next: "ownerTrebizond"
      },
      ownerTrebizond: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerTrebizond"
        },
        next: "realmTranscaucasia"
      },
      ownerCyprus: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCyprus"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "ownerNaxos"
          },
          {
            values: [5, 6],
            next: "realmEgypt"
          }
        ]
      },
      realmEgypt: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEgypt"
        },
        next: "realmKaraman"
      },
      realmKaraman: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmKaraman"
        },
        next: "realmTranscaucasia"
      },
      realmTranscaucasia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmTranscaucasia"
        }
      }
    }
  }
};
